import React from "react";

type P = { size: number };

export function RestIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="REST API">
      <rect width="100" height="100" rx="22" fill="#082f49"/>
      <circle cx="28" cy="50" r="9" fill="#0284c7"/>
      <circle cx="72" cy="50" r="9" fill="#38bdf8"/>
      <path d="M37 44 Q50 34 63 44" fill="none" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round"/>
      <polygon points="63,44 57,40 59,47" fill="#38bdf8"/>
      <path d="M63 56 Q50 66 37 56" fill="none" stroke="#0284c7" strokeWidth="3" strokeLinecap="round"/>
      <polygon points="37,56 43,60 41,53" fill="#0284c7"/>
    </svg>
  );
}

export function GraphqlIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="GraphQL">
      <rect width="100" height="100" rx="22" fill="#4a0429"/>
      <polygon points="50,18 78,34 78,66 50,82 22,66 22,34" fill="none" stroke="#e11d48" strokeWidth="3"/>
      <polygon points="50,18 78,66 22,66" fill="none" stroke="#f43f5e" strokeWidth="2"/>
      <polygon points="50,82 78,34 22,34" fill="none" stroke="#f43f5e" strokeWidth="2"/>
      <circle cx="50" cy="18" r="4.5" fill="#fb7185"/>
      <circle cx="78" cy="34" r="4.5" fill="#fb7185"/>
      <circle cx="78" cy="66" r="4.5" fill="#fb7185"/>
      <circle cx="50" cy="82" r="4.5" fill="#fb7185"/>
      <circle cx="22" cy="66" r="4.5" fill="#fb7185"/>
      <circle cx="22" cy="34" r="4.5" fill="#fb7185"/>
    </svg>
  );
}

export function GrpcIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="gRPC">
      <rect width="100" height="100" rx="22" fill="#042f2e"/>
      <circle cx="50" cy="50" r="36" fill="none" stroke="#0d9488" strokeWidth="2.5" strokeDasharray="4 3"/>
      <line x1="30" y1="44" x2="70" y2="44" stroke="#2dd4bf" strokeWidth="3" strokeLinecap="round"/>
      <line x1="30" y1="56" x2="58" y2="56" stroke="#5eead4" strokeWidth="3" strokeLinecap="round"/>
      <circle cx="70" cy="56" r="3" fill="#5eead4"/>
      <polygon points="50,22 42,36 49,36 47,48 58,34 51,34" fill="#facc15"/>
    </svg>
  );
}

export function WebSocketIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="WebSocket">
      <rect width="100" height="100" rx="22" fill="#311042"/>
      <path d="M26 44 C34 30, 66 30, 74 44" fill="none" stroke="#a855f7" strokeWidth="3.5" strokeLinecap="round"/>
      <polygon points="75,44 67,41 71,36" fill="#a855f7"/>
      <path d="M74 56 C66 70, 34 70, 26 56" fill="none" stroke="#c084fc" strokeWidth="3.5" strokeLinecap="round"/>
      <polygon points="25,56 33,59 29,64" fill="#c084fc"/>
      <polygon points="52,36 44,50 51,50 48,64 58,48 51,48" fill="#fbbf24"/>
    </svg>
  );
}

export function SwaggerIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Swagger/OpenAPI">
      <rect width="100" height="100" rx="22" fill="#064e3b"/>
      <circle cx="50" cy="50" r="32" fill="#10b981"/>
      <circle cx="50" cy="50" r="24" fill="#064e3b"/>
      <circle cx="50" cy="38" r="4" fill="#34d399"/>
      <circle cx="38" cy="58" r="4" fill="#34d399"/>
      <circle cx="62" cy="58" r="4" fill="#34d399"/>
      <line x1="50" y1="38" x2="38" y2="58" stroke="#34d399" strokeWidth="2"/>
      <line x1="50" y1="38" x2="62" y2="58" stroke="#34d399" strokeWidth="2"/>
      <line x1="38" y1="58" x2="62" y2="58" stroke="#34d399" strokeWidth="2"/>
    </svg>
  );
}

