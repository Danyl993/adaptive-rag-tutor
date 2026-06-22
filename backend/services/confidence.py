def calculate_confidence(results):

    if not results:
        return 0.0

    scores = [
        float(score)
        for _, score in results
    ]

    return sum(scores) / len(scores)