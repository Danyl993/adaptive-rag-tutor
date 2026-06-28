from services.session_history import get_history


def find_duplicate_sessions():

    history = get_history()

    seen = set()
    duplicates = []

    for session in history:

        key = (
            session["documents_parsed"],
            session["duration_seconds"]
        )

        if key in seen:
            duplicates.append(session)
        else:
            seen.add(key)

    return duplicates