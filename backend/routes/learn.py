from fastapi import APIRouter
from typing import Optional

from services.vector_db import get_topic_context
from services.tutor import (
    teach_topic,
    explain_simpler,
    explain_better
)

router = APIRouter()


@router.get("/learn")
def learn(
    subject: Optional[str] = None,
    unit: Optional[str] = None
):

    return {
        "mode": "learn",
        "subject": subject,
        "unit": unit
    }


@router.get("/learn/topic")
def learn_topic(
    subject: str,
    unit: str,
    topic: str
):

    context = get_topic_context(
        topic,
        subject,
        unit
    )["context"]

    if not context:
        return {
            "error": f"No study material found for topic '{topic}'"
        }

    lesson = teach_topic(
        topic=topic,
        context=context
    )

    return {
        "topic": topic,
        "subject": subject,
        "unit": unit,
        **lesson
    }

@router.post("/learn/explain-simpler")
def simplify_lesson(
    data: dict
):

    lesson = data.get("lesson", "")

    return explain_simpler(lesson)

@router.post("/learn/explain-better")
def better_lesson(
    data: dict
):

    lesson = data.get("lesson", "")

    return explain_better(lesson)