def citation_quality(source):

    if not source:
        return 0.0

    score = 1.0

    if "Page" in source:
        score += 0.5

    if "Unit" in source:
        score += 0.5

    return score