import React from "react";

type P = { size: number };

// ── Generative AI ─────────────────────────────────────────────────────────────

export function GptIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="GPT">
      <rect width="100" height="100" rx="22" fill="#064e3b"/>
      <circle cx="50" cy="50" r="28" fill="none" stroke="#10b981" strokeWidth="4" strokeDasharray="14 6"/>
      <circle cx="50" cy="50" r="10" fill="#34d399"/>
      <circle cx="50" cy="50" r="4" fill="#ffffff"/>
    </svg>
  );
}

export function ClaudeIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Claude">
      <rect width="100" height="100" rx="22" fill="#431407"/>
      <polygon points="50,18 56,38 76,38 60,50 66,70 50,58 34,70 40,50 24,38 44,38" fill="#f97316"/>
      <circle cx="50" cy="48" r="4" fill="#fef08a"/>
    </svg>
  );
}

export function LlamaIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Llama">
      <rect width="100" height="100" rx="22" fill="#172554"/>
      <path d="M34 50 C20 34, 20 66, 34 50 C44 38, 56 62, 66 50 C80 34, 80 66, 66 50 C56 38, 44 62, 34 50 Z" fill="none" stroke="#3b82f6" strokeWidth="6" strokeLinecap="round"/>
    </svg>
  );
}

export function GeminiIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Gemini">
      <rect width="100" height="100" rx="22" fill="#082f49"/>
      <path d="M50 18 Q50 46 22 50 Q50 54 50 82 Q50 54 78 50 Q50 46 50 18 Z" fill="#38bdf8"/>
      <path d="M50 32 Q50 48 34 50 Q50 52 50 68 Q50 52 66 50 Q50 48 50 32 Z" fill="#ffffff"/>
    </svg>
  );
}

export function MistralIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Mistral">
      <rect width="100" height="100" rx="22" fill="#451a03"/>
      <rect x="24" y="28" width="10" height="10" fill="#ea580c"/>
      <rect x="66" y="28" width="10" height="10" fill="#ea580c"/>
      <rect x="34" y="38" width="10" height="10" fill="#f97316"/>
      <rect x="56" y="38" width="10" height="10" fill="#f97316"/>
      <rect x="44" y="48" width="12" height="10" fill="#facc15"/>
      <rect x="24" y="58" width="52" height="10" fill="#ea580c"/>
    </svg>
  );
}

export function RagIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="RAG Systems">
      <rect width="100" height="100" rx="22" fill="#2e1065"/>
      <rect x="22" y="34" width="22" height="32" rx="4" fill="#a855f7"/>
      <rect x="56" y="34" width="22" height="32" rx="4" fill="#7e22ce"/>
      <path d="M44 44 L56 44 M56 56 L44 56" stroke="#f472b6" strokeWidth="2.5" strokeLinecap="round"/>
      <polygon points="56,44 51,41 51,47" fill="#f472b6"/>
      <polygon points="44,56 49,53 49,59" fill="#f472b6"/>
    </svg>
  );
}

export function VectorDbIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Vector DBs">
      <rect width="100" height="100" rx="22" fill="#064e3b"/>
      <polygon points="50,20 76,34 50,48 24,34" fill="#34d399"/>
      <polygon points="24,34 50,48 50,78 24,64" fill="#10b981"/>
      <polygon points="50,48 76,34 76,64 50,78" fill="#059669"/>
      <line x1="50" y1="20" x2="50" y2="78" stroke="#a7f3d0" strokeWidth="1.5"/>
    </svg>
  );
}

// ── IoT & Edge ────────────────────────────────────────────────────────────────

export function MqttIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="MQTT">
      <rect width="100" height="100" rx="22" fill="#4c0519"/>
      <circle cx="50" cy="50" r="10" fill="#f43f5e"/>
      <circle cx="50" cy="50" r="22" fill="none" stroke="#fb7185" strokeWidth="3" strokeDasharray="8 4"/>
      <circle cx="50" cy="50" r="32" fill="none" stroke="#fda4af" strokeWidth="2"/>
    </svg>
  );
}

export function RaspberryPiIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Raspberry Pi">
      <rect width="100" height="100" rx="22" fill="#450a0a"/>
      <circle cx="50" cy="42" r="7" fill="#dc2626"/>
      <circle cx="38" cy="52" r="7" fill="#ef4444"/>
      <circle cx="62" cy="52" r="7" fill="#ef4444"/>
      <circle cx="44" cy="64" r="7" fill="#b91c1c"/>
      <circle cx="56" cy="64" r="7" fill="#b91c1c"/>
      <path d="M50 36 Q42 22 36 28 Q44 32 50 36" fill="#22c55e"/>
      <path d="M50 36 Q58 22 64 28 Q56 32 50 36" fill="#22c55e"/>
    </svg>
  );
}

export function ArduinoIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Arduino">
      <rect width="100" height="100" rx="22" fill="#042f2e"/>
      <circle cx="38" cy="50" r="14" fill="none" stroke="#2dd4bf" strokeWidth="5"/>
      <circle cx="62" cy="50" r="14" fill="none" stroke="#2dd4bf" strokeWidth="5"/>
      <text x="38" y="55" fontSize="14" fontFamily="sans-serif" fontWeight="900" fill="#ffffff" textAnchor="middle">-</text>
      <text x="62" y="55" fontSize="14" fontFamily="sans-serif" fontWeight="900" fill="#ffffff" textAnchor="middle">+</text>
    </svg>
  );
}

export function Esp32Icon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="ESP32">
      <rect width="100" height="100" rx="22" fill="#451a03"/>
      <rect x="26" y="24" width="48" height="52" rx="4" fill="#d97706"/>
      <rect x="32" y="40" width="36" height="30" rx="2" fill="#1e293b"/>
      <path d="M34 32 L44 32 L44 26 L56 26 L56 32 L66 32" fill="none" stroke="#fef08a" strokeWidth="2.5"/>
    </svg>
  );
}

// ── Kubernetes & Orchestration ─────────────────────────────────────────────────

export function KubernetesIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Kubernetes">
      <rect width="100" height="100" rx="22" fill="#172554"/>
      <polygon points="50,18 78,34 78,66 50,82 22,66 22,34" fill="none" stroke="#3b82f6" strokeWidth="3.5"/>
      <circle cx="50" cy="50" r="9" fill="#38bdf8"/>
      <line x1="50" y1="18" x2="50" y2="41" stroke="#3b82f6" strokeWidth="3"/>
      <line x1="50" y1="59" x2="50" y2="82" stroke="#3b82f6" strokeWidth="3"/>
      <line x1="22" y1="34" x2="42" y2="46" stroke="#3b82f6" strokeWidth="3"/>
      <line x1="58" y1="54" x2="78" y2="66" stroke="#3b82f6" strokeWidth="3"/>
      <line x1="22" y1="66" x2="42" y2="54" stroke="#3b82f6" strokeWidth="3"/>
      <line x1="58" y1="46" x2="78" y2="34" stroke="#3b82f6" strokeWidth="3"/>
    </svg>
  );
}

