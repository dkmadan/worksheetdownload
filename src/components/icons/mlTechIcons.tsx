import React from "react";

type P = { size: number };

// ── AI Agents ────────────────────────────────────────────────────────────────

export function AutoGptIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="AutoGPT">
      <rect width="100" height="100" rx="22" fill="#1e1b4b"/>
      <path d="M26 68 L50 20 L74 68 L60 68 L50 46 L40 68 Z" fill="#818cf8"/>
      <polygon points="50,42 56,54 44,54" fill="#38bdf8"/>
      <circle cx="50" cy="20" r="4" fill="#c084fc"/>
    </svg>
  );
}

export function BabyAgiIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="BabyAGI">
      <rect width="100" height="100" rx="22" fill="#311042"/>
      <circle cx="50" cy="50" r="26" fill="#a855f7"/>
      <circle cx="42" cy="46" r="4" fill="#ffffff"/>
      <circle cx="58" cy="46" r="4" fill="#ffffff"/>
      <circle cx="42" cy="46" r="2" fill="#1e1b4b"/>
      <circle cx="58" cy="46" r="2" fill="#1e1b4b"/>
      <path d="M44 58 Q50 64 56 58" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M50 24 Q50 14 58 16" fill="none" stroke="#f472b6" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  );
}

export function LangChainAgentsIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="LangChain Agents">
      <rect width="100" height="100" rx="22" fill="#042f2e"/>
      <rect x="22" y="42" width="28" height="16" rx="8" fill="none" stroke="#2dd4bf" strokeWidth="4.5"/>
      <rect x="50" y="42" width="28" height="16" rx="8" fill="none" stroke="#14b8a6" strokeWidth="4.5"/>
      <circle cx="24" cy="28" r="3" fill="#5eead4"/>
      <circle cx="76" cy="28" r="3" fill="#5eead4"/>
      <path d="M24 28 L36 42 M76 28 L64 42" stroke="#2dd4bf" strokeWidth="2" strokeDasharray="2 2"/>
    </svg>
  );
}

export function CrewAiIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="CrewAI">
      <rect width="100" height="100" rx="22" fill="#431407"/>
      <circle cx="50" cy="32" r="8" fill="#f97316"/>
      <circle cx="30" cy="66" r="7" fill="#ea580c"/>
      <circle cx="70" cy="66" r="7" fill="#ea580c"/>
      <line x1="50" y1="32" x2="30" y2="66" stroke="#fdba74" strokeWidth="2.5"/>
      <line x1="50" y1="32" x2="70" y2="66" stroke="#fdba74" strokeWidth="2.5"/>
      <line x1="30" y1="66" x2="70" y2="66" stroke="#fdba74" strokeWidth="2.5"/>
    </svg>
  );
}

export function AutoGenIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="AutoGen">
      <rect width="100" height="100" rx="22" fill="#082f49"/>
      <rect x="28" y="28" width="18" height="18" rx="4" fill="#38bdf8"/>
      <rect x="54" y="28" width="18" height="18" rx="4" fill="#0284c7"/>
      <rect x="28" y="54" width="18" height="18" rx="4" fill="#0ea5e9"/>
      <rect x="54" y="54" width="18" height="18" rx="4" fill="#0369a1"/>
      <circle cx="50" cy="50" r="5" fill="#facc15"/>
    </svg>
  );
}

export function MetaGptIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="MetaGPT">
      <rect width="100" height="100" rx="22" fill="#172554"/>
      <path d="M34 50 C22 36, 22 64, 34 50 C44 38, 56 62, 66 50 C78 36, 78 64, 66 50 C56 38, 44 62, 34 50 Z" fill="none" stroke="#60a5fa" strokeWidth="5.5" strokeLinecap="round"/>
      <circle cx="50" cy="50" r="4" fill="#93c5fd"/>
    </svg>
  );
}

export function SemanticKernelIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Semantic Kernel">
      <rect width="100" height="100" rx="22" fill="#1e1b4b"/>
      <circle cx="50" cy="50" r="26" fill="none" stroke="#818cf8" strokeWidth="4" strokeDasharray="8 4"/>
      <circle cx="50" cy="50" r="14" fill="#6366f1"/>
      <circle cx="50" cy="50" r="5" fill="#ffffff"/>
    </svg>
  );
}

export function ChatDevIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="ChatDev">
      <rect width="100" height="100" rx="22" fill="#064e3b"/>
      <path d="M24 30 Q24 24 30 24 L70 24 Q76 24 76 30 L76 56 Q76 62 70 62 L40 62 L26 74 L28 62 L30 62 Q24 62 24 56 Z" fill="#059669"/>
      <path d="M42 38 L36 44 L42 50 M58 38 L64 44 L58 50" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function AgentGptIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="AgentGPT">
      <rect width="100" height="100" rx="22" fill="#4c0519"/>
      <rect x="26" y="32" width="48" height="38" rx="10" fill="#e11d48"/>
      <rect x="34" y="42" width="32" height="10" rx="5" fill="#0f172a"/>
      <circle cx="42" cy="47" r="2.5" fill="#38bdf8"/>
      <circle cx="58" cy="47" r="2.5" fill="#38bdf8"/>
      <line x1="50" y1="20" x2="50" y2="32" stroke="#f43f5e" strokeWidth="3"/>
      <circle cx="50" cy="18" r="3.5" fill="#fecdd3"/>
    </svg>
  );
}

// ── AI / ML ──────────────────────────────────────────────────────────────────

