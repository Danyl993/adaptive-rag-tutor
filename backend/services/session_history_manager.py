from services.session_history_storage import (
    save_history,
    load_history
)

from services.session_history import (
    clear_history,
    add_session
)


def export_history():

    save_history(
        "history.json"
    )


def import_history():

    clear_history()

    history = load_history(
        "history.json"
    )

    for session in history:

        add_session(
            session
        )