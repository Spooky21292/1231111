import os
from dataclasses import dataclass
from pathlib import Path

from dotenv import load_dotenv


BASE_DIR = Path(__file__).resolve().parent
ENV_PATH = BASE_DIR / ".env"

# Загружаем .env именно из директории проекта, чтобы запуск из IDE/другого CWD
# работал предсказуемо на Windows/macOS/Linux.
load_dotenv(dotenv_path=ENV_PATH)


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
        raise ValueError(
            "TELEGRAM_BOT_TOKEN не задан. Скопируй .env.example в .env и укажи токен бота."
        )
    if not weather_key:
        raise ValueError(
            "OPENWEATHER_API_KEY не задан. Скопируй .env.example в .env и укажи API-ключ OpenWeather."
        )

    return Config(
        telegram_bot_token=token,
        openweather_api_key=weather_key,
        default_city=default_city,
    )
