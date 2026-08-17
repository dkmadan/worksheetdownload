import React from "react";

type P = { size: number };

// ── Search ────────────────────────────────────────────────────────────────────

export function ElasticsearchIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Elasticsearch">
      <rect width="100" height="100" rx="22" fill="#082f49"/>
      <ellipse cx="50" cy="50" rx="26" ry="10" fill="none" stroke="#38bdf8" strokeWidth="3.5"/>
      <ellipse cx="50" cy="50" rx="26" ry="10" fill="none" stroke="#38bdf8" strokeWidth="3.5" transform="rotate(60 50 50)"/>
      <ellipse cx="50" cy="50" rx="26" ry="10" fill="none" stroke="#0ea5e9" strokeWidth="3.5" transform="rotate(120 50 50)"/>
      <circle cx="50" cy="50" r="6" fill="#38bdf8"/>
    </svg>
  );
}

export function OpenSearchIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="OpenSearch">
      <rect width="100" height="100" rx="22" fill="#172554"/>
      <circle cx="50" cy="50" r="22" fill="none" stroke="#60a5fa" strokeWidth="4"/>
      <circle cx="50" cy="50" r="10" fill="#3b82f6"/>
      <polygon points="50,28 56,46 50,38 44,46" fill="#93c5fd"/>
    </svg>
  );
}

export function ApacheSolrIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Apache Solr">
      <rect width="100" height="100" rx="22" fill="#431407"/>
      <circle cx="50" cy="50" r="8" fill="#f97316"/>
      {[0,45,90,135,180,225,270,315].map((a,i) => (
        <polygon key={i} points="50,22 53,32 50,28 47,32"
          fill={i % 2 === 0 ? "#fb923c" : "#fdba74"}
          transform={`rotate(${a} 50 50)`}/>
      ))}
    </svg>
  );
}

export function MeilisearchIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Meilisearch">
      <rect width="100" height="100" rx="22" fill="#4c0519"/>
      <path d="M22 68 L42 32 L50 50 L58 32 L78 68" fill="none" stroke="#fb7185" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function TypesenseIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Typesense">
      <rect width="100" height="100" rx="22" fill="#450a0a"/>
      <circle cx="50" cy="50" r="24" fill="none" stroke="#f87171" strokeWidth="4"/>
      <polygon points="50,32 58,50 50,44 42,50" fill="#fca5a5"/>
      <rect x="47" y="50" width="6" height="16" rx="3" fill="#fca5a5"/>
    </svg>
  );
}

export function AlgoliaIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Algolia">
      <rect width="100" height="100" rx="22" fill="#172554"/>
      <circle cx="50" cy="50" r="22" fill="#3b82f6"/>
      <polygon points="50,32 53,42 63,42 55,48 58,58 50,52 42,58 45,48 37,42 47,42" fill="#ffffff"/>
    </svg>
  );
}

// ── Security ──────────────────────────────────────────────────────────────────

export function VaultIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="HashiCorp Vault">
      <rect width="100" height="100" rx="22" fill="#1e293b"/>
      <polygon points="50,18 74,32 74,68 50,82 26,68 26,32" fill="none" stroke="#fbbf24" strokeWidth="4"/>
      <rect x="38" y="42" width="24" height="18" rx="3" fill="#fbbf24"/>
      <rect x="44" y="34" width="12" height="12" rx="6" fill="none" stroke="#fbbf24" strokeWidth="3.5"/>
      <circle cx="50" cy="51" r="3" fill="#1e293b"/>
    </svg>
  );
}

export function WafIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="WAF">
      <rect width="100" height="100" rx="22" fill="#431407"/>
      <path d="M50 18 L72 28 L72 56 Q72 70 50 80 Q28 70 28 56 L28 28 Z" fill="none" stroke="#f97316" strokeWidth="4"/>
      <line x1="34" y1="40" x2="66" y2="40" stroke="#fb923c" strokeWidth="3"/>
      <line x1="34" y1="50" x2="66" y2="50" stroke="#fb923c" strokeWidth="3"/>
      <line x1="34" y1="60" x2="60" y2="60" stroke="#fb923c" strokeWidth="3"/>
    </svg>
  );
}

export function SonarQubeIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="SonarQube">
      <rect width="100" height="100" rx="22" fill="#082f49"/>
      <circle cx="50" cy="50" r="28" fill="none" stroke="#38bdf8" strokeWidth="3" strokeDasharray="12 6"/>
      <circle cx="50" cy="50" r="18" fill="none" stroke="#0ea5e9" strokeWidth="3" strokeDasharray="8 4"/>
      <circle cx="50" cy="50" r="8" fill="none" stroke="#7dd3fc" strokeWidth="3"/>
      <circle cx="50" cy="50" r="3" fill="#38bdf8"/>
    </svg>
  );
}

export function SnykIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Snyk">
      <rect width="100" height="100" rx="22" fill="#311042"/>
      <polygon points="50,20 72,32 72,52 50,80 28,52 28,32" fill="none" stroke="#a855f7" strokeWidth="4"/>
      <circle cx="42" cy="46" r="5" fill="#c084fc"/>
      <circle cx="58" cy="46" r="5" fill="#c084fc"/>
      <path d="M46 56 Q50 60 54 56" fill="none" stroke="#e9d5ff" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  );
}

