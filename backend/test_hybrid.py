from services.bm25 import build_bm25
from services.hybrid import hybrid_search

docs = [
    "Operating systems manage hardware",
    "Databases store information",
    "Computer networks connect devices"
]

bm25 = build_bm25(docs)

print(
    hybrid_search(
        "Operating systems",
        docs,
        bm25
    )
)