import time

from services.parser_session import (
    start_session,
    record_document,
    end_session,
    get_session
)

start_session()

record_document()

time.sleep(2)

end_session()

print(
    get_session()
)