import ViewPdfButton from "./ViewPdfButton";
import type { Worksheet } from "@/lib/types";
import { SUBJECTS, GRADES } from "@/lib/data";

export default function WorksheetCard({ title, subject, grade, description, pdfUrl, thumbnailEmoji }: Worksheet) {
  const subjectLabel = SUBJECTS.find((s) => s.id === subject)?.label ?? subject;
  const gradeLabel = GRADES.find((g) => g.id === grade)?.label ?? grade;

  return (
    <div className="bg-white rounded-2xl border border-[#E4E0D4] hover:border-[#1E3A8A] shadow-2xs hover:shadow-lg transition-all duration-200 flex flex-col overflow-hidden">
      {/* Thumbnail */}
      <div className="bg-[#FAF9F5] border-b border-[#E4E0D4]/60 flex items-center justify-center h-32 text-5xl">
        {thumbnailEmoji}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2.5 flex-1">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs bg-[#ECEFF8] text-[#1E3A8A] font-semibold px-2.5 py-0.5 rounded-full">{subjectLabel}</span>
          <span className="text-xs bg-[#FFF8E7] text-[#9A5B00] border border-[#F2B33D]/30 font-semibold px-2.5 py-0.5 rounded-full">{gradeLabel}</span>
        </div>

        <h3 className="font-bold text-[#0F1E4A] text-sm leading-snug">{title}</h3>
        <p className="text-[#5B6072] text-xs leading-relaxed flex-1">{description}</p>

        {/* Actions */}
        <div className="flex gap-2 pt-2">
          <ViewPdfButton pdfUrl={pdfUrl} title={title} />
          <a
            href={pdfUrl}
            download={title}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center border border-[#E4E0D4] hover:border-[#1E3A8A] hover:bg-[#FAF9F5] text-[#0F1E4A] text-sm font-semibold py-2 rounded-xl transition-all"
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
}
