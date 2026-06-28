from services.session_history import get_history


def generate_history_report():

    history = get_history()

    total_sessions = len(history)

    total_documents = sum(
        session["documents_parsed"]
        for session in history
    )

    total_duration = sum(
        session["duration_seconds"]
        for session in history
    )

    return {
        "total_sessions": total_sessions,
        "total_documents": total_documents,
        "total_duration": total_duration
    }