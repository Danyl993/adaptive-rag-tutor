from services.bm25 import (
    build_bm25,
    bm25_search
)

docs = [
    "Operating systems manage hardware",
    "Databases store information",
    "Computer networks connect devices"
]

bm25 = build_bm25(docs)

print(
    bm25_search(
        bm25,
        "Operating systems",
        docs
    )
)