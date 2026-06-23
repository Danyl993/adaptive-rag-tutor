def session_summary(
    questions_answered,
    mcqs_attempted,
    revision_notes_generated
):

    return {
        "questions_answered": questions_answered,
        "mcqs_attempted": mcqs_attempted,
        "revision_notes_generated": revision_notes_generated,
        "total_activities": (
            questions_answered
            + mcqs_attempted
            + revision_notes_generated
        )
    }