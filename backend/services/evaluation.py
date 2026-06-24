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
def recall_at_k(
    relevant_docs,
    retrieved_docs
):

    if len(relevant_docs) == 0:
        return 0.0

    found = len(
        set(relevant_docs)
        &
        set(retrieved_docs)
    )

    return round(
        found / len(relevant_docs),
        2
    )
def precision_at_k(
    relevant_docs,
    retrieved_docs
):

    if len(retrieved_docs) == 0:
        return 0.0

    found = len(
        set(relevant_docs)
        &
        set(retrieved_docs)
    )

    return round(
        found / len(retrieved_docs),
        2
    )
def mean_reciprocal_rank(
    relevant_doc,
    retrieved_docs
):

    for i, doc in enumerate(
        retrieved_docs,
        start=1
    ):

        if doc == relevant_doc:
            return round(
                1 / i,
                2
            )

    return 0.0
def citation_accuracy(
    cited_sources,
    actual_sources
):

    if len(actual_sources) == 0:
        return 0.0

    correct = len(
        set(cited_sources)
        &
        set(actual_sources)
    )

    return round(
        correct / len(actual_sources),
        2
    )