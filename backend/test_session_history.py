from services.session_history import (
    add_session,
    clear_history
)

from services.session_history_analytics import (
    session_history_analytics
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
        "duration_seconds": 9
    }
)

print(
    session_history_analytics()
)