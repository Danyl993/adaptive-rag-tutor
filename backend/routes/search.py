from typing import Optional

from fastapi import APIRouter

from services.tutor import tutor_response
from services.history import DB_PATH, save_history
from services.vector_db import (
    get_topic_context,
    search,
    search_by_subject_unit
)

router = APIRouter()


@router.get("/search")
def semantic_search(
    query: str
):

    return search(query)


@router.get("/search/filter")
def filtered_search(
    query: str,
    subject: str,
    unit: str
):

    return search_by_subject_unit(
        query,
        subject,
        unit
    )


@router.get("/context")
def topic_context(
    
    query: str,
    subject: str,
    unit: str,
    topic: Optional[str] = None,
    lesson: Optional[str] = None
):
    print("Context endpoint called")
    retrieved = get_topic_context(
        query,
        subject,
        unit
    )

    response = tutor_response(
        question=query,
        context=retrieved["context"],
        sources=retrieved["sources"],
        topic=topic,
        lesson=lesson
    )

    try:
        save_history(
            question=query,
            answer=response["answer"],
            subject=subject,
            unit=unit,
            mode="Learn"
        )
        print("History saved successfully")
        print("Using DB:", DB_PATH)
    except Exception as e:
        print("History save failed:", e)

    return response