from services.weak_topics import detect_weak_topics

history = [
    ("Processes", 0.8),
    ("Deadlocks", 0.3),
    ("Memory Management", 0.4)
]

print(
    detect_weak_topics(history)
)