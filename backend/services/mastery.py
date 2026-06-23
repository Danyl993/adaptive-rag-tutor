def topic_mastery_score(
    correct_answers,
    total_questions
):

    if total_questions == 0:
        return 0

    return round(
        (correct_answers / total_questions) * 100,
        2
    )