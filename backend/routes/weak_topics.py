from fastapi import APIRouter

from services.weak_topics import get_weak_topics

router = APIRouter()


@router.get("/weak-topics")
def weak_topics():

    return {
        "weak_topics": get_weak_topics()
    }