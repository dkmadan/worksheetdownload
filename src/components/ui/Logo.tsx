interface LogoProps {
  size?: number;
  showText?: boolean;
  textSize?: string;
}

export default function Logo({ size = 32, showText = true, textSize = "text-lg" }: LogoProps) {
  return (
    <span className="flex items-center gap-2.5">
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="WorksheetDownload logo"
      >
        {/* Dark navy background */}
        <rect width="100" height="100" rx="22" fill="#1e3a5f" />
        <rect width="100" height="100" rx="22" fill="url(#bgGrad)" />

        <defs>
          <linearGradient id="bgGrad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#243b6e" />
            <stop offset="100%" stopColor="#1a2f56" />
          </linearGradient>
        </defs>

        {/* Document / paper */}
        <rect x="18" y="14" width="52" height="64" rx="5" fill="white" opacity="0.97" />

        {/* Folded corner dog-ear */}
        <path d="M58 14 L70 26 L58 26 Z" fill="#c7d2e8" opacity="0.7" />
        <path d="M58 14 L70 14 L70 26 Z" fill="white" opacity="0.5" />

        {/* Text lines on document */}
        <line x1="28" y1="36" x2="60" y2="36" stroke="#94a3b8" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="28" y1="46" x2="56" y2="46" stroke="#94a3b8" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="28" y1="56" x2="58" y2="56" stroke="#94a3b8" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="28" y1="66" x2="50" y2="66" stroke="#94a3b8" strokeWidth="3.5" strokeLinecap="round" />

        {/* Pencil — diagonal, bottom-right, pointing lower-left */}
        <g transform="translate(52, 52) rotate(-45)">
          {/* Eraser (top) */}
          <rect x="-5" y="-28" width="10" height="8" rx="2.5" fill="#fb7185" />
          {/* Ferrule (metal band) */}
          <rect x="-5" y="-20" width="10" height="4" fill="#94a3b8" />
          {/* Body (yellow) */}
          <rect x="-5" y="-16" width="10" height="26" fill="#fbbf24" />
          {/* Wood tip */}
          <path d="M-5 10 L5 10 L0 20 Z" fill="#f5deb3" />
          {/* Graphite tip */}
          <path d="M-2 12 L2 12 L0 18 Z" fill="#374151" />
        </g>
      </svg>

      {showText && (
        <span className={`font-bold ${textSize} tracking-tight`}>
          <span className="text-slate-900">Worksheet</span>
          <span style={{ color: "#243b6e" }}>Download</span>
        </span>
      )}
    </span>
  );
}
