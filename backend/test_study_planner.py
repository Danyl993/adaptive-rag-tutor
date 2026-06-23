from services.study_planner import generate_daily_schedule, generate_study_plan

print(
    generate_study_plan(
        [
            "Deadlocks",
            "Memory Management"
        ]
    )
)
print(
    generate_daily_schedule(
        [
            "Deadlocks",
            "Memory Management"
        ],
        3
    )
)