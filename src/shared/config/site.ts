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
    { label: "Услуги", href: "#services" },
    { label: "Обо мне", href: "#about" },
    { label: "Отзывы", href: "#reviews" },
    { label: "Контакты", href: "#contact" },
  ],
  contacts: {
    telegram: "https://t.me/username",
    whatsapp: "https://wa.me/79000000000",
    email: "hello@example.com",
    instagram: "https://instagram.com/username",
    youtube: "https://youtube.com/@username",
  },
} as const;

/** Страны, где Alex жил, работал и преподавал — для плашки в разделе «Обо мне». */
export const countries = [
  { name: "Россия", flag: "🇷🇺" },
  { name: "Германия", flag: "🇩🇪" },
  { name: "Швеция", flag: "🇸🇪" },
  { name: "Италия", flag: "🇮🇹" },
  { name: "Южная Корея", flag: "🇰🇷" },
  { name: "Индонезия", flag: "🇮🇩" },
] as const;
