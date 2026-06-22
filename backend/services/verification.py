def is_low_confidence(
    confidence,
    threshold=0.5
):

    return confidence < threshold


def verify_answer(
    answer,
    context
):

    answer_words = answer.lower().split()
    context_words = context.lower().split()

    matches = [
        word
        for word in answer_words
        if word in context_words
    ]

    return {
        "verified": len(matches) > 0,
        "matched_terms": len(matches)
    }