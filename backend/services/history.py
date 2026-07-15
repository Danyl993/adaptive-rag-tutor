import sqlite3
from datetime import datetime

DB_PATH = "backend/data/history.db"


def init_db():

    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()


    cursor.execute("""
        CREATE TABLE IF NOT EXISTS history (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            question TEXT NOT NULL,
            answer TEXT NOT NULL,
            subject TEXT,
            unit TEXT,
            mode TEXT,
            created_at TEXT
        )
    """)

    cursor.execute("""
        CREATE TABLE IF NOT EXISTS semesters (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            semester_name TEXT UNIQUE NOT NULL,
            created_at TEXT
        )
    """)

    cursor.execute("""
        CREATE TABLE IF NOT EXISTS subjects (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            semester_id INTEGER,
            subject_name TEXT,
            units INTEGER,
            FOREIGN KEY (semester_id)
                REFERENCES semesters(id)
        )
    """)

    conn.commit()
    conn.close()


def save_history(
    question,
    answer,
    subject=None,
    unit=None,
    mode=None
):

    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()

    cursor.execute(
        """
        INSERT INTO history
        (question, answer, subject, unit, mode, created_at)
        VALUES (?, ?, ?, ?, ?, ?)
        """,
        (
            question,
            answer,
            subject,
            unit,
            mode,
            datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        ),
    )

    conn.commit()
    conn.close()


def get_history():

    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row

    cursor = conn.cursor()

    cursor.execute("""
        SELECT *
        FROM history
        ORDER BY created_at DESC
    """)

    rows = [dict(row) for row in cursor.fetchall()]

    conn.close()

    return rows