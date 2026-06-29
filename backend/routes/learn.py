from fastapi import APIRouter
from typing import Optional

router = APIRouter()


@router.get("/learn")
def learn(
    subject: Optional[str] = None,
    unit: Optional[int] = None
):

    return {
        "mode": "learn",
        "subject": subject,
        "unit": unit
    }