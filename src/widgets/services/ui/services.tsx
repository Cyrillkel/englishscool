import { Section, SectionHeading } from "@/shared/ui";

const services = [
  {
    emoji: "💬",
    title: "Разговорный английский",
    description:
      "Снимаем языковой барьер и учимся говорить на живые темы. Много практики, минимум скучной теории.",
    accent: "bg-accent/10",
  },
  {
    emoji: "🎯",
    title: "Подготовка к экзаменам",
    description:
      "IELTS, TOEFL, ЕГЭ и ОГЭ. Разбираем формат, тренируем стратегии и доводим до нужного балла.",
    accent: "bg-sunshine/20",
  },
  {
    emoji: "💼",
    title: "Английский для работы",
    description:
      "Собеседования, переписка, звонки и презентации. Уверенный английский для карьерного роста.",
    accent: "bg-teal/10",
  },
];

export function Services() {
  return (
    <Section id="services">
      <SectionHeading
        eyebrow="Услуги"
        title="Чем я могу помочь"
        subtitle="Программа подбирается под вашу цель — от первого «hello» до свободной речи."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.title}
            className={`rounded-3xl p-8 transition-transform hover:-translate-y-1 ${service.accent}`}
          >
            <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-3xl shadow-sm">
              {service.emoji}
            </div>
            <h3 className="text-xl font-bold">{service.title}</h3>
            <p className="mt-3 leading-relaxed text-ink-soft">
              {service.description}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
