import WorksheetGrid from "@/components/worksheets/WorksheetGrid";
import { getAllWorksheets } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Worksheets | KidsWorksheets",
  description: "Browse all free printable worksheets for kindergarten through 5th grade.",
};

export default function WorksheetsPage() {
  const worksheets = getAllWorksheets();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">All Worksheets</h1>
        <p className="text-gray-500 mt-1">{worksheets.length} worksheets available — free to view and download.</p>
      </div>
      <WorksheetGrid worksheets={worksheets} />
    </div>
  );
}
