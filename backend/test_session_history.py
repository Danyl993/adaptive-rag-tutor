from services.session_history import (
    add_session,
    clear_history,
    get_history
)

from services.session_history_manager import (
    export_history,
    import_history
)

clear_history()

add_session(
    {
        "documents_parsed": 3,
        "duration_seconds": 7
    }
)

add_session(
    {
        "documents_parsed": 5,
        "duration_seconds": 12
    }
)

export_history()

clear_history()

print(
    get_history()
)

import_history()

print(
    get_history()
)