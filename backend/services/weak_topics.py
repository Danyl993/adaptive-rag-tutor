import sqlite3

DB_PATH = "backend/data/history.db"

def init_weak_topics():

    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()

    cursor.execute("""
        CREATE TABLE IF NOT EXISTS weak_topics (
            topic TEXT PRIMARY KEY,
            count INTEGER DEFAULT 0
        )
    """)

    conn.commit()
    conn.close()

def record_topic(topic):

    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()

    cursor.execute("""
        CREATE TABLE IF NOT EXISTS weak_topics (
            topic TEXT PRIMARY KEY,
            count INTEGER
        )
    """)


    conn.commit()
    conn.close()


def get_weak_topics():

    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()

    cursor.execute("""
        SELECT topic, count
        FROM weak_topics
        ORDER BY count DESC
    """)

    rows = cursor.fetchall()

    conn.close()

    return rows