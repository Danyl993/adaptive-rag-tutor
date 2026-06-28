from services.session_history import get_history


def merge_histories(other_history):

    merged = get_history().copy()

    for session in other_history:

        if session not in merged:
            merged.append(session)

    return merged