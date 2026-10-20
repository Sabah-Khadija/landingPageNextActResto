import { Fragment, useLayoutEffect, useRef } from "react";
import { gsap } from "../gsap";
import { MARQUEE, STATS } from "../data";
import { asset, reduce } from "../utils";

/** Compteur animé au scroll (ancien attribut data-n) */
function CountUp({ n }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (reduce) { el.textContent = n; return; }
    const o = { v: 0 };
    const tween = gsap.to(o, {
      v: n, duration: 1.6, ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 90%" },
      onUpdate: () => { el.textContent = Math.round(o.v); },
    });
    return () => { tween.scrollTrigger && tween.scrollTrigger.kill(); tween.kill(); };
  }, [n]);

  return <i ref={ref}>0</i>;
}

/* 2 · MARQUEE + À PROPOS */
export default function About() {
  return (
    <section id="sd-about">
      <div id="moving-text">
        {[0, 1, 2].map((k) => (
          <div className="con" key={k}>
            {MARQUEE.map((w) => (
              <Fragment key={w}>
                <h2>{w}</h2><span className="gola"></span>
              </Fragment>
            ))}
          </div>
        ))}
      </div>
      <div id="about-bottom">
        <h2>Nextact Resto relie la salle, la cuisine, la caisse et la livraison dans un seul outil, pensé pour le rythme du service.</h2>
        <div id="about-part2">
          <img
            src={asset("img/Administration.jpg")}
            alt="Application livreur Nextact Resto : missions, itinéraire et confirmation de livraison"
            loading="lazy"
          />
          <p>Chaque commande prise en salle apparaît en cuisine, met à jour le stock et alimente la caisse et les rapports. Toute l’équipe travaille avec les mêmes informations, au même moment.</p>
        </div>
        <div className="about-stats">
          {STATS.map((s) => (
            <div key={s.label}>
              <b>{s.pre}<CountUp n={s.n} />{s.post}</b>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