export function TrivyIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Trivy">
      <rect width="100" height="100" rx="22" fill="#0c4a6e"/>
      <circle cx="50" cy="50" r="26" fill="none" stroke="#38bdf8" strokeWidth="4"/>
      <polygon points="50,30 62,52 38,52" fill="none" stroke="#7dd3fc" strokeWidth="3.5"/>
      <circle cx="50" cy="52" r="4" fill="#38bdf8"/>
    </svg>
  );
}

export function KeycloakIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Keycloak">
      <rect width="100" height="100" rx="22" fill="#082f49"/>
      <circle cx="40" cy="42" r="10" fill="none" stroke="#38bdf8" strokeWidth="4"/>
      <line x1="50" y1="42" x2="72" y2="42" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round"/>
      <line x1="66" y1="42" x2="66" y2="52" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round"/>
      <line x1="72" y1="42" x2="72" y2="52" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round"/>
      <circle cx="40" cy="42" r="4" fill="#facc15"/>
    </svg>
  );
}

export function ZeroTrustIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Zero Trust">
      <rect width="100" height="100" rx="22" fill="#3b0764"/>
      <circle cx="50" cy="50" r="24" fill="none" stroke="#a855f7" strokeWidth="4"/>
      <rect x="42" y="48" width="16" height="14" rx="2" fill="#a855f7"/>
      <path d="M44 48 Q44 38 56 38 Q60 38 62 42" fill="none" stroke="#c084fc" strokeWidth="3.5" strokeLinecap="round"/>
      <circle cx="50" cy="54" r="2.5" fill="#e9d5ff"/>
    </svg>
  );
}

// ── Testing ───────────────────────────────────────────────────────────────────

export function JestIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Jest">
      <rect width="100" height="100" rx="22" fill="#450a0a"/>
      <path d="M34 28 Q34 20 50 20 Q66 20 66 28 L60 48 Q58 56 50 60 Q42 56 40 48 Z" fill="#f43f5e"/>
      <path d="M34 28 L28 60 Q28 68 36 68 Q40 68 42 64" fill="none" stroke="#fda4af" strokeWidth="3.5" strokeLinecap="round"/>
      <path d="M66 28 L72 60 Q72 68 64 68 Q60 68 58 64" fill="none" stroke="#fda4af" strokeWidth="3.5" strokeLinecap="round"/>
      <circle cx="42" cy="78" r="4" fill="#facc15"/>
      <circle cx="50" cy="82" r="4" fill="#facc15"/>
      <circle cx="58" cy="78" r="4" fill="#facc15"/>
    </svg>
  );
}

export function PlaywrightIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Playwright">
      <rect width="100" height="100" rx="22" fill="#064e3b"/>
      <circle cx="38" cy="50" r="18" fill="#10b981"/>
      <circle cx="62" cy="50" r="18" fill="#059669"/>
      <circle cx="30" cy="44" r="5" fill="#ecfdf5"/>
      <circle cx="54" cy="44" r="5" fill="#ecfdf5"/>
      <circle cx="30" cy="44" r="2" fill="#064e3b"/>
      <circle cx="54" cy="44" r="2" fill="#064e3b"/>
    </svg>
  );
}

export function CypressIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Cypress">
      <rect width="100" height="100" rx="22" fill="#0f172a"/>
      <circle cx="50" cy="50" r="24" fill="none" stroke="#22c55e" strokeWidth="4" strokeDasharray="10 5"/>
      <circle cx="50" cy="50" r="7" fill="#22c55e"/>
    </svg>
  );
}

export function SeleniumIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Selenium">
      <rect width="100" height="100" rx="22" fill="#064e3b"/>
      <rect x="24" y="30" width="52" height="40" rx="5" fill="#10b981"/>
      <text x="50" y="58" fontSize="22" fontFamily="monospace" fontWeight="900" fill="#ecfdf5" textAnchor="middle">Se</text>
    </svg>
  );
}

export function JUnitIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="JUnit">
      <rect width="100" height="100" rx="22" fill="#450a0a"/>
      <circle cx="38" cy="50" r="20" fill="#dc2626"/>
      <text x="38" y="57" fontSize="18" fontFamily="monospace" fontWeight="900" fill="#ffffff" textAnchor="middle">J</text>
      <circle cx="66" cy="50" r="14" fill="#16a34a"/>
      <path d="M60 50 L64 54 L73 44" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function PyTestIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="PyTest">
      <rect width="100" height="100" rx="22" fill="#082f49"/>
      <polygon points="50,22 74,66 26,66" fill="none" stroke="#38bdf8" strokeWidth="4"/>
      <path d="M44 58 L49 52 L53 58" fill="none" stroke="#7dd3fc" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="49" y1="52" x2="49" y2="44" stroke="#7dd3fc" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  );
}

export function K6Icon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="k6">
      <rect width="100" height="100" rx="22" fill="#2e1065"/>
      <circle cx="50" cy="50" r="26" fill="#7c3aed"/>
      <text x="50" y="57" fontSize="20" fontFamily="monospace" fontWeight="900" fill="#ffffff" textAnchor="middle">k6</text>
    </svg>
  );
}

export function VitestIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Vitest">
      <rect width="100" height="100" rx="22" fill="#064e3b"/>
      <polygon points="50,22 56,44 78,44 60,58 68,80 50,66 32,80 40,58 22,44 44,44" fill="#34d399"/>
      <polygon points="50,34 53,44 63,44 55,50 58,60 50,54 42,60 45,50 37,44 47,44" fill="#10b981"/>
    </svg>
  );
}

// ── Operating Systems ─────────────────────────────────────────────────────────

