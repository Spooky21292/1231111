from dataclasses import dataclass
from datetime import datetime, timezone

import aiohttp


class WeatherError(Exception):
    """Базовая ошибка погоды."""


class CityNotFoundError(WeatherError):
    """Город не найден в OpenWeatherMap."""


class WeatherServiceUnavailableError(WeatherError):
    """Сервис погоды временно недоступен."""


@dataclass
class WeatherData:
    city: str
    temperature: float
    feels_like: float
    description: str
    wind_speed: float
    humidity: int
    updated_at: datetime


async def fetch_weather(city: str, api_key: str) -> WeatherData:
    url = "https://api.openweathermap.org/data/2.5/weather"
    params = {
        "q": city,
        "appid": api_key,
        "units": "metric",
        "lang": "ru",
    }

    timeout = aiohttp.ClientTimeout(total=10)

    try:
        async with aiohttp.ClientSession(timeout=timeout) as session:
            async with session.get(url, params=params) as response:
                if response.status == 404:
                    raise CityNotFoundError
                if response.status >= 500:
                    raise WeatherServiceUnavailableError
                if response.status != 200:
                    raise WeatherError(f"Неожиданный статус OpenWeather: {response.status}")

                payload = await response.json()
    except aiohttp.ClientError as exc:
        raise WeatherServiceUnavailableError from exc

    weather_items = payload.get("weather") or [{}]
    weather_description = weather_items[0].get("description", "без описания")

    dt_unix = payload.get("dt")
    updated_at = (
        datetime.fromtimestamp(dt_unix, tz=timezone.utc)
        if isinstance(dt_unix, int)
        else datetime.now(timezone.utc)
    )

    return WeatherData(
        city=payload.get("name", city),
        temperature=float(payload["main"]["temp"]),
        feels_like=float(payload["main"]["feels_like"]),
        description=weather_description,
        wind_speed=float(payload["wind"]["speed"]),
        humidity=int(payload["main"]["humidity"]),
        updated_at=updated_at,
    )
