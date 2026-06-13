from fastapi import APIRouter
import os

router = APIRouter()


@router.get("/subjects")
def get_subjects():

    base = "backend/data/uploads"

    if not os.path.exists(base):
        return []

    return os.listdir(base)

@router.get("/subjects/{subject}/units")
def get_units(subject: str):

    path = f"backend/data/uploads/{subject}"

    if not os.path.exists(path):
        return []

    return os.listdir(path)