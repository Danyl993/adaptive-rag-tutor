from services.parser_cache import _cache


def cache_statistics():

    return {
        "cached_documents": len(_cache),
        "cached_files": list(_cache.keys())
    }