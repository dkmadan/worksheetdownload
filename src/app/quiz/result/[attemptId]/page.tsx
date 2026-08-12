import { redirect, notFound } from "next/navigation";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getAttemptById } from "@/lib/quizAttempts";
import { getQuestionsForScoring } from "@/lib/questionsDb";
import QuizReviewAccordion, { type ReviewItem } from "@/components/quiz/QuizReviewAccordion";

export const dynamic = "force-dynamic";

export default async function QuizResultPage({
  params,
}: {
  params: Promise<{ attemptId: string }>;
}) {
  const session = await getServerSession(authOptions);
  if (!session?.user) redirect("/quiz");

  const userId =
    (session.user as { id?: string }).id ?? session.user.email ?? "";

  const { attemptId } = await params;
  const attempt = await getAttemptById(attemptId);

  if (!attempt || attempt.userId !== userId) notFound();
  if (attempt.status !== "completed") redirect("/quiz");

  const scoringQuestions = await getQuestionsForScoring(attempt.questionIds);
  const review: ReviewItem[] = attempt.questionIds.map((qId, i) => {
    const q = scoringQuestions.find((x) => x.id === qId)!;
    const userAnswer = attempt.answers[i] ?? null;
    return {
      questionNumber: i + 1,
      text: q.text,
      options: q.options,
      subject: q.subject,
      userAnswer,
      correctIndex: q.correctIndex,
      explanation: q.explanation,
      isCorrect: userAnswer === q.correctIndex,
      isSkipped: userAnswer === null,
    };
  });

  const score = attempt.score ?? 0;
  const total = attempt.totalQuestions;
  const pct = Math.round((score / total) * 100);
  const correct = review.filter((r) => r.isCorrect).length;
  const skipped = review.filter((r) => r.isSkipped).length;
  const wrong = total - correct - skipped;

  let duration = "";
  if (attempt.startedAt && attempt.completedAt) {
    const ms =
      new Date(attempt.completedAt).getTime() -
      new Date(attempt.startedAt).getTime();
    const mins = Math.floor(ms / 60000);
    const secs = Math.floor((ms % 60000) / 1000);
    duration = mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;
  }

  const grade =
    pct >= 80 ? "Excellent! 🌟" : pct >= 60 ? "Good Work! 👍" : pct >= 40 ? "Keep Practicing! 💪" : "Needs Improvement 📖";

  const scoreColor =
    pct >= 80 ? "text-green-400" : pct >= 60 ? "text-blue-400" : pct >= 40 ? "text-amber-400" : "text-red-400";

  const ringStroke =
    pct >= 80 ? "#4ade80" : pct >= 60 ? "#60a5fa" : pct >= 40 ? "#fbbf24" : "#f87171";

  const circumference = 2 * Math.PI * 40;
  const dashOffset = circumference - (pct / 100) * circumference;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      {/* Score hero */}
      <div className="max-w-2xl mx-auto px-4 pt-12 pb-8 text-center">
        <p className="text-white/35 text-sm font-medium mb-1">{attempt.config.label}</p>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white mb-8">{grade}</h1>

        {/* Animated ring */}
        <div className="relative w-36 h-36 mx-auto mb-8">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50" cy="50" r="40"
              fill="none"
              stroke="rgba(255,255,255,0.07)"
              strokeWidth="8"
            />
            <circle
              cx="50" cy="50" r="40"
              fill="none"
              stroke={ringStroke}
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={dashOffset}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className={`text-4xl font-black ${scoreColor}`}>{score}</span>
            <span className="text-white/35 text-sm font-medium">out of {total}</span>
          </div>
        </div>

        {/* Stat chips */}
        <div className="flex justify-center gap-3 flex-wrap mb-8">
          {[
            { val: correct, label: "Correct", color: "text-green-400" },
            { val: wrong, label: "Wrong", color: "text-red-400" },
            { val: skipped, label: "Skipped", color: "text-amber-400" },
            ...(duration ? [{ val: duration, label: "Time", color: "text-blue-400" }] : []),
          ].map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center bg-white/5 border border-white/8 rounded-xl px-5 py-3 min-w-[72px]"
            >
              <span className={`text-2xl font-bold ${s.color}`}>{s.val}</span>
              <span className="text-white/35 text-xs mt-0.5">{s.label}</span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex justify-center gap-3 flex-wrap mb-12">
          <Link
            href="/quiz"
            className="px-6 py-2.5 rounded-xl bg-pink-400 hover:bg-pink-500 text-white font-bold text-sm transition-colors shadow-lg shadow-pink-500/25"
          >
            Try Another Quiz
          </Link>
          <Link
            href="/"
            className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/18 text-white font-semibold text-sm transition-colors"
          >
            Home
          </Link>
        </div>
      </div>

      {/* Question Review */}
      <div className="max-w-2xl mx-auto px-4 pb-16">
        <h2 className="text-base font-bold text-white mb-4 flex items-center gap-2">
          <span>📋</span> Question Review
        </h2>
        <QuizReviewAccordion review={review} />
      </div>
    </div>
  );
}
