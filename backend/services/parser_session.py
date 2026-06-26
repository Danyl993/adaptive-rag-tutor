from datetime import datetime


_session = {
    "started_at": None,
    "documents_parsed": 0
}


def start_session():

    _session["started_at"] = datetime.now().isoformat()
    _session["documents_parsed"] = 0


def record_document():

    _session["documents_parsed"] += 1


def get_session():

    return _session