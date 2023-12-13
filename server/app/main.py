import os
from fastapi import FastAPI, HTTPException, Depends, status
from pydantic import BaseModel
from typing import Annotated
from datetime import date
from fastapi.middleware.cors import CORSMiddleware

# Load environment variables first
from dotenv import load_dotenv

load_dotenv()

from api.routes import routes

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include your API routers here
app.include_router(routes.router, prefix="", tags=["reDocs.ai"])

@app.get("/")
async def main():
    return {"message": "Server is running!"}

if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="127.0.0.1", port=8000)