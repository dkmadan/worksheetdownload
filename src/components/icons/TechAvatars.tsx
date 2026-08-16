/**
 * Professional tech developer avatars — self-contained circular icon tiles.
 * viewBox="0 0 100 100". Designs from gemini-code-1786900122098.html.
 * 8 avatars: Frontend, PythonAI, Backend, Cloud, Database, Mobile, Security, UiUx.
 */

import React from "react";

interface AvatarProps {
  className?: string;
  style?: React.CSSProperties;
}

// 1. Frontend / React Developer — blue hair, glasses · React atom
export function FrontendAvatar({ className, style }: AvatarProps) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <rect width="100" height="100" rx="28" fill="#082f49"/>
      <circle cx="50" cy="50" r="42" fill="#0c4a6e"/>
      <ellipse cx="50" cy="46" rx="23" ry="21" fill="#38bdf8"/>
      <ellipse cx="50" cy="53" rx="19" ry="18" fill="#ffdfc4"/>
      <path d="M30 45 Q50 38 70 45 Z" fill="#0369a1"/>
      <circle cx="42" cy="51" r="5.5" fill="none" stroke="#38bdf8" strokeWidth="1.8"/>
      <circle cx="58" cy="51" r="5.5" fill="none" stroke="#38bdf8" strokeWidth="1.8"/>
      <line x1="47.5" y1="51" x2="52.5" y2="51" stroke="#38bdf8" strokeWidth="1.8"/>
      <circle cx="42" cy="51" r="2" fill="#0f172a"/>
      <circle cx="58" cy="51" r="2" fill="#0f172a"/>
      <path d="M45 61 Q50 65 55 61" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinecap="round"/>
      <path d="M31 72 Q50 68 69 72 L75 92 L25 92 Z" fill="#0284c7"/>
      {/* React atom orbit */}
      <g transform="translate(66, 44)">
        <ellipse cx="11" cy="11" rx="10" ry="3.5" fill="none" stroke="#38bdf8" strokeWidth="1.4" transform="rotate(30 11 11)"/>
        <ellipse cx="11" cy="11" rx="10" ry="3.5" fill="none" stroke="#38bdf8" strokeWidth="1.4" transform="rotate(90 11 11)"/>
        <ellipse cx="11" cy="11" rx="10" ry="3.5" fill="none" stroke="#38bdf8" strokeWidth="1.4" transform="rotate(150 11 11)"/>
        <circle cx="11" cy="11" r="2.2" fill="#38bdf8"/>
      </g>
      <rect x="18" y="78" width="64" height="15" rx="7.5" fill="#0284c7"/>
      <text x="50" y="89" fontSize="8" fontFamily="sans-serif" fontWeight="900" fill="#ffffff" textAnchor="middle">REACT / JS</text>
    </svg>
  );
}

// 2. AI & Data Engineer — dark cap, yellow face · Python neural node
export function PythonAiAvatar({ className, style }: AvatarProps) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <rect width="100" height="100" rx="28" fill="#172554"/>
      <circle cx="50" cy="50" r="42" fill="#1e3a8a"/>
      <path d="M28 42 C28 26, 72 26, 72 42 Z" fill="#1e293b"/>
      <ellipse cx="50" cy="53" rx="19" ry="18" fill="#fcd34d"/>
      <circle cx="43" cy="51" r="2.5" fill="#0f172a"/>
      <circle cx="57" cy="51" r="2.5" fill="#0f172a"/>
      <path d="M45 59 Q50 64 55 59" fill="none" stroke="#0f172a" strokeWidth="2.2" strokeLinecap="round"/>
      <path d="M30 72 Q50 67 70 72 L76 92 L24 92 Z" fill="#2563eb"/>
      {/* Python / AI neural node */}
      <g transform="translate(65, 45)">
        <rect width="20" height="18" rx="4" fill="#0f172a" stroke="#3b82f6" strokeWidth="1.2"/>
        <path d="M5 8 Q10 4 15 8 L15 12 Q10 16 5 12 Z" fill="#eab308"/>
        <circle cx="8" cy="7" r="1" fill="#0f172a"/>
        <path d="M15 11 Q10 15 5 11" stroke="#38bdf8" strokeWidth="1.5" fill="none"/>
      </g>
      <rect x="20" y="78" width="60" height="15" rx="7.5" fill="#2563eb"/>
      <text x="50" y="89" fontSize="8" fontFamily="sans-serif" fontWeight="900" fill="#ffffff" textAnchor="middle">PYTHON / AI</text>
    </svg>
  );
}

