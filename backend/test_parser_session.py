from services.parser_session import (
    start_session,
    record_document,
    get_session
)

start_session()

record_document()
record_document()

print(
    get_session()
)