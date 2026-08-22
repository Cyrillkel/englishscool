import { countries } from "@/shared/config/site";
import { Reveal, Section, SectionHeading } from "@/shared/ui";

const accents = [
  "bg-accent/10",
  "bg-sunshine/20",
  "bg-teal/10",
  "bg-coral/10",
  "bg-accent/15",
  "bg-sunshine/15",
];

export function Countries() {
  return (
    <Section id="countries">
      <SectionHeading
        eyebrow="География"
        title="Где я жил, работал и преподавал"
        subtitle="Международный опыт помогает понимать людей с разным культурным контекстом и адаптировать обучение под каждого."
      />
      <ul className="mx-auto flex max-w-3xl flex-wrap justify-center gap-4">
        {countries.map((country, index) => (
          <Reveal
            key={country.name}
            as="li"
            delay={index * 70}
            className={`flex items-center gap-3 rounded-2xl px-6 py-4 text-lg font-bold ${accents[index % accents.length]}`}
          >
            <span className="text-2xl" aria-hidden="true">
              {country.flag}
            </span>
            {country.name}
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
