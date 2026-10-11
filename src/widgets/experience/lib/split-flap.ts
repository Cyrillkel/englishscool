import { gsap } from "@/shared/lib/gsap";

export type FlapFace = { text: string; background?: string; color?: string };

export type SplitFlap = {
  /** Shows the value at once, cutting short a flip that is still running. */
  set(value: FlapFace): void;
  /**
   * Flips to the value. Forward (1) the old upper half falls away and the new
   * lower half lands on top of the old one; backward (-1) is the same motion
   * played bottom-up. `landing` adds the small bounce of a flap that stays put.
   */
  flip(
    value: FlapFace,
    duration: number,
    direction: 1 | -1,
    landing: boolean,
  ): gsap.core.Timeline;
};

/** Drives the markup rendered by ui/split-flap.tsx. */
export function createSplitFlap(root: HTMLElement, initial: FlapFace): SplitFlap {
  const face = (name: string) =>
    root.querySelector<HTMLElement>(`[data-face="${name}"]`)!;
  const top = face("top");
  const bottom = face("bottom");
  const topLeaf = face("top-leaf");
  const bottomLeaf = face("bottom-leaf");

  let shown = initial;
  let running: gsap.core.Timeline | undefined;

  const paint = (target: HTMLElement, value: FlapFace) => {
    target.querySelector("[data-glyph]")!.textContent = value.text;
    if (value.background) target.style.backgroundColor = value.background;
    if (value.color) target.style.color = value.color;
  };

  /** Both fixed halves show the current value, the leaves are out of sight. */
  const settle = () => {
    paint(top, shown);
    paint(bottom, shown);
    gsap.set([topLeaf, bottomLeaf], { autoAlpha: 0 });
  };

  const stop = () => {
    running?.kill();
    running = undefined;
    settle();
  };

  return {
    set(value) {
      shown = value;
      stop();
    },

    flip(value, duration, direction, landing) {
      stop();
      const previous = shown;
      shown = value;

      // One leaf leaves with the old value and uncovers the new one behind it,
      // the other lands with the new value and covers what is left of the old.
      const forward = direction > 0;
      const leaving = forward ? topLeaf : bottomLeaf;
      const arriving = forward ? bottomLeaf : topLeaf;
      const away = forward ? -90 : 90;
      const half = duration / 2;

      paint(leaving, previous);
      paint(arriving, value);
      paint(forward ? top : bottom, value);
      gsap.set(leaving, { autoAlpha: 1, rotationX: 0 });
      gsap.set(arriving, { autoAlpha: 0, rotationX: -away });

      running = gsap
        .timeline()
        .to(leaving, { rotationX: away, duration: half, ease: "power1.in" })
        .to(
          leaving.querySelector("[data-shade]"),
          { opacity: 0.45, duration: half, ease: "power1.in" },
          0,
        )
        .set(leaving, { autoAlpha: 0 })
        .set(arriving, { autoAlpha: 1 })
        .to(arriving, {
          rotationX: 0,
          duration: half,
          ease: landing ? "back.out(1.6)" : "power1.out",
        })
        .fromTo(
          arriving.querySelector("[data-shade]"),
          { opacity: 0.45 },
          { opacity: 0, duration: half, ease: "power1.out" },
          half,
        )
        .call(settle);

      return running;
    },
  };
}