export function HelmIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Helm">
      <rect width="100" height="100" rx="22" fill="#082f49"/>
      <circle cx="50" cy="50" r="28" fill="#0284c7"/>
      <circle cx="50" cy="50" r="14" fill="#082f49"/>
      <line x1="50" y1="16" x2="50" y2="36" stroke="#ffffff" strokeWidth="3.5"/>
      <line x1="50" y1="64" x2="50" y2="84" stroke="#ffffff" strokeWidth="3.5"/>
      <line x1="16" y1="50" x2="36" y2="50" stroke="#ffffff" strokeWidth="3.5"/>
      <line x1="64" y1="50" x2="84" y2="50" stroke="#ffffff" strokeWidth="3.5"/>
    </svg>
  );
}

export function KustomizeIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Kustomize">
      <rect width="100" height="100" rx="22" fill="#0c4a6e"/>
      <rect x="26" y="26" width="36" height="36" rx="6" fill="#0369a1"/>
      <rect x="38" y="38" width="36" height="36" rx="6" fill="#38bdf8" opacity="0.9"/>
    </svg>
  );
}

export function IstioIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Istio">
      <rect width="100" height="100" rx="22" fill="#172554"/>
      <polygon points="50,20 76,74 24,74" fill="#3b82f6"/>
      <polygon points="50,20 50,74 76,74" fill="#60a5fa"/>
      <polygon points="50,42 62,64 38,64" fill="#ffffff"/>
    </svg>
  );
}

export function OpenShiftIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="OpenShift">
      <rect width="100" height="100" rx="22" fill="#450a0a"/>
      <circle cx="50" cy="50" r="28" fill="none" stroke="#ef4444" strokeWidth="4"/>
      <path d="M50 22 A28 28 0 0 1 78 50" fill="none" stroke="#fca5a5" strokeWidth="5" strokeLinecap="round"/>
      <circle cx="50" cy="50" r="8" fill="#dc2626"/>
    </svg>
  );
}

export function RancherIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Rancher">
      <rect width="100" height="100" rx="22" fill="#082f49"/>
      <circle cx="50" cy="54" r="16" fill="#0284c7"/>
      <path d="M26 36 Q40 46 44 50 M74 36 Q60 46 56 50" stroke="#38bdf8" strokeWidth="5" fill="none" strokeLinecap="round"/>
      <circle cx="44" cy="54" r="2.5" fill="#ffffff"/>
      <circle cx="56" cy="54" r="2.5" fill="#ffffff"/>
    </svg>
  );
}

// ── Distributed Systems ───────────────────────────────────────────────────────

export function ZooKeeperIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="ZooKeeper">
      <rect width="100" height="100" rx="22" fill="#172554"/>
      <circle cx="50" cy="28" r="8" fill="#38bdf8"/>
      <circle cx="28" cy="66" r="8" fill="#60a5fa"/>
      <circle cx="72" cy="66" r="8" fill="#60a5fa"/>
      <line x1="50" y1="28" x2="28" y2="66" stroke="#93c5fd" strokeWidth="3"/>
      <line x1="50" y1="28" x2="72" y2="66" stroke="#93c5fd" strokeWidth="3"/>
      <line x1="28" y1="66" x2="72" y2="66" stroke="#93c5fd" strokeWidth="3"/>
      <text x="50" y="56" fontSize="11" fontFamily="sans-serif" fontWeight="900" fill="#facc15" textAnchor="middle">ZK</text>
    </svg>
  );
}

export function EtcdIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="etcd">
      <rect width="100" height="100" rx="22" fill="#0c4a6e"/>
      <rect x="24" y="24" width="52" height="52" rx="10" fill="#0284c7"/>
      <circle cx="50" cy="50" r="14" fill="#38bdf8"/>
      <circle cx="50" cy="50" r="6" fill="#ffffff"/>
      <path d="M50 24 L50 36 M50 64 L50 76 M24 50 L36 50 M64 50 L76 50" stroke="#bae6fd" strokeWidth="3"/>
    </svg>
  );
}

export function ConsulIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Consul">
      <rect width="100" height="100" rx="22" fill="#4c0519"/>
      <polygon points="50,22 74,36 74,64 50,78 26,64 26,36" fill="none" stroke="#f43f5e" strokeWidth="4"/>
      <circle cx="50" cy="50" r="10" fill="#f43f5e"/>
      <circle cx="50" cy="22" r="3.5" fill="#fecdd3"/>
      <circle cx="74" cy="50" r="3.5" fill="#fecdd3"/>
      <circle cx="26" cy="50" r="3.5" fill="#fecdd3"/>
    </svg>
  );
}

// ── Emerging Technologies ─────────────────────────────────────────────────────

export function QuantumComputingIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Quantum Computing">
      <rect width="100" height="100" rx="22" fill="#311042"/>
      <circle cx="50" cy="50" r="28" fill="none" stroke="#a855f7" strokeWidth="2.5"/>
      <ellipse cx="50" cy="50" rx="28" ry="10" fill="none" stroke="#c084fc" strokeWidth="2" strokeDasharray="3 2"/>
      <line x1="50" y1="22" x2="50" y2="78" stroke="#e879f9" strokeWidth="2"/>
      <circle cx="50" cy="22" r="3.5" fill="#fde047"/>
      <circle cx="50" cy="50" r="4.5" fill="#ffffff"/>
    </svg>
  );
}

export function WebAssemblyIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="WebAssembly">
      <rect width="100" height="100" rx="22" fill="#2e1065"/>
      <rect x="24" y="24" width="52" height="52" rx="8" fill="#6d28d9"/>
      <text x="50" y="58" fontSize="14" fontFamily="sans-serif" fontWeight="900" fill="#f5f3ff" textAnchor="middle">WASM</text>
    </svg>
  );
}

export function EdgeAIIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Edge AI">
      <rect width="100" height="100" rx="22" fill="#064e3b"/>
      <rect x="30" y="30" width="40" height="40" rx="6" fill="#059669"/>
      <circle cx="50" cy="50" r="8" fill="#a7f3d0"/>
      <line x1="50" y1="18" x2="50" y2="30" stroke="#34d399" strokeWidth="2.5"/>
      <line x1="50" y1="70" x2="50" y2="82" stroke="#34d399" strokeWidth="2.5"/>
      <line x1="18" y1="50" x2="30" y2="50" stroke="#34d399" strokeWidth="2.5"/>
      <line x1="70" y1="50" x2="82" y2="50" stroke="#34d399" strokeWidth="2.5"/>
    </svg>
  );
}

