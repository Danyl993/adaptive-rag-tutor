from fastapi import APIRouter
import os

router = APIRouter()


@router.get("/files")
def files():

    base = "backend/data/uploads"

    if not os.path.exists(base):
        return []

    results = []

    for root, dirs, files in os.walk(base):
        for file in files:
            results.append(file)

    return results