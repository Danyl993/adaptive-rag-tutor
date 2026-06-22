def is_low_confidence(
    confidence,
    threshold=0.5
):

    return confidence < threshold