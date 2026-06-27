import os


from pathlib import Path

from services.ocr import extract_text_from_image
from services.pptx_parser import extract_text_from_pptx
from services.parser_cache import (
    cache_document,
    get_cached_document
)
from services.parser_session import (
    record_document
)

SUPPORTED_TYPES = {
    ".pptx",
    ".png",
    ".jpg",
    ".jpeg"
}


def detect_document_type(file_path):

    return Path(file_path).suffix.lower()


def validate_document(file_path):

    file_type = detect_document_type(file_path)

    if file_type not in SUPPORTED_TYPES:
        raise ValueError(
            f"Unsupported file type: {file_type}"
        )

    return True

def parse_document(file_path):

    cached = get_cached_document(file_path)

    if cached is not None:
        return cached

    try:

        validate_document(file_path)

        file_type = detect_document_type(file_path)

        if file_type == ".pptx":
            result = extract_text_from_pptx(file_path)

        elif file_type in [".png", ".jpg", ".jpeg"]:
            result = extract_text_from_image(file_path)

        else:
            raise ValueError(
                f"Unsupported file type: {file_type}"
            )

        cache_document(
            file_path,
            result
        )

        record_document()

        return result

    except Exception as e:

        return {
            "success": False,
            "error": str(e)
        }
def extract_metadata(file_path):

    return {
        "file_name": os.path.basename(file_path),
        "extension": detect_document_type(file_path),
        "size_bytes": os.path.getsize(file_path)
    }