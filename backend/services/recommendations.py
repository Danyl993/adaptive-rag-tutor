def recommend_topics(
    confidence
):

    if confidence >= 0.8:
        return []

    return [
        "Review related topics",
        "Read previous chapter",
        "Generate revision notes",
        "Attempt MCQs"
    ]