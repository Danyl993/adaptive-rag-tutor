from fastapi import APIRouter, UploadFile, File, Form
import tempfile
import shutil
from services.vector_db import add_chunks
from services.chunker import chunk_text
from services.document_parser import parse_document
import os

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

    upload_folder = os.path.join(
        "backend",
        "data",
        "uploads",
        subject,
        unit
    )

    os.makedirs(upload_folder, exist_ok=True)

    saved_file_path = os.path.join(
        upload_folder,
        file.filename
    )

    shutil.copy(
        temp_path,
        saved_file_path
    )

    try :
        parsed = parse_document(temp_path)

        if parsed.get("success") is False:
            return parsed
        
        result = parsed["content"]

        if isinstance(result, list):

            pages = result

        else:

            pages = [
                {
                    "page": 1,
                    "text": result
                }
            ]

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

    finally:
        if os.path.exists(temp_path):
            os.remove(temp_path)

    return {
        "filename": file.filename,
        "pages": len(pages),
        "chunks": total_chunks,
        "metadata": parsed["metadata"]
    }

