from fastapi import APIRouter

from services.vector_db import get_unit_context
from services.llm import extract_topics

router = APIRouter()


@router.get("/topics")
def get_topics(
    subject: str,
    unit: str
):

    context = get_unit_context(
        subject,
        unit
    )

    topics = extract_topics(
        context
    )

    return {
        "subject": subject,
        "unit": unit,
        "topics": topics
    }