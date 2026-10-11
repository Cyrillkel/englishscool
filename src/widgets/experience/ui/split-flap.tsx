import type { CSSProperties } from "react";

const halves = {
  top: {
    face: "top-0 origin-bottom rounded-t-md lg:rounded-t-xl",
    glyph: "top-0",
  },
  bottom: {
    face: "bottom-0 origin-top rounded-b-md lg:rounded-b-xl",
    glyph: "bottom-0",
  },
};

function Face({
  name,
  half,
  leaf = false,
  text,
  style,
}: {
  name: string;
  half: keyof typeof halves;
  leaf?: boolean;
  text: string;
  style?: CSSProperties;
}) {
  return (
    <span
      data-face={name}
      style={style}
      className={`absolute inset-x-0 h-1/2 overflow-hidden bg-ink text-cream ${halves[half].face} ${
        leaf ? "invisible z-10 will-change-transform" : ""
      }`}
    >
      {/* Twice as tall as its half: both halves lay the text out the same
          way and each one shows its own part of it. */}
      <span
        data-glyph
        className={`absolute inset-x-0 flex h-[200%] items-center justify-center whitespace-nowrap ${halves[half].glyph}`}
      >
        {text}
      </span>
      {leaf && (
        <span data-shade className="absolute inset-0 bg-black opacity-0" />
      )}
    </span>
  );
}

/**
 * One split-flap tile: two fixed halves and two leaves that are only visible
 * mid-flip. It is server-rendered with its text in place and works as a plain
 * label; lib/split-flap.ts takes the faces over to animate them.
 */
export function SplitFlap({
  kind,
  text,
  className = "",
  style,
}: {
  kind: "digit" | "band";
  text: string;
  className?: string;
  /** Colours of the faces, when they differ from the default dark tile. */
  style?: CSSProperties;
}) {
  return (
    <span
      data-flap={kind}
      className={`relative block [perspective:30rem] ${className}`}
    >
      <Face name="top" half="top" text={text} style={style} />
      <Face name="bottom" half="bottom" text={text} style={style} />
      <Face name="top-leaf" half="top" leaf text={text} style={style} />
      <Face name="bottom-leaf" half="bottom" leaf text={text} style={style} />
      <span className="pointer-events-none absolute inset-x-0 top-1/2 z-20 h-px -translate-y-1/2 bg-black/25" />
    </span>
  );
}
