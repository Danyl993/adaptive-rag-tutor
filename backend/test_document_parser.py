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
from services.document_parser import (
    detect_document_type,
    validate_document,
    parse_document
)

print(
    detect_document_type(
        "sample.pptx"
    )
)

print(
    validate_document(
        "sample.pptx"
    )
)

print(
    parse_document(
        "sample.pptx"
    )
)
from services.document_parser import parse_document

print(
    parse_document(
        "sample.pptx"
    )
)

print(
    parse_document(
        "invalid.xyz"
    )
)