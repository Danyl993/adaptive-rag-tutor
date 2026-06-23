def calculate_progress(
    completed_topics,
    total_topics
):

    if total_topics == 0:
        return 0

    return round(
        (completed_topics / total_topics) * 100,
        2
    )