from services.parser_session import (
    start_session,
    record_document,
    end_session
)

from services.session_export import (
    export_session
)

start_session()

record_document()
record_document()

end_session()

export_session(
    "session.json"
)

print(
    "Session exported successfully."
)