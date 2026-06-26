from services.parser_cache import (
    cache_document,
    get_cached_document,
    remove_cached_document
)

cache_document(
    "sample.pptx",
    "Operating Systems"
)

print(
    get_cached_document(
        "sample.pptx"
    )
)

remove_cached_document(
    "sample.pptx"
)

print(
    get_cached_document(
        "sample.pptx"
    )
)