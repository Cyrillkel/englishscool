import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Single place where GSAP plugins get registered. Browser only: import it from
 * code that is itself loaded on the client (see widgets/experience).
 */
gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };
