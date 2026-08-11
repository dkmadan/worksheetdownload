"use client";

import { useState } from "react";

const LETTERS = ["A", "B", "C", "D"];

export interface ReviewItem {
  questionNumber: number;
  text: string;
  options: string[];
  subject: string;
  userAnswer: number | null;
  correctIndex: number;
  explanation: string;
  isCorrect: boolean;
  isSkipped: boolean;
}

export default function QuizReviewAccordion({ review }: { review: ReviewItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-2">
      {review.map((item) => {
        const isOpen = open === item.questionNumber;
        const borderColor = item.isCorrect
          ? "border-green-500/30"
          : item.isSkipped
          ? "border-amber-500/20"
          : "border-red-500/30";
        const bgColor = item.isCorrect
          ? "bg-green-500/5"
          : item.isSkipped
          ? "bg-amber-500/5"
          : "bg-red-500/5";
        const statusColor = item.isCorrect
          ? "text-green-400"
          : item.isSkipped
          ? "text-amber-400"
          : "text-red-400";
        const statusIcon = item.isCorrect ? "✓" : item.isSkipped ? "–" : "✗";

        return (
          <div
            key={item.questionNumber}
            className={`rounded-xl border transition-all duration-200 ${
              isOpen ? `${borderColor} ${bgColor}` : "border-white/8 bg-white/3 hover:bg-white/5"
            }`}
          >
            <button
              className="w-full flex items-center gap-3 px-4 py-3.5 text-left"
              onClick={() => setOpen(isOpen ? null : item.questionNumber)}
            >
              <span className={`text-base font-black flex-shrink-0 w-6 ${statusColor}`}>
                {statusIcon}
              </span>
              <span className="flex-1 text-sm font-medium text-white/75 leading-snug line-clamp-2">
                <span className="text-white/40 mr-1">Q{item.questionNumber}.</span>
                {item.text}
              </span>
              <svg
                className={`w-4 h-4 text-white/25 flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isOpen && (
              <div className="px-4 pb-4 space-y-2">
                {/* Options with answer highlighting */}
                <div className="space-y-1.5">
                  {item.options.map((opt, i) => {
                    const isCorrect = i === item.correctIndex;
                    const isUserWrong = i === item.userAnswer && !isCorrect;
                    return (
                      <div
                        key={i}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-none ${
                          isCorrect
                            ? "bg-green-500/20 border border-green-500/30 text-green-300"
                            : isUserWrong
                            ? "bg-red-500/20 border border-red-500/30 text-red-300 line-through opacity-80"
                            : "text-white/35"
                        }`}
                      >
                        <span className="font-bold w-5 flex-shrink-0 text-xs">{LETTERS[i]}</span>
                        <span className="flex-1">{opt}</span>
                        {isCorrect && (
                          <span className="text-green-400 font-bold flex-shrink-0 text-xs">✓ Correct</span>
                        )}
                        {isUserWrong && (
                          <span className="text-red-400 font-bold flex-shrink-0 text-xs">✗ Your answer</span>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Explanation */}
                <div className="bg-blue-500/10 border border-blue-400/20 rounded-lg px-4 py-3 mt-2">
                  <span className="text-blue-400/70 text-xs font-semibold uppercase tracking-wide">
                    Explanation
                  </span>
                  <p className="text-white/65 text-sm mt-1 leading-relaxed">{item.explanation}</p>
                </div>

                {item.isSkipped && (
                  <p className="text-amber-400/60 text-xs font-medium px-1">
                    You skipped this question.
                  </p>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
