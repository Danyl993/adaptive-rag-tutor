from services.parser_stats import parser_statistics


def parser_summary(text):

    stats = parser_statistics(text)

    return {
        "preview": text[:200],
        "characters": stats["characters"],
        "words": stats["words"],
        "lines": stats["lines"]
    }