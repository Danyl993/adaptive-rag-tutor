_cache = {}


def cache_document(
    file_path,
    parsed_text
):

    _cache[file_path] = parsed_text


def get_cached_document(
    file_path
):

    return _cache.get(file_path)


def clear_cache():

    _cache.clear()

def remove_cached_document(
    file_path
):

    if file_path in _cache:
        del _cache[file_path]