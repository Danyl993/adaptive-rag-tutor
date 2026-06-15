from fastapi import APIRouter

router = APIRouter()


@router.get("/stats")
def stats():

    return {
        "documents": 0,
        "subjects": 0,
        "questions": 0
    }