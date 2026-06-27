from services.parser_session import (
    get_session,
    reset_session
)

from services.session_import import (
    import_session
)

reset_session()

print(
    get_session()
)

import_session(
    "session.json"
)

print(
    get_session()
)