export function LinuxIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Linux">
      <rect width="100" height="100" rx="22" fill="#431407"/>
      <ellipse cx="50" cy="42" rx="16" ry="20" fill="#fbbf24"/>
      <ellipse cx="50" cy="42" rx="10" ry="14" fill="#451a03"/>
      <circle cx="44" cy="38" r="3" fill="#fbbf24"/>
      <circle cx="56" cy="38" r="3" fill="#fbbf24"/>
      <circle cx="44" cy="38" r="1.5" fill="#000"/>
      <circle cx="56" cy="38" r="1.5" fill="#000"/>
      <ellipse cx="42" cy="26" rx="5" ry="8" fill="#fbbf24" transform="rotate(-15 42 26)"/>
      <ellipse cx="58" cy="26" rx="5" ry="8" fill="#fbbf24" transform="rotate(15 58 26)"/>
      <path d="M38 64 L30 80 L40 76 L50 82 L60 76 L70 80 L62 64 Q50 72 38 64Z" fill="#fbbf24"/>
    </svg>
  );
}

export function RhelIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Red Hat Enterprise Linux">
      <rect width="100" height="100" rx="22" fill="#450a0a"/>
      <ellipse cx="50" cy="44" rx="18" ry="12" fill="#ef4444"/>
      <path d="M32 44 Q32 56 50 56 Q68 56 68 44" fill="#dc2626"/>
      <path d="M26 60 Q26 52 34 50 L66 50 Q74 52 74 60 Q74 72 50 72 Q26 72 26 60 Z" fill="#b91c1c"/>
    </svg>
  );
}

export function MacOsIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="macOS">
      <rect width="100" height="100" rx="22" fill="#1e293b"/>
      <path d="M50 18 C50 18 38 22 36 34 C36 34 28 34 26 44 C24 54 32 60 38 58 C40 64 46 68 50 68 C54 68 60 64 62 58 C68 60 76 54 74 44 C72 34 64 34 64 34 C62 22 50 18 50 18 Z" fill="#94a3b8"/>
      <path d="M50 14 C52 20 54 18 56 14" fill="none" stroke="#cbd5e1" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  );
}

export function WindowsServerIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Windows Server">
      <rect width="100" height="100" rx="22" fill="#0c4a6e"/>
      <rect x="20" y="20" width="26" height="26" rx="3" fill="#38bdf8"/>
      <rect x="54" y="20" width="26" height="26" rx="3" fill="#0ea5e9"/>
      <rect x="20" y="54" width="26" height="26" rx="3" fill="#0284c7"/>
      <rect x="54" y="54" width="26" height="26" rx="3" fill="#0369a1"/>
    </svg>
  );
}

export function FreeBsdIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="FreeBSD">
      <rect width="100" height="100" rx="22" fill="#450a0a"/>
      <circle cx="50" cy="50" r="20" fill="none" stroke="#f87171" strokeWidth="4"/>
      <path d="M44 28 Q38 18 36 28 Q32 32 38 36" fill="none" stroke="#fca5a5" strokeWidth="3.5" strokeLinecap="round"/>
      <path d="M56 28 Q62 18 64 28 Q68 32 62 36" fill="none" stroke="#fca5a5" strokeWidth="3.5" strokeLinecap="round"/>
    </svg>
  );
}

export function AlpineLinuxIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Alpine Linux">
      <rect width="100" height="100" rx="22" fill="#172554"/>
      <polygon points="50,20 76,70 24,70" fill="#1d4ed8"/>
      <polygon points="50,20 60,44 40,44" fill="#93c5fd"/>
      <polygon points="50,20 56,30 44,30" fill="#dbeafe"/>
    </svg>
  );
}

// ── Programming Languages ─────────────────────────────────────────────────────

export function PythonIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Python">
      <rect width="100" height="100" rx="22" fill="#172554"/>
      <path d="M50 20 C36 20 30 26 30 34 L30 42 L50 42 L50 46 L26 46 C18 46 18 56 26 60 L30 62 L30 68 C30 76 36 80 50 80 C64 80 70 74 70 66 L70 58 L50 58 L50 54 L74 54 C82 54 82 44 74 40 L70 38 L70 34 C70 26 64 20 50 20Z" fill="#3b82f6"/>
      <circle cx="40" cy="34" r="3" fill="#facc15"/>
      <circle cx="60" cy="66" r="3" fill="#facc15"/>
    </svg>
  );
}

export function JavaScriptIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="JavaScript">
      <rect width="100" height="100" rx="22" fill="#451a03"/>
      <rect x="20" y="20" width="60" height="60" rx="4" fill="#facc15"/>
      <text x="58" y="72" fontSize="28" fontFamily="monospace" fontWeight="900" fill="#1c1917" textAnchor="middle">JS</text>
    </svg>
  );
}

export function TypeScriptIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="TypeScript">
      <rect width="100" height="100" rx="22" fill="#082f49"/>
      <rect x="20" y="20" width="60" height="60" rx="4" fill="#2563eb"/>
      <text x="58" y="72" fontSize="28" fontFamily="monospace" fontWeight="900" fill="#ffffff" textAnchor="middle">TS</text>
    </svg>
  );
}

