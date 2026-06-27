import json
from datetime import datetime

from services.parser_session import _session


def import_session(file_path):

    with open(
        file_path,
        "r",
        encoding="utf-8"
    ) as file:

        data = json.load(file)

    if data["started_at"] != "None":
        data["started_at"] = datetime.fromisoformat(
            data["started_at"]
        )
    else:
        data["started_at"] = None

    if data["ended_at"] != "None":
        data["ended_at"] = datetime.fromisoformat(
            data["ended_at"]
        )
    else:
        data["ended_at"] = None

    _session.update(data)