from services.session_history import get_history


def search_sessions(
    documents_parsed
):

    history = get_history()

    return [
        session
        for session in history
        if session["documents_parsed"] == documents_parsed
    ]