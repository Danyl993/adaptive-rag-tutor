from services.session_history import (
    add_session,
    clear_history
)

from services.session_history_duplicates import (
    find_duplicate_sessions
)

clear_history()

add_session(
    {
        "documents_parsed": 3,
        "duration_seconds": 6
    }
)

add_session(
    {
        "documents_parsed": 5,
        "duration_seconds": 10
    }
)

add_session(
    {
        "documents_parsed": 3,
        "duration_seconds": 6
    }
)

print(
    find_duplicate_sessions()
)