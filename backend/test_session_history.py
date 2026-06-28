from services.session_history import (
    add_session,
    clear_history
)

from services.session_history_filter import (
    filter_sessions
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
        "documents_parsed": 5,
        "duration_seconds": 8
    }
)

add_session(
    {
        "documents_parsed": 1,
        "duration_seconds": 2
    }
)

print(
    filter_sessions(
        minimum_documents=2
    )
)