from services.analytics import generate_analytics

print(
    generate_analytics(
        25,
        [
            "Deadlocks",
            "Memory Management"
        ]
    )
)