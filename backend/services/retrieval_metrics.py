from services.confidence import calculate_confidence
from services.citations import citation_quality
from services.evidence import evidence_coverage


def retrieval_metrics(
    results,
    source,
    retrieved_chunks,
    total_chunks
):

    return {
        "confidence": calculate_confidence(results),
        "citation_quality": citation_quality(source),
        "evidence_coverage": evidence_coverage(
            retrieved_chunks,
            total_chunks
        )
    }