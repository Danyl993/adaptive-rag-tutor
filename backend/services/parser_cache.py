_cache = {}

_cache_hits = 0
_cache_misses = 0


def cache_document(file_path, parsed_text):
    _cache[file_path] = parsed_text


def get_cached_document(file_path):
    global _cache_hits
    global _cache_misses

    if file_path in _cache:
        _cache_hits += 1
        return _cache[file_path]

    _cache_misses += 1
    return None


def remove_cached_document(file_path):
    if file_path in _cache:
        del _cache[file_path]


def clear_cache():
    _cache.clear()


def cache_metrics():
    return {
        "hits": _cache_hits,
        "misses": _cache_misses
    }
def reset_cache_metrics():

    global _cache_hits
    global _cache_misses

    _cache_hits = 0
    _cache_misses = 0