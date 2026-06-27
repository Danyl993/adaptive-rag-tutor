from services.session_history import (
    add_session,
    get_history,
    clear_history
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
        "duration_seconds": 10
    }
)

print(
    get_history()
)