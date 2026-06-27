from services.session_export import export_session
from services.session_import import import_session
from services.session_history import add_session
from services.parser_session import get_session


SESSION_FILE = "session.json"


def save_session():

    add_session(
        get_session()
    )

    export_session(
        SESSION_FILE
    )


def load_session():

    import_session(
        SESSION_FILE
    )