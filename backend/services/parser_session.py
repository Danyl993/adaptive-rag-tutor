from datetime import datetime


_session = {
    "started_at": None,
    "ended_at": None,
    "documents_parsed": 0
}


def start_session():

    _session["started_at"] = datetime.now()
    _session["ended_at"] = None
    _session["documents_parsed"] = 0


def record_document():

    _session["documents_parsed"] += 1


def end_session():

    _session["ended_at"] = datetime.now()


def get_session():

    duration = None

    if (
        _session["started_at"] is not None and
        _session["ended_at"] is not None
    ):

        duration = (
            _session["ended_at"]
            - _session["started_at"]
        ).total_seconds()

    return {
        "started_at": str(_session["started_at"]),
        "ended_at": str(_session["ended_at"]),
        "documents_parsed": _session["documents_parsed"],
        "duration_seconds": duration
    }