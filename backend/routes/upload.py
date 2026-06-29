from fastapi import APIRouter, UploadFile, File
import tempfile
import shutil

from services.vector_db import add_chunks
from services.rag import extract_pdf_text
from services.chunker import chunk_text

router = APIRouter()


@router.post("/upload")
async def upload_pdf(
    file: UploadFile = File(...)
):

    with tempfile.NamedTemporaryFile(
        delete=False,
        suffix=".pdf"
    ) as temp_file:

        shutil.copyfileobj(
            file.file,
            temp_file
        )

        temp_path = temp_file.name

    pages = extract_pdf_text(
        temp_path
    )
    for page in pages:
        print(
            f"Page {page['page']} length:",
            len(page["text"])
        )
    total_chunks = 0

    for page_data in pages:

        chunks = chunk_text(
            page_data["text"]
        )

        add_chunks(
            chunks=chunks,
            subject="General",
            unit="Unit1",
            file_name=file.filename,
            page=page_data["page"]
        )

        total_chunks += len(chunks)

    return {
        "filename": file.filename,
        "pages": len(pages),
        "chunks": total_chunks
    }