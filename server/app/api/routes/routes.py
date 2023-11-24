from fastapi import APIRouter, HTTPException, Depends, status, UploadFile, File

from utils.traverse_file import bfs_traversal

from utils.folder_to_zip import folder_to_zip

from utils.extract_zip import extract_zip

router = APIRouter()

@router.get("/doxify_all")
def generate_all_docs():
    try:

        bfs_traversal("./files")

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

        with open(f'uploads/{file.filename}', 'wb') as f:

            while chunk := await file.read(1024):
                f.write(chunk)

        extract_zip(f'uploads/{file.filename}', "files")


        return {'message': 'File uploaded successfully'}
    
    except Exception as e:

        raise Exception(f"{e}")