import sqlite3

DB_PATH = "backend/data/history.db"


def get_progress():

    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()

    cursor.execute("""
        SELECT subject,
               COUNT(*) as questions
        FROM history
        GROUP BY subject
    """)

    rows = cursor.fetchall()

    conn.close()

    return rows