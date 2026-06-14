from fastapi import APIRouter

router = APIRouter()


@router.delete("/cleanup")
def cleanup(
    subject: str,
    unit: int
):

    return {
        "status": "cleanup requested",
        "subject": subject,
        "unit": unit
    }