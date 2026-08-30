/**
 * Единая точка правды о сайте: имя, контакты, навигация.
 * Меняем данные здесь — обновляется весь сайт.
 */
export const site = {
  name: "Alex Barybin",
  logo: { first: "Alex", second: "Barybin" },
  role: "преподаватель языков, психолог, ментор",
  description:
    "Английский, шведский и РКИ онлайн: переезд за границу, карьера, свободное общение, психологическая поддержка и менторство. Бесплатный пробный урок.",
  nav: [
    { label: "Услуги", href: "/#services" },
    { label: "Обо мне", href: "/#about" },
    { label: "Отзывы", href: "/#reviews" },
    { label: "Блог", href: "/blog" },
    { label: "Контакты", href: "/#contact" },
  ],
  contacts: {
    telegram: "https://t.me/username",
    whatsapp: "https://wa.me/79164644505",
    email: "barybinaleks@gmail.com",
    instagram: "https://instagram.com/username",
    youtube: "https://youtube.com/@username",
  },
} as const;

/**
 * Страны, где Alex жил, работал и преподавал — для отдельного раздела
 * «География». code — ISO 3166-1 alpha-2 для картинки флага (flagcdn.com):
 * эмодзи-флаги не рисуются в некоторых браузерах на Windows (fallback —
 * голый буквенный код вместо иконки), картинка работает везде одинаково.
 */
export const countries = [
  { name: "Россия", code: "ru" },
  { name: "Германия", code: "de" },
  { name: "Швеция", code: "se" },
  { name: "Италия", code: "it" },
  { name: "Южная Корея", code: "kr" },
  { name: "Индонезия", code: "id" },
] as const;
