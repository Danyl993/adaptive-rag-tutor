from services.evaluation import evaluate_answer
from services.evaluation import (
    evaluate_answer,
    recall_at_k
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