// ── Enterprise Systems ────────────────────────────────────────────────────────

export function SapIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="SAP">
      <rect width="100" height="100" rx="22" fill="#082f49"/>
      <polygon points="20,28 80,28 72,72 28,72" fill="#0284c7"/>
      <text x="50" y="56" fontSize="16" fontFamily="sans-serif" fontWeight="900" fill="#ffffff" textAnchor="middle">SAP</text>
    </svg>
  );
}

export function SalesforceIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Salesforce">
      <rect width="100" height="100" rx="22" fill="#0c4a6e"/>
      <path d="M30 64 C22 64 18 56 22 48 C22 38 32 32 42 36 C46 26 60 24 68 32 C78 32 84 40 82 50 C88 56 84 64 74 64 Z" fill="#00a1e0"/>
      <text x="52" y="54" fontSize="9" fontFamily="sans-serif" fontWeight="900" fill="#ffffff" textAnchor="middle">CRM</text>
    </svg>
  );
}

export function OracleIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Oracle">
      <rect width="100" height="100" rx="22" fill="#450a0a"/>
      <ellipse cx="50" cy="50" rx="28" ry="16" fill="none" stroke="#ef4444" strokeWidth="6"/>
      <text x="50" y="54" fontSize="9" fontFamily="sans-serif" fontWeight="900" fill="#fca5a5" textAnchor="middle">ERP</text>
    </svg>
  );
}

export function ServiceNowIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="ServiceNow">
      <rect width="100" height="100" rx="22" fill="#064e3b"/>
      <circle cx="50" cy="50" r="26" fill="none" stroke="#10b981" strokeWidth="5"/>
      <circle cx="50" cy="30" r="5" fill="#34d399"/>
      <circle cx="50" cy="50" r="7" fill="#ffffff"/>
    </svg>
  );
}

export function MuleSoftIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="MuleSoft">
      <rect width="100" height="100" rx="22" fill="#082f49"/>
      <circle cx="36" cy="36" r="10" fill="#0284c7"/>
      <circle cx="64" cy="36" r="10" fill="#0284c7"/>
      <circle cx="50" cy="64" r="10" fill="#38bdf8"/>
      <line x1="36" y1="36" x2="50" y2="64" stroke="#38bdf8" strokeWidth="3"/>
      <line x1="64" y1="36" x2="50" y2="64" stroke="#38bdf8" strokeWidth="3"/>
    </svg>
  );
}

// ── Desktop Technologies ──────────────────────────────────────────────────────

export function ElectronIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Electron">
      <rect width="100" height="100" rx="22" fill="#082f49"/>
      <ellipse cx="50" cy="50" rx="28" ry="10" fill="none" stroke="#38bdf8" strokeWidth="3" transform="rotate(30 50 50)"/>
      <ellipse cx="50" cy="50" rx="28" ry="10" fill="none" stroke="#38bdf8" strokeWidth="3" transform="rotate(90 50 50)"/>
      <ellipse cx="50" cy="50" rx="28" ry="10" fill="none" stroke="#38bdf8" strokeWidth="3" transform="rotate(150 50 50)"/>
      <circle cx="50" cy="50" r="5" fill="#38bdf8"/>
    </svg>
  );
}

export function TauriIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Tauri">
      <rect width="100" height="100" rx="22" fill="#082f49"/>
      <circle cx="40" cy="45" r="16" fill="none" stroke="#38bdf8" strokeWidth="6"/>
      <circle cx="60" cy="55" r="16" fill="none" stroke="#facc15" strokeWidth="6"/>
    </svg>
  );
}

export function JavaFxIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="JavaFX">
      <rect width="100" height="100" rx="22" fill="#172554"/>
      <ellipse cx="50" cy="62" rx="20" ry="7" fill="#1e40af"/>
      <path d="M34 40 L36 62 Q50 70 64 62 L66 40 Z" fill="#2563eb"/>
      <path d="M64 44 Q74 44 74 52 Q74 60 64 60" fill="none" stroke="#2563eb" strokeWidth="3.5" strokeLinecap="round"/>
      <path d="M44 26 Q40 32 46 36 M52 24 Q48 30 54 36" fill="none" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  );
}

export function QtIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Qt">
      <rect width="100" height="100" rx="22" fill="#052e16"/>
      <rect x="22" y="24" width="56" height="52" rx="8" fill="#16a34a"/>
      <text x="50" y="58" fontSize="22" fontFamily="sans-serif" fontWeight="900" fill="#ffffff" textAnchor="middle">Qt</text>
    </svg>
  );
}

// ── DevOps ────────────────────────────────────────────────────────────────────

export function DockerIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Docker">
      <rect width="100" height="100" rx="22" fill="#082f49"/>
      <rect x="30" y="38" width="7" height="7" fill="#38bdf8"/>
      <rect x="39" y="38" width="7" height="7" fill="#38bdf8"/>
      <rect x="48" y="38" width="7" height="7" fill="#38bdf8"/>
      <rect x="39" y="29" width="7" height="7" fill="#38bdf8"/>
      <rect x="48" y="29" width="7" height="7" fill="#38bdf8"/>
      <rect x="57" y="38" width="7" height="7" fill="#38bdf8"/>
      <path d="M22 52 C22 48 30 46 40 48 C46 48 68 48 76 56 C80 60 76 68 68 70 C54 72 34 72 24 64 C20 60 22 54 22 52 Z" fill="#0284c7"/>
      <circle cx="30" cy="58" r="1.8" fill="#082f49"/>
    </svg>
  );
}

export function TerraformIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Terraform">
      <rect width="100" height="100" rx="22" fill="#1e1b4b"/>
      <polygon points="40,24 60,35 60,56 40,45" fill="#818cf8"/>
      <polygon points="62,36 82,47 82,68 62,57" fill="#6366f1"/>
      <polygon points="18,36 38,47 38,68 18,57" fill="#6366f1"/>
      <polygon points="40,47 60,58 60,79 40,68" fill="#4f46e5"/>
    </svg>
  );
}

export function AnsibleIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Ansible">
      <rect width="100" height="100" rx="22" fill="#000000"/>
      <circle cx="50" cy="50" r="28" fill="#ffffff"/>
      <path d="M34 68 L48 32 L56 32 L68 68 L60 68 L56 56 L44 56 L40 68 Z" fill="#000000"/>
      <polygon points="50,38 45,51 55,51" fill="#ffffff"/>
    </svg>
  );
}

export function GitHubActionsIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="GitHub Actions">
      <rect width="100" height="100" rx="22" fill="#172554"/>
      <circle cx="34" cy="34" r="6" fill="#3b82f6"/>
      <circle cx="34" cy="66" r="6" fill="#60a5fa"/>
      <circle cx="66" cy="50" r="7" fill="#22c55e"/>
      <path d="M34 34 L34 66" stroke="#3b82f6" strokeWidth="3"/>
      <path d="M34 44 Q50 44 66 50" fill="none" stroke="#22c55e" strokeWidth="3"/>
    </svg>
  );
}

