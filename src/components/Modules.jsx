import { useLayoutEffect, useRef } from "react";
import { gsap } from "../gsap";
import { MODULES } from "../data";
import { asset } from "../utils";

function ModuleCard({ m }) {
  const img = m.img && (
    <img src={asset(m.img)} alt={m.alt} loading="lazy" style={{ objectPosition: m.pos }} />
  );
  return (
    <div className="card">
      {m.kind === "img" ? (
        img
      ) : (
        <div className={`ph ${m.ph}`} role="img" aria-label={m.label}>
          {m.icon ? <i className={m.icon}></i> : img}
        </div>
      )}
      <div className="mbody">
        <h3>{m.title}</h3>
        <ul>{m.items.map((it) => <li key={it}>{it}</li>)}</ul>
      </div>
    </div>
  );
}

/* 6 · LES 12 MODULES (scroll horizontal épinglé) */
export default function Modules() {
  const section = useRef(null);
  const container = useRef(null);
  const amount = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const getX = () => -(container.current.scrollWidth - window.innerWidth);
      gsap.to(container.current, {
        x: getX,
        ease: "none",
        scrollTrigger: {
          trigger: section.current,
          pin: true,
          start: "top top",
          end: () => `+=${-getX()}`,
          scrub: true,
          invalidateOnRefresh: true,
          refreshPriority: 1, // le pin est calculé en premier : les sections en dessous en tiennent compte
          onUpdate: (self) => {
            amount.current.textContent = `(${String(Math.round(self.progress * 100)).padStart(2, "0")}%)`;
          },
        },
      });
    }, section);
    return () => ctx.revert();
  }, []);

  return (
    <section id="hz" ref={section}>
      <h1>MODULES</h1>
      <h4>Nextact Resto <span>12 modules, un seul outil</span></h4>
      <div className="progress">Faites défiler <span className="progress-amount" ref={amount}>(00%)</span></div>
      <div className="scroll-container" ref={container}>
        {MODULES.map((m) => <ModuleCard m={m} key={m.title} />)}
      </div>
    </section>
  );
}