export function TensorFlowIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="TensorFlow">
      <rect width="100" height="100" rx="22" fill="#431407"/>
      <polygon points="50,18 78,34 50,50 22,34" fill="#f97316"/>
      <polygon points="22,34 50,50 50,82 22,66" fill="#ea580c"/>
      <polygon points="50,50 78,34 78,66 50,82" fill="#c2410c"/>
      <polygon points="50,32 64,40 50,48 36,40" fill="#ffffff"/>
    </svg>
  );
}

export function PyTorchIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="PyTorch">
      <rect width="100" height="100" rx="22" fill="#450a0a"/>
      <path d="M50 22 C32 22 26 38 34 54 C38 62 46 66 54 66 C68 66 74 54 66 42 C64 50 58 54 52 54 C46 54 44 48 46 44 C50 36 60 30 50 22 Z" fill="#ef4444"/>
      <circle cx="66" cy="28" r="4.5" fill="#f97316"/>
    </svg>
  );
}

export function ScikitLearnIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Scikit-learn">
      <rect width="100" height="100" rx="22" fill="#082f49"/>
      <circle cx="42" cy="50" r="18" fill="#38bdf8"/>
      <circle cx="58" cy="50" r="18" fill="#f59e0b"/>
      <path d="M50 36 A18 18 0 0 1 50 64 A18 18 0 0 1 50 36 Z" fill="#0284c7"/>
    </svg>
  );
}

export function KerasIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Keras">
      <rect width="100" height="100" rx="22" fill="#450a0a"/>
      <rect x="26" y="24" width="48" height="52" rx="8" fill="#dc2626"/>
      <path d="M38 32 L44 32 L44 68 L38 68 Z M50 48 L62 32 L55 32 L45 44 Z M52 52 L63 68 L56 68 L46 54 Z" fill="#ffffff"/>
    </svg>
  );
}

export function XGBoostIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="XGBoost">
      <rect width="100" height="100" rx="22" fill="#064e3b"/>
      <circle cx="50" cy="26" r="6" fill="#34d399"/>
      <circle cx="32" cy="50" r="5.5" fill="#10b981"/>
      <circle cx="68" cy="50" r="5.5" fill="#10b981"/>
      <circle cx="22" cy="74" r="5" fill="#059669"/>
      <circle cx="42" cy="74" r="5" fill="#059669"/>
      <circle cx="78" cy="74" r="5" fill="#059669"/>
      <line x1="50" y1="26" x2="32" y2="50" stroke="#34d399" strokeWidth="2"/>
      <line x1="50" y1="26" x2="68" y2="50" stroke="#34d399" strokeWidth="2"/>
      <line x1="32" y1="50" x2="22" y2="74" stroke="#34d399" strokeWidth="2"/>
      <line x1="32" y1="50" x2="42" y2="74" stroke="#34d399" strokeWidth="2"/>
      <line x1="68" y1="50" x2="78" y2="74" stroke="#34d399" strokeWidth="2"/>
    </svg>
  );
}

export function HuggingFaceIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="Hugging Face">
      <rect width="100" height="100" rx="22" fill="#451a03"/>
      <circle cx="50" cy="50" r="26" fill="#f59e0b"/>
      <circle cx="40" cy="46" r="3.5" fill="#1e1b4b"/>
      <circle cx="60" cy="46" r="3.5" fill="#1e1b4b"/>
      <path d="M38 56 Q50 66 62 56" fill="none" stroke="#1e1b4b" strokeWidth="3" strokeLinecap="round"/>
      <path d="M22 60 Q28 50 36 56" stroke="#fbbf24" strokeWidth="4" strokeLinecap="round" fill="none"/>
      <path d="M78 60 Q72 50 64 56" stroke="#fbbf24" strokeWidth="4" strokeLinecap="round" fill="none"/>
    </svg>
  );
}

export function OpenCvIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="OpenCV">
      <rect width="100" height="100" rx="22" fill="#0f172a"/>
      <circle cx="50" cy="34" r="10" fill="none" stroke="#ef4444" strokeWidth="5"/>
      <circle cx="34" cy="62" r="10" fill="none" stroke="#22c55e" strokeWidth="5"/>
      <circle cx="66" cy="62" r="10" fill="none" stroke="#3b82f6" strokeWidth="5"/>
    </svg>
  );
}

export function JaxIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="JAX">
      <rect width="100" height="100" rx="22" fill="#1e1b4b"/>
      <polygon points="50,22 74,38 74,62 50,78 26,62 26,38" fill="none" stroke="#818cf8" strokeWidth="3"/>
      <text x="50" y="58" fontSize="16" fontFamily="sans-serif" fontWeight="900" fill="#38bdf8" textAnchor="middle">JAX</text>
    </svg>
  );
}

export function FastAiIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="FastAI">
      <rect width="100" height="100" rx="22" fill="#0c4a6e"/>
      <path d="M24 64 L44 32 L56 32 L36 64 Z" fill="#38bdf8"/>
      <path d="M48 64 L68 32 L80 32 L60 64 Z" fill="#0ea5e9"/>
      <circle cx="74" cy="40" r="3" fill="#facc15"/>
    </svg>
  );
}

export function OnnxIcon({ size }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-label="ONNX">
      <rect width="100" height="100" rx="22" fill="#111827"/>
      <path d="M30 32 L50 48 L30 68" fill="none" stroke="#ffffff" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M50 48 L70 32 M50 48 L70 68" fill="none" stroke="#38bdf8" strokeWidth="4.5" strokeLinecap="round"/>
      <circle cx="50" cy="48" r="5" fill="#38bdf8"/>
    </svg>
  );
}
