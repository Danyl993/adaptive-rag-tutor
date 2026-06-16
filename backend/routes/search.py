from fastapi import APIRouter
from services.vector_db import get_topic_context

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
    unit: str
):

    return get_topic_context(
        query,
        subject,
        unit
    )