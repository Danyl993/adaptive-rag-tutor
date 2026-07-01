from fastapi import APIRouter
from services.vector_db import get_unit_context
from services.revision import generate_revision_notes
router = APIRouter()

@router.get("/revision")
def revision(
    subject: str,
    unit: str
):

    context = get_unit_context(
        subject,
        unit
    )

    notes = generate_revision_notes(
        context
    )

    return {
        "subject": subject,
        "unit": unit,
        "notes": notes
    }