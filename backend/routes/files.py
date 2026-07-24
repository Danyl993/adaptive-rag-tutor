from fastapi import APIRouter

import os

router = APIRouter()


@router.get("/files")
def files(subject: str, unit: str):

    folder = os.path.join(
        "backend",
        "data",
        "uploads",
        subject,
        unit
    )

    if not os.path.exists(folder):
        return []

    return os.listdir(folder)