import sqlite3
from datetime import datetime

DB_PATH = "backend/data/history.db"


def init_db():

    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()

    cursor.execute("DROP TABLE IF EXISTS history")

    cursor.execute("""
        CREATE TABLE history (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            question TEXT NOT NULL,
            answer TEXT NOT NULL,
            subject TEXT,
            unit TEXT,
            mode TEXT,
            created_at TEXT
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