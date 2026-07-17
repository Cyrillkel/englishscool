import { Button, Highlight, ImagePlaceholder } from "@/shared/ui";

const stats = [
  { value: "8+", label: "лет преподавания" },
  { value: "200+", label: "учеников" },
  { value: "IELTS 8.5", label: "мой результат" },
  { value: "100%", label: "уроки онлайн" },
];

export function Hero() {
  return (
    <section className="overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 pt-14 pb-16 sm:px-6 sm:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Текст */}
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/60 px-4 py-1.5 text-sm font-semibold text-ink-soft">
              🇬🇧 Онлайн-уроки английского языка
            </p>
            <h1 className="text-4xl leading-tight font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Привет, я Alex&nbsp;👋
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-ink-soft sm:text-2xl">
              Помогаю <Highlight>заговорить</Highlight> на английском —
              свободно, уверенно и без зубрёжки.
            </p>
            <p className="mt-4 max-w-xl leading-relaxed text-ink-soft">
              Индивидуальные занятия для взрослых и подростков: разговорная
              практика, подготовка к экзаменам и английский для работы. Первый
              урок — бесплатно.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="#contact">Записаться на пробный урок</Button>
              <Button href="#services" variant="ghost">
                Узнать больше ↓
              </Button>
            </div>
          </div>

          {/* Фото */}
          <div className="relative mx-auto w-full max-w-sm">
            <div
              className="absolute -top-6 -right-6 h-40 w-40 rounded-full bg-sunshine/50 blur-2xl"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-8 -left-8 h-44 w-44 rounded-full bg-accent/20 blur-2xl"
              aria-hidden="true"
            />
            <ImagePlaceholder
              emoji="👩‍🏫"
              label="Фото Alex — добавим позже"
              className="relative aspect-square w-full rounded-full"
            />
            <div className="absolute -right-2 top-8 rotate-3 rounded-2xl bg-white px-4 py-2 text-sm font-bold shadow-lg">
              🎯 IELTS 8.5
            </div>
            <div className="absolute -left-4 bottom-10 -rotate-3 rounded-2xl bg-white px-4 py-2 text-sm font-bold shadow-lg">
              💬 200+ учеников
            </div>
          </div>
        </div>

        {/* Цифры */}
        <dl className="mt-16 grid grid-cols-2 gap-8 border-t border-ink/10 pt-10 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <dt className="order-2 mt-1 text-sm font-medium text-ink-soft">
                {stat.label}
              </dt>
              <dd className="text-2xl font-extrabold sm:text-3xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
