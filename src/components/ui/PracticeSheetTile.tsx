import DownloadButtons from "@/components/ui/DownloadButtons";

const SHEET_STYLES = [
  { badge: "bg-blue-600 text-white",    border: "border-blue-200",   numBg: "bg-blue-100",    numText: "text-blue-600"    },
  { badge: "bg-emerald-600 text-white", border: "border-emerald-200", numBg: "bg-emerald-100", numText: "text-emerald-700" },
  { badge: "bg-purple-600 text-white",  border: "border-purple-200",  numBg: "bg-purple-100",  numText: "text-purple-600"  },
  { badge: "bg-orange-500 text-white",  border: "border-orange-200",  numBg: "bg-orange-100",  numText: "text-orange-500"  },
];

interface PracticeSheetTileProps {
  sheetNumber: number;
  gradeLabel: string;
  subjectLabel: string;
  topic: string;
  gradeId: string;
  subjectId: string;
  topicSlug: string;
}

export default function PracticeSheetTile({
  sheetNumber, gradeLabel, subjectLabel, topic, gradeId, subjectId, topicSlug
}: PracticeSheetTileProps) {
  const { badge, border, numBg, numText } = SHEET_STYLES[sheetNumber - 1];
  const pdfUrl = `https://cdn.worksheetdownload.com/pdfs/${gradeId}-${subjectId}-${topicSlug}-sheet-${sheetNumber}.pdf`;
  const title = `${gradeLabel} | ${subjectLabel} | ${topic} — PracticeSheet-${sheetNumber}`;

  return (
    <div className={`bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col border ${border}`}>

      {/* ── Worksheet preview illustration (works on all devices) ── */}
      <div className="relative overflow-hidden bg-white flex-shrink-0 border-b border-gray-100" style={{ height: 200 }}>
        <div className="absolute inset-0 p-3 flex flex-col gap-1">
          {/* Header */}
          <div className="flex items-center justify-between">
            <span className="text-[7px] font-bold text-blue-700 tracking-wide">WorksheetDownload.com</span>
            <span className="text-[5.5px] text-gray-400 font-medium">{gradeLabel}</span>
          </div>
          <div className="h-px bg-blue-500 mb-0.5" />
          {/* Topic title */}
          <p className="text-[8px] font-bold text-blue-900 text-center uppercase tracking-wide truncate px-1">{topic}</p>
          {/* Name / Date */}
          <div className="flex text-[5.5px] text-gray-400 my-0.5">
            <span>Name: _______________</span>
            <span className="ml-auto">Date: ________</span>
          </div>
          {/* Question grid */}
          <div className="grid grid-cols-2 gap-x-2 gap-y-1.5 flex-1 mt-0.5 overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <span className={`text-[5.5px] font-bold rounded-full w-3.5 h-3.5 flex items-center justify-center flex-shrink-0 ${numBg} ${numText}`}>
                  {i + 1}
                </span>
                <div className="flex-1 space-y-1">
                  <div className="h-px bg-gray-200" />
                  <div className="h-px bg-gray-100" />
                </div>
              </div>
            ))}
          </div>
          {/* Score */}
          <div className="text-[5.5px] text-gray-400 mt-0.5">Score: _______ / 20</div>
        </div>
        {/* Sheet number badge */}
        <span className={`absolute top-2 left-2 text-xs font-bold px-2.5 py-1 rounded-full shadow-sm z-10 ${badge}`}>
          PracticeSheet-{sheetNumber}
        </span>
      </div>

      {/* ── Card body ── */}
      <div className="p-4 flex flex-col gap-2 flex-1">
        <div className="flex flex-wrap gap-1.5">
          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-medium">{gradeLabel}</span>
          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-medium">{subjectLabel}</span>
        </div>

        <h3 className="font-bold text-gray-900 text-sm leading-snug">{topic}</h3>
        <p className="text-gray-400 text-xs">Practice Sheet {sheetNumber} of 4</p>

        <div className="flex gap-2 pt-2 mt-auto">
          <DownloadButtons pdfUrl={pdfUrl} title={title} />
        </div>
      </div>
    </div>
  );
}
