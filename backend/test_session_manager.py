from services.parser_session import (
    start_session,
    record_document,
    end_session
)

from services.session_manager import (
    save_session
)

from services.session_history import (
    get_history,
    clear_history
)

clear_history()

start_session()

record_document()
record_document()

end_session()

save_session()

print(
    get_history()
)