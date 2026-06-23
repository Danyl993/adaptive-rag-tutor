def calculate_streak(
    study_days
):

    streak = 0

    for day in study_days:

        if day:
            streak += 1
        else:
            break

    return streak