from fastapi import APIRouter

router = APIRouter()


@router.get("/topics")
def get_topics(
    subject: str,
    unit: int
):

    return {
        "subject": subject,
        "unit": unit,
        "topics": []
    }