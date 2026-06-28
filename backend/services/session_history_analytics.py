from services.session_history import get_history


def session_history_analytics():

    history = get_history()

    sessions = len(history)

    total_documents = sum(
        session["documents_parsed"]
        for session in history
    )

    total_duration = sum(
        session["duration_seconds"] or 0
        for session in history
    )

    average_documents = (
        0
        if sessions == 0
        else round(
            total_documents / sessions,
            2
        )
    )

    average_duration = (
        0
        if sessions == 0
        else round(
            total_duration / sessions,
            2
        )
    )

    return {
        "sessions": sessions,
        "total_documents": total_documents,
        "total_duration": total_duration,
        "average_documents": average_documents,
        "average_duration": average_duration
    }