import { HomePageData } from "@/types/home";

export const homeData: HomePageData = {
  nav: [
    { label: "Услуги", href: "#services" },
    { label: "Результаты", href: "#portfolio" },
    { label: "Мастера", href: "#masters" },
    { label: "Цены", href: "#pricing" },
    { label: "Отзывы", href: "#reviews" },
    { label: "Контакты", href: "#contacts" }
  ],
  hero: {
    eyebrow: "Премиальная студия красоты",
    headline: "Цвет и форма, которые выглядят дорого и через 4 недели",
    subheadline:
      "Работаем точно по задаче: прозрачная стоимость, аккуратный сервис, результат без компромиссов.",
    primaryCta: { label: "Записаться", href: "#final-cta" },
    secondaryActions: [
      { label: "Позвонить", href: "tel:+74951234567" },
      { label: "Маршрут", href: "#contacts" }
    ],
    microTrust: { rating: "4.9", reviews: "312 отзывов", years: "7 лет" },
    image: {
      src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80",
      alt: "Мастер работает над укладкой в студии"
    }
  },
  trustMetrics: [
    { label: "Рейтинг", value: "4.9 / 5", note: "на картах" },
    { label: "Повторные клиенты", value: "68%", note: "за последние 12 месяцев" },
    { label: "Среднее время записи", value: "2 мин", note: "через мессенджер" },
    { label: "Опыт команды", value: "7+ лет", note: "колористика и уход" }
  ],
  resultRibbon: {
    proof: "4.9 • 312 реальных отзывов",
    quote:
      "Сделали сложный оттенок без потери качества волос, и цена совпала с тем, что озвучили в начале.",
    author: "Анна, сложное окрашивание",
    action: { label: "Выбрать услугу", href: "#services" }
  },
  serviceLens: [
    {
      id: "color",
      serviceName: "Сложное окрашивание",
      bestFor: "Глубокий, дорогой оттенок без резкой границы при отрастании",
      typicalTime: "3–4 часа",
      fromPrice: "от 9 500 ₽",
      masterType: "Топ-колорист",
      cta: { label: "Записаться на окрашивание", href: "#final-cta" }
    },
    {
      id: "cut",
      serviceName: "Стрижка и форма",
      bestFor: "Форма, которая держится в повседневной укладке",
      typicalTime: "60–90 мин",
      fromPrice: "от 3 200 ₽",
      masterType: "Стилист",
      cta: { label: "Записаться на стрижку", href: "#final-cta" }
    },
    {
      id: "brows",
      serviceName: "Брови",
      bestFor: "Чистая архитектура лица без перегруженного эффекта",
      typicalTime: "40–60 мин",
      fromPrice: "от 1 800 ₽",
      masterType: "Brow-мастер",
      cta: { label: "Записаться на брови", href: "#final-cta" }
    }
  ],
  portfolio: [
    {
      id: "p1",
      category: "Окрашивание",
      resultNote: "Холодный беж без желтизны",
      image: {
        src: "https://images.unsplash.com/photo-1560869713-da86a9ec94a2?auto=format&fit=crop&w=900&q=80",
        alt: "Результат окрашивания в холодном бежевом тоне"
      }
    },
    {
      id: "p2",
      category: "Стрижка",
      resultNote: "Текстурный боб с легкой укладкой",
      image: {
        src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=80",
        alt: "Клиент с новой стрижкой"
      }
    },
    {
      id: "p3",
      category: "Брови",
      resultNote: "Мягкая архитектура и натуральный тон",
      image: {
        src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
        alt: "Аккуратно оформленные брови"
      }
    }
  ],
  masters: [
    {
      id: "m1",
      name: "Мария К.",
      specialty: "Топ-колорист",
      experience: "9 лет",
      focus: ["сложный блонд", "коррекция цвета"],
      image: {
        src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=700&q=80",
        alt: "Портрет мастера Марии"
      },
      cta: { label: "К Марии", href: "#final-cta" }
    },
    {
      id: "m2",
      name: "Екатерина В.",
      specialty: "Стилист",
      experience: "7 лет",
      focus: ["форма под тип лица", "быстрая укладка"],
      image: {
        src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=700&q=80",
        alt: "Портрет мастера Екатерины"
      },
      cta: { label: "К Екатерине", href: "#final-cta" }
    }
  ],
  pricing: [
    { service: "Сложное окрашивание", fromPrice: "от 9 500 ₽", duration: "3–4 ч" },
    { service: "Стрижка + уход", fromPrice: "от 4 200 ₽", duration: "90 мин" },
    { service: "Архитектура бровей", fromPrice: "от 1 800 ₽", duration: "45 мин" }
  ],
  reviews: [
    {
      id: "r1",
      theme: "качество",
      author: "Наталья",
      text: "Очень точное попадание в оттенок, и волосы остались живыми. Без навязывания лишних процедур.",
      serviceType: "Окрашивание"
    },
    {
      id: "r2",
      theme: "сервис",
      author: "Ирина",
      text: "Приняли вовремя, подробно объяснили этапы. Атмосфера спокойная, видно высокий стандарт.",
      serviceType: "Стрижка"
    },
    {
      id: "r3",
      theme: "прозрачная цена",
      author: "София",
      text: "Стоимость озвучили заранее и не меняли. Результат даже лучше, чем ожидала.",
      serviceType: "Брови"
    }
  ],
  contacts: {
    phone: "+7 (495) 123-45-67",
    address: "Москва, ул. Петровка, 18",
    landmark: "5 минут от м. Театральная",
    mapHref: "https://yandex.ru/maps",
    hours: [
      { day: "Пн–Пт", hours: "09:00–21:00" },
      { day: "Сб", hours: "10:00–20:00" },
      { day: "Вс", hours: "10:00–18:00" }
    ],
    channels: [
      { label: "Позвонить", href: "tel:+74951234567" },
      { label: "Telegram", href: "#" },
      { label: "WhatsApp", href: "#" }
    ]
  },
  finalCta: {
    headline: "Подберем услугу и мастера под ваш запрос за 2 минуты",
    bullets: [
      "Фиксируем диапазон стоимости до записи",
      "Помогаем выбрать слот без ожидания",
      "Подтверждаем детали в одном сообщении"
    ],
    primary: { label: "Записаться сейчас", href: "#" },
    secondary: [
      { label: "Позвонить", href: "tel:+74951234567" },
      { label: "Написать", href: "#" }
    ]
  }
};
