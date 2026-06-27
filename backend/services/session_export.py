import json

from services.parser_session import get_session


def export_session(file_path):

    with open(
        file_path,
        "w",
        encoding="utf-8"
    ) as file:

        json.dump(
            get_session(),
            file,
            indent=4
        )