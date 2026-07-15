from fastapi import APIRouter
from pydantic import BaseModel
import sqlite3
from datetime import datetime

router = APIRouter(
    prefix="/semester",
    tags=["Semester"],
)

DB_PATH = "backend/data/history.db"


class Subject(BaseModel):
    name: str
    units: int


class Semester(BaseModel):
    semester: str
    subjects: list[Subject]


@router.post("/")
def create_semester(data: Semester):

    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()

    cursor.execute(
        """
        INSERT INTO semesters
        (semester_name, created_at)
        VALUES (?, ?)
        """,
        (
            data.semester,
            datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        ),
    )

    semester_id = cursor.lastrowid

    for subject in data.subjects:

        cursor.execute(
            """
            INSERT INTO subjects
            (semester_id, subject_name, units)
            VALUES (?, ?, ?)
            """,
            (
                semester_id,
                subject.name,
                subject.units,
            ),
        )

    conn.commit()
    conn.close()

    return {
        "message": "Semester created successfully"
    }


@router.get("/")
def get_semesters():

    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()

    cursor.execute("""
        SELECT *
        FROM semesters
        ORDER BY semester_name
    """)

    semesters = [dict(row) for row in cursor.fetchall()]

    conn.close()

    return semesters