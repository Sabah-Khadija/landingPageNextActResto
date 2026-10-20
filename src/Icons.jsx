/* ==========================================================================
   Icônes en trait (line-art), dessinées dans une grille 64 × 64.
   - BG_ICONS    : grandes icônes d'arrière-plan des cartes (problèmes, étapes)
   - ROLE_ICONS  : icônes animées de « Un outil pour chaque métier »
   Toutes utilisent currentColor : la couleur est pilotée par le CSS.
   ========================================================================== */

const base = {
  viewBox: "0 0 64 64",
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
  focusable: "false",
};

/* ---------- Arrière-plans : 6 problèmes ---------- */

const Orders = () => (
  <>
    <path d="M16 10V6h28v16" />
    <path d="M10 10h28v38l-4-4-4 4-4-4-4 4-4-4-4 4z" />
    <path d="M16 20h16M16 28h16M16 36h9" />
    <path d="M42 40h16M54 36l4 4-4 4" />
    <path d="M58 52H42M46 48l-4 4 4 4" />
  </>
);

const Costs = () => (
  <>
    <path d="M28 36V18A18 18 0 1 0 46 36z" />
    <path d="M32 32V14A18 18 0 0 1 50 32z" />
    <path d="M52 46c0-4 6-4 6 0 0 3-3 3-3 6M55 58v.5" />
  </>
);

const Stock = () => (
  <>
    <rect x="8" y="36" width="16" height="16" rx="2" />
    <rect x="28" y="36" width="16" height="16" rx="2" />
    <rect x="16" y="18" width="16" height="16" rx="2" />
    <rect x="40" y="18" width="16" height="16" rx="2" strokeDasharray="3 4.5" />
    <path d="M8 42h16M28 42h16M16 24h16" />
    <path d="M4 56h56" />
  </>
);

const Register = () => (
  <>
    <rect x="20" y="6" width="24" height="16" rx="2" />
    <path d="M32 22v6" />
    <rect x="8" y="28" width="48" height="26" rx="4" />
    <path d="M16 38h4M24 38h4M32 38h4M16 46h4M24 46h4M32 46h4" />
    <rect x="42" y="36" width="9" height="12" rx="1.5" />
  </>
);

const NoNetwork = () => (
  <>
    <path d="M8 26a34 34 0 0 1 48 0" />
    <path d="M16 34a22 22 0 0 1 32 0" />
    <path d="M24 42a10 10 0 0 1 16 0" />
    <path d="M32 50h.01" />
    <path d="M10 8l44 48" />
  </>
);

const LateNumbers = () => (
  <>
    <rect x="6" y="34" width="10" height="22" rx="1.5" />
    <rect x="20" y="20" width="10" height="36" rx="1.5" />
    <circle cx="46" cy="38" r="14" />
    <path d="M46 30v8l6 4" />
    <path d="M4 58h56" />
  </>
);

/* ---------- Arrière-plans : 5 étapes ---------- */

const Scope = () => (
  <>
    <circle cx="32" cy="32" r="20" />
    <circle cx="32" cy="32" r="9" />
    <path d="M32 32h.01" />
    <path d="M32 6v8M32 50v8M6 32h8M50 32h8" />
  </>
);

const Sliders = () => (
  <>
    <path d="M6 16h9M25 16h33M6 32h31M47 32h11M6 48h15M31 48h27" />
    <circle cx="20" cy="16" r="5" />
    <circle cx="42" cy="32" r="5" />
    <circle cx="26" cy="48" r="5" />
  </>
);

const Devices = () => (
  <>
    <rect x="4" y="10" width="34" height="28" rx="3" />
    <path d="M21 38v8M13 46h16" />
    <rect x="42" y="26" width="18" height="30" rx="3" />
    <path d="M51 50h.01" />
  </>
);

const Cap = () => (
  <>
    <path d="M32 10L4 24l28 14 28-14z" />
    <path d="M16 31v13c0 4 8 8 16 8s16-4 16-8V31" />
    <path d="M56 26v16" />
  </>
);

const Headset = () => (
  <>
    <path d="M10 38v-6a22 22 0 0 1 44 0v6" />
    <rect x="6" y="36" width="10" height="16" rx="4" />
    <rect x="48" y="36" width="10" height="16" rx="4" />
    <path d="M53 52c0 6-4 8-10 8M43 60h-6" />
  </>
);

export const BG_ICONS = {
  orders: Orders,
  costs: Costs,
  stock: Stock,
  register: Register,
  network: NoNetwork,
  numbers: LateNumbers,
  scope: Scope,
  sliders: Sliders,
  devices: Devices,
  cap: Cap,
  headset: Headset,
};

/** Grande icône décorative en arrière-plan d'une carte (comme sur l'exemple) */
export function BgIcon({ name }) {
  const Glyph = BG_ICONS[name];
  return (
    <svg className="bg-ic" {...base} strokeWidth="1.8">
      <Glyph />
    </svg>
  );
}

/* ---------- Métiers : icônes animées ---------- */

const Manager = () => (
  <>
    <rect x="6" y="8" width="52" height="38" rx="4" />
    <path className="bars" d="M16 38v-8M26 38V22M36 38v-6M46 38V16" />
    <path d="M24 56h16M32 46v10" />
  </>
);

const Waiter = () => (
  <>
    <g className="lid">
      <path d="M8 44a24 24 0 0 1 48 0z" />
      <circle cx="32" cy="15" r="3" />
    </g>
    <path d="M4 52h56" />
  </>
);

const Chef = () => (
  <>
    <path
      className="puff"
      d="M18 40C10 40 6 30 12 25C10 16 20 10 27 14C31 8 41 8 44 14C52 12 58 20 53 27C58 33 52 40 46 40z"
    />
    <path d="M18 40v14h28V40M18 48h28" />
  </>
);

const Cashier = () => (
  <>
    <rect x="4" y="16" width="56" height="32" rx="4" />
    <circle cx="32" cy="32" r="8" />
    <path d="M12 24h.01M52 40h.01" />
  </>
);

const Rider = () => (
  <>
    <g className="wheel">
      <circle cx="14" cy="46" r="8" />
      <path d="M14 38v16" />
    </g>
    <g className="wheel">
      <circle cx="50" cy="46" r="8" />
      <path d="M50 38v16" />
    </g>
    <rect x="4" y="18" width="18" height="14" rx="2" />
    <path d="M8 32h16M24 46h10l4-12h9M50 46L44 22M40 22h10" />
  </>
);

const Customer = () => (
  <>
    <rect x="18" y="4" width="28" height="56" rx="5" />
    <path d="M28 52h8" />
    <path
      className="heart"
      d="M32 38C22 31 24 22 29 22C31 22 32 24 32 25C32 24 33 22 35 22C40 22 42 31 32 38z"
    />
  </>
);

export const ROLE_ICONS = {
  manager: Manager,
  waiter: Waiter,
  chef: Chef,
  cashier: Cashier,
  rider: Rider,
  customer: Customer,
};

export function RoleIcon({ name, className }) {
  const Glyph = ROLE_ICONS[name];
  return (
    <svg className={`ic ${className}`} {...base} strokeWidth="3">
      <Glyph />
    </svg>
  );
}
