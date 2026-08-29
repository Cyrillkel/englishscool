import Link from "next/link";
import { site } from "@/shared/config/site";
import { Button } from "@/shared/ui";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/5 bg-cream/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="text-lg font-extrabold tracking-tight">
          {site.logo.first}
          <span className="text-accent">.</span>
          {site.logo.second}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-ink-soft transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Button href="/#contact" size="sm">
          Пробный урок
        </Button>
      </div>
    </header>
  );
}
