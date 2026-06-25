from services.ocr import extract_text_from_image
from services.pptx_parser import extract_text_from_pptx


def parse_document(file_path):

    if file_path.endswith((".png", ".jpg", ".jpeg")):
        return extract_text_from_image(file_path)

    if file_path.endswith(".pptx"):
        return extract_text_from_pptx(file_path)

    raise ValueError("Unsupported file type")