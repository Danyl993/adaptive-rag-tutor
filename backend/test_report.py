from services.report import generate_report

print(
    generate_report(
        75,
        4,
        [
            "Deadlocks",
            "Memory Management"
        ]
    )
)