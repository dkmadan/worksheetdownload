interface LogoProps {
  size?: number;
  showText?: boolean;
  textSize?: string;
}

export default function Logo({ size = 32, showText = true, textSize = "text-lg" }: LogoProps) {
  const id = "logoGradV2";

  return (
    <span className="flex items-center gap-2.5">
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="WorksheetDownload logo"
      >
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#3d5280" />
            <stop offset="100%" stopColor="#2a3f6a" />
          </linearGradient>
        </defs>

        {/* Background rounded square */}
        <rect x="0" y="0" width="40" height="40" rx="9" fill={`url(#${id})`} />

        {/* Worksheet paper */}
        <rect x="7" y="7" width="20" height="25" rx="2.5" fill="white" opacity="0.95" />

        {/* Folded corner */}
        <path d="M23 7 L27 7 L27 11 Z" fill="#C4B5FD" opacity="0.6" />
        <path d="M23 7 L27 11 L23 11 Z" fill="white" opacity="0.7" />

        {/* Lines on paper */}
        <line x1="11" y1="15" x2="23" y2="15" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="11" y1="19" x2="21" y2="19" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="11" y1="23" x2="22" y2="23" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="11" y1="27" x2="19" y2="27" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />

        {/* Pencil — tilted 45° */}
        <g transform="rotate(-45 30 28)">
          <rect x="27" y="16" width="6" height="3" rx="1" fill="#FB7185" />
          <rect x="27" y="19" width="6" height="1.5" fill="#9CA3AF" />
          <rect x="27" y="20.5" width="6" height="9" fill="#FCD34D" />
          <path d="M27 29.5 L33 29.5 L30 34 Z" fill="#F5E6C8" />
          <path d="M28.5 29.5 L31.5 29.5 L30 32.5 Z" fill="#374151" />
        </g>
      </svg>

      {showText && (
        <span className={`font-bold ${textSize} tracking-tight`}>
          <span className="text-slate-900">Worksheet</span>
          <span style={{ color: "#3d5280" }}>Download</span>
        </span>
      )}
    </span>
  );
}
