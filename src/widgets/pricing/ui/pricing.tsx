import { Button, Reveal, Section, SectionHeading } from "@/shared/ui";

/** price is in rubles, null means free. The featured plan gets the dark card. */
const plans = [
  {
    emoji: "👋",
    title: "Пробное занятие / консультация",
    price: null,
    unit: null,
    description: "Познакомимся, разберём ваш запрос и решим, с чего начать.",
    cta: "Записаться бесплатно",
    accent: "bg-sunshine/20",
    featured: false,
  },
  {
    emoji: "🗣️",
    title: "Английский / шведский",
    price: 2500,
    unit: "за занятие",
    description:
      "Индивидуальные онлайн-занятия под вашу цель: переезд, карьера, свободное общение.",
    cta: "Записаться",
    accent: "bg-ink text-cream shadow-xl",
    featured: true,
  },
  {
    emoji: "🧭",
    title: "Психологическое консультирование",
    price: 3000,
    unit: "за сессию",
    description: "Помогу разобраться в себе и понять, куда двигаться дальше.",
    cta: "Записаться",
    accent: "bg-coral/10",
    featured: false,
  },
];

function formatPrice(price: number | null) {
  return price === null ? "Бесплатно" : `${price.toLocaleString("ru-RU")} ₽`;
}

export function Pricing() {
  return (
    <Section id="prices">
      <SectionHeading
        eyebrow={{ word: "prices", sound: "ˈpraɪsɪz", meaning: "цены" }}
        title="Стоимость занятий"
        subtitle="Первая встреча бесплатная: познакомимся, разберём вашу цель и решим, с чего начать."
      />
      <div className="mx-auto grid max-w-md gap-6 lg:max-w-none lg:grid-cols-3">
        {plans.map((plan, index) => (
          <Reveal
            key={plan.title}
            as="article"
            delay={index * 70}
            className={`flex flex-col rounded-3xl p-8 hover:-translate-y-1 ${plan.accent}`}
          >
            <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-3xl shadow-sm">
              {plan.emoji}
            </div>
            {/* Two lines tall on desktop so the prices line up across cards. */}
            <h3 className="text-xl font-bold lg:min-h-14">{plan.title}</h3>
            <p className="mt-6 flex flex-wrap items-baseline gap-x-2">
              <span className="text-4xl font-extrabold tracking-tight">
                {formatPrice(plan.price)}
              </span>
              {plan.unit && (
                <span
                  className={plan.featured ? "text-cream/70" : "text-ink-soft"}
                >
                  {plan.unit}
                </span>
              )}
            </p>
            <p
              className={`mt-4 mb-8 leading-relaxed ${plan.featured ? "text-cream/70" : "text-ink-soft"}`}
            >
              {plan.description}
            </p>
            <div className="mt-auto">
              <Button
                href="#contact"
                variant={plan.featured ? "light" : "primary"}
              >
                {plan.cta}
              </Button>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
