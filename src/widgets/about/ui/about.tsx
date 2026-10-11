import Image from "next/image";
import { Reveal, Section, Term } from "@/shared/ui";

const bio = [
  "Я психолог, преподаватель языков и ментор. Уже более 10 лет я работаю с людьми, которым важно не просто получить новые знания, а найти им практическое применение в жизни: говорить на новом языке, уверенно чувствовать себя в другой стране и культуре, справляться со сложностями и достигать своих целей.",
  "В моей работе сочетаются психология, педагогика и международный опыт. Я участвовал более чем в десяти волонтёрских проектах в разных странах по программам Workaway, Workcamps, EVS и ESC. Жизнь и работа в международных командах научили меня понимать людей с разным опытом и культурным контекстом, выстраивать доверительные отношения и адаптировать обучение под каждого человека.",
  "Для меня важно, чтобы занятия были не только полезными, но и комфортными. Я стремлюсь создать пространство, где можно спокойно ошибаться, задавать вопросы, двигаться в своём темпе и видеть реальный прогресс.",
];

export function About() {
  return (
    <Section id="about" className="bg-white/50">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <Image
            src="/photo_2026-08-22_17-57-36.jpg"
            alt="Alex на онлайн-уроке английского"
            width={960}
            height={1280}
            className="mx-auto aspect-4/5 w-full max-w-md rounded-[2.5rem] object-cover"
          />
        </Reveal>
        <Reveal delay={150}>
          <Term
            word="about me"
            sound="əˈbaʊt miː"
            meaning="обо мне"
            className="mb-4"
          />
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
        </Reveal>
      </div>
    </Section>
  );
}
