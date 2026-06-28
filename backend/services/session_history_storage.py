import json

from services.session_history import (
    get_history
)


def save_history(file_path):

    with open(
        file_path,
        "w",
        encoding="utf-8"
    ) as file:

        json.dump(
            get_history(),
            file,
            indent=4
        )


def load_history(file_path):

    with open(
        file_path,
        "r",
        encoding="utf-8"
    ) as file:

        return json.load(file)