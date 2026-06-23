def generate_recommendations(
    weak_topics
):

    recommendations = []

    for topic in weak_topics:

        recommendations.append(
            f"Focus more on {topic}"
        )

    return recommendations