import { PROBLEMS } from "../data";
import { BgIcon } from "../Icons";
import { SplitHeading, SvcGrid } from "./Shared";

/* 3 · LE PROBLÈME : 6 endroits où le service perd du temps */
export default function Problems() {
  return (
    <section id="sd-services">
      <div className="svc-head">
        <SplitHeading text="Un service de restaurant, ça se joue à la seconde." />
        <p>Six endroits où le service perd du temps, de l'argent ou le contrôle.</p>
      </div>
      <SvcGrid>
        {PROBLEMS.map((p) => (
          <article className="svc" key={p.n}>
            <BgIcon name={p.icon} />
            <span className="n">{p.n}</span>
            <div>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          </article>
        ))}
      </SvcGrid>
    </section>
  );
}
