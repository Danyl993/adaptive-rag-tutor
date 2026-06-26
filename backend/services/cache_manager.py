from services.parser_cache import (
    export_cache,
    import_cache
)


def save_cache():

    export_cache(
        "cache.json"
    )


def load_cache():

    import_cache(
        "cache.json"
    )