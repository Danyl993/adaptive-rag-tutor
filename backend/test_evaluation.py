from services.evaluation import evaluate_answer
from services.evaluation import (
    evaluate_answer,
    recall_at_k
)
from services.evaluation import (
    evaluate_answer,
    recall_at_k,
    precision_at_k
)
from services.evaluation import (
    evaluate_answer,
    recall_at_k,
    precision_at_k,
    mean_reciprocal_rank
)

print(
    evaluate_answer(
        "Operating systems manage hardware",
        "Operating systems manage hardware and software"
    )
)
print(
    recall_at_k(
        ["doc1", "doc2"],
        ["doc1", "doc3", "doc2"]
    )
)
print(
    precision_at_k(
        ["doc1", "doc2"],
        ["doc1", "doc3", "doc2"]
    )
)
print(
    mean_reciprocal_rank(
        "doc2",
        ["doc1", "doc2", "doc3"]
    )
)