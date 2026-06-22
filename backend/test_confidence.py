from services.confidence import calculate_confidence

results = [
    ("doc1", 0.9),
    ("doc2", 0.8),
    ("doc3", 0.7)
]

print(
    calculate_confidence(results)
)