from fastapi import APIRouter, HTTPException, Depends, status, UploadFile, File

from fastapi.responses import FileResponse

from utils.traverse_file import bfs_traversal

from utils.folder_to_zip import folder_to_zip

from utils.extract_zip import extract_zip

from utils.create_folder import create_folder_if_not_exists, delete_folder_if_exists

from utils.read_file import read_file

from logic.infinite_gpt import ask_gpt_to_generate_tests, ask_gpt_to_refactor_code

router = APIRouter()

@router.get("/doxify_all")
def generate_all_docs(file_path):
    try:

        bfs_traversal(file_path)

        return {"message": "All files doxified."}
    
    except Exception as e:

        raise Exception(f"{e}")
    
@router.get("/zipFile")
def zip_file():
    try:
            
        response = folder_to_zip("files", "output")

        return {"message": f"response: {response}"}
    
    except Exception as e:

        raise Exception(f"{e}")
    
@router.get("/extractZip")
def extract_zip_file():
    try:

        response = extract_zip("output.zip", "files")

        return {"message": f"response: {response}"}
    
    except Exception as e:

        raise Exception(f"{e}")
    
@router.post("/doxify")
async def upload_file(file: UploadFile = File(...)):
    try:
        upload_folder = "uploads"

        docs_folder = "docs"

        files_folder = "files"

        delete_folder_if_exists(upload_folder)

        delete_folder_if_exists(docs_folder)

        delete_folder_if_exists(files_folder)
        
        create_folder_if_not_exists(upload_folder)

        create_folder_if_not_exists(docs_folder)

        create_folder_if_not_exists(files_folder)

        with open(f'{upload_folder}/{file.filename}', 'wb') as f:

            while chunk := await file.read(1024):
                f.write(chunk)

        extract_zip(f'uploads/{file.filename}', "files")

        generate_all_docs("./files")

        folder_to_zip(docs_folder, "output")
        zip_file_path = "output.zip"

        return FileResponse(zip_file_path, filename="docs.zip")
    
    except Exception as e:

        print(f"An error occured : {e}")

        raise Exception(f"{e}")
        # raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"{e}")

@router.post("/generate_tests")
async def generate_tests(file: UploadFile = File(...)):
    try:
        tests_uploads_folder = "tests_uploads"
        tests_folder = "generated_tests"

        delete_folder_if_exists(tests_uploads_folder)
        delete_folder_if_exists(tests_folder)
        create_folder_if_not_exists(tests_uploads_folder)
        create_folder_if_not_exists(tests_folder)

        file_path = f'{tests_uploads_folder}/{file.filename}'

        with open(file_path, 'wb') as f:
            while chunk := await file.read(1024):
                f.write(chunk)

        prompt_text = read_file(file_path)

        ask_gpt_to_generate_tests(prompt_text, f"{tests_folder}")

        tests_file_path = f"{tests_folder}/output.txt"

        return FileResponse(tests_file_path, filename="output.txt")


    except Exception as e:
        return {"error": str(e)}
   
@router.post("/refactor")
async def refactor(file: UploadFile = File(...)):
    try:

        refactor_uploads_folder = "refactor_uploads"

        refactored_folder = "refactored_code"

        delete_folder_if_exists(refactor_uploads_folder)

        delete_folder_if_exists(refactored_folder)

        create_folder_if_not_exists(refactor_uploads_folder)

        create_folder_if_not_exists(refactored_folder)

        with open(f'{refactor_uploads_folder}/{file.filename}', 'wb') as f:
            while chunk := await file.read(1024):
                f.write(chunk)

        prompt_text = read_file(f'{refactor_uploads_folder}/{file.filename}')

        ask_gpt_to_refactor_code(prompt_text, f"{refactored_folder}")

        refactored_file_path = f"{refactored_folder}/output.txt"

        return FileResponse(refactored_file_path, filename="output.txt")

    except Exception as e:
        raise Exception(f"{e}")