import { useLayoutEffect, useRef } from "react";

export default function Footer() {
  const ref = useRef(null);

  // apparition des blocs du footer au scroll
  useLayoutEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("show"); io.unobserve(e.target); }
      }),
      { threshold: 0.12 }
    );
    ref.current.querySelectorAll(".fr").forEach((e, i) => {
      e.style.transitionDelay = (i % 5) * 100 + "ms";
      io.observe(e);
    });
    return () => io.disconnect();
  }, []);

  return (
    <footer id="ft" ref={ref}>
      <div className="group fr">
        <div className="label">Navigation</div>
        <a className="link" href="#sd-roles">Métiers</a>
        <a className="link" href="#sd-steps">Mise en place</a>
        <a className="link" href="#faq">FAQ</a>
        <a className="link" href="#contact">Contact</a>
      </div>
      <div className="group fr">
        <div className="label">Légal</div>
        <a className="link" href="#">Mentions légales</a>
        <a className="link" href="#">Confidentialité (RGPD)</a>
      </div>
      <div className="group wide fr">
        <div className="label">Nextact Solutions</div>
        <div className="about">Nextact Solutions conçoit des solutions numériques sur mesure : développement, IA, marketing, serveurs, formation.</div>
      </div>
      <div className="email fr" id="contact">
        <h2>Prêt à reprendre la main sur votre service ?</h2>
        <p>Découvrez Nextact Resto lors d'une démonstration personnalisée.</p>
        <a href="mailto:contact@example.com">Demander ma démo gratuite ↗</a>
      </div>
      <div className="bottom fr"><span>© 2026 · Nextact Solutions</span><span>Tous droits réservés</span></div>
      <div className="brand fr">NEXTACT RESTO</div>
    </footer>
  );
}
