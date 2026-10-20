/* Contenu de la landing page (textes identiques à la version HTML d'origine) */

export const NAV_LINKS = [
  { href: "#hz", label: "Modules" },
  { href: "#sd-roles", label: "Métiers" },
  { href: "#sd-steps", label: "Mise en place" },
  { href: "#faq", label: "FAQ" },
];

export const MARQUEE = ["COMMANDES", "CUISINE", "CAISSE", "LIVRAISON"];

export const STATS = [
  { pre: null, n: 13, post: null, label: "modules dans une seule plateforme" },
  { pre: "<\u00a0", n: 1, post: "\u00a0s", label: "de la tablette à l'écran cuisine" },
  { pre: null, n: 100, post: "\u00a0%", label: "hors-ligne : commande et encaissement continuent" },
  { pre: null, n: 0, post: null, label: "double saisie : une vente alimente stocks, coûts et caisse" },
];

/* 3 · Problèmes (icône d'arrière-plan : voir Icons.jsx) */
export const PROBLEMS = [
  { n: "01", icon: "orders", title: "Des commandes mal transmises", text: "Papiers perdus, erreurs de saisie, allers-retours entre la salle et la cuisine." },
  { n: "02", icon: "costs", title: "Des coûts matière flous", text: "Vous ne savez pas vraiment quels plats vous rapportent de l'argent." },
  { n: "03", icon: "stock", title: "Des stocks subis", text: "Ruptures en plein service, pertes et casse non suivies." },
  { n: "04", icon: "register", title: "Une caisse difficile à contrôler", text: "Remises, annulations et écarts de caisse sans traçabilité." },
  { n: "05", icon: "network", title: "Un réseau qui lâche au pire moment", text: "Le service s'arrête." },
  { n: "06", icon: "numbers", title: "Aucune vision d'ensemble", text: "Les chiffres arrivent trop tard, ou jamais." },
];

/* 5 · Chaîne opérationnelle */
export const FLOW = [
  {
    cls: "f1", small: "01 — Carte et fiches techniques", lines: ["Votre", "carte"],
    text: "Vous définissez plats, ingrédients et quantités. Tout le reste en découle.",
    shot: { "--w": "38vw", "--ar": "1489/704", "--pos": "58% 50%" },
    img: "img/flow-carte.jpg", alt: "Carte du restaurant : plats et catégories dans le dashboard manager",
  },
  {
    cls: "f2", small: "02 — Prise de commande", lines: ["Le serveur", "saisit"],
    text: "Sur tablette : cuisson, ajouts, notes cuisine, partage d'addition.",
    shot: { "--w": "31vw", "--ar": "1/1", "--pos": "50% 50%" },
    img: "img/flow-commande.jpg", alt: "Serveur saisissant une commande sur tablette, avec cuisson et notes cuisine",
  },
  {
    cls: "f3", small: "03 — Cuisine", lines: ["Instantané", "en cuisine"],
    text: "La commande apparaît à l'écran, triée par temps d'attente. « Plat prêt » : le serveur est notifié.",
    shot: { "--w": "25vw", "--ar": "768/1365", "--pos": "50% 25%" },
    img: "img/flow-cuisine.jpg", alt: "Écran cuisine (KDS) affichant les commandes à préparer",
  },
  {
    cls: "f4", small: "04 — Caisse", lines: ["Encaisser", "tracé"],
    text: "Espèces, carte, mobile money. Ticket conforme, transactions non modifiables.",
    shot: { "--w": "34vw", "--ar": "1299/1201", "--pos": "50% 50%" },
    img: "img/caissePOS.jpeg", alt: "Pilotage du restaurant de la commande à l'encaissement",
  },
  {
    cls: "f5", small: "05 — Stocks, coûts et reporting", lines: ["Tout se met", "à jour"],
    text: "Chaque vente alimente vos stocks, vos coûts et vos tableaux de bord, sans double saisie.",
    shot: { "--w": "38vw", "--ar": "1312/800", "--pos": "58% 50%" },
    img: "img/flow-stocks.jpg", alt: "Dashboard de stocks, coûts et reporting sur ordinateur portable",
  },
];

/* 6 · Les 12 modules (scroll horizontal)
   kind "img"  : <img> directement dans la carte
   kind "ph"   : visuel dans un bloc .ph (avec image ou icône Remixicon) */
export const MODULES = [
  { kind: "img", img: "img/menu.png", alt: "Carte et menu", pos: "50% 30%", title: "Carte et menu", items: ["Fiches techniques par plat", "Rupture bloquée partout", "Allergènes, historique des prix"] },
  { kind: "ph", ph: "b", label: "Plan de salle", img: "img/salle.jpg", alt: "Plan de salle ", pos: "50% 30%", title: "Plan de salle", items: ["Statuts en temps réel", "Fusion et division de tables", "Suivi par serveur"] },
  { kind: "img", img: "img/tablette-serveur.jpg", alt: "Prise de commande", pos: "50% 45%", title: "Prise de commande", items: ["Envoi instantané en cuisine", "Cuisson, ajouts, notes", "Partage d'addition"] },
  { kind: "img", img: "img/kds-cuisine.jpg", alt: "Cuisine (KDS)", pos: "50% 25%", title: "Cuisine (KDS)", items: ["À préparer, en préparation, prêt", "Postes chaud, froid, bar", "Alerte de dépassement"] },
  { kind: "img", img: "img/caisse.jpeg", alt: "Caisse", pos: "50% 80%", title: "Caisse", items: ["Ouverture et fermeture contrôlées", "Remises validées", "Transactions non modifiables"] },
  { kind: "ph", ph: "v", label: "Achats et stocks", img: "img/stock.jpg", alt: "Caisse", pos: "50% 80%", title: "Achats et stocks", items: ["Décrémentation automatique", "Seuils d'alerte", "Pertes et casse valorisées"] },
  { kind: "img", img: "img/livraison.jpeg", alt: "Livraison", pos: "50% 50%", title: "Livraison", items: ["Livreur affecté dès « prêt »", "Zones, frais, délais", "Plateformes tierces"] },
  { kind: "img", img: "img/point.png", alt: "Fidélité", pos: "50% 55%", title: "Fidélité", items: ["Points ou carte", "Happy hour, promotions", "Consentement RGPD"] },
  { kind: "ph", img: "img/reserver.png", title: "Réservations", items: ["Téléphone ou en ligne", "Rappels automatiques", "Suivi des no-shows"] },
  { kind: "img", img: "img/equipe.jpg", alt: "Équipe et droits", pos: "50% 35%", title: "Équipe et droits", items: ["5 rôles différenciés", "Droits selon le profil", "Connexion par code PIN"] },
];

