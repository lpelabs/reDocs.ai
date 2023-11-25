from fastapi import APIRouter, HTTPException, Depends, status, UploadFile, File

from fastapi.responses import FileResponse

from utils.traverse_file import bfs_traversal

from utils.folder_to_zip import folder_to_zip

from utils.extract_zip import extract_zip

from utils.create_folder import create_folder_if_not_exists

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
        
        create_folder_if_not_exists(upload_folder)

        create_folder_if_not_exists(docs_folder)

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