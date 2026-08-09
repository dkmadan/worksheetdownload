interface IconProps { className?: string }

export function MathIcon({ className = "w-10 h-10" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="36" height="36" rx="8" fill="#DBEAFE" />
      <text x="20" y="27" textAnchor="middle" fontSize="22" fontWeight="bold" fill="#2563EB">∑</text>
    </svg>
  );
}

export function EnglishIcon({ className = "w-10 h-10" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="36" height="36" rx="8" fill="#D1FAE5" />
      <rect x="10" y="8" width="20" height="24" rx="2" fill="#059669" opacity="0.2" />
      <rect x="10" y="8" width="20" height="24" rx="2" stroke="#059669" strokeWidth="2" />
      <line x1="14" y1="16" x2="26" y2="16" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="14" y1="20" x2="26" y2="20" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="14" y1="24" x2="22" y2="24" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" />
      <text x="20" y="13" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#059669">Aa</text>
    </svg>
  );
}

export function ScienceIcon({ className = "w-10 h-10" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="36" height="36" rx="8" fill="#CFFAFE" />
      <path d="M16 8 L16 20 L10 30 L30 30 L24 20 L24 8 Z" stroke="#0891b2" strokeWidth="2" fill="#0891b2" fillOpacity="0.15" strokeLinejoin="round" />
      <rect x="14" y="7" width="12" height="2" rx="1" fill="#0891b2" />
      <circle cx="18" cy="24" r="2" fill="#0891b2" />
      <circle cx="23" cy="26" r="1.5" fill="#0891b2" opacity="0.6" />
    </svg>
  );
}

