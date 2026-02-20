# Telegram Weather Bot (Python 3.11+)

Готовый асинхронный Telegram-бот на `python-telegram-bot v20+`.

## Что умеет

- Работает в личных чатах и группах.
- `/setcity <город>`:
  - в личке сохраняет город для пользователя (`user_id`),
  - в группе сохраняет город для чата (`chat_id`).
- `/weather` выводит:
  - Город
  - Температура (°C)
  - Ощущается как (°C)
  - Описание
  - Ветер (м/с)
  - Влажность (%)
  - Время обновления

Если город не установлен, бот пишет: `Сначала установи город: /setcity Moscow`.

## Файлы проекта

- `main.py` — точка входа и хендлеры команд
- `weather.py` — запрос к OpenWeatherMap (aiohttp)
- `db.py` — SQLite функции
- `config.py` — загрузка `.env`
- `requirements.txt`
- `.env.example`
- `.env`

SQLite файл `database.sqlite3` создаётся автоматически при запуске.

## Настройка

1. Создай бота через [@BotFather](https://t.me/BotFather) и получи токен.
2. Получи API-ключ OpenWeatherMap: https://openweathermap.org/api
3. Открой `.env` и заполни:

```env
TELEGRAM_BOT_TOKEN=...
OPENWEATHER_API_KEY=...
DEFAULT_CITY=Moscow
```

`DEFAULT_CITY` — необязательный.

## Запуск

### Windows (PowerShell)

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
python main.py
```

### macOS/Linux

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python main.py
```

## Использование

```text
/start
/setcity Moscow
/weather
```

В группе также работает формат:

```text
/weather@YourBotName
```

## Пример ответа /weather

```text
🌤 Город: Moscow
🌡 Температура: 17.3°C
🤗 Ощущается как: 16.8°C
📝 Описание: Облачно
💨 Ветер: 4.2 м/с
💧 Влажность: 61%
🕒 Время обновления: 2026-02-20 10:00 UTC
```

## Ошибки

- Если OpenWeather недоступен: `Сервис погоды временно недоступен, попробуй позже`
- Если город не найден: `Не нашёл такой город, попробуй иначе`


## Если бот не отвечает

- Убедись, что пишешь боту в личку или командой в группе (`/weather@ИмяБота`).
- Для группы проверь, что бот добавлен и не ограничен правами.
- После изменений команд перезапусти бота.
- Проверь, что в `.env` заполнены `TELEGRAM_BOT_TOKEN` и `OPENWEATHER_API_KEY`.
