import type { ReactNode } from "react";

/** Слово с «маркерным» подчёркиванием, как на aliabdaal.com */
export function Highlight({
  children,
  color = "text-sunshine",
}: {
  children: ReactNode;
  color?: string;
}) {
  return (
    <span className="relative inline-block whitespace-nowrap">
      <span className="relative z-10">{children}</span>
      <svg
        className={`absolute -bottom-1 left-0 h-3 w-full ${color}`}
        viewBox="0 0 120 12"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M3 9C30 3 62 3 117 7"
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}
