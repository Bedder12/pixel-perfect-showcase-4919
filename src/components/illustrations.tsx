// Simple geometric illustrations. All colors come from design tokens via currentColor/CSS vars.
export type ArtName = "taxi" | "map" | "road" | "passenger" | "seatbelt" | "wheel" | "book" | "test";

const C = {
  g: "var(--primary)",
  gs: "var(--primary-soft)",
  gd: "var(--primary-deep)",
  ink: "var(--ink)",
  y: "var(--taxi)",
  w: "var(--card)",
  m: "var(--border)",
};

export function Art({ name, className }: { name: ArtName; className?: string }) {
  return (
    <svg viewBox="0 0 120 90" className={className} aria-hidden>
      <rect width="120" height="90" rx="18" fill={C.gs} />
      {name === "taxi" && (
        <g>
          <rect x="10" y="66" width="100" height="4" rx="2" fill={C.m} />
          <path d="M28 46 L40 30 H78 L92 46 Z" fill={C.gd} />
          <path d="M44 34 H58 V45 H38 Z M62 34 H76 L86 45 H62 Z" fill={C.w} opacity=".85" />
          <rect x="18" y="45" width="84" height="18" rx="7" fill={C.g} />
          <rect x="52" y="23" width="16" height="7" rx="2" fill={C.y} />
          <circle cx="38" cy="64" r="7" fill={C.ink} /><circle cx="82" cy="64" r="7" fill={C.ink} />
          <circle cx="38" cy="64" r="2.5" fill={C.w} /><circle cx="82" cy="64" r="2.5" fill={C.w} />
        </g>
      )}
      {name === "map" && (
        <g>
          <path d="M22 22 L46 16 L74 24 L98 18 V68 L74 74 L46 66 L22 72 Z" fill={C.w} />
          <path d="M46 16 V66 M74 24 V74" stroke={C.m} strokeWidth="2" />
          <path d="M30 58 C42 50 52 56 62 44 S82 36 90 30" stroke={C.g} strokeWidth="3" fill="none" strokeDasharray="4 4" strokeLinecap="round" />
          <circle cx="90" cy="30" r="6" fill={C.gd} /><circle cx="90" cy="30" r="2.2" fill={C.w} />
        </g>
      )}
      {name === "road" && (
        <g>
          <path d="M48 90 L56 10 H64 L72 90 Z" fill={C.ink} />
          <path d="M60 18 V26 M60 36 V46 M60 56 V68 M60 76 V88" stroke={C.y} strokeWidth="2.5" />
          <circle cx="28" cy="34" r="12" fill={C.g} /><rect x="27" y="44" width="2" height="16" fill={C.gd} />
          <circle cx="94" cy="50" r="9" fill={C.g} opacity=".7" /><rect x="93" y="58" width="2" height="12" fill={C.gd} />
        </g>
      )}
      {name === "passenger" && (
        <g>
          <circle cx="60" cy="32" r="12" fill={C.gd} />
          <path d="M36 76 C36 58 46 50 60 50 C74 50 84 58 84 76 Z" fill={C.g} />
          <rect x="82" y="56" width="18" height="20" rx="4" fill={C.y} />
          <rect x="88" y="52" width="6" height="5" rx="2" fill={C.ink} />
        </g>
      )}
      {name === "seatbelt" && (
        <g>
          <rect x="34" y="14" width="52" height="66" rx="16" fill={C.w} />
          <rect x="44" y="20" width="32" height="12" rx="6" fill={C.m} />
          <path d="M42 30 L80 76" stroke={C.g} strokeWidth="9" strokeLinecap="round" />
          <rect x="54" y="46" width="16" height="10" rx="3" fill={C.ink} />
        </g>
      )}
      {name === "wheel" && (
        <g>
          <circle cx="60" cy="45" r="28" fill="none" stroke={C.gd} strokeWidth="8" />
          <circle cx="60" cy="45" r="8" fill={C.g} />
          <path d="M60 37 V19 M53 49 L37 58 M67 49 L83 58" stroke={C.gd} strokeWidth="6" strokeLinecap="round" />
        </g>
      )}
      {name === "book" && (
        <g>
          <path d="M20 24 C34 18 48 20 60 28 V74 C48 66 34 64 20 70 Z" fill={C.w} />
          <path d="M100 24 C86 18 72 20 60 28 V74 C72 66 86 64 100 70 Z" fill={C.g} />
          <path d="M28 34 H50 M28 42 H50 M28 50 H44" stroke={C.m} strokeWidth="2.5" strokeLinecap="round" />
        </g>
      )}
      {name === "test" && (
        <g>
          <rect x="36" y="12" width="48" height="66" rx="6" fill={C.w} />
          <rect x="50" y="8" width="20" height="9" rx="3" fill={C.gd} />
          {[30, 44, 58].map((y) => (
            <g key={y}>
              <rect x="44" y={y - 4} width="8" height="8" rx="2" fill={C.g} />
              <rect x="56" y={y - 2} width="20" height="4" rx="2" fill={C.m} />
            </g>
          ))}
        </g>
      )}
    </svg>
  );
}

export function NightRoadScene({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 170" className={className} aria-hidden>
      <rect width="320" height="170" rx="20" fill="var(--ink)" />
      <circle cx="262" cy="36" r="14" fill="var(--ink-foreground)" opacity=".85" />
      <path d="M0 110 L320 92 V170 H0 Z" fill="var(--primary-deep)" />
      <path d="M120 170 L176 94 H190 L230 170 Z" fill="var(--foreground)" opacity=".55" />
      <path d="M182 104 V112 M183 124 V136 M185 150 V166" stroke="var(--taxi)" strokeWidth="3" />
      <path d="M150 140 L60 100 L60 170 Z" fill="var(--taxi)" opacity=".18" />
      <rect x="150" y="128" width="40" height="18" rx="6" fill="var(--primary)" />
      <circle cx="154" cy="138" r="3" fill="var(--taxi)" />
    </svg>
  );
}
