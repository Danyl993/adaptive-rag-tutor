from fastapi import APIRouter
from typing import Optional

router = APIRouter()


@router.get("/exam")
def exam(
    subject: Optional[str] = None,
    units: Optional[str] = None
):

    return {
        "mode": "exam",
        "subject": subject,
        "units": units.split(",") if units else []
    }