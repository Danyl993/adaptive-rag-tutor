def parser_statistics(text):

    words = text.split()

    return {
        "characters": len(text),
        "words": len(words),
        "lines": len(text.splitlines())
    }