export function RustIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Rust">
      <rect width="100" height="100" rx="22" fill="#431407"/>
      <circle cx="50" cy="50" r="26" fill="none" stroke="#f97316" strokeWidth="4"/>
      <circle cx="50" cy="50" r="4" fill="#f97316"/>
      {[0,45,90,135,180,225,270,315].map((a,i) => (
        <rect key={i} x="48" y="24" width="4" height="8" rx="2" fill="#f97316"
          transform={`rotate(${a} 50 50)`}/>
      ))}
      <text x="50" y="56" fontSize="16" fontFamily="monospace" fontWeight="900" fill="#ffffff" textAnchor="middle">R</text>
    </svg>
  );
}

export function GoIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Go">
      <rect width="100" height="100" rx="22" fill="#0c4a6e"/>
      <path d="M22 50 Q22 38 34 38 L52 38 Q64 38 64 46 Q64 50 58 52 L66 62 Q70 66 70 66 L60 66 L52 56 L44 56 L44 66 L36 66 L36 56 L34 56 Q22 56 22 50Z" fill="#38bdf8"/>
      <circle cx="40" cy="46" r="2.5" fill="#082f49"/>
      <circle cx="78" cy="46" r="5" fill="#38bdf8"/>
      <circle cx="78" cy="46" r="2" fill="#082f49"/>
    </svg>
  );
}

export function JavaIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Java">
      <rect width="100" height="100" rx="22" fill="#172554"/>
      <path d="M42 20 C38 28 44 32 46 38 C48 44 42 48 42 48 C48 44 58 40 54 32 C50 24 42 20 42 20Z" fill="#f59e0b"/>
      <path d="M38 52 C30 56 34 62 40 62 C28 66 26 72 40 74 C28 74 22 68 30 64 C26 60 30 54 38 52Z" fill="#60a5fa"/>
      <path d="M60 52 C68 56 64 62 58 62 C70 66 72 72 58 74 C70 74 76 68 68 64 C72 60 68 54 60 52Z" fill="#60a5fa"/>
      <path d="M36 76 Q50 80 64 76 Q50 82 36 76Z" fill="#93c5fd"/>
    </svg>
  );
}

export function CppIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="C++">
      <rect width="100" height="100" rx="22" fill="#082f49"/>
      <polygon points="50,18 72,30 72,70 50,82 28,70 28,30" fill="#0ea5e9"/>
      <text x="35" y="57" fontSize="20" fontFamily="monospace" fontWeight="900" fill="#ffffff" textAnchor="middle">C</text>
      <line x1="56" y1="44" x2="68" y2="44" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
      <line x1="62" y1="38" x2="62" y2="50" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
      <line x1="56" y1="56" x2="68" y2="56" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
      <line x1="62" y1="50" x2="62" y2="62" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  );
}

export function CSharpIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="C#">
      <rect width="100" height="100" rx="22" fill="#2e1065"/>
      <polygon points="50,18 72,30 72,70 50,82 28,70 28,30" fill="#7c3aed"/>
      <text x="35" y="57" fontSize="20" fontFamily="monospace" fontWeight="900" fill="#ffffff" textAnchor="middle">C</text>
      <line x1="56" y1="40" x2="56" y2="60" stroke="#fff" strokeWidth="2.5"/>
      <line x1="63" y1="40" x2="63" y2="60" stroke="#fff" strokeWidth="2.5"/>
      <line x1="53" y1="47" x2="66" y2="47" stroke="#fff" strokeWidth="2.5"/>
      <line x1="53" y1="54" x2="66" y2="54" stroke="#fff" strokeWidth="2.5"/>
    </svg>
  );
}

export function PhpIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="PHP">
      <rect width="100" height="100" rx="22" fill="#1e1b4b"/>
      <ellipse cx="50" cy="50" rx="32" ry="18" fill="#818cf8"/>
      <text x="50" y="57" fontSize="22" fontFamily="monospace" fontWeight="900" fill="#1e1b4b" textAnchor="middle">php</text>
    </svg>
  );
}

export function RubyIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Ruby">
      <rect width="100" height="100" rx="22" fill="#450a0a"/>
      <polygon points="50,20 68,30 76,50 68,70 50,80 32,70 24,50 32,30" fill="#ef4444"/>
      <polygon points="50,30 62,38 66,50 62,62 50,70 38,62 34,50 38,38" fill="#dc2626"/>
      <polygon points="50,38 58,44 60,50 58,56 50,62 42,56 40,50 42,44" fill="#f87171"/>
    </svg>
  );
}

export function SwiftIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Swift">
      <rect width="100" height="100" rx="22" fill="#431407"/>
      <path d="M72 62 C72 62 76 40 60 26 C70 38 66 52 60 56 C60 56 68 46 58 36 C46 24 28 34 28 34 C28 34 50 46 48 64 C46 74 36 80 36 80 C46 76 66 72 72 62 Z" fill="#f97316"/>
    </svg>
  );
}

export function KotlinIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Kotlin">
      <rect width="100" height="100" rx="22" fill="#2e1065"/>
      <polygon points="22,22 78,22 78,22 50,50" fill="#7c3aed"/>
      <polygon points="22,22 50,50 22,78" fill="#a855f7"/>
      <polygon points="50,50 78,22 78,78" fill="#c084fc"/>
      <polygon points="22,78 50,50 78,78" fill="#9333ea"/>
    </svg>
  );
}

export function ScalaIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Scala">
      <rect width="100" height="100" rx="22" fill="#450a0a"/>
      <rect x="26" y="22" width="48" height="16" rx="4" fill="#dc2626"/>
      <rect x="26" y="42" width="48" height="16" rx="4" fill="#ef4444"/>
      <rect x="26" y="62" width="48" height="16" rx="4" fill="#f87171"/>
    </svg>
  );
}

