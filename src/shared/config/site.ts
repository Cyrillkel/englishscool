/**
 * Single source of truth for the site: name, contacts, navigation.
 * Change the data here and the whole site follows.
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
    { label: "Опыт", href: "/#experience" },
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
 * Countries where Alex lived, worked and taught, for the "География" section.
 * code is ISO 3166-1 alpha-2 for the flag image (flagcdn.com): emoji flags are
 * not drawn in some browsers on Windows (they fall back to the bare letter
 * code), an image looks the same everywhere.
 */
export const countries = [
  { name: "Россия", code: "ru" },
  { name: "Германия", code: "de" },
  { name: "Швеция", code: "se" },
  { name: "Италия", code: "it" },
  { name: "Южная Корея", code: "kr" },
  { name: "Индонезия", code: "id" },
] as const;
