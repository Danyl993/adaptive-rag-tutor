from services.parser_cache import (
    cache_document,
    export_cache,
    clear_cache
)

clear_cache()

cache_document(
    "sample1.pptx",
    "Operating Systems"
)

cache_document(
    "sample2.pptx",
    "Computer Networks"
)

export_cache(
    "cache.json"
)

print("Cache exported successfully.")