export function RLanguageIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="R">
      <rect width="100" height="100" rx="22" fill="#082f49"/>
      <ellipse cx="48" cy="42" rx="18" ry="14" fill="none" stroke="#38bdf8" strokeWidth="4"/>
      <text x="50" y="78" fontSize="28" fontFamily="monospace" fontWeight="900" fill="#7dd3fc" textAnchor="middle">R</text>
      <line x1="48" y1="56" x2="62" y2="74" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round"/>
    </svg>
  );
}

// ── Robotics ──────────────────────────────────────────────────────────────────

export function RosIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="ROS/ROS2">
      <rect width="100" height="100" rx="22" fill="#1e293b"/>
      {[24,40,56].map(x => [28,44,60].map(y => (
        <circle key={`${x},${y}`} cx={x} cy={y} r="5" fill="#94a3b8"/>
      )))}
      <rect x="70" y="24" width="10" height="40" rx="3" fill="#64748b"/>
      <rect x="60" y="68" width="24" height="10" rx="3" fill="#64748b"/>
    </svg>
  );
}

export function GazeboIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Gazebo">
      <rect width="100" height="100" rx="22" fill="#431407"/>
      <polygon points="50,20 74,34 74,62 50,76 26,62 26,34" fill="none" stroke="#f97316" strokeWidth="3"/>
      <polygon points="50,20 74,34 50,48" fill="#ea580c"/>
      <polygon points="50,48 74,34 74,62" fill="#c2410c"/>
      <polygon points="50,48 26,34 26,62" fill="#f97316"/>
      <line x1="74" y1="62" x2="86" y2="70" stroke="#fb923c" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  );
}

export function SlamIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="SLAM">
      <rect width="100" height="100" rx="22" fill="#064e3b"/>
      <circle cx="50" cy="50" r="28" fill="none" stroke="#34d399" strokeWidth="2.5" strokeDasharray="8 4"/>
      <circle cx="50" cy="50" r="16" fill="none" stroke="#10b981" strokeWidth="2.5" strokeDasharray="5 3"/>
      <polygon points="50,20 56,40 50,36 44,40" fill="#34d399"/>
      <circle cx="50" cy="50" r="4" fill="#6ee7b7"/>
    </svg>
  );
}

export function ComputerVisionIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Computer Vision">
      <rect width="100" height="100" rx="22" fill="#172554"/>
      <circle cx="50" cy="50" r="16" fill="none" stroke="#60a5fa" strokeWidth="4"/>
      <circle cx="50" cy="50" r="6" fill="#3b82f6"/>
      <path d="M22 22 L34 22 L34 34" fill="none" stroke="#93c5fd" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M78 22 L66 22 L66 34" fill="none" stroke="#93c5fd" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22 78 L34 78 L34 66" fill="none" stroke="#93c5fd" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M78 78 L66 78 L66 66" fill="none" stroke="#93c5fd" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// ── Mobile ────────────────────────────────────────────────────────────────────

export function ReactNativeIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="React Native">
      <rect width="100" height="100" rx="22" fill="#082f49"/>
      <ellipse cx="50" cy="50" rx="28" ry="12" fill="none" stroke="#38bdf8" strokeWidth="3.5"/>
      <ellipse cx="50" cy="50" rx="28" ry="12" fill="none" stroke="#0ea5e9" strokeWidth="3.5" transform="rotate(60 50 50)"/>
      <ellipse cx="50" cy="50" rx="28" ry="12" fill="none" stroke="#7dd3fc" strokeWidth="3.5" transform="rotate(120 50 50)"/>
      <circle cx="50" cy="50" r="5" fill="#38bdf8"/>
    </svg>
  );
}

export function JetpackComposeIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Jetpack Compose">
      <rect width="100" height="100" rx="22" fill="#064e3b"/>
      <rect x="22" y="22" width="24" height="24" rx="5" fill="#10b981"/>
      <rect x="54" y="22" width="24" height="24" rx="5" fill="#34d399"/>
      <rect x="22" y="54" width="24" height="24" rx="5" fill="#059669"/>
      <rect x="54" y="54" width="24" height="24" rx="5" fill="#6ee7b7"/>
    </svg>
  );
}

export function SwiftUiIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="SwiftUI">
      <rect width="100" height="100" rx="22" fill="#082f49"/>
      <circle cx="50" cy="50" r="26" fill="none" stroke="#38bdf8" strokeWidth="4"/>
      <circle cx="50" cy="50" r="16" fill="none" stroke="#7dd3fc" strokeWidth="3"/>
      <circle cx="50" cy="50" r="6" fill="#38bdf8"/>
    </svg>
  );
}

export function IonicIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Ionic">
      <rect width="100" height="100" rx="22" fill="#172554"/>
      <circle cx="50" cy="50" r="24" fill="none" stroke="#3b82f6" strokeWidth="4"/>
      <circle cx="50" cy="50" r="10" fill="#3b82f6"/>
      <circle cx="50" cy="22" r="5" fill="#60a5fa"/>
    </svg>
  );
}

export function ExpoIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Expo">
      <rect width="100" height="100" rx="22" fill="#1c1917"/>
      <path d="M50 20 L74 64 L50 54 L26 64 Z" fill="#e2e8f0"/>
      <path d="M50 34 L66 62 L50 54 L34 62 Z" fill="#94a3b8"/>
    </svg>
  );
}

// ── Networking ────────────────────────────────────────────────────────────────

