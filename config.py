import os
from dataclasses import dataclass

from dotenv import load_dotenv


load_dotenv()


@dataclass(frozen=True)
class Config:
    telegram_bot_token: str
    openweather_api_key: str
    default_city: str | None = None


def load_config() -> Config:
    token = os.getenv("TELEGRAM_BOT_TOKEN", "").strip()
    weather_key = os.getenv("OPENWEATHER_API_KEY", "").strip()
    default_city = os.getenv("DEFAULT_CITY", "").strip() or None

    if not token:
        raise ValueError("TELEGRAM_BOT_TOKEN не задан в .env")
    if not weather_key:
        raise ValueError("OPENWEATHER_API_KEY не задан в .env")

    return Config(
        telegram_bot_token=token,
        openweather_api_key=weather_key,
        default_city=default_city,
    )
