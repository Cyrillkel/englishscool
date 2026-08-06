import { Section, SectionHeading } from "@/shared/ui";

const services = [
  {
    emoji: "✈️",
    title: "Переезд за границу",
    description: "Язык и подготовка к новой жизни в другой стране.",
    accent: "bg-accent/10",
  },
  {
    emoji: "💼",
    title: "Карьера",
    description:
      "Подготовка к собеседованиям, бизнес-язык, развитие профессиональных навыков.",
    accent: "bg-sunshine/20",
  },
  {
    emoji: "💬",
    title: "Свободное общение",
    description:
      "Преодолеть языковой барьер и начать говорить на новом языке.",
    accent: "bg-teal/10",
  },
  {
    emoji: "🧭",
    title: "Психологическая поддержка",
    description: "Когда нужно разобраться в себе и понять, куда двигаться дальше.",
    accent: "bg-coral/10",
  },
  {
    emoji: "🧠",
    title: "Менторство",
    description:
      "Выстроим траектории и системы обучения, разберём мотивацию к учёбе.",
    accent: "bg-accent/15",
  },
  {
    emoji: "📚",
    title: "Общее развитие языка",
    description: "С уровня А1 до С1, в комфортном для вас темпе.",
    accent: "bg-sunshine/15",
  },
];

export function Services() {
  return (
    <Section id="services">
      <SectionHeading
        eyebrow="Направления работы"
        title="Выберите то, что сейчас важно именно вам"
        subtitle="Программа собирается под вашу ситуацию: от первого слова на новом языке до уверенной жизни в новой стране."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
