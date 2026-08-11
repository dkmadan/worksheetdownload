import { Suspense } from "react";
import QuizEngine from "@/components/quiz/QuizEngine";

export const metadata = {
  title: "Quiz in Progress",
  robots: { index: false },
};

function QuizLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-white/60 font-medium text-sm">Loading quiz…</p>
      </div>
    </div>
  );
}

export default function QuizStartPage() {
  return (
    <Suspense fallback={<QuizLoading />}>
      <QuizEngine />
    </Suspense>
  );
}
