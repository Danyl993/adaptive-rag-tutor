from fastapi import APIRouter, UploadFile, File, Form
import tempfile
import shutil

from services.vector_db import add_chunks
from services.rag import extract_pdf_text
from services.chunker import chunk_text
from services.document_parser import parse_document

router = APIRouter()


@router.post("/upload")
async def upload_pdf(
    subject: str = Form(...),
    unit: str = Form(...),
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

    result = parse_document(
    temp_path
    )
    if isinstance(result, dict):

        if result.get("success") is False:

            return result
    
    if isinstance(result, list):

        pages = result

    else:

        pages = [
            {
                "page": 1,
                "text": result
            }
        ]

    for page_data in pages:
        
        total_chunks = 0

    for page_data in pages:

        chunks = chunk_text(
            page_data["text"]
        )

        add_chunks(
            chunks=chunks,
            subject=subject,
            unit=unit,
            file_name=file.filename,
            page=page_data["page"]
        )

        total_chunks += len(chunks)

    return {
        "filename": file.filename,
        "pages": len(pages),
        "chunks": total_chunks
    }