from fastapi import APIRouter

from services.progress import get_progress

router = APIRouter()


@router.get("/progress")
def progress():

    return {
        "progress": get_progress()
    }