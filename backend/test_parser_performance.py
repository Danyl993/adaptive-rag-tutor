from services.document_parser import parse_document
from services.parser_performance import measure_parser_time

print(
    measure_parser_time(
        parse_document,
        "sample.pptx"
    )
)