export function GitLabCiIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="GitLab CI">
      <rect width="100" height="100" rx="22" fill="#431407"/>
      <polygon points="50,76 24,44 32,24 50,44" fill="#ea580c"/>
      <polygon points="50,76 76,44 68,24 50,44" fill="#ea580c"/>
      <polygon points="50,76 24,44 34,44" fill="#c2410c"/>
      <polygon points="50,76 76,44 66,44" fill="#c2410c"/>
      <polygon points="50,76 34,44 66,44" fill="#f97316"/>
    </svg>
  );
}

export function JenkinsIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Jenkins">
      <rect width="100" height="100" rx="22" fill="#1e293b"/>
      <ellipse cx="50" cy="54" rx="16" ry="18" fill="#fcd34d"/>
      <path d="M34 36 L66 36 L62 24 L38 24 Z" fill="#0f172a"/>
      <rect x="28" y="34" width="44" height="4" rx="2" fill="#0f172a"/>
      <polygon points="46,62 54,62 50,70" fill="#dc2626"/>
    </svg>
  );
}

export function ArgoCdIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Argo CD">
      <rect width="100" height="100" rx="22" fill="#064e3b"/>
      <circle cx="50" cy="46" r="16" fill="#10b981"/>
      <circle cx="44" cy="44" r="3.5" fill="#ffffff"/>
      <circle cx="56" cy="44" r="3.5" fill="#ffffff"/>
      <path d="M34 62 Q50 74 66 62" stroke="#34d399" strokeWidth="4" fill="none" strokeLinecap="round"/>
    </svg>
  );
}

export function CircleCiIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="CircleCI">
      <rect width="100" height="100" rx="22" fill="#1e293b"/>
      <circle cx="50" cy="50" r="28" fill="none" stroke="#334155" strokeWidth="6"/>
      <circle cx="50" cy="50" r="28" fill="none" stroke="#22c55e" strokeWidth="6" strokeDasharray="130 50"/>
      <circle cx="50" cy="50" r="8" fill="#f8fafc"/>
    </svg>
  );
}

export function PulumiIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Pulumi">
      <rect width="100" height="100" rx="22" fill="#1e1b4b"/>
      <polygon points="50,22 74,36 50,50 26,36" fill="#facc15"/>
      <polygon points="26,36 50,50 50,78 26,64" fill="#a855f7"/>
      <polygon points="50,50 74,36 74,64 50,78" fill="#38bdf8"/>
    </svg>
  );
}

export function PrometheusIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Prometheus">
      <rect width="100" height="100" rx="22" fill="#431407"/>
      <circle cx="50" cy="50" r="28" fill="none" stroke="#ea580c" strokeWidth="3.5"/>
      <path d="M50 26 C42 38 36 46 36 58 C36 66 42 72 50 72 C58 72 64 66 64 58 C64 46 58 38 50 26 Z" fill="#f97316"/>
      <circle cx="50" cy="54" r="5" fill="#fef08a"/>
    </svg>
  );
}

// ── Developer Tools ───────────────────────────────────────────────────────────

export function VSCodeIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="VS Code">
      <rect width="100" height="100" rx="22" fill="#082f49"/>
      <path d="M72 22 L54 38 L36 24 L24 32 L36 50 L24 68 L36 76 L54 62 L72 78 Z" fill="#0284c7"/>
      <path d="M72 22 L72 78 L54 62 L54 38 Z" fill="#38bdf8"/>
      <path d="M36 50 L24 32 L36 24 L54 38 Z" fill="#0369a1"/>
    </svg>
  );
}

export function IntelliJIdeaIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="IntelliJ IDEA">
      <rect width="100" height="100" rx="22" fill="#000000"/>
      <rect x="22" y="22" width="56" height="56" rx="6" fill="#000000" stroke="#f43f5e" strokeWidth="3"/>
      <text x="50" y="52" fontSize="14" fontFamily="monospace" fontWeight="900" fill="#ffffff" textAnchor="middle">IJ</text>
      <line x1="34" y1="64" x2="66" y2="64" stroke="#ffffff" strokeWidth="4" strokeLinecap="round"/>
    </svg>
  );
}

export function GitIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Git">
      <rect width="100" height="100" rx="22" fill="#431407"/>
      <rect x="26" y="26" width="48" height="48" rx="8" fill="#f97316" transform="rotate(45 50 50)"/>
      <circle cx="50" cy="38" r="4.5" fill="#ffffff"/>
      <circle cx="50" cy="62" r="4.5" fill="#ffffff"/>
      <circle cx="64" cy="50" r="4.5" fill="#ffffff"/>
      <line x1="50" y1="38" x2="50" y2="62" stroke="#ffffff" strokeWidth="3"/>
      <path d="M50 48 Q64 48 64 50" fill="none" stroke="#ffffff" strokeWidth="3"/>
    </svg>
  );
}

// ── Data Engineering ──────────────────────────────────────────────────────────

export function ApacheSparkIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Apache Spark">
      <rect width="100" height="100" rx="22" fill="#431407"/>
      <path d="M50 18 L58 38 L78 34 L64 48 L76 66 L54 58 L46 78 L42 58 L22 62 L36 46 L24 34 L44 38 Z" fill="#f97316"/>
      <circle cx="50" cy="48" r="5" fill="#fef08a"/>
    </svg>
  );
}

export function ApacheAirflowIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Apache Airflow">
      <rect width="100" height="100" rx="22" fill="#0c4a6e"/>
      <circle cx="50" cy="50" r="28" fill="none" stroke="#0284c7" strokeWidth="2"/>
      <path d="M50 50 L50 26 C62 26 62 38 50 50 Z" fill="#38bdf8"/>
      <path d="M50 50 L74 50 C74 62 62 62 50 50 Z" fill="#0ea5e9"/>
      <path d="M50 50 L50 74 C38 74 38 62 50 50 Z" fill="#0284c7"/>
      <path d="M50 50 L26 50 C26 38 38 38 50 50 Z" fill="#bae6fd"/>
      <circle cx="50" cy="50" r="3.5" fill="#ffffff"/>
    </svg>
  );
}

export function DbtIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="dbt">
      <rect width="100" height="100" rx="22" fill="#451a03"/>
      <polygon points="50,22 68,40 50,58 32,40" fill="#f97316"/>
      <polygon points="50,42 68,60 50,78 32,60" fill="#ea580c"/>
      <polygon points="50,42 60,50 50,60 40,50" fill="#fef08a"/>
    </svg>
  );
}

