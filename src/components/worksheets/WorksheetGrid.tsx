import WorksheetCard from "./WorksheetCard";
import type { Worksheet } from "@/lib/types";

interface WorksheetGridProps {
  worksheets: Worksheet[];
  emptyMessage?: string;
}

export default function WorksheetGrid({ worksheets, emptyMessage = "No worksheets found." }: WorksheetGridProps) {
  if (worksheets.length === 0) {
    return (
      <div className="text-center py-16 text-gray-400">
        <p className="text-4xl mb-3">📭</p>
        <p className="text-lg">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {worksheets.map((w) => (
        <WorksheetCard key={w.id} {...w} />
      ))}
    </div>
  );
}
