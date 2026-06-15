from fastapi import APIRouter

from services.vector_db import search

router = APIRouter()


@router.get("/search")
def semantic_search(
    query: str
):

    return search(query)