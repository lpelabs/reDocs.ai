from fastapi import APIRouter, HTTPException, Depends, status

from utils.file_traversal import bfs_traversal

router = APIRouter()

@router.get("/doxify_all")

def generate_all_docs():
    try:

        bfs_traversal("./files")

        return {"message": "All files doxified."}
    
    except Exception as e:

        raise Exception(f"{e}")