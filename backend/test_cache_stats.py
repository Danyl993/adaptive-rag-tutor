from services.parser_cache import cache_document
from services.cache_stats import cache_statistics

cache_document(
    "sample1.pptx",
    "Operating Systems"
)

cache_document(
    "sample2.pptx",
    "Computer Networks"
)

print(
    cache_statistics()
)