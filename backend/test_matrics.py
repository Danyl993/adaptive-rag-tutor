from services.retrieval_metrics import retrieval_metrics

print(
    retrieval_metrics(
        [("doc1", 0.9), ("doc2", 0.8)],
        "OS Unit 1 Page 5",
        [1, 2],
        5
    )
)