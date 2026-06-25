from services.document_parser import (
    detect_document_type,
    validate_document,
    parse_document,
    extract_metadata
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
    extract_metadata(
        "sample.pptx"
    )
)

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