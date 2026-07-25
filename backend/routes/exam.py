from fastapi import APIRouter
from services.vector_db import get_unit_context
from services.tutor import generate_exam_revision

router = APIRouter()


@router.get("/exam")
def exam(
    subject: str,
    unit: str,
    exam_type: str = "revision"
):

    context = get_unit_context(
        subject,
        unit
    )

    if not context.strip():
        return {
            "success": False,
            "message": "No study material found for this unit."
        }

    revision = generate_exam_revision(
        subject,
        unit,
        context,
        exam_type
    )

    return {
        "success": True,
        "mode": "exam",
        "subject": subject,
        "unit": unit,
        **revision
    }