import { Highlight } from "./highlight";

export type TermProps = {
  /** English word the section is named after. */
  word: string;
  /** Its transcription in IPA, without the brackets. */
  sound: string;
  /** Russian translation. */
  meaning: string;
};

/**
 * Section label set like a dictionary entry: the word, how it sounds, what it
 * means. Takes the place of the usual small uppercase line above a heading.
 */
export function Term({
  word,
  sound,
  meaning,
  className = "",
}: TermProps & { className?: string }) {
  return (
    <p
      className={`flex flex-wrap items-baseline gap-x-2.5 gap-y-1 ${className}`}
    >
      <span lang="en" className="text-lg font-extrabold">
        <Highlight>{word}</Highlight>
      </span>
      {/* Read out, a transcription is noise: the word next to it says the same. */}
      <span aria-hidden="true" className="font-ipa text-lg text-ink-soft">
        [{sound}]
      </span>
      <span className="font-semibold text-accent">{meaning}</span>
    </p>
  );
}
