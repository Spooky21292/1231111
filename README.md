# Telegram Weather Bot (Python 3.11+)

Асинхронный Telegram-бот на `python-telegram-bot v20+`, который показывает текущую погоду через OpenWeatherMap.

## Возможности

- Работает в личных чатах и группах.
- Команда `/setcity <город>`:
  - в личке сохраняет город для пользователя;
  - в группе сохраняет город для чата.
- Команда `/weather` показывает:
  - город;
  - температуру;
  - "ощущается как";
  - описание;
  - ветер;
  - влажность;
  - время обновления.
- Если город не установлен, подсказывает как установить.

## Структура проекта

- `main.py` — запуск бота, обработчики команд.
- `weather.py` — запрос к OpenWeatherMap (aiohttp).
- `db.py` — SQLite-хранилище настроек.
- `config.py` — загрузка `.env`.
- `database.sqlite3` — создаётся автоматически при старте.

## Подготовка

1. Создайте бота у [@BotFather](https://t.me/BotFather) и получите `TELEGRAM_BOT_TOKEN`.
2. Получите API-ключ OpenWeatherMap: https://openweathermap.org/api
3. Скопируйте `.env.example` в `.env` и заполните значения:

```env
TELEGRAM_BOT_TOKEN=...
OPENWEATHER_API_KEY=...
DEFAULT_CITY=Moscow
```

`DEFAULT_CITY` — опционален.

## Запуск (Windows / macOS / Linux)

### 1) Создать и активировать виртуальное окружение

**Windows (PowerShell):**

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
```

**macOS/Linux:**

```bash
python3 -m venv .venv
source .venv/bin/activate
```

### 2) Установить зависимости

```bash
pip install -r requirements.txt
```

### 3) Запустить

```bash
python main.py
```

## Использование

1. Добавьте бота в группу (если нужно) и дайте право читать сообщения команд.
2. Установите город:

```text
/setcity Moscow
```

3. Запросите погоду:

```text
/weather
```

Бот также корректно обработает формат в группе:

```text
/weather@YourBotName
```

## Пример ответа `/weather`

```text
🌤 Погода в городе: Moscow
🌡 Температура: 17.3°C
🤗 Ощущается как: 16.8°C
📝 Описание: Облачно
💨 Ветер: 4.2 м/с
💧 Влажность: 61%
🕒 Время обновления: 2026-02-20 10:00 UTC
```

## Обработка ошибок

- Если OpenWeather временно недоступен — бот отправляет дружелюбное сообщение.
- Если город не найден — `Не нашёл такой город, попробуй иначе`.
- Логи пишутся в консоль.
