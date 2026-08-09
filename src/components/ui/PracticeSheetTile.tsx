import DownloadButtons from "@/components/ui/DownloadButtons";
import PdfThumbnail from "@/components/ui/PdfThumbnail";

const SHEET_STYLES = [
  { badge: "bg-blue-600 text-white",    border: "border-blue-200",   num: "①" },
  { badge: "bg-emerald-600 text-white", border: "border-emerald-200", num: "②" },
  { badge: "bg-purple-600 text-white",  border: "border-purple-200",  num: "③" },
  { badge: "bg-orange-500 text-white",  border: "border-orange-200",  num: "④" },
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
  const style = SHEET_STYLES[sheetNumber - 1];
  const pdfUrl = `/worksheets/pdfs/${gradeId}-${subjectId}-${topicSlug}-sheet-${sheetNumber}.pdf`;
  const title = `${gradeLabel} | ${subjectLabel} | ${topic} — PracticeSheet-${sheetNumber}`;

  return (
    <div className={`bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col border ${style.border}`}>
      {/* PDF preview with sheet number badge overlay */}
      <div className="relative">
        <PdfThumbnail pdfUrl={pdfUrl} previewHeight={200} />
        <span className={`absolute top-2 left-2 text-xs font-bold px-2.5 py-1 rounded-full shadow-sm ${style.badge}`}>
          PracticeSheet-{sheetNumber}
        </span>
      </div>

      {/* Card body */}
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
