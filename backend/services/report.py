def generate_report(
    progress,
    streak,
    weak_topics
):

    return {
        "progress_percent": progress,
        "study_streak": streak,
        "weak_topics": weak_topics,
        "status": (
            "On Track"
            if progress >= 70
            else "Needs Improvement"
        )
    }