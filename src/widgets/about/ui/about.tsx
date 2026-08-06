import { countries } from "@/shared/config/site";
import { ImagePlaceholder, Section } from "@/shared/ui";

const bio = [
  "Я психолог, преподаватель языков и ментор. Уже более 10 лет я работаю с людьми, которым важно не просто получить новые знания, а найти им практическое применение в жизни: говорить на новом языке, уверенно чувствовать себя в другой стране и культуре, справляться со сложностями и достигать своих целей.",
  "В моей работе сочетаются психология, педагогика и международный опыт. Я участвовал более чем в десяти волонтёрских проектах в разных странах по программам Workaway, Workcamps, EVS и ESC. Жизнь и работа в международных командах научили меня понимать людей с разным опытом и культурным контекстом, выстраивать доверительные отношения и адаптировать обучение под каждого человека.",
  "Для меня важно, чтобы занятия были не только полезными, но и комфортными. Я стремлюсь создать пространство, где можно спокойно ошибаться, задавать вопросы, двигаться в своём темпе и видеть реальный прогресс.",
];

export function About() {
  return (
    <Section id="about" className="bg-white/50">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <ImagePlaceholder
          emoji="📚"
          label="Фото с урока — добавим позже"
          className="mx-auto aspect-4/5 w-full max-w-md rounded-[2.5rem]"
        />
        <div>
          <p className="mb-3 text-xs font-extrabold tracking-[0.2em] text-accent uppercase">
            Обо мне
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Помогаю учиться, понимать себя и двигаться вперёд
          </h2>
          <div className="mt-5 space-y-4">
            {bio.map((paragraph) => (
              <p key={paragraph} className="leading-relaxed text-ink-soft">
                {paragraph}
              </p>
            ))}
          </div>

          <p className="mt-7 mb-3 text-sm font-semibold text-ink-soft">
            Жил, работал и преподавал в разных странах:
          </p>
          <ul className="flex flex-wrap gap-2">
            {countries.map((country) => (
              <li
                key={country.name}
                className="inline-flex items-center gap-1.5 rounded-full bg-cream-deep px-3.5 py-1.5 text-sm font-medium"
              >
                <span aria-hidden="true">{country.flag}</span>
                {country.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
