from fastapi import APIRouter

router = APIRouter()


@router.get("/stats")
def stats():

    history = get_history()

    return {
        "documents": 0,
        "subjects": 0,
        "questions": len(history)
    }