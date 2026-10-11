export type Role = "guide" | "teacher" | "manager" | "author" | "lecturer";

export type ExperienceEntry = {
  year: number;
  season?: "лето" | "осень";
  role: Role;
  title: string;
  details?: string;
  /** code is ISO 3166-1 alpha-2, used for the flagcdn.com image. */
  place?: { code: string; country: string; city: string };
};

/**
 * How each role looks on the calendar. Colours are the theme tokens from
 * globals.css; `mark` is the same colour for thin strokes, where the pale
 * guide background would be lost.
 */
export const roles: Record<
  Role,
  { label: string; background: string; color: string; mark: string }
> = {
  guide: {
    label: "Экскурсовод",
    background: "var(--color-cream-deep)",
    color: "var(--color-ink)",
    mark: "var(--color-ink-soft)",
  },
  teacher: {
    label: "Педагог",
    background: "var(--color-accent)",
    color: "#fff",
    mark: "var(--color-accent)",
  },
  manager: {
    label: "Менеджер",
    background: "var(--color-coral)",
    color: "#fff",
    mark: "var(--color-coral)",
  },
  author: {
    label: "Автор курса",
    background: "var(--color-sunshine)",
    color: "var(--color-ink)",
    mark: "var(--color-sunshine)",
  },
  lecturer: {
    label: "Лектор",
    background: "var(--color-teal)",
    color: "var(--color-ink)",
    mark: "var(--color-teal)",
  },
};

/** What has been going on all along; pinned above the year-by-year rows. */
export const ongoing = { since: 2016, title: "Педагог, ментор, психолог" };

/**
 * One entry per year, newest first: the calendar counts back as the page
 * scrolls. The motion code relies on the years being consecutive.
 */
export const entries: ExperienceEntry[] = [
  {
    year: 2026,
    season: "лето",
    role: "teacher",
    title: "Педагог в Индонезии",
    place: { code: "id", country: "Индонезия", city: "остров Банка" },
  },
  {
    year: 2025,
    season: "осень",
    role: "lecturer",
    title: "Лектор в образовательном пространстве",
    details: "Направление: Business English",
  },
  {
    year: 2024,
    season: "лето",
    role: "teacher",
    title: "Педагог в Южной Корее",
    place: { code: "kr", country: "Южная Корея", city: "Сеул" },
  },
  {
    year: 2023,
    season: "лето",
    role: "teacher",
    title: "Педагог в Южной Корее",
    place: { code: "kr", country: "Южная Корея", city: "Чёнджу" },
  },
  {
    year: 2022,
    season: "осень",
    role: "lecturer",
    title: "Лектор в онлайн-университете",
    details: "Дисциплины: «Общая психология», «Возрастная психология»",
  },
  {
    year: 2021,
    season: "лето",
    role: "author",
    title: "Создание авторского курса по шведскому языку",
  },
  {
    year: 2020,
    season: "лето",
    role: "author",
    title: "Создание авторского курса по английскому языку",
  },
  {
    year: 2019,
    season: "лето",
    role: "teacher",
    title: "Педагог в детском лагере в Италии",
    place: { code: "it", country: "Италия", city: "Милан" },
  },
  {
    year: 2018,
    season: "лето",
    role: "manager",
    title: "Менеджер World Cup FIFA",
    place: { code: "ru", country: "Россия", city: "Москва" },
  },
  {
    year: 2017,
    season: "лето",
    role: "manager",
    title: "Менеджер в детском языковом лагере",
    place: { code: "ru", country: "Россия", city: "Москва" },
  },
  {
    year: 2016,
    role: "teacher",
    title: "Педагог в школе в Италии",
    place: { code: "it", country: "Италия", city: "Кьяри" },
  },
  {
    year: 2015,
    season: "лето",
    role: "guide",
    title: "Экскурсовод в деревне викингов в Швеции",
    place: { code: "se", country: "Швеция", city: "Стурхольмен" },
  },
];
