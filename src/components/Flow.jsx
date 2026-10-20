import { useLayoutEffect, useRef } from "react";
import { gsap } from "../gsap";
import { FLOW } from "../data";
import { asset, reduce } from "../utils";

/* 5 · LA CHAÎNE OPÉRATIONNELLE : 5 écrans empilés */
export default function Flow() {
  const refs = useRef([]);

  useLayoutEffect(() => {
    if (reduce) return;
    const ctx = gsap.context(() => {
      const fl = refs.current;
      fl.forEach((s, i) => {
        gsap.from(s.querySelectorAll("h2 span i"), {
          yPercent: 105, duration: 1, stagger: 0.1, ease: "power4.out",
          scrollTrigger: { trigger: s, start: "top 60%" },
        });
        const shot = s.querySelector(".shot");
        if (shot)
          gsap.from(shot, {
            opacity: 0, clipPath: "inset(100% 0% 0% 0% round 22px)", duration: 1.2, ease: "power3.out",
            scrollTrigger: { trigger: s, start: "top 60%" },
          });
        if (fl[i + 1])
          gsap.to(s.querySelector(".fin"), {
            scale: 0.9, opacity: 0.35, ease: "none",
            scrollTrigger: { trigger: fl[i + 1], start: "top bottom", end: "top top", scrub: true },
          });
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="flowhead">
        <div className="wrap">
          <h2>Un seul système.<br />Toute la chaîne opérationnelle.</h2>
        </div>
      </div>
      {FLOW.map((f, i) => (
        <section className={`flow ${f.cls}`} key={f.cls} ref={(el) => (refs.current[i] = el)}>
          <div className="fin">
            <small>{f.small}</small>
            <hr />
            <h2>{f.lines.map((l) => <span key={l}><i>{l}</i></span>)}</h2>
            <hr />
            <p>{f.text}</p>
          </div>
          <figure className="shot" style={f.shot}>
            <img src={asset(f.img)} alt={f.alt} loading="lazy" />
          </figure>
        </section>
      ))}
    </>
  );
}
