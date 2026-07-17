import { site } from "@/shared/config/site";
import { Button, Section } from "@/shared/ui";

export function ContactCta() {
  return (
    <Section id="contact">
      <div className="rounded-[2.5rem] bg-ink px-6 py-14 text-center text-cream sm:px-12 sm:py-20">
        <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
          Готовы заговорить по-английски?
        </h2>
        <p className="mx-auto mt-5 max-w-xl leading-relaxed text-cream/70">
          Запишитесь на бесплатный пробный урок: познакомимся, определим ваш
          уровень и составим план занятий под вашу цель.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Button href={site.contacts.telegram} variant="light" external>
            Написать в Telegram
          </Button>
          <Button href={site.contacts.whatsapp} variant="ghost-light" external>
            WhatsApp
          </Button>
        </div>
        <p className="mt-8 text-sm text-cream/60">
          Или по почте:{" "}
          <a
            href={`mailto:${site.contacts.email}`}
            className="font-semibold text-cream underline underline-offset-4 hover:text-sunshine"
          >
            {site.contacts.email}
          </a>
        </p>
      </div>
    </Section>
  );
}
