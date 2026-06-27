from services.parser_session import get_session


def session_summary():

    session = get_session()

    return {
        "documents_parsed": session["documents_parsed"],
        "duration_seconds": session["duration_seconds"],
        "average_time_per_document":
            0
            if (
                session["duration_seconds"] is None
                or session["documents_parsed"] == 0
            )
            else round(
                session["duration_seconds"]
                / session["documents_parsed"],
                2
            )
    }