export function TcpIpIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="TCP/IP">
      <rect width="100" height="100" rx="22" fill="#1e1b4b"/>
      <circle cx="26" cy="50" r="7" fill="#818cf8"/>
      <circle cx="50" cy="26" r="7" fill="#6366f1"/>
      <circle cx="74" cy="50" r="7" fill="#818cf8"/>
      <path d="M33 50 L50 33 M57 33 L74 50" fill="none" stroke="#a5b4fc" strokeWidth="3" strokeLinecap="round"/>
      <path d="M50 33 L50 26" fill="none" stroke="#a5b4fc" strokeWidth="2" strokeLinecap="round"/>
      <path d="M26 57 Q26 74 50 74 Q74 74 74 57" fill="none" stroke="#818cf8" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  );
}

export function DnsIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="DNS">
      <rect width="100" height="100" rx="22" fill="#082f49"/>
      <circle cx="50" cy="26" r="8" fill="#38bdf8"/>
      <circle cx="26" cy="68" r="8" fill="#0ea5e9"/>
      <circle cx="74" cy="68" r="8" fill="#0ea5e9"/>
      <line x1="50" y1="34" x2="32" y2="60" stroke="#7dd3fc" strokeWidth="3" strokeLinecap="round"/>
      <line x1="50" y1="34" x2="68" y2="60" stroke="#7dd3fc" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  );
}

export function LoadBalancerIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Load Balancer">
      <rect width="100" height="100" rx="22" fill="#064e3b"/>
      <circle cx="24" cy="50" r="8" fill="#10b981"/>
      <circle cx="76" cy="30" r="8" fill="#34d399"/>
      <circle cx="76" cy="50" r="8" fill="#34d399"/>
      <circle cx="76" cy="70" r="8" fill="#34d399"/>
      <path d="M32 50 Q54 30 68 30" fill="none" stroke="#6ee7b7" strokeWidth="3" strokeLinecap="round"/>
      <path d="M32 50 L68 50" fill="none" stroke="#6ee7b7" strokeWidth="3" strokeLinecap="round"/>
      <path d="M32 50 Q54 70 68 70" fill="none" stroke="#6ee7b7" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  );
}

export function WireGuardIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="WireGuard">
      <rect width="100" height="100" rx="22" fill="#450a0a"/>
      <path d="M50 18 L72 28 L72 56 Q72 70 50 80 Q28 70 28 56 L28 28 Z" fill="none" stroke="#f87171" strokeWidth="4"/>
      <path d="M38 50 C40 40 46 38 50 42 C54 46 56 44 58 36" fill="none" stroke="#fca5a5" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  );
}

// ── Observability ─────────────────────────────────────────────────────────────

export function OpenTelemetryIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="OpenTelemetry">
      <rect width="100" height="100" rx="22" fill="#082f49"/>
      <circle cx="38" cy="56" r="14" fill="none" stroke="#38bdf8" strokeWidth="4"/>
      <line x1="48" y1="46" x2="72" y2="22" stroke="#7dd3fc" strokeWidth="4" strokeLinecap="round"/>
      <circle cx="38" cy="56" r="5" fill="#38bdf8"/>
    </svg>
  );
}

export function DatadogIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Datadog">
      <rect width="100" height="100" rx="22" fill="#311042"/>
      <rect x="22" y="22" width="56" height="56" rx="6" fill="#a855f7"/>
      <text x="50" y="60" fontSize="24" fontFamily="monospace" fontWeight="900" fill="#ffffff" textAnchor="middle">DD</text>
    </svg>
  );
}

export function NewRelicIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="New Relic">
      <rect width="100" height="100" rx="22" fill="#064e3b"/>
      <polygon points="50,18 72,30 72,70 50,82 28,70 28,30" fill="#10b981"/>
      <polygon points="50,32 62,40 62,60 50,68 38,60 38,40" fill="#059669"/>
      <circle cx="50" cy="50" r="8" fill="#34d399"/>
    </svg>
  );
}

export function JaegerIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Jaeger">
      <rect width="100" height="100" rx="22" fill="#082f49"/>
      <circle cx="50" cy="50" r="26" fill="#1e3a5f"/>
      <circle cx="42" cy="44" r="5" fill="#38bdf8"/>
      <circle cx="58" cy="44" r="5" fill="#38bdf8"/>
      <circle cx="42" cy="44" r="2" fill="#082f49"/>
      <circle cx="58" cy="44" r="2" fill="#082f49"/>
      <path d="M40 56 Q50 64 60 56" fill="none" stroke="#7dd3fc" strokeWidth="2.5" strokeLinecap="round"/>
      <ellipse cx="50" cy="34" rx="4" ry="6" fill="#38bdf8"/>
    </svg>
  );
}

export function LokiIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Loki">
      <rect width="100" height="100" rx="22" fill="#431407"/>
      <circle cx="50" cy="50" r="24" fill="none" stroke="#f97316" strokeWidth="4"/>
      <polygon points="50,30 60,52 40,52" fill="#fb923c"/>
      <circle cx="50" cy="52" r="4" fill="#f97316"/>
    </svg>
  );
}

export function ElkStackIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="ELK Stack">
      <rect width="100" height="100" rx="22" fill="#172554"/>
      <ellipse cx="50" cy="35" rx="24" ry="10" fill="#3b82f6"/>
      <ellipse cx="50" cy="50" rx="24" ry="10" fill="#2563eb"/>
      <ellipse cx="50" cy="65" rx="24" ry="10" fill="#1d4ed8"/>
      <circle cx="50" cy="50" r="5" fill="#93c5fd"/>
    </svg>
  );
}

