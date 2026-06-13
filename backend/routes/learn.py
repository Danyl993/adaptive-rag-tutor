from fastapi import APIRouter

router = APIRouter()


@router.get("/learn")
def learn(
    subject: str,
    unit: int
):

    return {
        "mode": "learn",
        "subject": subject,
        "unit": unit
    }