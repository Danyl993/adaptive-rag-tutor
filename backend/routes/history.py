from fastapi import APIRouter

from services.history import get_history

router = APIRouter()


@router.get("/history")
def history():

    return {
        "history": get_history()
    }