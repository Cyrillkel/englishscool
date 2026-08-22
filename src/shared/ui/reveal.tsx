"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type Tag = "div" | "li" | "article" | "figure";

/** Плавное появление блока при попадании в область просмотра. */
export function Reveal({
  as = "div",
  delay = 0,
  className = "",
  children,
}: {
  as?: Tag;
  delay?: number;
  className?: string;
  children: ReactNode;
}) {
  // Тег динамический (div/li/article/figure), поэтому TS не может вывести
  // точный тип ref из JSX.IntrinsicElements — приводим к общему ElementType.
  const Component = as as ElementType;
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Component
      ref={ref}
      style={visible && delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`transition-all duration-500 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`}
    >
      {children}
    </Component>
  );
}
