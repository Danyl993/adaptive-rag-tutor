import time

from services.parser_session import (
    start_session,
    record_document,
    end_session
)

from services.session_statistics import (
    session_statistics
)

start_session()

record_document()
record_document()

time.sleep(2)

end_session()

print(
    session_statistics()
)