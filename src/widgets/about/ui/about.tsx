import { ImagePlaceholder, Section } from "@/shared/ui";

const facts = [
  "8 лет преподаю английский взрослым и подросткам",
  "Сертификаты CELTA и TKT, регулярно учусь сам",
  "Жил и учился в Великобритании",
  "Уроки онлайн — из любой точки мира",
];

export function About() {
  return (
    <Section id="about" className="bg-white/50">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <ImagePlaceholder
          emoji="📚"
          label="Фото с урока — добавим позже"
          className="mx-auto aspect-[4/5] w-full max-w-md rounded-[2.5rem]"
        />
        <div>
          <p className="mb-3 text-xs font-extrabold tracking-[0.2em] text-accent uppercase">
            Обо мне
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Учу так, как хотел бы учиться сам
          </h2>
          <p className="mt-5 leading-relaxed text-ink-soft">
            Я верю, что язык — это не таблицы времён, а способ общаться,
            путешествовать и расти в карьере. Поэтому на моих уроках мы много
            говорим, разбираем реальные ситуации и учимся думать по-английски.
          </p>
          <ul className="mt-7 space-y-3">
            {facts.map((fact) => (
              <li key={fact} className="flex items-start gap-3">
                <span
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal/15 text-sm font-bold text-teal"
                  aria-hidden="true"
                >
                  ✓
                </span>
                <span className="leading-relaxed">{fact}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
