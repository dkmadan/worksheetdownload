import type { Question } from "./pdf-builder";
import { generateMathQuestions } from "./question-banks/math";
import { generateEnglishQuestions } from "./question-banks/english";
import { generateScienceQuestions } from "./question-banks/science";
import { generateEvsQuestions } from "./question-banks/evs";
import { generateGkQuestions } from "./question-banks/gk";
import { generateReasoningQuestions } from "./question-banks/reasoning";
import { generateSocialStudiesQuestions } from "./question-banks/social-studies";
import { generateKindergartenQuestions } from "./question-banks/kindergarten";

export function getQuestions(
  gradeId: string,
  subjectId: string,
  topicLabel: string,
  sheetNumber: number
): Question[] {
  // Kindergarten subjects handled specially
  if (gradeId === "kindergarten") {
    if (subjectId === "mathematics") {
      return generateMathQuestions(gradeId, topicLabel, sheetNumber);
    }
    return generateKindergartenQuestions(gradeId, topicLabel, sheetNumber);
  }

  switch (subjectId) {
    case "mathematics":
      return generateMathQuestions(gradeId, topicLabel, sheetNumber);
    case "english":
    case "english-language":
      return generateEnglishQuestions(gradeId, topicLabel, sheetNumber);
    case "science":
      return generateScienceQuestions(gradeId, topicLabel, sheetNumber);
    case "evs":
      return generateEvsQuestions(gradeId, topicLabel, sheetNumber);
    case "gk":
    case "general-awareness":
      return generateGkQuestions(gradeId, topicLabel, sheetNumber);
    case "reasoning":
    case "logic-thinking":
      return generateReasoningQuestions(gradeId, topicLabel, sheetNumber);
    case "social-studies":
      return generateSocialStudiesQuestions(gradeId, topicLabel, sheetNumber);
    default:
      // Fallback: use math for number-y topics, GK otherwise
      if (subjectId.includes("math")) return generateMathQuestions(gradeId, topicLabel, sheetNumber);
      return generateGkQuestions(gradeId, topicLabel, sheetNumber);
  }
}
