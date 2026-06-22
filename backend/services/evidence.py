def evidence_coverage(
    retrieved_chunks,
    total_chunks
):

    if total_chunks == 0:
        return 0.0

    return (
        len(retrieved_chunks)
        / total_chunks
    )