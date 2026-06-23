def generate_study_plan(
    weak_topics
):

    plan = []

    for topic in weak_topics:

        plan.append(
            f"Revise {topic}"
        )

    return plan
def generate_daily_schedule(
    weak_topics,
    hours_per_day=2
):

    return {
        "hours_per_day": hours_per_day,
        "tasks": [
            f"Study {topic}"
            for topic in weak_topics
        ]
    }