export function WebhooksIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Webhooks">
      <rect width="100" height="100" rx="22" fill="#431407"/>
      <circle cx="50" cy="28" r="6" fill="none" stroke="#f97316" strokeWidth="3"/>
      <path d="M50 34 L50 62 C50 74 68 74 68 62 L68 54" fill="none" stroke="#f97316" strokeWidth="4" strokeLinecap="round"/>
      <polygon points="68,50 62,58 74,58" fill="#fb923c"/>
      <circle cx="28" cy="52" r="3" fill="#fdba74"/>
      <path d="M28 42 A14 14 0 0 0 28 62" fill="none" stroke="#fdba74" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  );
}

export function OAuthIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="OAuth 2.0">
      <rect width="100" height="100" rx="22" fill="#1e1b4b"/>
      <path d="M50 20 L74 30 L74 52 C74 68 50 78 50 78 C50 78 26 68 26 52 L26 30 Z" fill="#4f46e5"/>
      <circle cx="50" cy="45" r="5" fill="#fbbf24"/>
      <polygon points="48,45 52,45 54,58 46,58" fill="#fbbf24"/>
    </svg>
  );
}

export function JwtIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="JWT">
      <rect width="100" height="100" rx="22" fill="#4a044e"/>
      <circle cx="50" cy="50" r="34" fill="none" stroke="#ec4899" strokeWidth="5" strokeDasharray="60 180"/>
      <circle cx="50" cy="50" r="34" fill="none" stroke="#06b6d4" strokeWidth="5" strokeDasharray="60 180" strokeDashoffset="-70"/>
      <circle cx="50" cy="50" r="34" fill="none" stroke="#10b981" strokeWidth="5" strokeDasharray="60 180" strokeDashoffset="-140"/>
      <polygon points="46,40 54,40 50,47" fill="#ffffff"/>
      <text x="50" y="55" fontSize="11" fontFamily="sans-serif" fontWeight="900" fill="#ffffff" textAnchor="middle">JWT</text>
    </svg>
  );
}

export function PostmanIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Postman">
      <rect width="100" height="100" rx="22" fill="#431407"/>
      <circle cx="50" cy="50" r="32" fill="#ea580c"/>
      <path d="M36 64 L42 46 L54 36 L64 36 L64 46 L54 58 L36 64 Z" fill="#ffffff"/>
      <circle cx="56" cy="44" r="3.5" fill="#ea580c"/>
      <polygon points="36,64 30,70 38,68" fill="#facc15"/>
    </svg>
  );
}

export function ApiGatewayIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="API Gateway">
      <rect width="100" height="100" rx="22" fill="#2e1065"/>
      <circle cx="30" cy="50" r="10" fill="#a855f7"/>
      <circle cx="70" cy="30" r="6" fill="#38bdf8"/>
      <circle cx="70" cy="50" r="6" fill="#34d399"/>
      <circle cx="70" cy="70" r="6" fill="#f59e0b"/>
      <path d="M38 46 L64 32" stroke="#c084fc" strokeWidth="2" strokeDasharray="3 2"/>
      <path d="M40 50 L64 50" stroke="#c084fc" strokeWidth="2"/>
      <path d="M38 54 L64 68" stroke="#c084fc" strokeWidth="2" strokeDasharray="3 2"/>
      <text x="30" y="53" fontSize="6" fontFamily="monospace" fontWeight="900" fill="#ffffff" textAnchor="middle">GW</text>
    </svg>
  );
}

export function SoapIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="SOAP">
      <rect width="100" height="100" rx="22" fill="#1e293b"/>
      <rect x="22" y="30" width="56" height="40" rx="5" fill="#334155"/>
      <path d="M22 34 L50 54 L78 34" fill="none" stroke="#94a3b8" strokeWidth="2.5"/>
      <path d="M40 56 L35 60 L40 64 M60 56 L65 60 L60 64" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export function KafkaIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Apache Kafka">
      <rect width="100" height="100" rx="22" fill="#0f172a"/>
      <circle cx="34" cy="50" r="8" fill="#ffffff"/>
      <circle cx="66" cy="32" r="7" fill="#38bdf8"/>
      <circle cx="66" cy="68" r="7" fill="#38bdf8"/>
      <line x1="34" y1="50" x2="66" y2="32" stroke="#ffffff" strokeWidth="3"/>
      <line x1="34" y1="50" x2="66" y2="68" stroke="#ffffff" strokeWidth="3"/>
      <circle cx="50" cy="41" r="3" fill="#0284c7"/>
      <circle cx="50" cy="59" r="3" fill="#0284c7"/>
    </svg>
  );
}

