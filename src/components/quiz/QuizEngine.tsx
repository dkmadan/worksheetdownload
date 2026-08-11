"use client";

import { useState, useEffect, useCallback } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Link from "next/link";
import AuthModal from "@/components/auth/AuthModal";
import type { QuizQuestionPublic } from "@/lib/quiz";

type Phase = "loading" | "auth-required" | "starting" | "active" | "confirm-submit" | "submitting" | "error";

const LETTERS = ["A", "B", "C", "D"];

export default function QuizEngine() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { data: session, status } = useSession();

  const [phase, setPhase] = useState<Phase>("loading");
  const [questions, setQuestions] = useState<QuizQuestionPublic[]>([]);
  const [attemptId, setAttemptId] = useState("");
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visited, setVisited] = useState<boolean[]>([]);
  const [errorMsg, setErrorMsg] = useState("");

  const type = searchParams.get("type") ?? "grade-subject";
  const grade = searchParams.get("grade") ?? undefined;
  const subject = searchParams.get("subject") ?? undefined;
  const tech = searchParams.get("tech") ?? undefined;
  const item = searchParams.get("item") ?? undefined;
  const label = searchParams.get("label") ?? "Quiz";

  const startQuiz = useCallback(async () => {
    setPhase("starting");
    try {
      const res = await fetch("/api/quiz/start", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type, gradeId: grade, subjectId: subject, techSlug: tech, itemSlug: item, label }),
      });
      if (!res.ok) throw new Error(await res.text());
      const data = await res.json();
      setQuestions(data.questions);
      setAttemptId(data.attemptId);
      setAnswers(new Array(data.questions.length).fill(null));
      setVisited(new Array(data.questions.length).fill(false).map((_, i) => i === 0));
      setCurrentIndex(0);
      setPhase("active");
    } catch {
      setErrorMsg("Could not start quiz. Please check your connection and try again.");
      setPhase("error");
    }
  }, [type, grade, subject, tech, item, label]);

  useEffect(() => {
    if (status === "loading") return;
    if (status === "unauthenticated") { setPhase("auth-required"); return; }
    if (status === "authenticated") startQuiz();
  }, [status, startQuiz]);

  function goToQuestion(index: number) {
    setCurrentIndex(index);
    setVisited(prev => { const n = [...prev]; n[index] = true; return n; });
  }

  function handleAnswer(idx: number) {
    setAnswers(prev => { const n = [...prev]; n[currentIndex] = idx; return n; });
  }

  function handleNext() {
    if (currentIndex < questions.length - 1) goToQuestion(currentIndex + 1);
  }

  function handlePrev() {
    if (currentIndex > 0) goToQuestion(currentIndex - 1);
  }

  async function handleSubmit() {
    setPhase("submitting");
    try {
      const res = await fetch("/api/quiz/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ attemptId, answers }),
      });
      if (!res.ok) throw new Error(await res.text());
      router.push(`/quiz/result/${attemptId}`);
    } catch {
      setErrorMsg("Could not submit. Please try again.");
      setPhase("active");
    }
  }

  const answeredCount = answers.filter(a => a !== null).length;
  const unansweredCount = questions.length - answeredCount;
  const allVisited = visited.length > 0 && visited.every(Boolean);
  const canSubmit = answeredCount > 0;

  // ── Auth gate ──
  if (phase === "auth-required") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex items-center justify-center p-4">
        <AuthModal
          onClose={() => router.push("/quiz")}
          onSuccess={() => {
            setPhase("loading");
            startQuiz();
          }}
          message="Sign in to start your quiz and save results."
        />
      </div>
    );
  }

  // ── Loading / Starting ──
  if (phase === "loading" || phase === "starting") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-white/60 font-medium text-sm">
            {phase === "starting" ? "Preparing your quiz…" : "Loading…"}
          </p>
        </div>
      </div>
    );
  }

  // ── Error ──
  if (phase === "error") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex items-center justify-center p-4">
        <div className="text-center max-w-sm">
          <div className="text-5xl mb-4">😕</div>
          <h2 className="text-xl font-bold text-white mb-2">Something went wrong</h2>
          <p className="text-white/50 text-sm mb-6">{errorMsg}</p>
          <Link href="/quiz" className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-xl font-semibold transition-colors text-sm">
            Back to Quiz
          </Link>
        </div>
      </div>
    );
  }

  // ── Confirm Submit ──
  if (phase === "confirm-submit") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-8 text-center">
          <div className="text-5xl mb-4">📝</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Ready to Submit?</h2>
          {unansweredCount > 0 ? (
            <p className="text-amber-600 text-sm font-semibold mb-1">
              ⚠️ {unansweredCount} question{unansweredCount !== 1 ? "s" : ""} unanswered
            </p>
          ) : (
            <p className="text-green-600 text-sm font-semibold mb-1">
              ✅ All {questions.length} questions answered!
            </p>
          )}
          <p className="text-gray-400 text-sm mb-8">
            {answeredCount}/{questions.length} answered. You cannot change answers after submitting.
          </p>
          <div className="flex gap-3">
            <button
              onClick={() => setPhase("active")}
              className="flex-1 py-3 rounded-xl border border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 transition-colors text-sm"
            >
              Keep Reviewing
            </button>
            <button
              onClick={handleSubmit}
              className="flex-1 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-colors text-sm"
            >
              Submit Now
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── Submitting ──
  if (phase === "submitting") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-white font-semibold">Submitting your answers…</p>
        </div>
      </div>
    );
  }

  // ── Active quiz ──
  const question = questions[currentIndex];
  if (!question) return null;

  const progress = Math.round((answeredCount / questions.length) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex flex-col select-none">

      {/* Header */}
      <header className="flex items-center justify-between px-5 py-4 border-b border-white/8 flex-shrink-0">
        <div className="flex items-center gap-3 min-w-0">
          <span className="text-xl flex-shrink-0">🧠</span>
          <div className="min-w-0">
            <div className="text-white font-bold text-sm leading-tight truncate max-w-[160px] sm:max-w-xs">{label}</div>
            <div className="text-white/40 text-xs">{answeredCount}/{questions.length} answered</div>
          </div>
        </div>
        <Link
          href="/quiz"
          className="text-white/40 hover:text-white/70 text-xs font-medium px-3 py-1.5 rounded-lg hover:bg-white/10 transition-colors flex-shrink-0 ml-3"
        >
          Exit
        </Link>
      </header>

      {/* Progress */}
      <div className="flex-shrink-0 px-5 pt-5 pb-3">
        {/* Bar */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-400 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-white/40 text-xs font-semibold flex-shrink-0 w-8 text-right">{progress}%</span>
        </div>

        {/* Question dots */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {questions.map((_, i) => {
            const isAnswered = answers[i] !== null;
            const isCurrent = i === currentIndex;
            const isVisitedOnly = visited[i] && !isAnswered;
            return (
              <button
                key={i}
                onClick={() => goToQuestion(i)}
                title={`Q${i + 1}`}
                className={`w-7 h-7 rounded-full text-xs font-bold transition-all duration-150 flex-shrink-0 ${
                  isCurrent
                    ? "bg-white text-blue-900 scale-110 shadow-lg shadow-white/20 ring-2 ring-white/30"
                    : isAnswered
                    ? "bg-blue-500 text-white hover:bg-blue-400"
                    : isVisitedOnly
                    ? "bg-white/15 text-white/60 hover:bg-white/25"
                    : "bg-white/8 text-white/25 hover:bg-white/15"
                }`}
              >
                {i + 1}
              </button>
            );
          })}
        </div>
      </div>

      {/* Question card */}
      <div className="flex-1 flex items-start sm:items-center justify-center px-4 py-4 overflow-y-auto">
        <div className="w-full max-w-2xl">
          <div className="flex items-center justify-between mb-5">
            <span className="text-xs font-semibold text-blue-300/80 bg-blue-500/20 px-3 py-1 rounded-full border border-blue-400/20">
              {question.subject}
            </span>
            <span className="text-white/35 text-xs font-medium">
              {currentIndex + 1} / {questions.length}
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-white leading-snug mb-7">
            {question.text}
          </h2>

          <div className="space-y-3">
            {question.options.map((opt, idx) => {
              const isSelected = answers[currentIndex] === idx;
              return (
                <button
                  key={idx}
                  onClick={() => handleAnswer(idx)}
                  className={`w-full flex items-center gap-4 px-5 py-4 rounded-xl border-2 text-left transition-all duration-150 ${
                    isSelected
                      ? "border-blue-400 bg-blue-500/25 shadow-lg shadow-blue-500/20"
                      : "border-white/10 bg-white/5 hover:border-white/25 hover:bg-white/10"
                  }`}
                >
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 transition-colors ${
                    isSelected ? "bg-blue-500 text-white" : "bg-white/10 text-white/50"
                  }`}>
                    {LETTERS[idx]}
                  </span>
                  <span className={`text-base font-medium leading-snug transition-colors ${isSelected ? "text-white" : "text-white/75"}`}>
                    {opt}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-shrink-0 border-t border-white/8 px-4 py-4">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed text-white text-sm font-semibold transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Prev
            </button>

            <div className="flex-1" />

            {currentIndex < questions.length - 1 ? (
              <button
                onClick={handleNext}
                className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-colors"
              >
                {answers[currentIndex] === null ? "Skip" : "Next"}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            ) : (
              <button
                onClick={() => canSubmit && setPhase("confirm-submit")}
                disabled={!canSubmit}
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-green-500 hover:bg-green-400 disabled:bg-white/10 disabled:text-white/30 disabled:cursor-not-allowed text-white font-bold text-sm transition-colors shadow-lg shadow-green-500/25"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Submit Quiz
              </button>
            )}
          </div>

          {/* Early submit link: shows from Q5 onward and when answers exist */}
          {currentIndex < questions.length - 1 && allVisited && canSubmit && (
            <div className="mt-3 text-center">
              <button
                onClick={() => setPhase("confirm-submit")}
                className="text-white/35 hover:text-white/60 text-xs font-medium transition-colors underline underline-offset-2"
              >
                Submit quiz now
                {unansweredCount > 0 && ` · ${unansweredCount} unanswered`}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