// ── MLOps / LLMOps ───────────────────────────────────────────────────────────

export function MlflowIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="MLflow">
      <rect width="100" height="100" rx="22" fill="#082f49"/>
      <circle cx="50" cy="50" r="22" fill="none" stroke="#38bdf8" strokeWidth="4"/>
      <path d="M28 50 Q36 30 50 50 Q64 70 72 50" fill="none" stroke="#7dd3fc" strokeWidth="4" strokeLinecap="round"/>
      <circle cx="28" cy="50" r="4" fill="#38bdf8"/>
      <circle cx="72" cy="50" r="4" fill="#38bdf8"/>
    </svg>
  );
}

export function KubeflowIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Kubeflow">
      <rect width="100" height="100" rx="22" fill="#172554"/>
      <polygon points="50,18 74,32 74,68 50,82 26,68 26,32" fill="none" stroke="#60a5fa" strokeWidth="3"/>
      <circle cx="50" cy="36" r="6" fill="#3b82f6"/>
      <circle cx="34" cy="60" r="6" fill="#3b82f6"/>
      <circle cx="66" cy="60" r="6" fill="#3b82f6"/>
      <line x1="50" y1="42" x2="38" y2="54" stroke="#93c5fd" strokeWidth="2.5"/>
      <line x1="50" y1="42" x2="62" y2="54" stroke="#93c5fd" strokeWidth="2.5"/>
    </svg>
  );
}

export function WeightsAndBiasesIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Weights & Biases">
      <rect width="100" height="100" rx="22" fill="#451a03"/>
      <rect x="20" y="40" width="12" height="30" rx="3" fill="#facc15"/>
      <rect x="36" y="28" width="12" height="42" rx="3" fill="#fbbf24"/>
      <rect x="52" y="34" width="12" height="36" rx="3" fill="#f59e0b"/>
      <rect x="68" y="22" width="12" height="48" rx="3" fill="#facc15"/>
    </svg>
  );
}

export function LangSmithIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="LangSmith">
      <rect width="100" height="100" rx="22" fill="#042f2e"/>
      <circle cx="38" cy="58" r="16" fill="none" stroke="#2dd4bf" strokeWidth="4"/>
      <line x1="50" y1="46" x2="76" y2="20" stroke="#5eead4" strokeWidth="4" strokeLinecap="round"/>
      <circle cx="38" cy="58" r="6" fill="#2dd4bf"/>
    </svg>
  );
}

export function DvcIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="DVC">
      <rect width="100" height="100" rx="22" fill="#311042"/>
      <polygon points="50,20 70,36 70,64 50,80 30,64 30,36" fill="none" stroke="#a855f7" strokeWidth="4"/>
      <polygon points="50,32 62,42 62,58 50,68 38,58 38,42" fill="#7c3aed"/>
    </svg>
  );
}

export function BentoMlIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="BentoML">
      <rect width="100" height="100" rx="22" fill="#064e3b"/>
      <rect x="22" y="28" width="56" height="48" rx="5" fill="none" stroke="#10b981" strokeWidth="3.5"/>
      <line x1="22" y1="52" x2="78" y2="52" stroke="#34d399" strokeWidth="3"/>
      <line x1="50" y1="28" x2="50" y2="76" stroke="#34d399" strokeWidth="3"/>
    </svg>
  );
}

export function TritonServerIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Triton Server">
      <rect width="100" height="100" rx="22" fill="#064e3b"/>
      <line x1="50" y1="20" x2="50" y2="80" stroke="#34d399" strokeWidth="5" strokeLinecap="round"/>
      <line x1="28" y1="36" x2="50" y2="20" stroke="#10b981" strokeWidth="4" strokeLinecap="round"/>
      <line x1="72" y1="36" x2="50" y2="20" stroke="#10b981" strokeWidth="4" strokeLinecap="round"/>
      <circle cx="50" cy="20" r="5" fill="#6ee7b7"/>
      <circle cx="28" cy="36" r="4" fill="#34d399"/>
      <circle cx="72" cy="36" r="4" fill="#34d399"/>
      <circle cx="50" cy="80" r="4" fill="#34d399"/>
    </svg>
  );
}

// ── Messaging & Streaming ─────────────────────────────────────────────────────

export function RabbitMqIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="RabbitMQ">
      <rect width="100" height="100" rx="22" fill="#431407"/>
      <ellipse cx="46" cy="36" rx="5" ry="8" fill="#f97316" transform="rotate(-10 46 36)"/>
      <ellipse cx="58" cy="36" rx="5" ry="8" fill="#f97316" transform="rotate(10 58 36)"/>
      <ellipse cx="52" cy="55" rx="18" ry="16" fill="#fb923c"/>
      <circle cx="44" cy="52" r="3" fill="#1c0a00"/>
      <circle cx="60" cy="52" r="3" fill="#1c0a00"/>
      <ellipse cx="52" cy="60" rx="6" ry="4" fill="#f97316"/>
    </svg>
  );
}

export function ApachePulsarIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Apache Pulsar">
      <rect width="100" height="100" rx="22" fill="#082f49"/>
      <circle cx="50" cy="50" r="26" fill="none" stroke="#38bdf8" strokeWidth="3.5"/>
      <circle cx="50" cy="50" r="14" fill="none" stroke="#0ea5e9" strokeWidth="3"/>
      <circle cx="50" cy="50" r="4" fill="#38bdf8"/>
      <circle cx="50" cy="22" r="5" fill="#7dd3fc"/>
      <circle cx="50" cy="78" r="5" fill="#7dd3fc"/>
    </svg>
  );
}

