from services.document_parser import (
    detect_document_type,
    parse_document
)

print(
    detect_document_type(
        "sample.pptx"
    )
)

print(
    parse_document(
        "sample.pptx"
    )
)