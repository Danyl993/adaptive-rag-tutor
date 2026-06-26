import os


def parser_health(file_path):

    return {
        "exists": os.path.exists(file_path),
        "readable": os.access(file_path, os.R_OK),
        "size_bytes": (
            os.path.getsize(file_path)
            if os.path.exists(file_path)
            else 0
        )
    }