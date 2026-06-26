from services.parser_health import parser_health
from services.document_parser import validate_document


def parser_validation_report(file_path):

    report = parser_health(file_path)

    try:
        validate_document(file_path)
        report["supported"] = True

    except Exception:
        report["supported"] = False

    return report