import { useLayoutEffect, useRef } from "react";
import { gsap } from "../gsap";
import { asset } from "../utils";

/* 1 · HERO */
export default function Hero() {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("#tg-hero h1", { y: 100, opacity: 0, delay: 0.5, duration: 0.9, stagger: 0.3 });
      gsap.from("#video-container", { scale: 0.9, opacity: 0, delay: 1.3, duration: 0.5 });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="tg-hero" ref={ref}>
      <h1>Pilotez votre{"\n"}</h1>
      <h1>restaurant</h1>
      <div id="video-container">
        <video autoPlay loop muted playsInline src={asset("NextActResto_presentation.mp4")} />
      </div>
    </section>
  );
}
