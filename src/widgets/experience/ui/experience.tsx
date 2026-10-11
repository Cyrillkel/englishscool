import { Section, SectionHeading } from "@/shared/ui";
import { ExperienceBoard } from "./experience-board";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        eyebrow={{
          word: "experience",
          sound: "ɪkˈspɪəriəns",
          meaning: "опыт",
        }}
        // Non-breaking spaces keep the island's name from wrapping on its own.
        title={"От деревни викингов до острова Банка"}
        subtitle="Где и кем я работал с 2015 года: каждый год новое место, роль или проект."
      />
      <ExperienceBoard />
    </Section>
  );
}
