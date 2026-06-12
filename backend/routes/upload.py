from fastapi import APIRouter, UploadFile, File

from services.rag import extract_pdf_text
from services.chunker import chunk_text

router = APIRouter()


@router.post("/upload")
async def upload_pdf(
    file: UploadFile = File(...)
):

    return {
        "filename": file.filename,
        "status": "ready for indexing"
    }