from services.parser_cache import (
    cache_document,
    get_cached_document,
    cache_metrics,
    reset_cache_metrics
)

cache_document(
    "sample.pptx",
    "Operating Systems"
)

get_cached_document("sample.pptx")
get_cached_document("invalid.pptx")

print(
    cache_metrics()
)

reset_cache_metrics()

print(
    cache_metrics()
)