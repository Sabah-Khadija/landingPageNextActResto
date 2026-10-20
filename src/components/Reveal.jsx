import { useLayoutEffect, useRef } from "react";
import { gsap } from "../gsap";
import { asset, reduce } from "../utils";

const ImgSpan = ({ src }) => (
  <span className="img-span"><img src={asset(src)} alt="" /></span>
);

/* 4 · LA SOLUTION : texte + images au scroll */
export default function Reveal() {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ref.current.querySelectorAll(".line").forEach((line) => {
        const s = line.querySelector(".img-span");
        if (!s) return;
        const w = () => Math.min(innerWidth * (innerWidth < 600 ? 0.34 : 0.22), 420);
        if (reduce) { s.style.width = w() + "px"; return; }
        gsap.to(s, {
          width: w, ease: "none",
          scrollTrigger: { trigger: line, start: "top 90%", end: "top 40%", scrub: 1, invalidateOnRefresh: true },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="reveal" ref={ref}>
      <div className="rv-intro">Faites défiler</div>
      <div className="rv-box">
        <div className="line"><span>Nextact Resto</span><ImgSpan src="img/LOGOREC.png" /><span>remplace</span></div>
        <div className="line"><span>tout ça par une chaîne </span></div>
        <div className="line"><span>unique et connectée.</span></div>
        <div className="line"><span>Chaque commande</span><ImgSpan src="img/commande.png" /></div>
        <div className="line"><span>part de{" "}<ImgSpan src="img/tablette1.png" />{" "}la tablette</span></div>
        <div className="line"><span>et arrive en cuisine</span><ImgSpan src="img/cuisine.jpg" /></div>
        <div className="line"><span>en moins</span><span>d'une seconde.</span></div>
        <div className="line"><span>Chaque ticket</span><ImgSpan src="img/ticket.jpg" /><span>met à jour</span></div>
        <div className="line"><span>stocks, coûts</span><ImgSpan src="img/cout.jpg" /><span>et caisse</span></div>
        <div className="line"><span>sans double</span><span>saisie, et le</span></div>
        <div className="line"><span>service continue</span><ImgSpan src="img/wifi.jpg" /></div>
        <div className="line"><span>même sans réseau.</span></div>
      </div>
    </section>
  );
}