/* 7 · Métiers (icônes animées, voir Icons.jsx) */
export const ROLES = [
  { icon: "manager", cls: "ic1", title: "Gérant", text: "Vision consolidée, contrôle des coûts, paramétrage, accès distant.", small: "Caisse, back-office, à distance" },
  { icon: "waiter", cls: "ic2", title: "Serveur", text: "Commande rapide, plan de salle, notification « plat prêt ».", small: "Tablette mobile" },
  { icon: "chef", cls: "ic3", title: "Cuisinier", text: "Tickets clairs, priorités, alertes de délai.", small: "Écran cuisine" },
  { icon: "cashier", cls: "ic4", title: "Caissier", text: "Encaissement fluide, clôture fiable.", small: "Poste caisse" },
  { icon: "rider", cls: "ic5", title: "Livreur", text: "Courses assignées et statut de livraison.", small: "Application mobile" },
  { icon: "customer", cls: "ic6", title: "Client", text: "Réservation, commande, fidélité.", small: "Application ou site client" },
];

/* 8 · Tickets */
export const TICKETS = [
  { ref: "Commande n°4821 · Table 7", lines: [["2 × Tajine poulet", "140,00"], ["1 × Pastilla", "60,00"]], foot: ["Salle → cuisine", "0,4 s"], quote: "« Plus de papiers perdus entre la salle et la cuisine. »" },
  { ref: "Caisse n°2 · Fin de service", lines: [["Remise 20 %", "validée"], ["Annulation", "motif saisi"]], foot: ["Écart de caisse", "0,00"], quote: "« Chaque remise a un nom et une heure. »" },
  { ref: "Réseau coupé · 21:42", lines: [["3 encaissements", "en file"], ["Retour du réseau", "21:49"]], foot: ["Synchronisés", "3 / 3"], quote: "« Le Wi-Fi tombe. Le service, non. »" },
  { ref: "Stock · Service du soir", lines: [["Poulet (kg)", "− 12,4"], ["Seuil d'alerte", "atteint"]], foot: ["Commande fournisseur", "suggérée"], quote: "« La rupture est bloquée avant le client. »" },
  { ref: "Livraison n°318 · Prêt 20:15", lines: [["Livreur affecté", "n°3"], ["Statut", "en route"]], foot: ["Délai estimé", "18 min"], quote: "« Dès que c'est prêt, le livreur le sait. »" },
  { ref: "Reporting · Ce soir", lines: [["Chiffre d'affaires", "12 480,00"], ["Food cost", "28 %"]], foot: ["Panier moyen", "96,00"], quote: "« Les chiffres arrivent avant la fermeture. »" },
];

/* 9 · Étapes (icône d'arrière-plan : voir Icons.jsx) */
export const STEPS = [
  { n: "01", icon: "scope", title: "Cadrage", text: "Analyse de votre établissement et de votre carte." },
  { n: "02", icon: "sliders", title: "Paramétrage", text: "Carte, fiches techniques, plan de salle, rôles." },
  { n: "03", icon: "devices", title: "Installation", text: "Poste de caisse, tablettes, écran cuisine, matériel." },
  { n: "04", icon: "cap", title: "Formation", text: "Équipes opérationnelles en moins d'une demi-journée." },
  { n: "05", icon: "headset", title: "Suivi", text: "Support et évolutions." },
];

/* 10 · FAQ */
export const FAQ = [
  ["Et si ma connexion internet est coupée ?", "Vous continuez à prendre des commandes et à encaisser. Tout se synchronise au retour du réseau."],
  ["Quels moyens de paiement sont gérés ?", "Espèces, carte bancaire, terminal de paiement, mobile money."],
  ["Mes équipes vont-elles s'y retrouver ?", "Oui, l'interface est pensée pour un personnel en rotation : formation en moins d'une demi-journée."],
  ["Puis-je suivre mon activité à distance ?", "Oui, via des tableaux de bord sécurisés en lecture seule."],
  ["Le ticket est-il conforme ?", "Oui, conforme à la réglementation fiscale et non modifiable après émission."],
  ["Puis-je gérer la livraison et les plateformes tierces ?", "Oui, livraison interne et intégration possible des agrégateurs."],
  ["Est-ce adapté à plusieurs établissements ?", "L'architecture est conçue pour la montée en charge et le multi-sites."],
  ["Quel matériel dois-je acheter ?", "Du matériel de caisse standard du marché. Nous vous conseillons."],
];
