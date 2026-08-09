import ViewPdfButton from "@/components/worksheets/ViewPdfButton";

const PRACTICE_PDF = "/worksheets/pdfs/Class5_LCM_Worksheet.pdf";

const SHEET_STYLES = [
  { bg: "from-blue-500 to-cyan-500",    badge: "bg-blue-100 text-blue-700",   num: "①" },
  { bg: "from-emerald-500 to-teal-500", badge: "bg-emerald-100 text-emerald-700", num: "②" },
  { bg: "from-purple-500 to-indigo-500",badge: "bg-purple-100 text-purple-700", num: "③" },
  { bg: "from-orange-400 to-amber-500", badge: "bg-amber-100 text-amber-700",  num: "④" },
];

interface PracticeSheetTileProps {
  sheetNumber: number;
  gradeLabel: string;
  subjectLabel: string;
  topic: string;
}

export default function PracticeSheetTile({ sheetNumber, gradeLabel, subjectLabel, topic }: PracticeSheetTileProps) {
  const style = SHEET_STYLES[sheetNumber - 1];
  const title = `${gradeLabel} | ${subjectLabel} | ${topic} — PracticeSheet-${sheetNumber}`;

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
      {/* Gradient header with worksheet illustration */}
      <div className={`bg-gradient-to-br ${style.bg} p-6 flex flex-col items-center gap-3`}>
        {/* Worksheet SVG illustration */}
        <svg width="72" height="90" viewBox="0 0 72 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="4" width="64" height="82" rx="6" fill="white" opacity="0.95" />
          <path d="M52 4 L68 4 L68 20 Z" fill="#E2E8F0" opacity="0.6" />
          <path d="M52 4 L68 20 L52 20 Z" fill="white" opacity="0.7" />
          <line x1="14" y1="30" x2="58" y2="30" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
          <line x1="14" y1="40" x2="52" y2="40" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
          <line x1="14" y1="50" x2="55" y2="50" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
          <line x1="14" y1="60" x2="48" y2="60" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
          <line x1="14" y1="70" x2="50" y2="70" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
          <text x="36" y="20" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#94A3B8">{style.num}</text>
        </svg>

        <span className={`text-xs font-bold px-3 py-1 rounded-full ${style.badge} bg-white/80`}>
          PracticeSheet-{sheetNumber}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2 flex-1">
        <div className="flex flex-wrap gap-1.5">
          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-medium">{gradeLabel}</span>
          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-medium">{subjectLabel}</span>
        </div>

        <h3 className="font-bold text-gray-900 text-sm leading-snug">{topic}</h3>
        <p className="text-gray-400 text-xs">Practice Sheet {sheetNumber} of 4</p>

        <div className="flex gap-2 pt-2 mt-auto">
          <ViewPdfButton pdfUrl={PRACTICE_PDF} title={title} />
          <a
            href={PRACTICE_PDF}
            download={title}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center border border-gray-200 hover:border-gray-400 text-gray-700 text-sm font-medium py-2 rounded-lg transition-colors"
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
}
