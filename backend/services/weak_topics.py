def detect_weak_topics(history):

    weak_topics = []

    for topic, score in history:

        if score < 0.5:
            weak_topics.append(topic)

    return weak_topics