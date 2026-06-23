def dashboard_summary(
    progress,
    streak,
    weak_topics
):

    return {
        "progress": progress,
        "streak": streak,
        "weak_topics_count": len(weak_topics),
        "weak_topics": weak_topics
    }