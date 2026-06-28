from services.session_history import (
    add_session,
    clear_history
)

from services.session_history_search import (
    search_sessions
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
        "documents_parsed": 4,
        "duration_seconds": 8
    }
)

add_session(
    {
        "documents_parsed": 2,
        "duration_seconds": 10
    }
)

print(
    search_sessions(
        2
    )
)