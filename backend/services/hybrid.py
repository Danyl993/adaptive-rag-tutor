from services.bm25 import bm25_search


def hybrid_search(
    query,
    documents,
    bm25,
    top_k=5
):

    bm25_results = bm25_search(
        bm25,
        query,
        documents,
        top_k
    )

    return bm25_results