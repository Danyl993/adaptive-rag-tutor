from services.parser_cache import (
    import_cache,
    cache_size,
    clear_cache
)

clear_cache()

import_cache(
    "cache.json"
)

print(
    cache_size()
)