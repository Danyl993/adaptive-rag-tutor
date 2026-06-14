from fastapi import APIRouter

router = APIRouter()


@router.get("/revision")
def revision(
    subject: str,
    unit: int
):

    return {
        "mode": "revision",
        "subject": subject,
        "unit": unit
    }