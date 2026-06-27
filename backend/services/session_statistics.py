from services.parser_session import get_session


def session_statistics():

    session = get_session()

    documents = session["documents_parsed"]
    duration = session["duration_seconds"]

    if duration is None:
        duration = 0

    return {
        "documents_parsed": documents,
        "duration_seconds": duration,
        "documents_per_second": (
            0
            if duration == 0
            else round(
                documents / duration,
                2
            )
        )
    }