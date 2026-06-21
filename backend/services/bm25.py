from rank_bm25 import BM25Okapi


def build_bm25(documents):

    tokenized_docs = [
        doc.split()
        for doc in documents
    ]

    return BM25Okapi(tokenized_docs)


def bm25_search(
    bm25,
    query,
    documents,
    top_k=5
):

    scores = bm25.get_scores(
        query.split()
    )

    ranked = sorted(
        zip(documents, scores),
        key=lambda x: x[1],
        reverse=True
    )

    return ranked[:top_k]