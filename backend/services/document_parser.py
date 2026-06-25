from pathlib import Path

from services.ocr import extract_text_from_image
from services.pptx_parser import extract_text_from_pptx


def detect_document_type(file_path):

    return Path(file_path).suffix.lower()


def parse_document(file_path):

    file_type = detect_document_type(file_path)

    if file_type == ".pptx":
        return extract_text_from_pptx(file_path)

    if file_type in [".png", ".jpg", ".jpeg"]:
        return extract_text_from_image(file_path)

    raise ValueError(f"Unsupported file type: {file_type}")