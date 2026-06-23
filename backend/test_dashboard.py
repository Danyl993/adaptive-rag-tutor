from services.dashboard import dashboard_summary

print(
    dashboard_summary(
        70,
        5,
        [
            "Deadlocks",
            "Memory Management"
        ]
    )
)