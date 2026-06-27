from services.parser_session import (
    start_session,
    get_session
)

from services.document_parser import parse_document

start_session()

parse_document(
    "sample.pptx"
)

print(
    get_session()
)