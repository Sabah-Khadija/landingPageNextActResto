import { NAV_LINKS } from "../data";
import { asset } from "../utils";

export default function Nav() {
  return (
    <header id="nav">
      <a id="nav-part1" href="#" aria-label="Nextact Resto, retour en haut">
        <img src={asset("img/logo.png")} alt="Nextact Resto" width="88" height="68" />
      </a>
      <nav id="nav-part2" aria-label="Navigation principale">
        <div id="links">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </div>
        <a id="cta" href="#contact">Demander une démo</a>
      </nav>
    </header>
  );
}