// 3. Backend Engineer — headphones, dark hair · Node hexagon terminal
export function BackendAvatar({ className, style }: AvatarProps) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <rect width="100" height="100" rx="28" fill="#052e16"/>
      <circle cx="50" cy="50" r="42" fill="#14532d"/>
      {/* Headphones */}
      <path d="M24 48 C24 26, 76 26, 76 48" fill="none" stroke="#22c55e" strokeWidth="3.5"/>
      <rect x="20" y="44" width="6" height="12" rx="3" fill="#16a34a"/>
      <rect x="74" y="44" width="6" height="12" rx="3" fill="#16a34a"/>
      <ellipse cx="50" cy="46" rx="21" ry="19" fill="#1e293b"/>
      <ellipse cx="50" cy="53" rx="18" ry="18" fill="#fbd5b5"/>
      <circle cx="43" cy="51" r="2.5" fill="#0f172a"/>
      <circle cx="57" cy="51" r="2.5" fill="#0f172a"/>
      <path d="M45 59 Q50 64 55 59" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinecap="round"/>
      <path d="M31 72 Q50 68 69 72 L75 92 L25 92 Z" fill="#16a34a"/>
      {/* Node hexagon */}
      <g transform="translate(66, 46)">
        <polygon points="10,2 18,6.5 18,15.5 10,20 2,15.5 2,6.5" fill="#22c55e"/>
        <text x="10" y="14" fontSize="7.5" fontFamily="monospace" fontWeight="900" fill="#052e16" textAnchor="middle">{">_"}</text>
      </g>
      <rect x="18" y="78" width="64" height="15" rx="7.5" fill="#16a34a"/>
      <text x="50" y="89" fontSize="8" fontFamily="sans-serif" fontWeight="900" fill="#ffffff" textAnchor="middle">NODE / API</text>
    </svg>
  );
}

// 4. DevOps & Cloud Architect — orange cap · cloud + Docker containers
export function CloudAvatar({ className, style }: AvatarProps) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <rect width="100" height="100" rx="28" fill="#431407"/>
      <circle cx="50" cy="50" r="42" fill="#7c2d12"/>
      <path d="M28 40 C28 26, 72 26, 72 40 Z" fill="#f97316"/>
      <ellipse cx="50" cy="52" rx="19" ry="18" fill="#ffdfc4"/>
      <circle cx="43" cy="50" r="2.5" fill="#1e293b"/>
      <circle cx="57" cy="50" r="2.5" fill="#1e293b"/>
      <path d="M44 57 Q50 64 56 57" fill="#1e293b"/>
      <path d="M32 70 Q50 66 68 70 L74 92 L26 92 Z" fill="#ea580c"/>
      {/* Cloud + Docker containers */}
      <g transform="translate(64, 44)">
        <path d="M6 14 A5 5 0 0 1 15 10 A6 6 0 0 1 23 14 A4 4 0 0 1 21 19 L6 19 A4 4 0 0 1 6 14 Z" fill="#fb923c"/>
        <rect x="8"  y="13" width="3" height="3" fill="#431407"/>
        <rect x="13" y="13" width="3" height="3" fill="#431407"/>
      </g>
      <rect x="18" y="78" width="64" height="15" rx="7.5" fill="#ea580c"/>
      <text x="50" y="89" fontSize="8" fontFamily="sans-serif" fontWeight="900" fill="#ffffff" textAnchor="middle">CLOUD / AWS</text>
    </svg>
  );
}

// 5. Database Architect — indigo hair, yellow face · DB cylinder stack
export function DatabaseAvatar({ className, style }: AvatarProps) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <rect width="100" height="100" rx="28" fill="#1e1b4b"/>
      <circle cx="50" cy="50" r="42" fill="#312e81"/>
      <ellipse cx="50" cy="46" rx="22" ry="20" fill="#4338ca"/>
      <ellipse cx="50" cy="53" rx="19" ry="18" fill="#fcd34d"/>
      <circle cx="43" cy="51" r="2.5" fill="#0f172a"/>
      <circle cx="57" cy="51" r="2.5" fill="#0f172a"/>
      <path d="M45 58 Q50 63 55 58" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinecap="round"/>
      <path d="M32 71 Q50 67 68 71 L74 92 L26 92 Z" fill="#6366f1"/>
      {/* Database cylinder stack */}
      <g transform="translate(68, 44)">
        <ellipse cx="10" cy="4"  rx="9" ry="3.5" fill="#818cf8"/>
        <path d="M1 4  L1 10 Q10 14 19 10 L19 4  Z" fill="#6366f1"/>
        <path d="M1 10 L1 16 Q10 20 19 16 L19 10 Z" fill="#4f46e5"/>
      </g>
      <rect x="20" y="78" width="60" height="15" rx="7.5" fill="#4f46e5"/>
      <text x="50" y="89" fontSize="8" fontFamily="sans-serif" fontWeight="900" fill="#ffffff" textAnchor="middle">SQL / DATA</text>
    </svg>
  );
}

