from fastapi import APIRouter

from services.vector_db import get_unit_context
from services.mcq import generate_mcq

router = APIRouter()


@router.get("/mcq")
def mcq(
    subject: str,
    unit: str
):

    context = get_unit_context(
        subject,
        unit
    )

    questions = generate_mcq(
        context
    )

    return {
        "subject": subject,
        "unit": unit,
        "mcqs": questions
    }