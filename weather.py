from dataclasses import dataclass
from datetime import datetime, timezone

import aiohttp


class WeatherError(Exception):
    """Базовая ошибка погодного сервиса."""


class CityNotFoundError(WeatherError):
    """OpenWeather не нашёл указанный город."""


class WeatherServiceUnavailableError(WeatherError):
    """OpenWeather временно недоступен."""


@dataclass(slots=True)
class WeatherData:
    city: str
    temperature: float
    feels_like: float
    description: str
    wind_speed: float
    humidity: int
    updated_at: datetime


async def fetch_weather(city: str, api_key: str) -> WeatherData:
    endpoint = "https://api.openweathermap.org/data/2.5/weather"
    params = {
        "q": city,
        "appid": api_key,
        "units": "metric",
        "lang": "ru",
    }

    timeout = aiohttp.ClientTimeout(total=10)

    try:
        async with aiohttp.ClientSession(timeout=timeout) as session:
            async with session.get(endpoint, params=params) as response:
                if response.status == 404:
                    raise CityNotFoundError
                if response.status >= 500:
                    raise WeatherServiceUnavailableError
                if response.status != 200:
                    raise WeatherError(f"Неожиданный ответ OpenWeather: {response.status}")

                data = await response.json()
    except aiohttp.ClientError as exc:
        raise WeatherServiceUnavailableError from exc

    weather_list = data.get("weather") or [{}]
    description = weather_list[0].get("description", "без описания")

    dt_unix = data.get("dt")
    updated_at = (
        datetime.fromtimestamp(dt_unix, tz=timezone.utc)
        if isinstance(dt_unix, int)
        else datetime.now(tz=timezone.utc)
    )

    return WeatherData(
        city=data.get("name", city),
        temperature=float(data["main"]["temp"]),
        feels_like=float(data["main"]["feels_like"]),
        description=description,
        wind_speed=float(data["wind"]["speed"]),
        humidity=int(data["main"]["humidity"]),
        updated_at=updated_at,
    )
