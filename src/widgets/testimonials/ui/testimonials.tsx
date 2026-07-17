import { Section, SectionHeading } from "@/shared/ui";

const testimonials = [
  {
    name: "Мария",
    result: "сдала IELTS на 7.5",
    quote:
      "За полгода подготовилась с нуля к IELTS. Alex разложил формат экзамена по полочкам — на самом экзамене не было ни одного сюрприза.",
  },
  {
    name: "Дмитрий",
    result: "прошёл собеседование в IT-компанию",
    quote:
      "Готовились к техническим интервью на английском. Через два месяца спокойно прошёл все этапы и получил оффер в международную команду.",
  },
  {
    name: "Ольга",
    result: "заговорила после 10 лет перерыва",
    quote:
      "Думала, что мой английский умер после университета. Оказалось — нет: уже через месяц занятий я снова начала говорить, и без страха.",
  },
];

export function Testimonials() {
  return (
    <Section id="reviews">
      <SectionHeading
        eyebrow="Отзывы"
        title="Что говорят ученики"
        subtitle="Результаты, которыми я горжусь больше любых сертификатов."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <figure
            key={testimonial.name}
            className="flex flex-col rounded-3xl bg-white p-8 shadow-sm"
          >
            <div className="text-sunshine" aria-hidden="true">
              ★★★★★
            </div>
            <blockquote className="mt-4 grow leading-relaxed text-ink-soft">
              «{testimonial.quote}»
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <span
                className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 font-bold text-accent"
                aria-hidden="true"
              >
                {testimonial.name[0]}
              </span>
              <span>
                <span className="block font-bold">{testimonial.name}</span>
                <span className="block text-sm text-ink-soft">
                  {testimonial.result}
                </span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
