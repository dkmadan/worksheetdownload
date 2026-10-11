interface LogoProps {
  size?: number;
  showText?: boolean;
  textSize?: string;
  lightText?: boolean;
}

export default function Logo({ size = 32, showText = true, textSize = "text-lg", lightText = false }: LogoProps) {
  return (
    <span className="flex items-center gap-2.5">
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="WorksheetDownload logo"
        className="shrink-0"
      >
        {/* EducationPath Academic Navy Background */}
        <rect width="100" height="100" rx="22" fill="#1E3A8A" />
        <rect width="100" height="100" rx="22" fill="url(#bgGrad)" />

        <defs>
          <linearGradient id="bgGrad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1E3A8A" />
            <stop offset="100%" stopColor="#0F1E4A" />
          </linearGradient>
        </defs>

        {/* Document / paper */}
        <rect x="20" y="16" width="48" height="60" rx="5" fill="#FFFFFF" opacity="0.98" />

        {/* Folded corner dog-ear with academic tint */}
        <path d="M54 16 L68 28 L54 28 Z" fill="#E8ECF7" opacity="0.9" />
        <path d="M54 16 L68 16 L68 28 Z" fill="#FFFFFF" opacity="0.6" />

        {/* Text lines on document */}
        <line x1="28" y1="36" x2="58" y2="36" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
        <line x1="28" y1="46" x2="52" y2="46" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
        <line x1="28" y1="56" x2="56" y2="56" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
        <line x1="28" y1="66" x2="46" y2="66" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />

        {/* Pencil with EducationPath Saffron Accent (#F2B33D) */}
        <g transform="translate(56, 56) rotate(-45)">
          {/* Eraser (top) */}
          <rect x="-4.5" y="-26" width="9" height="7" rx="2" fill="#E05666" />
          {/* Ferrule */}
          <rect x="-4.5" y="-19" width="9" height="3.5" fill="#CBD5E1" />
          {/* Body (Saffron #F2B33D) */}
          <rect x="-4.5" y="-15.5" width="9" height="24" fill="#F2B33D" />
          {/* Wood tip */}
          <path d="M-4.5 8.5 L4.5 8.5 L0 18 Z" fill="#FDE68A" />
          {/* Graphite tip */}
          <path d="M-2 11 L2 11 L0 17 Z" fill="#0F1E4A" />
        </g>
      </svg>

      {showText && (
        <span className={`font-bold ${textSize} tracking-tight whitespace-nowrap`}>
          <span className={lightText ? "text-white" : "text-[#0F1E4A]"}>Worksheet</span>
          <span className={lightText ? "text-[#F2B33D]" : "text-[#1E3A8A]"}>Download</span>
        </span>
      )}
    </span>
  );
}