export function EvsIcon({ className = "w-10 h-10" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="36" height="36" rx="8" fill="#D1FAE5" />
      <path d="M20 30 L20 18" stroke="#047857" strokeWidth="2" strokeLinecap="round" />
      <path d="M20 22 C20 22 14 18 12 12 C16 12 20 16 20 22Z" fill="#10B981" />
      <path d="M20 18 C20 18 26 14 28 8 C24 8 20 12 20 18Z" fill="#34D399" />
      <path d="M14 30 L26 30" stroke="#047857" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function GkIcon({ className = "w-10 h-10" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="36" height="36" rx="8" fill="#FEF3C7" />
      <circle cx="20" cy="20" r="11" stroke="#D97706" strokeWidth="2" fill="#D97706" fillOpacity="0.1" />
      <ellipse cx="20" cy="20" rx="5" ry="11" stroke="#D97706" strokeWidth="1.5" />
      <line x1="9" y1="20" x2="31" y2="20" stroke="#D97706" strokeWidth="1.5" />
      <line x1="11" y1="14" x2="29" y2="14" stroke="#D97706" strokeWidth="1" opacity="0.6" />
      <line x1="11" y1="26" x2="29" y2="26" stroke="#D97706" strokeWidth="1" opacity="0.6" />
    </svg>
  );
}

export function ReasoningIcon({ className = "w-10 h-10" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="36" height="36" rx="8" fill="#EDE9FE" />
      <path d="M20 10 C14 10 10 14 10 19 C10 22 11.5 24.5 14 26 L14 30 L26 30 L26 26 C28.5 24.5 30 22 30 19 C30 14 26 10 20 10Z" fill="#7C3AED" fillOpacity="0.2" stroke="#7C3AED" strokeWidth="2" strokeLinejoin="round" />
      <line x1="20" y1="30" x2="20" y2="34" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" />
      <line x1="17" y1="34" x2="23" y2="34" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" />
      <line x1="20" y1="15" x2="20" y2="21" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" />
      <circle cx="20" cy="23" r="1.5" fill="#7C3AED" />
    </svg>
  );
}

export function SocialStudiesIcon({ className = "w-10 h-10" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="36" height="36" rx="8" fill="#FEE2E2" />
      <rect x="8" y="10" width="24" height="18" rx="2" fill="#EF4444" fillOpacity="0.15" stroke="#EF4444" strokeWidth="2" />
      <path d="M8 16 L32 16" stroke="#EF4444" strokeWidth="1.5" />
      <path d="M18 10 L18 28" stroke="#EF4444" strokeWidth="1.5" />
      <path d="M13 22 C13 22 14 19 18 20 C22 21 23 18 23 18" stroke="#EF4444" strokeWidth="1.2" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function ShapesVisualIcon({ className = "w-10 h-10" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="36" height="36" rx="8" fill="#FCE7F3" />
      <rect x="8" y="18" width="12" height="12" rx="2" fill="#EC4899" fillOpacity="0.3" stroke="#EC4899" strokeWidth="2" />
      <circle cx="26" cy="16" r="7" fill="#EC4899" fillOpacity="0.2" stroke="#EC4899" strokeWidth="2" />
      <path d="M19 12 L26 8 L33 12" stroke="#EC4899" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

export function ColoringIcon({ className = "w-10 h-10" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="36" height="36" rx="8" fill="#FFF7ED" />
      <circle cx="16" cy="18" r="5" fill="#F97316" fillOpacity="0.4" stroke="#F97316" strokeWidth="1.5" />
      <circle cx="24" cy="18" r="5" fill="#EAB308" fillOpacity="0.4" stroke="#EAB308" strokeWidth="1.5" />
      <circle cx="20" cy="24" r="5" fill="#EC4899" fillOpacity="0.4" stroke="#EC4899" strokeWidth="1.5" />
      <path d="M30 10 L32 8 L34 12 L32 11 Z" fill="#6B7280" />
      <rect x="28" y="10" width="4" height="10" rx="1" fill="#FCD34D" transform="rotate(15 30 15)" />
    </svg>
  );
}

export function LogicIcon({ className = "w-10 h-10" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="36" height="36" rx="8" fill="#EDE9FE" />
      <rect x="8" y="8" width="10" height="10" rx="3" fill="#8B5CF6" fillOpacity="0.3" stroke="#8B5CF6" strokeWidth="2" />
      <rect x="22" y="8" width="10" height="10" rx="3" fill="#8B5CF6" fillOpacity="0.3" stroke="#8B5CF6" strokeWidth="2" />
      <rect x="15" y="22" width="10" height="10" rx="3" fill="#8B5CF6" fillOpacity="0.5" stroke="#8B5CF6" strokeWidth="2" />
      <path d="M13 18 L15 22" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M27 18 L25 22" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function SocialEmotionalIcon({ className = "w-10 h-10" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="36" height="36" rx="8" fill="#FFF1F2" />
      <path d="M20 30 C20 30 8 23 8 15 C8 11 11 8 15 8 C17.5 8 19.5 9.5 20 11 C20.5 9.5 22.5 8 25 8 C29 8 32 11 32 15 C32 23 20 30 20 30Z" fill="#FB7185" fillOpacity="0.3" stroke="#FB7185" strokeWidth="2" />
    </svg>
  );
}

export function GeneralAwarenessIcon({ className = "w-10 h-10" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="36" height="36" rx="8" fill="#CCFBF1" />
      <circle cx="20" cy="20" r="10" fill="#0D9488" fillOpacity="0.2" stroke="#0D9488" strokeWidth="2" />
      <path d="M14 20 C14 20 16 16 20 16 C24 16 26 20 26 20" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M12 24 L28 24" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M20 10 L20 14" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function getSubjectIcon(subjectId: string, className?: string) {
  const props = { className };
  switch (subjectId) {
    case "mathematics":       return <MathIcon {...props} />;
    case "english":           return <EnglishIcon {...props} />;
    case "english-language":  return <EnglishIcon {...props} />;
    case "science":           return <ScienceIcon {...props} />;
    case "evs":               return <EvsIcon {...props} />;
    case "gk":                return <GkIcon {...props} />;
    case "reasoning":         return <ReasoningIcon {...props} />;
    case "social-studies":    return <SocialStudiesIcon {...props} />;
    case "shapes-visual":     return <ShapesVisualIcon {...props} />;
    case "coloring-creative": return <ColoringIcon {...props} />;
    case "logic-thinking":    return <LogicIcon {...props} />;
    case "social-emotional":  return <SocialEmotionalIcon {...props} />;
    case "general-awareness": return <GeneralAwarenessIcon {...props} />;
    default:                  return <MathIcon {...props} />;
  }
}
