from services.session_history import (
    add_session,
    clear_history
)

from services.session_history_report import (
    generate_history_report
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

print(
    generate_history_report()
)