export function ApacheFlinkIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Apache Flink">
      <rect width="100" height="100" rx="22" fill="#4c0519"/>
      <circle cx="50" cy="50" r="28" fill="none" stroke="#f43f5e" strokeWidth="3"/>
      <path d="M34 66 C34 40 60 30 64 24 C64 42 46 48 64 64 C52 68 40 68 34 66 Z" fill="#fb7185"/>
      <circle cx="44" cy="46" r="3" fill="#ffffff"/>
    </svg>
  );
}

// ── Data Platforms ────────────────────────────────────────────────────────────

export function SnowflakeIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Snowflake">
      <rect width="100" height="100" rx="22" fill="#082f49"/>
      <polygon points="50,22 76,37 76,63 50,78 24,63 24,37" fill="none" stroke="#38bdf8" strokeWidth="3"/>
      <line x1="50" y1="22" x2="50" y2="78" stroke="#38bdf8" strokeWidth="3"/>
      <line x1="24" y1="37" x2="76" y2="63" stroke="#38bdf8" strokeWidth="3"/>
      <line x1="24" y1="63" x2="76" y2="37" stroke="#38bdf8" strokeWidth="3"/>
      <circle cx="50" cy="50" r="4.5" fill="#ffffff"/>
    </svg>
  );
}

export function GoogleBigQueryIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Google BigQuery">
      <rect width="100" height="100" rx="22" fill="#172554"/>
      <circle cx="46" cy="46" r="20" fill="none" stroke="#60a5fa" strokeWidth="5"/>
      <line x1="60" y1="60" x2="78" y2="78" stroke="#3b82f6" strokeWidth="6" strokeLinecap="round"/>
      <ellipse cx="46" cy="40" rx="10" ry="4" fill="#93c5fd"/>
      <ellipse cx="46" cy="48" rx="10" ry="4" fill="#3b82f6"/>
    </svg>
  );
}

export function AmazonRedshiftIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Amazon Redshift">
      <rect width="100" height="100" rx="22" fill="#450a0a"/>
      <polygon points="50,22 74,34 50,46 26,34" fill="#ef4444"/>
      <polygon points="26,34 50,46 50,72 26,60" fill="#dc2626"/>
      <polygon points="50,46 74,34 74,60 50,72" fill="#b91c1c"/>
      <circle cx="50" cy="46" r="4" fill="#fef08a"/>
    </svg>
  );
}

export function DatabricksIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Databricks">
      <rect width="100" height="100" rx="22" fill="#431407"/>
      <polygon points="50,24 74,36 50,48 26,36" fill="#f97316"/>
      <polygon points="50,44 74,56 50,68 26,56" fill="#ea580c"/>
      <path d="M24 76 Q50 68 76 76" stroke="#38bdf8" strokeWidth="4" fill="none" strokeLinecap="round"/>
    </svg>
  );
}

// ── Databases ─────────────────────────────────────────────────────────────────

export function PostgreSqlIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="PostgreSQL">
      <rect width="100" height="100" rx="22" fill="#082f49"/>
      <path d="M50 24 C34 24 28 36 28 48 C28 62 36 72 44 74 L44 64 C40 62 38 56 38 50 C38 42 42 36 50 36 C58 36 62 42 62 50 C62 56 60 62 56 64 L56 74 C64 72 72 62 72 48 C72 36 66 24 50 24 Z" fill="#38bdf8"/>
      <circle cx="44" cy="40" r="2.5" fill="#082f49"/>
    </svg>
  );
}

export function MySqlIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="MySQL">
      <rect width="100" height="100" rx="22" fill="#0c4a6e"/>
      <path d="M26 62 C32 46 44 32 64 28 C74 26 76 34 68 40 C56 46 46 54 42 66 Z" fill="#0284c7"/>
      <path d="M64 28 C68 36 62 46 50 52" stroke="#f59e0b" strokeWidth="2.5" fill="none"/>
    </svg>
  );
}

export function MongoDbIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="MongoDB">
      <rect width="100" height="100" rx="22" fill="#052e16"/>
      <path d="M50 20 C50 20 32 38 32 54 C32 68 42 78 50 80 C58 78 68 68 68 54 C68 38 50 20 50 20 Z" fill="#16a34a"/>
      <path d="M50 20 L50 80" stroke="#86efac" strokeWidth="2"/>
    </svg>
  );
}

export function ApacheCassandraIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Apache Cassandra">
      <rect width="100" height="100" rx="22" fill="#172554"/>
      <ellipse cx="50" cy="50" rx="28" ry="16" fill="none" stroke="#60a5fa" strokeWidth="4"/>
      <circle cx="50" cy="50" r="8" fill="#3b82f6"/>
      <circle cx="50" cy="50" r="3" fill="#ffffff"/>
    </svg>
  );
}

export function SQLiteIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="SQLite">
      <rect width="100" height="100" rx="22" fill="#082f49"/>
      <ellipse cx="50" cy="32" rx="22" ry="7" fill="#38bdf8"/>
      <path d="M28 32 L28 68 Q50 78 72 68 L72 32 Z" fill="#0284c7"/>
      <text x="50" y="58" fontSize="11" fontFamily="sans-serif" fontWeight="900" fill="#ffffff" textAnchor="middle">SQL</text>
    </svg>
  );
}

export function CockroachDbIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="CockroachDB">
      <rect width="100" height="100" rx="22" fill="#022c22"/>
      <polygon points="50,22 76,37 76,63 50,78 24,63 24,37" fill="#059669"/>
      <ellipse cx="50" cy="50" rx="12" ry="18" fill="#10b981"/>
      <circle cx="46" cy="42" r="2" fill="#ffffff"/>
      <circle cx="54" cy="42" r="2" fill="#ffffff"/>
    </svg>
  );
}

export function Neo4jIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Neo4j">
      <rect width="100" height="100" rx="22" fill="#172554"/>
      <circle cx="50" cy="30" r="7" fill="#60a5fa"/>
      <circle cx="30" cy="65" r="7" fill="#38bdf8"/>
      <circle cx="70" cy="65" r="7" fill="#38bdf8"/>
      <line x1="50" y1="30" x2="30" y2="65" stroke="#93c5fd" strokeWidth="3"/>
      <line x1="50" y1="30" x2="70" y2="65" stroke="#93c5fd" strokeWidth="3"/>
      <line x1="30" y1="65" x2="70" y2="65" stroke="#93c5fd" strokeWidth="3"/>
    </svg>
  );
}

// ── Caching ───────────────────────────────────────────────────────────────────

export function RedisIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Redis">
      <rect width="100" height="100" rx="22" fill="#450a0a"/>
      <polygon points="50,22 76,34 50,46 24,34" fill="#dc2626"/>
      <polygon points="50,40 76,52 50,64 24,52" fill="#b91c1c"/>
      <polygon points="50,58 76,70 50,82 24,70" fill="#991b1b"/>
      <polygon points="54,26 44,42 52,42 46,58 60,38 52,38" fill="#fef08a"/>
    </svg>
  );
}

