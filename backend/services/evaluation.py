def evaluate_answer(
    expected,
    actual
):

    expected_words = set(
        expected.lower().split()
    )

    actual_words = set(
        actual.lower().split()
    )

    overlap = len(
        expected_words.intersection(
            actual_words
        )
    )

    total = len(expected_words)

    if total == 0:
        return 0.0

    return round(
        overlap / total,
        2
    )