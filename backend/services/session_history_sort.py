from services.session_history import get_history


def sort_sessions(
    by="documents_parsed",
    descending=True
):

    history = get_history()

    return sorted(
        history,
        key=lambda session: session[by],
        reverse=descending
    )