export function MemcachedIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Memcached">
      <rect width="100" height="100" rx="22" fill="#064e3b"/>
      <circle cx="50" cy="50" r="28" fill="#047857"/>
      <circle cx="38" cy="42" r="5" fill="#a7f3d0"/>
      <circle cx="62" cy="42" r="5" fill="#a7f3d0"/>
      <circle cx="50" cy="62" r="5" fill="#a7f3d0"/>
      <line x1="38" y1="42" x2="62" y2="42" stroke="#a7f3d0" strokeWidth="2"/>
      <line x1="38" y1="42" x2="50" y2="62" stroke="#a7f3d0" strokeWidth="2"/>
      <line x1="62" y1="42" x2="50" y2="62" stroke="#a7f3d0" strokeWidth="2"/>
    </svg>
  );
}

export function VarnishIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Varnish">
      <rect width="100" height="100" rx="22" fill="#082f49"/>
      <path d="M26 28 L50 76 L74 28 L60 28 L50 56 L40 28 Z" fill="#0284c7"/>
      <path d="M42 24 L50 42 L58 24 Z" fill="#38bdf8"/>
    </svg>
  );
}

export function HazelcastIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Hazelcast">
      <rect width="100" height="100" rx="22" fill="#431407"/>
      <circle cx="50" cy="50" r="28" fill="none" stroke="#ea580c" strokeWidth="4" strokeDasharray="10 4"/>
      <circle cx="50" cy="50" r="12" fill="#f97316"/>
      <circle cx="50" cy="50" r="4" fill="#ffffff"/>
    </svg>
  );
}

export function EhcacheIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Ehcache">
      <rect width="100" height="100" rx="22" fill="#1e1b4b"/>
      <rect x="24" y="24" width="52" height="52" rx="8" fill="#4338ca"/>
      <text x="50" y="58" fontSize="18" fontFamily="sans-serif" fontWeight="900" fill="#a5b4fc" textAnchor="middle">Eh</text>
    </svg>
  );
}

// ── Content Management ────────────────────────────────────────────────────────

export function WordPressIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="WordPress">
      <rect width="100" height="100" rx="22" fill="#082f49"/>
      <circle cx="50" cy="50" r="28" fill="none" stroke="#0073aa" strokeWidth="4"/>
      <text x="50" y="60" fontSize="24" fontFamily="serif" fontWeight="900" fill="#38bdf8" textAnchor="middle">W</text>
    </svg>
  );
}

export function DrupalIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Drupal">
      <rect width="100" height="100" rx="22" fill="#082f49"/>
      <path d="M50 20 C50 20 30 44 30 58 C30 70 40 78 50 78 C60 78 70 70 70 58 C70 44 50 20 50 20 Z" fill="#0284c7"/>
      <circle cx="44" cy="54" r="3" fill="#ffffff"/>
      <circle cx="56" cy="54" r="3" fill="#ffffff"/>
      <path d="M44 64 Q50 68 56 64" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export function ContentfulIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Contentful">
      <rect width="100" height="100" rx="22" fill="#172554"/>
      <circle cx="36" cy="38" r="8" fill="#2563eb"/>
      <circle cx="64" cy="38" r="8" fill="#facc15"/>
      <circle cx="36" cy="62" r="8" fill="#ef4444"/>
      <circle cx="64" cy="62" r="8" fill="#22c55e"/>
    </svg>
  );
}

export function StrapiIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Strapi">
      <rect width="100" height="100" rx="22" fill="#1e1b4b"/>
      <polygon points="40,24 64,24 52,44 28,44" fill="#818cf8"/>
      <polygon points="28,48 52,48 40,68 16,68" fill="#6366f1"/>
      <polygon points="52,48 76,48 64,68 40,68" fill="#4f46e5"/>
    </svg>
  );
}

export function SanityIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Sanity">
      <rect width="100" height="100" rx="22" fill="#450a0a"/>
      <path d="M34 32 Q66 22 66 40 Q66 50 34 50 Q34 68 66 68" fill="none" stroke="#f43f5e" strokeWidth="6" strokeLinecap="round"/>
    </svg>
  );
}

// ── Backend Technologies ──────────────────────────────────────────────────────

export function NodeJsIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Node.js">
      <rect width="100" height="100" rx="22" fill="#052e16"/>
      <polygon points="50,22 76,37 76,67 50,82 24,67 24,37" fill="#16a34a"/>
      <polygon points="50,30 68,40 68,62 50,72 32,62 32,40" fill="#22c55e"/>
      <text x="50" y="56" fontSize="12" fontFamily="sans-serif" fontWeight="900" fill="#ffffff" textAnchor="middle">JS</text>
    </svg>
  );
}

export function ExpressJsIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Express.js">
      <rect width="100" height="100" rx="22" fill="#1e293b"/>
      <text x="50" y="60" fontSize="20" fontFamily="monospace" fontWeight="900" fill="#f8fafc" textAnchor="middle">ex</text>
      <circle cx="50" cy="50" r="32" fill="none" stroke="#64748b" strokeWidth="2.5" strokeDasharray="6 3"/>
    </svg>
  );
}

export function DjangoIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Django">
      <rect width="100" height="100" rx="22" fill="#064e3b"/>
      <rect x="26" y="24" width="48" height="52" rx="8" fill="#047857"/>
      <text x="50" y="58" fontSize="20" fontFamily="serif" fontWeight="900" fill="#a7f3d0" textAnchor="middle">dj</text>
    </svg>
  );
}

export function FastApiIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="FastAPI">
      <rect width="100" height="100" rx="22" fill="#042f2e"/>
      <circle cx="50" cy="50" r="28" fill="#0d9488"/>
      <polygon points="52,26 36,52 48,52 44,74 64,44 52,44" fill="#ffffff"/>
    </svg>
  );
}

export function SpringBootIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Spring Boot">
      <rect width="100" height="100" rx="22" fill="#064e3b"/>
      <circle cx="50" cy="50" r="28" fill="none" stroke="#10b981" strokeWidth="4"/>
      <path d="M50 32 C38 32 36 46 44 56 C52 66 68 64 68 64 C68 64 66 48 58 40 C54 36 52 32 50 32 Z" fill="#34d399"/>
      <path d="M44 56 L58 42" stroke="#064e3b" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export function AspNetCoreIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="ASP.NET Core">
      <rect width="100" height="100" rx="22" fill="#1e1b4b"/>
      <circle cx="50" cy="50" r="28" fill="#581c87"/>
      <text x="50" y="58" fontSize="14" fontFamily="sans-serif" fontWeight="900" fill="#c084fc" textAnchor="middle">.NET</text>
    </svg>
  );
}

