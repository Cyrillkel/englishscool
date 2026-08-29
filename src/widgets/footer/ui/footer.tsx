import Link from "next/link";
import { site } from "@/shared/config/site";

const socials = [
  { label: "Telegram", href: site.contacts.telegram },
  { label: "WhatsApp", href: site.contacts.whatsapp },
  { label: "Instagram", href: site.contacts.instagram },
  { label: "YouTube", href: site.contacts.youtube },
];

export function Footer() {
  return (
    <footer className="border-t border-ink/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-10 text-sm text-ink-soft sm:flex-row sm:justify-between sm:px-6">
        <p>
          © {new Date().getFullYear()} {site.name} · {site.role}
        </p>
        <nav className="flex flex-wrap justify-center gap-6">
          <Link
            href="/blog"
            className="font-semibold transition-colors hover:text-ink"
          >
            Блог
          </Link>
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold transition-colors hover:text-ink"
            >
              {social.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
