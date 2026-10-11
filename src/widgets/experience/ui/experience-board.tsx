"use client";

import { useEffect, useRef } from "react";
import { entries, roles } from "../model/entries";
import { SplitFlap } from "./split-flap";

function Flag({ code }: { code: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://flagcdn.com/24x18/${code}.png`}
      srcSet={`https://flagcdn.com/48x36/${code}.png 2x`}
      width={24}
      height={18}
      alt=""
      loading="lazy"
      className="rounded-sm shadow-sm"
    />
  );
}

const first = entries[0];
const firstRole = roles[first.role];
/** Marks the entry the page is rendered with; the motion code moves it on. */
const active = (index: number) => (index === 0 ? "" : undefined);

/**
 * The experience table with a flip calendar next to it. Everything is rendered
 * and readable as it is; lib/board-motion.ts then makes the calendar follow
 * the row the visitor has scrolled to.
 */
export function ExperienceBoard() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = root.current;
    if (!element) return;

    let unmount: (() => void) | undefined;
    let cancelled = false;

    // GSAP is only needed once the visitor gets near this block, so it is
    // fetched then and stays out of the first load.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        import("../lib/board-motion").then(({ mountBoardMotion }) => {
          if (!cancelled) unmount = mountBoardMotion(element);
        });
      },
      { rootMargin: "100% 0px" },
    );
    observer.observe(element);

    return () => {
      cancelled = true;
      observer.disconnect();
      unmount?.();
    };
  }, []);

  return (
    <div
      ref={root}
      className="grid gap-4 lg:grid-cols-[21rem_minmax(0,1fr)] lg:gap-12"
    >
      {/* Calendar: a slim bar under the header on mobile, a card that stays
          level with the current row on desktop. */}
      <div
        data-calendar
        className="sticky top-[4.5rem] z-30 self-start lg:top-[max(5.5rem,calc(50vh-10.5rem))]"
      >
        <div className="relative rounded-2xl border border-ink/10 bg-white p-3 pb-1.5 shadow-lg shadow-ink/5 lg:rounded-[2rem] lg:p-6 lg:pt-9 lg:shadow-xl lg:shadow-ink/10">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-3 hidden justify-center gap-24 lg:flex"
          >
            <span className="h-7 w-2.5 rounded-full bg-ink" />
            <span className="h-7 w-2.5 rounded-full bg-ink" />
          </div>

          <div
            aria-hidden="true"
            className="flex gap-3 font-extrabold lg:flex-col-reverse"
          >
            <div className="flex gap-1 lg:gap-2">
              {String(first.year)
                .split("")
                .map((digit, place) => (
                  <SplitFlap
                    key={place}
                    kind="digit"
                    text={digit}
                    className="h-11 w-8 text-2xl lg:h-28 lg:w-auto lg:flex-1 lg:text-7xl"
                  />
                ))}
            </div>
            <SplitFlap
              kind="band"
              text={firstRole.label}
              style={{
                backgroundColor: firstRole.background,
                color: firstRole.color,
              }}
              className="h-11 flex-1 text-xs tracking-[0.14em] uppercase lg:h-12 lg:flex-none lg:text-base lg:tracking-[0.2em]"
            />
          </div>

          <div
            aria-hidden="true"
            className="mt-4 hidden min-h-6 text-sm font-semibold text-ink-soft lg:grid"
          >
            {entries.map((entry, index) => (
              <p
                key={entry.year}
                data-note
                data-active={active(index)}
                className="col-start-1 row-start-1 flex items-center gap-2 opacity-0 transition-opacity duration-200 data-active:opacity-100"
              >
                {entry.place && <Flag code={entry.place.code} />}
                {[
                  entry.place && `${entry.place.country}, ${entry.place.city}`,
                  entry.season,
                ]
                  .filter(Boolean)
                  .join(" · ")}
              </p>
            ))}
          </div>

          <nav aria-label="Годы" className="mt-1 flex gap-1 lg:mt-3">
            {entries.map((entry, index) => (
              <a
                key={entry.year}
                data-mark
                data-active={active(index)}
                href={`#experience-${entry.year}`}
                aria-label={`${entry.year}: ${entry.title}`}
                className="group flex-1 rounded py-1.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent lg:py-2"
              >
                <span
                  className="block h-1 rounded-full opacity-30 transition-all duration-300 group-hover:opacity-70 group-data-active:scale-y-200 group-data-active:opacity-100 lg:h-1.5"
                  style={{ backgroundColor: roles[entry.role].mark }}
                />
              </a>
            ))}
          </nav>
          <div
            aria-hidden="true"
            className="hidden justify-between text-xs font-bold text-ink-soft lg:flex"
          >
            <span>{first.year}</span>
            <span>{entries[entries.length - 1].year}</span>
          </div>
        </div>
      </div>

      <div className="relative">
        <div
          data-highlight
          aria-hidden="true"
          className="invisible absolute inset-x-0 top-0 rounded-3xl bg-white shadow-sm ring-1 ring-ink/5"
        />
        <ol data-list>
          {entries.map((entry, index) => (
            <li
              key={entry.year}
              id={`experience-${entry.year}`}
              data-row
              data-active={active(index)}
              className="group relative grid scroll-mt-[40vh] grid-cols-[3.75rem_minmax(0,1fr)] gap-x-4 px-5 py-4 sm:grid-cols-[5rem_minmax(0,1fr)] sm:px-7 sm:py-5 lg:scroll-mt-[46vh] lg:grid-cols-[5rem_minmax(0,1fr)_auto] lg:items-center"
            >
              <span
                aria-hidden="true"
                className="absolute top-5 bottom-5 left-2 w-1 rounded-full sm:left-3"
                style={{ backgroundColor: roles[entry.role].mark }}
              />
              {/* Spans both rows on mobile, so the place sits right under the title. */}
              <div className="row-span-2 lg:row-span-1">
                <p className="text-2xl leading-tight font-extrabold tabular-nums transition-colors duration-300 group-data-active:text-accent">
                  {entry.year}
                </p>
                {entry.season && (
                  <p className="text-xs font-semibold text-ink-soft">
                    {entry.season}
                  </p>
                )}
              </div>
              <div>
                <h3 className="leading-snug font-bold sm:text-lg">
                  {entry.title}
                </h3>
                {entry.details && (
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                    {entry.details}
                  </p>
                )}
              </div>
              {entry.place && (
                <p className="col-start-2 row-start-2 mt-2 inline-flex items-center gap-2 justify-self-start rounded-full border border-ink/10 bg-white/70 px-3 py-1 text-sm font-semibold lg:col-start-3 lg:row-start-1 lg:mt-0">
                  <Flag code={entry.place.code} />
                  {entry.place.city}
                </p>
              )}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