export function SseIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Server-Sent Events">
      <rect width="100" height="100" rx="22" fill="#082f49"/>
      <rect x="20" y="32" width="16" height="36" rx="3" fill="#0284c7"/>
      <line x1="24" y1="38" x2="32" y2="38" stroke="#ffffff" strokeWidth="1.5"/>
      <line x1="24" y1="44" x2="32" y2="44" stroke="#ffffff" strokeWidth="1.5"/>
      <path d="M44 38 C56 38, 62 44, 74 44" fill="none" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M44 50 C56 50, 62 56, 74 56" fill="none" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M44 62 C56 62, 62 68, 74 68" fill="none" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round"/>
      <polygon points="76,44 70,41 72,47" fill="#38bdf8"/>
      <polygon points="76,56 70,53 72,59" fill="#38bdf8"/>
    </svg>
  );
}

export function RateLimitingIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Rate Limiting">
      <rect width="100" height="100" rx="22" fill="#3b0764"/>
      <path d="M24 64 A32 32 0 1 1 76 64" fill="none" stroke="#6b21a8" strokeWidth="7" strokeLinecap="round"/>
      <path d="M24 64 A32 32 0 0 1 60 22" fill="none" stroke="#f43f5e" strokeWidth="7" strokeLinecap="round"/>
      <circle cx="50" cy="58" r="5" fill="#ffffff"/>
      <line x1="50" y1="58" x2="68" y2="36" stroke="#ffffff" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  );
}

export function JsonRpcIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="JSON-RPC">
      <rect width="100" height="100" rx="22" fill="#1e1b4b"/>
      <rect x="22" y="26" width="56" height="48" rx="6" fill="#312e81"/>
      <text x="32" y="54" fontSize="20" fontFamily="monospace" fontWeight="900" fill="#818cf8">{"{"}</text>
      <text x="68" y="54" fontSize="20" fontFamily="monospace" fontWeight="900" fill="#818cf8" textAnchor="end">{"}"}</text>
      <text x="50" y="52" fontSize="8" fontFamily="monospace" fontWeight="900" fill="#38bdf8" textAnchor="middle">RPC</text>
    </svg>
  );
}

export function ApiCachingIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="API Caching">
      <rect width="100" height="100" rx="22" fill="#450a0a"/>
      <polygon points="50,22 76,34 50,46 24,34" fill="#dc2626"/>
      <polygon points="50,40 76,52 50,64 24,52" fill="#b91c1c"/>
      <polygon points="50,58 76,70 50,82 24,70" fill="#991b1b"/>
      <polygon points="54,26 44,42 52,42 46,58 60,38 52,38" fill="#fef08a"/>
    </svg>
  );
}

export function MicroservicesMeshIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Microservices Mesh">
      <rect width="100" height="100" rx="22" fill="#022c22"/>
      <polygon points="50,24 60,30 60,40 50,46 40,40 40,30" fill="#10b981"/>
      <polygon points="30,54 40,60 40,70 30,76 20,70 20,60" fill="#059669"/>
      <polygon points="70,54 80,60 80,70 70,76 60,70 60,60" fill="#059669"/>
      <line x1="45" y1="44" x2="35" y2="54" stroke="#34d399" strokeWidth="2"/>
      <line x1="55" y1="44" x2="65" y2="54" stroke="#34d399" strokeWidth="2"/>
      <line x1="40" y1="65" x2="60" y2="65" stroke="#34d399" strokeWidth="2"/>
    </svg>
  );
}

export function ApiMockingIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="API Mocking">
      <rect width="100" height="100" rx="22" fill="#18181b"/>
      <rect x="24" y="24" width="52" height="52" rx="6" fill="none" stroke="#a1a1aa" strokeWidth="2.5" strokeDasharray="5 3"/>
      <polygon points="44,38 62,50 44,62" fill="#38bdf8"/>
    </svg>
  );
}
