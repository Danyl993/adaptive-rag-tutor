from fastapi import APIRouter

router = APIRouter()


@router.get("/exam")
def exam(
    subject: str,
    units: str
):

    return {
        "mode": "exam",
        "subject": subject,
        "units": units.split(",")
    }