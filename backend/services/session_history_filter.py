from services.session_history import get_history


def filter_sessions(
    minimum_documents=0
):

    history = get_history()

    return [
        session
        for session in history
        if session["documents_parsed"] >= minimum_documents
    ]