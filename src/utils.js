// Chemin des fichiers du dossier /public (fonctionne à la racine comme dans un sous-dossier)
export const asset = (p) => `${import.meta.env.BASE_URL}${p}`;

// Respect de prefers-reduced-motion (même logique que le script d'origine)
export const reduce =
  typeof matchMedia !== "undefined" &&
  matchMedia("(prefers-reduced-motion: reduce)").matches;
