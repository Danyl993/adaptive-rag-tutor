from fastapi import APIRouter, UploadFile, File

from services.rag import extract_pdf_text
from services.chunker import chunk_text

router = APIRouter()


@router.post("/upload")
async def upload_pdf(
    file: UploadFile = File(...)
):

    pages = extract_pdf_text(
        file.file
    )

    total_chunks = 0

    for page_data in pages:

        chunks = chunk_text(
            page_data["text"]
        )

        total_chunks += len(chunks)

    return {
        "filename": file.filename,
        "pages": len(pages),
        "chunks": total_chunks
    }