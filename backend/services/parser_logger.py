from datetime import datetime


def log_parser_event(
    file_name,
    status
):

    return {
        "timestamp": datetime.now().isoformat(),
        "file_name": file_name,
        "status": status
    }