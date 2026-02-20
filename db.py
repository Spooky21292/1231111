import sqlite3
from datetime import datetime, timezone
from pathlib import Path

DB_PATH = Path("database.sqlite3")

CREATE_TABLE_SQL = """
CREATE TABLE IF NOT EXISTS settings (
    key_type TEXT NOT NULL CHECK (key_type IN ('chat', 'user')),
    key_id INTEGER NOT NULL,
    city TEXT NOT NULL,
    updated_at TEXT NOT NULL,
    PRIMARY KEY (key_type, key_id)
)
"""


def init_db() -> None:
    with sqlite3.connect(DB_PATH) as conn:
        conn.execute(CREATE_TABLE_SQL)
        conn.commit()


def save_city(key_type: str, key_id: int, city: str) -> None:
    updated_at = datetime.now(timezone.utc).isoformat()
    with sqlite3.connect(DB_PATH) as conn:
        conn.execute(
            """
            INSERT INTO settings (key_type, key_id, city, updated_at)
            VALUES (?, ?, ?, ?)
            ON CONFLICT(key_type, key_id)
            DO UPDATE SET city = excluded.city, updated_at = excluded.updated_at
            """,
            (key_type, key_id, city.strip(), updated_at),
        )
        conn.commit()


def get_city(key_type: str, key_id: int) -> str | None:
    with sqlite3.connect(DB_PATH) as conn:
        row = conn.execute(
            "SELECT city FROM settings WHERE key_type = ? AND key_id = ?",
            (key_type, key_id),
        ).fetchone()
    return row[0] if row else None
