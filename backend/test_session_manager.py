from services.parser_session import (
    start_session,
    record_document,
    end_session,
    reset_session,
    get_session
)

from services.session_manager import (
    save_session,
    load_session
)

start_session()

record_document()
record_document()

end_session()

save_session()

reset_session()

print(
    get_session()
)

load_session()

print(
    get_session()
)