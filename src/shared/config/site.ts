/**
 * Единая точка правды о сайте: имя, контакты, навигация.
 * Меняем данные здесь — обновляется весь сайт.
 */
export const site = {
  name: "Alex Barybin",
  logo: { first: "Alex", second: "Barybin" },
  role: "преподаватель английского языка",
  description:
    "Онлайн-уроки английского: разговорная практика, подготовка к экзаменам, английский для работы. Бесплатный пробный урок.",
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