export function LaravelIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Laravel">
      <rect width="100" height="100" rx="22" fill="#450a0a"/>
      <polygon points="50,22 76,36 50,50 24,36" fill="#f87171"/>
      <polygon points="24,36 50,50 50,78 24,64" fill="#ef4444"/>
      <polygon points="50,50 76,36 76,64 50,78" fill="#dc2626"/>
      <path d="M42 42 L58 34 L58 58 L42 66 Z" fill="#ffffff" opacity="0.9"/>
    </svg>
  );
}

export function NestJsIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="NestJS">
      <rect width="100" height="100" rx="22" fill="#4c0519"/>
      <path d="M30 68 L24 40 L42 50 L50 26 L58 50 L76 40 L70 68 Z" fill="#e11d48"/>
      <polygon points="50,42 60,56 40,56" fill="#fda4af"/>
    </svg>
  );
}

export function FiberIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Fiber">
      <rect width="100" height="100" rx="22" fill="#082f49"/>
      <circle cx="50" cy="50" r="28" fill="#0284c7"/>
      <path d="M32 50 Q42 36 50 50 T68 50" fill="none" stroke="#ffffff" strokeWidth="4.5" strokeLinecap="round"/>
      <circle cx="68" cy="50" r="3.5" fill="#facc15"/>
    </svg>
  );
}

// ── Blockchain & Web3 ─────────────────────────────────────────────────────────

export function EthereumIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Ethereum">
      <rect width="100" height="100" rx="22" fill="#1e1b4b"/>
      <polygon points="50,20 68,50 50,60 32,50" fill="#a5b4fc"/>
      <polygon points="50,20 50,60 32,50" fill="#818cf8"/>
      <polygon points="50,64 68,54 50,80" fill="#6366f1"/>
      <polygon points="50,64 50,80 32,54" fill="#4f46e5"/>
    </svg>
  );
}

export function SolidityIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Solidity">
      <rect width="100" height="100" rx="22" fill="#1e293b"/>
      <polygon points="40,24 60,24 70,40 50,40" fill="#94a3b8"/>
      <polygon points="30,40 50,40 40,56 20,56" fill="#64748b"/>
      <polygon points="50,40 70,40 80,56 60,56" fill="#cbd5e1"/>
      <polygon points="40,56 60,56 50,72 30,72" fill="#94a3b8"/>
    </svg>
  );
}

export function SolanaIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Solana">
      <rect width="100" height="100" rx="22" fill="#022c22"/>
      <polygon points="26,36 68,36 74,28 32,28" fill="#2dd4bf"/>
      <polygon points="32,54 74,54 68,46 26,46" fill="#38bdf8"/>
      <polygon points="26,72 68,72 74,64 32,64" fill="#a855f7"/>
    </svg>
  );
}

// ── Build & Package Management ────────────────────────────────────────────────

export function MavenIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Maven">
      <rect width="100" height="100" rx="22" fill="#4c0519"/>
      <path d="M68 20 C46 26 34 46 32 78 C42 66 52 64 68 20 Z" fill="#e11d48"/>
      <path d="M32 78 L46 64" stroke="#f43f5e" strokeWidth="2"/>
    </svg>
  );
}

export function GradleIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Gradle">
      <rect width="100" height="100" rx="22" fill="#042f2e"/>
      <circle cx="50" cy="50" r="26" fill="none" stroke="#0d9488" strokeWidth="4.5"/>
      <path d="M42 42 Q50 34 58 42 Q66 50 58 58 Q50 66 42 58" fill="none" stroke="#2dd4bf" strokeWidth="4.5" strokeLinecap="round"/>
    </svg>
  );
}

export function NpmIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="npm">
      <rect width="100" height="100" rx="22" fill="#450a0a"/>
      <rect x="22" y="28" width="56" height="44" rx="4" fill="#dc2626"/>
      <polygon points="32,38 42,38 42,62 38,62 38,44 32,44" fill="#ffffff"/>
      <polygon points="46,38 68,38 68,56 60,56 60,44 54,44 54,62 46,62" fill="#ffffff"/>
    </svg>
  );
}

export function YarnIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Yarn">
      <rect width="100" height="100" rx="22" fill="#082f49"/>
      <circle cx="50" cy="52" r="24" fill="#0284c7"/>
      <path d="M34 38 L42 46 M66 38 L58 46" stroke="#ffffff" strokeWidth="3" strokeLinecap="round"/>
      <path d="M38 52 Q50 62 62 52" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  );
}

export function PnpmIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="pnpm">
      <rect width="100" height="100" rx="22" fill="#431407"/>
      <rect x="26" y="26" width="20" height="20" rx="4" fill="#f97316"/>
      <rect x="54" y="26" width="20" height="20" rx="4" fill="#fb923c"/>
      <rect x="26" y="54" width="20" height="20" rx="4" fill="#facc15"/>
      <rect x="54" y="54" width="20" height="20" rx="4" fill="#f97316"/>
    </svg>
  );
}

export function PipIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="pip">
      <rect width="100" height="100" rx="22" fill="#172554"/>
      <rect x="22" y="30" width="56" height="40" rx="8" fill="#1e40af"/>
      <text x="50" y="56" fontSize="16" fontFamily="monospace" fontWeight="900" fill="#38bdf8" textAnchor="middle">pip</text>
    </svg>
  );
}

// ── Software Architecture ─────────────────────────────────────────────────────

export function MicroservicesIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Microservices">
      <rect width="100" height="100" rx="22" fill="#022c22"/>
      <rect x="22" y="22" width="20" height="20" rx="4" fill="#10b981"/>
      <rect x="58" y="22" width="20" height="20" rx="4" fill="#10b981"/>
      <rect x="22" y="58" width="20" height="20" rx="4" fill="#10b981"/>
      <rect x="58" y="58" width="20" height="20" rx="4" fill="#10b981"/>
      <line x1="42" y1="32" x2="58" y2="32" stroke="#34d399" strokeWidth="2" strokeDasharray="2 2"/>
      <line x1="32" y1="42" x2="32" y2="58" stroke="#34d399" strokeWidth="2" strokeDasharray="2 2"/>
      <line x1="68" y1="42" x2="68" y2="58" stroke="#34d399" strokeWidth="2" strokeDasharray="2 2"/>
      <line x1="42" y1="68" x2="58" y2="68" stroke="#34d399" strokeWidth="2" strokeDasharray="2 2"/>
    </svg>
  );
}

