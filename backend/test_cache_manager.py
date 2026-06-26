from services.parser_cache import (
    cache_document,
    clear_cache,
    cache_size
)

from services.cache_manager import (
    save_cache,
    load_cache
)

clear_cache()

cache_document(
    "sample.pptx",
    "Operating Systems"
)

save_cache()

clear_cache()

print(
    cache_size()
)

load_cache()

print(
    cache_size()
)