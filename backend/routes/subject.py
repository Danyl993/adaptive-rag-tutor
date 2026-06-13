from fastapi import APIRouter
import os

router = APIRouter()


@router.get("/subjects")
def get_subjects():

    base = "backend/data/uploads"

    if not os.path.exists(base):
        return []

    return os.listdir(base)