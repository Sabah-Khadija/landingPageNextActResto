import { useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "./gsap";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Problems from "./components/Problems";
import Reveal from "./components/Reveal";
import Flow from "./components/Flow";
import Modules from "./components/Modules";
import Roles from "./components/Roles";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    /* Scroll fluide unique (Lenis) branché sur ScrollTrigger */
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (t) => lenis.raf(t * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    /* Liens d'ancre : défilement fluide via Lenis (compatible avec les sections épinglées) */
    const onClick = (e) => {
      const a = e.target.closest && e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute("href");
      if (id === "#") { e.preventDefault(); lenis.scrollTo(0); return; }
      const t = document.querySelector(id);
      if (t) { e.preventDefault(); lenis.scrollTo(t); }
    };
    document.addEventListener("click", onClick);

    /* Les images et les polices changent les hauteurs : on recalcule une fois tout chargé */
    const refresh = () => ScrollTrigger.refresh();
    if (document.readyState === "complete") refresh();
    else window.addEventListener("load", refresh);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(refresh);

    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("load", refresh);
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Problems />
        <Reveal />
        <Flow />
        <Modules />
        <Roles />
      </main>
      <Footer />
      <button
        className="top"
        aria-label="Retour en haut"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button>
    </>
  );
}
