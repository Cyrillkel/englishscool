import Image from "next/image";
import { Button, Highlight, Reveal } from "@/shared/ui";

const highlights = [
  { icon: "🎯", value: "10+", label: "лет практики" },
  { icon: "🧑‍🎓", value: "324", label: "ученика" },
  { icon: "🗣️", value: "3", label: "языка: английский, шведский, РКИ" },
  { icon: "🌍", value: "30+", label: "стран, где живут ученики" },
  { icon: "🧠", value: "", label: "психология и менторство" },
];

export function Hero() {
  return (
    <section className="overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 pt-14 pb-16 sm:px-6 sm:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Текст */}
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/60 px-4 py-1.5 text-sm font-semibold text-ink-soft">
              🌍 Языки · психология · менторство
            </p>
            <h1 className="text-4xl leading-tight font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Привет, я Alex&nbsp;👋
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-ink-soft sm:text-2xl">
              Помогаю <Highlight>заговорить</Highlight> на новом языке,
              разобраться в себе и двигаться вперёд.
            </p>
            <p className="mt-4 max-w-xl leading-relaxed text-ink-soft">
              Индивидуальные занятия английским, шведским и РКИ для переезда,
              карьеры и уверенного общения, а ещё психологическая поддержка и
              менторство. Первый урок бесплатно.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="#contact">Записаться на пробный урок</Button>
              <Button href="#services" variant="ghost">
                Узнать больше ↓
              </Button>
            </div>
          </div>

          {/* Фото */}
          <div className="relative mx-auto w-full max-w-sm">
            <div
              className="absolute -top-6 -right-6 h-40 w-40 rounded-full bg-sunshine/50 blur-2xl"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-8 -left-8 h-44 w-44 rounded-full bg-accent/20 blur-2xl"
              aria-hidden="true"
            />
            <Image
              src="/photo_2023-09-09_02-35-11.jpg"
              alt="Alex Barybin"
              width={640}
              height={640}
              priority
              className="relative aspect-square w-full rounded-full object-cover shadow-xl"
            />
            <div className="absolute -right-2 top-8 rotate-3 rounded-2xl bg-white px-4 py-2 text-sm font-bold shadow-lg">
              🌍 30+ стран
            </div>
            <div className="absolute -left-4 bottom-10 -rotate-3 rounded-2xl bg-white px-4 py-2 text-sm font-bold shadow-lg">
              🧑‍🎓 324 ученика
            </div>
          </div>
        </div>

        {/* Цифры */}
        <ul className="mt-16 flex flex-wrap justify-center gap-4 border-t border-ink/10 pt-10">
          {highlights.map((item, index) => (
            <Reveal
              key={item.label}
              as="li"
              delay={index * 70}
              className="flex min-w-40 flex-1 flex-col items-center justify-center gap-1 rounded-2xl border border-ink/10 bg-white/70 px-5 py-4 text-center"
            >
              <span className="text-2xl" aria-hidden="true">
                {item.icon}
              </span>
              {item.value && (
                <span className="text-xl font-extrabold">{item.value}</span>
              )}
              <span className="text-xs leading-snug font-medium text-ink-soft">
                {item.label}
              </span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
