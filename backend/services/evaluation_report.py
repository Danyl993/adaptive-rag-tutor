def evaluation_summary(
    recall,
    precision,
    mrr,
    citation_accuracy,
    hallucination_rate,
    answer_accuracy
):

    return {
        "recall": recall,
        "precision": precision,
        "mrr": mrr,
        "citation_accuracy": citation_accuracy,
        "hallucination_rate": hallucination_rate,
        "answer_accuracy": answer_accuracy
    }