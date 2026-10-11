import { gsap, ScrollTrigger } from "@/shared/lib/gsap";
import { entries, roles } from "../model/entries";
import { createSplitFlap, type FlapFace } from "./split-flap";

/**
 * How far down the viewport the reading line sits. The row it crosses is the
 * current one: level with the calendar on desktop, just under it on mobile.
 */
const LINE = { desktop: 0.5, mobile: 0.42 };

const yearDigits = (index: number) => String(entries[index].year);

const bandFace = (index: number): FlapFace => {
  const role = roles[entries[index].role];
  return { text: role.label, background: role.background, color: role.color };
};

/**
 * Ties the calendar to the scroll. The row under the reading line becomes the
 * current one, a highlight glides over to it and the calendar flips to its
 * year, one year per flip, faster the further behind it is.
 * Returns a function that undoes all of it.
 */
export function mountBoardMotion(root: HTMLElement): () => void {
  const mm = gsap.matchMedia();

  mm.add(
    {
      // One of the first two always matches, so the set-up runs on any screen.
      desktop: "(min-width: 1024px)",
      mobile: "(max-width: 1023.98px)",
      reduced: "(prefers-reduced-motion: reduce)",
    },
    (context) => {
      const { desktop, reduced } = context.conditions as {
        desktop: boolean;
        reduced: boolean;
      };
      const line = desktop ? LINE.desktop : LINE.mobile;

      const rows = gsap.utils.toArray<HTMLElement>("[data-row]", root);
      const marks = gsap.utils.toArray<HTMLElement>("[data-mark]", root);
      const notes = gsap.utils.toArray<HTMLElement>("[data-note]", root);
      const list = root.querySelector<HTMLElement>("[data-list]")!;
      const calendar = root.querySelector<HTMLElement>("[data-calendar]")!;
      const highlight = root.querySelector<HTMLElement>("[data-highlight]")!;
      const digits = gsap.utils
        .toArray<HTMLElement>('[data-flap="digit"]', root)
        .map((tile, place) =>
          createSplitFlap(tile, { text: yearDigits(0)[place] }),
        );
      const band = createSplitFlap(
        root.querySelector<HTMLElement>('[data-flap="band"]')!,
        bandFace(0),
      );

      /** Row under the reading line. */
      let current = -1;
      /** Year on the calendar. Trails behind `current` while it flips. */
      let shown = 0;
      let flipping = false;
      /** Row positions: in the document, and inside the list for the highlight. */
      let tops: number[] = [];
      let boxes: { y: number; height: number }[] = [];

      const mark = (elements: HTMLElement[], index: number) =>
        elements.forEach((element, i) =>
          element.toggleAttribute("data-active", i === index),
        );

      /** Puts a year on the calendar without any motion. */
      const display = (index: number) => {
        digits.forEach((flap, place) =>
          flap.set({ text: yearDigits(index)[place] }),
        );
        band.set(bandFace(index));
        shown = index;
        mark(marks, index);
        mark(notes, index);
      };

      /** Flips every tile that differs between the shown year and the given one. */
      const turn = (
        index: number,
        duration: number,
        direction: 1 | -1,
        landing: boolean,
      ) => {
        const from = yearDigits(shown);
        const to = yearDigits(index);
        // The empty tween keeps onComplete firing even when no tile changes.
        const timeline = gsap.timeline().to({}, { duration });

        digits.forEach((flap, place) => {
          if (from[place] === to[place]) return;
          timeline.add(
            flap.flip({ text: to[place] }, duration, direction, landing),
            0,
          );
        });
        if (entries[shown].role !== entries[index].role) {
          timeline.add(
            band.flip(bandFace(index), duration, direction, landing),
            0,
          );
        }

        shown = index;
        mark(marks, index);
        mark(notes, index);
        return timeline;
      };

      /** Walks the calendar towards the current row, one year per flip. */
      const chase = () => {
        const distance = Math.abs(current - shown);
        flipping = distance > 0;
        if (!flipping) return;

        const direction = current > shown ? 1 : -1;
        // A long way is covered in quick flicks that slow down on arrival.
        const duration = gsap.utils.clamp(0.07, 0.42, 0.6 / distance);
        turn(shown + direction, duration, direction, distance === 1).eventCallback(
          "onComplete",
          chase,
        );
      };

      /** Greets the visitor: a few years flick by before the right one lands. */
      const shuffle = () => {
        if (flipping) return;
        flipping = true;
        const stops = [8, 3, 10];

        const next = () => {
          const stop = stops.shift();
          if (stop === shown) return next();
          if (stop !== undefined) {
            turn(stop, 0.11, 1, false).eventCallback("onComplete", next);
          } else if (shown !== current) {
            turn(current, 0.36, 1, true).eventCallback("onComplete", chase);
          } else {
            chase();
          }
        };
        next();
      };

      const follow = (index: number, instant: boolean) => {
        const still = instant || reduced;

        if (index !== current || instant) {
          current = index;
          mark(rows, index);
          gsap.to(highlight, {
            ...boxes[index],
            autoAlpha: 1,
            duration: still ? 0 : 0.5,
            ease: "power3.out",
            overwrite: true,
          });
        }

        if (still) {
          flipping = false;
          if (shown !== index || instant) display(index);
        } else if (!flipping) {
          chase();
        }
      };

      const measure = () => {
        const scroll = window.scrollY;
        tops = rows.map((row) => row.getBoundingClientRect().top + scroll);
        boxes = rows.map((row) => ({
          y: row.offsetTop,
          height: row.offsetHeight,
        }));
      };

      const underLine = () => {
        const position = window.scrollY + window.innerHeight * line;
        let index = 0;
        tops.forEach((top, i) => {
          if (top <= position) index = i;
        });
        return index;
      };

      const align = () => {
        measure();
        follow(underLine(), true);
      };

      align();
      ScrollTrigger.create({
        trigger: list,
        start: "top bottom",
        end: "bottom top",
        // Layout changed (resize, fonts, images): take the positions again.
        onRefresh: align,
        onUpdate: () => follow(underLine(), false),
      });

      if (!reduced) {
        ScrollTrigger.create({
          trigger: calendar,
          start: "top 90%",
          once: true,
          onEnter: shuffle,
        });
      }

      // A click on the year strip brings that row to the reading line; the
      // calendar then flips its way there like on any other scroll.
      const jump = (event: MouseEvent) => {
        const target = (event.target as HTMLElement).closest<HTMLElement>(
          "[data-mark]",
        );
        const index = target ? marks.indexOf(target) : -1;
        if (index < 0) return;

        event.preventDefault();
        window.scrollTo({
          top: tops[index] + boxes[index].height / 2 - window.innerHeight * line,
          behavior: reduced ? "instant" : "smooth",
        });
      };
      root.addEventListener("click", jump);

      return () => root.removeEventListener("click", jump);
    },
  );

  return () => mm.revert();
}
