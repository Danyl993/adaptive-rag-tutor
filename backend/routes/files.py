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

    files = []

    for filename in os.listdir(folder):
        path = os.path.join(folder, filename)

        files.append({
            "name": filename,
            "size": os.path.getsize(path),
            "type": os.path.splitext(filename)[1],
        })

    return files