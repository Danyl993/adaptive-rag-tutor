from services.session_export import export_session
from services.session_import import import_session


SESSION_FILE = "session.json"


def save_session():

    export_session(
        SESSION_FILE
    )


def load_session():

    import_session(
        SESSION_FILE
    )