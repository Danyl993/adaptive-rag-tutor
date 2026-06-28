from services.session_history import (
    add_session,
    clear_history
)

from services.session_history_storage import (
    save_history,
    load_history
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

save_history(
    "history.json"
)

print(
    load_history(
        "history.json"
    )
)