export function EventDrivenIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Event-Driven Architecture">
      <rect width="100" height="100" rx="22" fill="#431407"/>
      <circle cx="28" cy="50" r="7" fill="#f97316"/>
      <path d="M40 38 Q50 30 62 42" fill="none" stroke="#fb923c" strokeWidth="3" strokeLinecap="round"/>
      <path d="M40 62 Q50 70 62 58" fill="none" stroke="#fb923c" strokeWidth="3" strokeLinecap="round"/>
      <circle cx="72" cy="38" r="6" fill="#fdba74"/>
      <circle cx="72" cy="62" r="6" fill="#fdba74"/>
      <polygon points="56,38 48,52 54,52 50,64 62,48 56,48" fill="#facc15"/>
    </svg>
  );
}

export function ServerlessIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Serverless">
      <rect width="100" height="100" rx="22" fill="#082f49"/>
      <path d="M54 22 L32 50 L48 50 L42 78 L68 46 L52 46 Z" fill="#38bdf8"/>
      <circle cx="50" cy="50" r="32" fill="none" stroke="#0284c7" strokeWidth="2" strokeDasharray="4 3"/>
    </svg>
  );
}

export function MonolithIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Monolithic Architecture">
      <rect width="100" height="100" rx="22" fill="#1e293b"/>
      <rect x="28" y="22" width="44" height="56" rx="6" fill="#475569"/>
      <rect x="34" y="28" width="32" height="12" rx="2" fill="#64748b"/>
      <rect x="34" y="44" width="32" height="12" rx="2" fill="#64748b"/>
      <rect x="34" y="60" width="32" height="12" rx="2" fill="#64748b"/>
    </svg>
  );
}

export function DomainDrivenDesignIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Domain-Driven Design">
      <rect width="100" height="100" rx="22" fill="#1e1b4b"/>
      <circle cx="50" cy="50" r="30" fill="none" stroke="#818cf8" strokeWidth="2.5" strokeDasharray="6 3"/>
      <circle cx="50" cy="50" r="18" fill="#4338ca"/>
      <circle cx="50" cy="50" r="6" fill="#38bdf8"/>
      <text x="50" y="53" fontSize="5" fontFamily="sans-serif" fontWeight="900" fill="#ffffff" textAnchor="middle">CORE</text>
    </svg>
  );
}

export function CqrsIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="CQRS">
      <rect width="100" height="100" rx="22" fill="#172554"/>
      <rect x="20" y="28" width="22" height="18" rx="4" fill="#3b82f6"/>
      <rect x="58" y="28" width="22" height="18" rx="4" fill="#60a5fa"/>
      <path d="M42 37 L58 37" stroke="#93c5fd" strokeWidth="2.5" strokeLinecap="round"/>
      <polygon points="58,37 53,34 53,40" fill="#93c5fd"/>
      <rect x="20" y="54" width="22" height="18" rx="4" fill="#1d4ed8"/>
      <rect x="58" y="54" width="22" height="18" rx="4" fill="#2563eb"/>
      <path d="M58 63 L42 63" stroke="#93c5fd" strokeWidth="2.5" strokeLinecap="round"/>
      <polygon points="42,63 47,60 47,66" fill="#93c5fd"/>
    </svg>
  );
}

export function HexagonalArchIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Hexagonal Architecture">
      <rect width="100" height="100" rx="22" fill="#311042"/>
      <polygon points="50,18 78,34 78,66 50,82 22,66 22,34" fill="none" stroke="#a855f7" strokeWidth="3"/>
      <polygon points="50,28 68,39 68,61 50,72 32,61 32,39" fill="#581c87"/>
      <circle cx="50" cy="50" r="5" fill="#f472b6"/>
    </svg>
  );
}

export function CleanArchitectureIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Clean Architecture">
      <rect width="100" height="100" rx="22" fill="#064e3b"/>
      <circle cx="50" cy="50" r="32" fill="none" stroke="#059669" strokeWidth="3"/>
      <circle cx="50" cy="50" r="22" fill="none" stroke="#10b981" strokeWidth="3"/>
      <circle cx="50" cy="50" r="12" fill="none" stroke="#34d399" strokeWidth="3"/>
      <circle cx="50" cy="50" r="4" fill="#a7f3d0"/>
    </svg>
  );
}

// ── BI & Visualization ────────────────────────────────────────────────────────

export function PowerBiIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Power BI">
      <rect width="100" height="100" rx="22" fill="#451a03"/>
      <rect x="24" y="52" width="12" height="24" rx="2" fill="#d97706"/>
      <rect x="42" y="38" width="12" height="38" rx="2" fill="#f59e0b"/>
      <rect x="60" y="24" width="12" height="52" rx="2" fill="#fde047"/>
    </svg>
  );
}

export function TableauIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Tableau">
      <rect width="100" height="100" rx="22" fill="#0c4a6e"/>
      <rect x="47" y="20" width="6" height="60" rx="2" fill="#e11d48"/>
      <rect x="20" y="47" width="60" height="6" rx="2" fill="#e11d48"/>
      <rect x="48" y="34" width="4" height="32" rx="1.5" fill="#f59e0b" transform="rotate(45 50 50)"/>
      <rect x="34" y="48" width="32" height="4" rx="1.5" fill="#f59e0b" transform="rotate(45 50 50)"/>
    </svg>
  );
}

export function ApacheSupersetIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Apache Superset">
      <rect width="100" height="100" rx="22" fill="#064e3b"/>
      <polygon points="50,22 76,38 76,62 50,78 24,62 24,38" fill="none" stroke="#10b981" strokeWidth="3"/>
      <path d="M36 50 Q50 36 64 50 T36 50" fill="#34d399"/>
    </svg>
  );
}

export function LookerIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Looker">
      <rect width="100" height="100" rx="22" fill="#172554"/>
      <circle cx="36" cy="50" r="14" fill="none" stroke="#60a5fa" strokeWidth="5"/>
      <circle cx="64" cy="50" r="14" fill="none" stroke="#3b82f6" strokeWidth="5"/>
      <circle cx="50" cy="50" r="4" fill="#ffffff"/>
    </svg>
  );
}

export function GrafanaIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Grafana">
      <rect width="100" height="100" rx="22" fill="#431407"/>
      <circle cx="50" cy="50" r="28" fill="none" stroke="#f97316" strokeWidth="4"/>
      <path d="M50 26 A24 24 0 0 1 74 50" fill="none" stroke="#fbbf24" strokeWidth="5" strokeLinecap="round"/>
      <circle cx="50" cy="50" r="7" fill="#ea580c"/>
    </svg>
  );
}

export function QlikIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Qlik">
      <rect width="100" height="100" rx="22" fill="#064e3b"/>
      <circle cx="50" cy="50" r="28" fill="none" stroke="#10b981" strokeWidth="4"/>
      <circle cx="50" cy="32" r="5" fill="#34d399"/>
      <circle cx="66" cy="58" r="5" fill="#34d399"/>
      <circle cx="34" cy="58" r="5" fill="#34d399"/>
    </svg>
  );
}
