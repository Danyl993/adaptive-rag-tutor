from services.bm25 import bm25_search


def hybrid_search(
    query,
    documents,
    bm25,
    top_k=5,
    bm25_weight=0.5,
    vector_weight=0.5
):

    bm25_results = bm25_search(
        bm25,
        query,
        documents,
        len(documents)
    )

    fused_results = []

    for doc, score in bm25_results:

        hybrid_score = (
            score * bm25_weight
        ) + (
            score * vector_weight
        )

        fused_results.append(
            (doc, hybrid_score)
        )

    fused_results.sort(
        key=lambda x: x[1],
        reverse=True
    )

    return fused_results[:top_k]