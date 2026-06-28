from services.session_history import (
    add_session,
    clear_history
)

from services.session_history_sort import (
    sort_sessions
)

clear_history()

add_session(
    {
        "documents_parsed": 2,
        "duration_seconds": 5
    }
)

add_session(
    {
        "documents_parsed": 7,
        "duration_seconds": 12
    }
)

add_session(
    {
        "documents_parsed": 4,
        "duration_seconds": 8
    }
)

print(
    sort_sessions()
)