import { useLayoutEffect, useRef } from "react";
import { gsap } from "../gsap";
import SplitType from "split-type";
import { FAQ, ROLES, STEPS, TICKETS } from "../data";
import { BgIcon, RoleIcon } from "../Icons";
import { reduce } from "../utils";
import { SplitHeading, SvcGrid } from "./Shared";

/* 8 · PREUVE : CE QUE ÇA CHANGE, TICKET PAR TICKET */
function Tickets() {
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (reduce) return;
    const ctx = gsap.context(() => {
      gsap.from(".rc", {
        y: 120, opacity: 0, duration: 1, stagger: 0.12, ease: "power3.out",
        scrollTrigger: { trigger: ".tks", start: "top 85%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section className="tk" ref={ref}>
      <div className="tkh"><SplitHeading text="Ce que ça change, ticket par ticket." /></div>
      <div className="tks">
        {TICKETS.map((t) => (
          <div className="rc" key={t.ref}>
            <div className="lg">Nextact<i>.</i></div>
            <div className="ref">{t.ref}</div>
            {t.lines.map(([a, b]) => (
              <div className="ln" key={a}><span>{a}</span><span>{b}</span></div>
            ))}
            <div className="ft"><span>{t.foot[0]}</span><span>{t.foot[1]}</span></div>
            <q>{t.quote}</q>
            <small>Exemple de ticket</small>
          </div>
        ))}
      </div>
    </section>
  );
}

/* 9 · MISE EN PLACE EN 5 ÉTAPES */
function Steps() {
  return (
    <section id="sd-steps">
      <div className="svc-head"><SplitHeading text="Opérationnel en cinq étapes." /></div>
      <SvcGrid className="five">
        {STEPS.map((s) => (
          <article className="svc" key={s.n}>
            <BgIcon name={s.icon} />
            <span className="n">{s.n}</span>
            <div><h3>{s.title}</h3><p>{s.text}</p></div>
          </article>
        ))}
      </SvcGrid>
    </section>
  );
}

/* 10 · QUESTIONS FRÉQUENTES */
function Faq() {
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (reduce) return;
    const ctx = gsap.context(() => {
      gsap.from(".faq details", {
        opacity: 0, y: 20, duration: 0.7, stagger: 0.07, ease: "expo.out",
        scrollTrigger: { trigger: ".faq-list", start: "top 85%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section className="faq" id="faq" ref={ref}>
      <SplitHeading text="Questions fréquentes." />
      <div className="faq-list">
        {FAQ.map(([q, a]) => (
          <details key={q}>
            <summary><span>{q}</span><i className="ri-add-line"></i></summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

/* 11 · CITATION D'APPEL À L'ACTION (juste avant le footer) */
function Quote() {
  const ref = useRef(null);
  const text = useRef(null);

  useLayoutEffect(() => {
    if (reduce) return;
    const split = new SplitType(text.current, { types: "words" });
    const ctx = gsap.context(() => {
      gsap.fromTo(
        split.words,
        {
          willChange: "opacity, transform",
          z: () => gsap.utils.random(500, 950),
          opacity: 0,
          xPercent: () => gsap.utils.random(-100, 100),
          yPercent: () => gsap.utils.random(-10, 10),
          rotationX: () => gsap.utils.random(-90, 90),
        },
        {
          ease: "expo", opacity: 1, rotationX: 0, rotationY: 0, xPercent: 0, yPercent: 0, z: 0,
          stagger: { each: 0.006, from: "random" },
          scrollTrigger: { trigger: ref.current, start: "top top", end: "bottom bottom", scrub: true, invalidateOnRefresh: true },
        }
      );
    }, ref);
    return () => { ctx.revert(); split.revert(); };
  }, []);

  return (
    <section className="qt" id="quote" ref={ref}>
      <div className="qt-text" id="quoteText" ref={text}>
        <div>Chaque service sans outil adapté, ce sont des minutes perdues, des remises sans nom et des écarts sans explication. Reprenez la main dès maintenant : votre prochain service peut déjà être sous contrôle.</div>
      </div>
    </section>
  );
}

/* 7 · UN OUTIL POUR CHAQUE MÉTIER
   NB : comme dans la page HTML d'origine, les sections 8 à 11 (tickets, étapes, FAQ,
   citation) sont rendues À L'INTÉRIEUR de #sd-roles. Cette imbrication est conservée
   volontairement pour que les marges et le rendu restent strictement identiques. */
export default function Roles() {
  return (
    <section id="sd-roles">
      <div className="svc-head">
        <SplitHeading text="Un outil pour chaque métier." />
        <p>Six profils, six interfaces : chacun voit uniquement ce dont il a besoin.</p>
      </div>
      <SvcGrid>
        {ROLES.map((r) => (
          <article className="svc" key={r.title}>
            <RoleIcon name={r.icon} className={r.cls} />
            <div>
              <h3>{r.title}</h3>
              <p>{r.text}</p>
              <small>{r.small}</small>
            </div>
          </article>
        ))}
      </SvcGrid>
      <Tickets />
      <Steps />
      <Faq />
      <Quote />
    </section>
  );
}
