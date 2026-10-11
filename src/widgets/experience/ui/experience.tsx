import { Reveal, Section, SectionHeading } from "@/shared/ui";
import { ExperienceBoard } from "./experience-board";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        eyebrow="Опыт по годам"
        // Non-breaking spaces keep the island's name from wrapping on its own.
        title={"От деревни викингов до острова Банка"}
        subtitle="Где и кем я работал с 2015 года: каждый год новое место, роль или проект."
      />
      <Reveal className="mx-auto mb-10 flex max-w-3xl flex-col items-center gap-x-4 gap-y-2 rounded-3xl bg-ink px-6 py-5 text-center text-cream sm:flex-row sm:justify-center sm:rounded-full sm:py-4 lg:mb-14">
        <span className="inline-flex items-center gap-2.5 text-xs font-extrabold tracking-[0.2em] text-sunshine uppercase">
          <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sunshine opacity-60 motion-reduce:animate-none" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-sunshine" />
          </span>
          С 2016 года по настоящее время
        </span>
        <span className="font-bold">педагог, ментор, психолог</span>
      </Reveal>
      <ExperienceBoard />
    </Section>
  );
}
