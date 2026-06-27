from services.parser_session import (
    start_session,
    record_document,
    reset_session,
    get_session
)

start_session()

record_document()
record_document()

print(
    get_session()
)

reset_session()

print(
    get_session()
)