from fastapi import FastAPI, Request
from .config import settings

app = FastAPI(title=settings.PROJECT_NAME, root_path="/api")

@app.get("/health")
async def health_check():
    return {"status": "ok"}

@app.get("/")
async def root():
    return {"message": "Welcome to Smart Academic Assistant API"}
