def generate_analytics(
    total_questions,
    weak_topics
):

    return {
        "questions_asked": total_questions,
        "weak_topics_count": len(weak_topics),
        "weak_topics": weak_topics
    }