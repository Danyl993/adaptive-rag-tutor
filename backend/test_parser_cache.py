from services.parser_cache import (
    cache_document,
    get_cached_document,
    clear_cache
)

cache_document(
    "sample.pptx",
    "Operating Systems\nMemory Management"
)

print(
    get_cached_document(
        "sample.pptx"
    )
)

clear_cache()

print(
    get_cached_document(
        "sample.pptx"
    )
)