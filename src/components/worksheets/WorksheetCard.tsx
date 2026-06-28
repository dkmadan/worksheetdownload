import ViewPdfButton from "./ViewPdfButton";
import type { Worksheet } from "@/lib/types";
import { SUBJECTS, GRADES } from "@/lib/data";

export default function WorksheetCard({ title, subject, grade, description, pdfUrl, thumbnailEmoji }: Worksheet) {
  const subjectLabel = SUBJECTS.find((s) => s.id === subject)?.label ?? subject;
  const gradeLabel = GRADES.find((g) => g.id === grade)?.label ?? grade;

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden">
      {/* Thumbnail */}
      <div className="bg-gray-50 flex items-center justify-center h-32 text-5xl">
        {thumbnailEmoji}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2 flex-1">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs bg-cyan-100 text-cyan-700 font-medium px-2 py-0.5 rounded-full">{subjectLabel}</span>
          <span className="text-xs bg-amber-100 text-amber-700 font-medium px-2 py-0.5 rounded-full">{gradeLabel}</span>
        </div>

        <h3 className="font-semibold text-gray-900 text-sm leading-snug">{title}</h3>
        <p className="text-gray-500 text-xs leading-relaxed flex-1">{description}</p>

        {/* Actions */}
        <div className="flex gap-2 pt-2">
          <ViewPdfButton pdfUrl={pdfUrl} title={title} />
          <a
            href={pdfUrl}
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
