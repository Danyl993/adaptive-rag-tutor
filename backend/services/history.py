import sqlite3


def init_db():

    conn = sqlite3.connect(
        "backend/data/history.db"
    )

    cursor = conn.cursor()

    cursor.execute("""
        CREATE TABLE IF NOT EXISTS history (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            question TEXT,
            answer TEXT
        )
    """)

    conn.commit()
    conn.close()