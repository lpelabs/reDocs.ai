from fastapi import APIRouter, HTTPException, Depends, status

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