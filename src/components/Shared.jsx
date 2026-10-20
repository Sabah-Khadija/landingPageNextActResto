import { useLayoutEffect, useRef } from "react";
import { gsap } from "../gsap";
import { reduce } from "../utils";

/** Titre dont les mots montent au scroll (ancien attribut data-split) */
export function SplitHeading({ text }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (reduce) return;
    const ctx = gsap.context(() => {
      gsap.from(ref.current.querySelectorAll(".wd i"), {
        yPercent: 120, duration: 0.9, stagger: 0.05, ease: "expo.out",
        scrollTrigger: { trigger: ref.current, start: "top 85%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <h2 ref={ref} data-split>
      {text.trim().split(" ").map((w, i) => (
        <span className="wd" key={i}><i>{w}</i></span>
      ))}
    </h2>
  );
}

/** Grille de cartes .svc : apparition échelonnée au scroll */
export function SvcGrid({ className = "", children }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (reduce) return;
    const ctx = gsap.context(() => {
      gsap.from(ref.current.querySelectorAll(".svc"), {
        opacity: 0, y: 24, duration: 0.8, stagger: 0.08, ease: "expo.out",
        scrollTrigger: { trigger: ref.current, start: "top 85%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return <div ref={ref} className={`svc-grid ${className}`.trim()}>{children}</div>;
}