export function NatsIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="NATS">
      <rect width="100" height="100" rx="22" fill="#172554"/>
      <polygon points="50,22 76,68 24,68" fill="none" stroke="#60a5fa" strokeWidth="4"/>
      <polygon points="50,36 66,64 34,64" fill="#3b82f6"/>
    </svg>
  );
}

export function AwsSqsIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Amazon SQS">
      <rect width="100" height="100" rx="22" fill="#431407"/>
      <rect x="20" y="26" width="60" height="16" rx="4" fill="#f97316"/>
      <rect x="20" y="46" width="60" height="16" rx="4" fill="#ea580c"/>
      <rect x="20" y="66" width="60" height="16" rx="4" fill="#c2410c"/>
    </svg>
  );
}

export function ActiveMqIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Apache ActiveMQ">
      <rect width="100" height="100" rx="22" fill="#450a0a"/>
      <path d="M30 72 C26 60 30 44 42 36 C50 30 60 30 68 36 C58 32 46 36 40 46 C34 56 36 68 44 74 Z" fill="#f87171"/>
      <circle cx="60" cy="42" r="10" fill="#facc15"/>
    </svg>
  );
}

export function GooglePubSubIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Google Pub/Sub">
      <rect width="100" height="100" rx="22" fill="#172554"/>
      <polygon points="50,24 68,36 68,64 50,76 32,64 32,36" fill="none" stroke="#60a5fa" strokeWidth="3.5"/>
      <circle cx="50" cy="50" r="6" fill="#3b82f6"/>
      <circle cx="50" cy="24" r="4" fill="#93c5fd"/>
      <circle cx="68" cy="36" r="4" fill="#93c5fd"/>
      <circle cx="68" cy="64" r="4" fill="#93c5fd"/>
      <circle cx="50" cy="76" r="4" fill="#93c5fd"/>
      <circle cx="32" cy="64" r="4" fill="#93c5fd"/>
      <circle cx="32" cy="36" r="4" fill="#93c5fd"/>
    </svg>
  );
}

export function ZeroMqIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="ZeroMQ">
      <rect width="100" height="100" rx="22" fill="#042f2e"/>
      <ellipse cx="50" cy="50" rx="26" ry="14" fill="none" stroke="#2dd4bf" strokeWidth="4"/>
      <ellipse cx="50" cy="50" rx="14" ry="26" fill="none" stroke="#14b8a6" strokeWidth="3"/>
      <circle cx="50" cy="50" r="5" fill="#5eead4"/>
    </svg>
  );
}

// ── Microservices ─────────────────────────────────────────────────────────────

export function EnvoyIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Envoy">
      <rect width="100" height="100" rx="22" fill="#4c0519"/>
      <polygon points="50,18 74,32 74,68 50,82 26,68 26,32" fill="none" stroke="#fb7185" strokeWidth="3.5"/>
      <polygon points="50,30 66,40 66,60 50,70 34,60 34,40" fill="#be123c"/>
      <circle cx="50" cy="50" r="6" fill="#fda4af"/>
    </svg>
  );
}

export function KongIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Kong">
      <rect width="100" height="100" rx="22" fill="#064e3b"/>
      <polygon points="50,20 70,36 66,56 78,56 72,68 28,68 22,56 34,56 30,36" fill="#10b981"/>
      <circle cx="42" cy="48" r="4" fill="#064e3b"/>
      <circle cx="58" cy="48" r="4" fill="#064e3b"/>
    </svg>
  );
}

export function TraefikIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Traefik">
      <rect width="100" height="100" rx="22" fill="#082f49"/>
      <circle cx="50" cy="50" r="24" fill="none" stroke="#38bdf8" strokeWidth="3.5"/>
      <circle cx="50" cy="50" r="8" fill="#0ea5e9"/>
      <line x1="50" y1="26" x2="50" y2="38" stroke="#7dd3fc" strokeWidth="5" strokeLinecap="round"/>
      <line x1="74" y1="50" x2="62" y2="50" stroke="#7dd3fc" strokeWidth="5" strokeLinecap="round"/>
      <line x1="50" y1="74" x2="50" y2="62" stroke="#7dd3fc" strokeWidth="5" strokeLinecap="round"/>
      <line x1="26" y1="50" x2="38" y2="50" stroke="#7dd3fc" strokeWidth="5" strokeLinecap="round"/>
    </svg>
  );
}

export function EurekaIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Netflix Eureka">
      <rect width="100" height="100" rx="22" fill="#450a0a"/>
      <rect x="24" y="22" width="16" height="56" rx="3" fill="#ef4444"/>
      <rect x="24" y="22" width="52" height="16" rx="3" fill="#ef4444"/>
      <rect x="60" y="22" width="16" height="56" rx="3" fill="#ef4444"/>
    </svg>
  );
}

export function DaprIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Dapr">
      <rect width="100" height="100" rx="22" fill="#172554"/>
      <circle cx="50" cy="50" r="22" fill="none" stroke="#3b82f6" strokeWidth="4"/>
      <circle cx="50" cy="26" r="6" fill="#60a5fa"/>
      <circle cx="28" cy="64" r="6" fill="#60a5fa"/>
      <circle cx="72" cy="64" r="6" fill="#60a5fa"/>
    </svg>
  );
}
