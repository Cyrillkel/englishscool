import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  variant?: "primary" | "light" | "ghost" | "ghost-light";
  size?: "sm" | "md";
  external?: boolean;
  children: ReactNode;
};

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-ink text-cream hover:bg-ink/85",
  light: "bg-sunshine text-ink hover:bg-sunshine/85",
  ghost: "border-2 border-ink/15 text-ink hover:border-ink/40",
  "ghost-light": "border-2 border-cream/30 text-cream hover:border-cream/70",
};

const sizes: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "px-5 py-2 text-sm",
  md: "px-7 py-3.5 text-base",
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  external = false,
  children,
}: ButtonProps) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors ${variants[variant]} ${sizes[size]}`}
    >
      {children}
    </a>
  );
}