// 6. Mobile App Developer — teal ear-buns, peach face · smartphone
export function MobileAvatar({ className, style }: AvatarProps) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <rect width="100" height="100" rx="28" fill="#134e4a"/>
      <circle cx="50" cy="50" r="42" fill="#115e59"/>
      <circle cx="28" cy="34" r="8" fill="#0f766e"/>
      <circle cx="72" cy="34" r="8" fill="#0f766e"/>
      <ellipse cx="50" cy="46" rx="22" ry="20" fill="#0f766e"/>
      <ellipse cx="50" cy="53" rx="19" ry="18" fill="#ffdfc4"/>
      <circle cx="43" cy="51" r="2.5" fill="#0f172a"/>
      <circle cx="57" cy="51" r="2.5" fill="#0f172a"/>
      <path d="M45 58 Q50 63 55 58" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinecap="round"/>
      <path d="M32 71 Q50 67 68 71 L74 92 L26 92 Z" fill="#0d9488"/>
      {/* Smartphone */}
      <g transform="translate(68, 44) rotate(8)">
        <rect width="15" height="24" rx="3" fill="#042f2e" stroke="#2dd4bf" strokeWidth="1.2"/>
        <rect x="2" y="3" width="11" height="16" rx="1" fill="#2dd4bf" opacity={0.85}/>
        <circle cx="7.5" cy="21" r="1" fill="#2dd4bf"/>
      </g>
      <rect x="20" y="78" width="60" height="15" rx="7.5" fill="#0d9488"/>
      <text x="50" y="89" fontSize="8" fontFamily="sans-serif" fontWeight="900" fill="#ffffff" textAnchor="middle">MOBILE APP</text>
    </svg>
  );
}

// 7. Cybersecurity Specialist — dark hoodie, yellow face · shield + keyhole
export function SecurityAvatar({ className, style }: AvatarProps) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <rect width="100" height="100" rx="28" fill="#3b0764"/>
      <circle cx="50" cy="50" r="42" fill="#581c87"/>
      <ellipse cx="50" cy="46" rx="22" ry="20" fill="#1e1b4b"/>
      <ellipse cx="50" cy="53" rx="18" ry="17" fill="#fcd34d"/>
      <circle cx="43" cy="51" r="2.5" fill="#0f172a"/>
      <circle cx="57" cy="51" r="2.5" fill="#0f172a"/>
      <path d="M45 59 Q50 63 55 59" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinecap="round"/>
      <path d="M31 72 Q50 68 69 72 L75 92 L25 92 Z" fill="#7e22ce"/>
      {/* Security shield + keyhole */}
      <g transform="translate(68, 45)">
        <path d="M10 2 L19 5 L19 12 C19 17 10 21 10 21 C10 21 1 17 1 12 L1 5 Z" fill="#c084fc" stroke="#f3e8ff" strokeWidth="1.2"/>
        <circle cx="10" cy="9" r="2" fill="#3b0764"/>
        <polygon points="9,9 11,9 11.5,13 8.5,13" fill="#3b0764"/>
      </g>
      <rect x="20" y="78" width="60" height="15" rx="7.5" fill="#7e22ce"/>
      <text x="50" y="89" fontSize="8" fontFamily="sans-serif" fontWeight="900" fill="#ffffff" textAnchor="middle">SECURITY</text>
    </svg>
  );
}

// 8. UI/UX Product Designer — red/pink hair · Figma design layers
export function UiUxAvatar({ className, style }: AvatarProps) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <rect width="100" height="100" rx="28" fill="#4c0519"/>
      <circle cx="50" cy="50" r="42" fill="#881337"/>
      <ellipse cx="50" cy="46" rx="23" ry="21" fill="#f43f5e"/>
      <ellipse cx="50" cy="53" rx="19" ry="18" fill="#ffdfc4"/>
      <circle cx="43" cy="51" r="2.5" fill="#0f172a"/>
      <circle cx="57" cy="51" r="2.5" fill="#0f172a"/>
      <path d="M45 59 Q50 64 55 59" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinecap="round"/>
      <path d="M31 72 Q50 68 69 72 L75 92 L25 92 Z" fill="#e11d48"/>
      {/* Figma pen tool / design layers */}
      <g transform="translate(68, 44) rotate(15)">
        <rect width="18" height="18" rx="4" fill="#fb7185" stroke="#ffffff" strokeWidth="1.2"/>
        <circle cx="6"  cy="6"  r="2" fill="#ffffff"/>
        <circle cx="12" cy="12" r="2" fill="#4c0519"/>
        <path d="M6 6 L12 12" stroke="#ffffff" strokeWidth="1.2"/>
      </g>
      <rect x="22" y="78" width="56" height="15" rx="7.5" fill="#e11d48"/>
      <text x="50" y="89" fontSize="8" fontFamily="sans-serif" fontWeight="900" fill="#ffffff" textAnchor="middle">UI / UX</text>
    </svg>
  );
}

// ── Tech slug → avatar map ────────────────────────────────────────────────────

const TECH_AVATAR_MAP: Record<string, (p: AvatarProps) => React.ReactElement> = {
  "backend-technologies": BackendAvatar,
  "ai-ml":                PythonAiAvatar,
  "web-technologies":     FrontendAvatar,
  "cloud":                CloudAvatar,
  "mobile":               MobileAvatar,
  "security":             SecurityAvatar,
  "databases":            DatabaseAvatar,
  "content-management":   UiUxAvatar,
};

export function TechAvatar({ slug, ...rest }: { slug: string } & AvatarProps) {
  const Comp = TECH_AVATAR_MAP[slug] ?? BackendAvatar;
  return <Comp {...rest} />;
}
