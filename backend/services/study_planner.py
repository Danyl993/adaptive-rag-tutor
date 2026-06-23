def generate_study_plan(
    weak_topics
):

    plan = []

    for topic in weak_topics:

        plan.append(
            f"Revise {topic}"
        )

    return plan