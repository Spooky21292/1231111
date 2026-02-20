import logging
from datetime import timezone

from telegram import BotCommand, Update
from telegram.ext import (
    Application,
    CommandHandler,
    ContextTypes,
)

from config import Config, load_config
from db import get_city, init_db, save_city
from weather import CityNotFoundError, WeatherServiceUnavailableError, fetch_weather


logging.basicConfig(
    format="%(asctime)s | %(levelname)s | %(name)s | %(message)s",
    level=logging.INFO,
)
logger = logging.getLogger(__name__)


async def set_bot_commands(application: Application) -> None:
    await application.bot.set_my_commands(
        commands=[
            BotCommand(command="weather", description="Показать текущую погоду"),
            BotCommand(command="setcity", description="Установить город: /setcity <город>"),
        ]
    )


def resolve_setting_scope(update: Update) -> tuple[str, int]:
    chat = update.effective_chat
    user = update.effective_user

    if chat is None:
        raise ValueError("Не удалось определить chat")

    if chat.type == "private":
        if user is None:
            raise ValueError("Не удалось определить user")
        return "user", user.id

    return "chat", chat.id


async def setcity_handler(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    if update.message is None:
        return

    city = " ".join(context.args).strip()
    if not city:
        await update.message.reply_text("Использование: /setcity <город>")
        return

    key_type, key_id = resolve_setting_scope(update)
    save_city(key_type=key_type, key_id=key_id, city=city)

    await update.message.reply_text(f"Город сохранён: {city}")


async def weather_handler(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    if update.message is None:
        return

    key_type, key_id = resolve_setting_scope(update)
    city = get_city(key_type=key_type, key_id=key_id) or context.bot_data.get("default_city")

    if not city:
        await update.message.reply_text("Сначала установи город: /setcity Moscow")
        return

    api_key: str = context.bot_data["openweather_api_key"]

    try:
        weather = await fetch_weather(city=city, api_key=api_key)
    except CityNotFoundError:
        await update.message.reply_text("Не нашёл такой город, попробуй иначе")
        return
    except WeatherServiceUnavailableError:
        await update.message.reply_text("Сервис погоды временно недоступен, попробуй позже")
        return
    except Exception:  # noqa: BLE001
        logger.exception("Ошибка при получении погоды")
        await update.message.reply_text("Произошла ошибка при получении погоды")
        return

    updated_local = weather.updated_at.astimezone(timezone.utc).strftime("%Y-%m-%d %H:%M UTC")
    message = (
        f"🌤 Погода в городе: {weather.city}\n"
        f"🌡 Температура: {weather.temperature:.1f}°C\n"
        f"🤗 Ощущается как: {weather.feels_like:.1f}°C\n"
        f"📝 Описание: {weather.description.capitalize()}\n"
        f"💨 Ветер: {weather.wind_speed:.1f} м/с\n"
        f"💧 Влажность: {weather.humidity}%\n"
        f"🕒 Время обновления: {updated_local}"
    )

    await update.message.reply_text(message)


async def post_init(application: Application) -> None:
    await set_bot_commands(application)


def create_application(config: Config) -> Application:
    init_db()

    application = Application.builder().token(config.telegram_bot_token).post_init(post_init).build()

    application.bot_data["openweather_api_key"] = config.openweather_api_key
    application.bot_data["default_city"] = config.default_city

    application.add_handler(CommandHandler("setcity", setcity_handler))
    application.add_handler(CommandHandler("weather", weather_handler))

    return application


def main() -> None:
    config = load_config()
    app = create_application(config)
    logger.info("Бот запущен")
    app.run_polling(allowed_updates=Update.ALL_TYPES)


if __name__ == "__main__":
    main()
