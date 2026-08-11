export interface QuizQuestion {
  id: string;
  text: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  subject: string;
}

export interface QuizQuestionPublic {
  id: string;
  text: string;
  options: string[];
  subject: string;
}

export interface QuizConfig {
  type: "grade-subject" | "technology";
  gradeId?: string;
  subjectId?: string;
  techSlug?: string;
  itemSlug?: string;
  label: string;
}

export const SAMPLE_QUESTIONS: QuizQuestion[] = [
  {
    id: "q1",
    text: "What is the value of 15 × 12?",
    options: ["150", "170", "180", "160"],
    correctIndex: 2,
    explanation: "15 × 12 = 15 × 10 + 15 × 2 = 150 + 30 = 180",
    subject: "Mathematics",
  },
  {
    id: "q2",
    text: "Which planet is closest to the Sun?",
    options: ["Venus", "Earth", "Mars", "Mercury"],
    correctIndex: 3,
    explanation: "Mercury is the innermost planet in our solar system and closest to the Sun.",
    subject: "Science",
  },
  {
    id: "q3",
    text: "What is the past tense of the verb 'run'?",
    options: ["runned", "ran", "running", "runs"],
    correctIndex: 1,
    explanation: "'Run' is an irregular verb. Its simple past tense is 'ran'.",
    subject: "English",
  },
  {
    id: "q4",
    text: "What is the capital city of India?",
    options: ["Mumbai", "Kolkata", "Chennai", "New Delhi"],
    correctIndex: 3,
    explanation: "New Delhi is the capital city of India and the seat of the Government of India.",
    subject: "General Knowledge",
  },
  {
    id: "q5",
    text: "How many sides does a hexagon have?",
    options: ["5", "6", "7", "8"],
    correctIndex: 1,
    explanation: "A hexagon is a polygon with exactly 6 sides and 6 angles. 'Hex' means six in Greek.",
    subject: "Mathematics",
  },
  {
    id: "q6",
    text: "What is 25% of 200?",
    options: ["25", "40", "50", "75"],
    correctIndex: 2,
    explanation: "25% of 200 = (25 ÷ 100) × 200 = 0.25 × 200 = 50",
    subject: "Mathematics",
  },
  {
    id: "q7",
    text: "What is the chemical formula for water?",
    options: ["CO₂", "H₂O", "O₂", "NaCl"],
    correctIndex: 1,
    explanation: "Water (H₂O) consists of 2 hydrogen atoms bonded to 1 oxygen atom.",
    subject: "Science",
  },
  {
    id: "q8",
    text: "Who wrote 'The Jungle Book'?",
    options: ["Mark Twain", "Charles Dickens", "Rudyard Kipling", "R.L. Stine"],
    correctIndex: 2,
    explanation: "'The Jungle Book' was written by Rudyard Kipling and first published in 1894.",
    subject: "English",
  },
  {
    id: "q9",
    text: "What is the largest continent on Earth?",
    options: ["Africa", "Asia", "North America", "Europe"],
    correctIndex: 1,
    explanation: "Asia is the world's largest continent, covering about 44.58 million km²—roughly 30% of Earth's total land area.",
    subject: "Geography",
  },
  {
    id: "q10",
    text: "How many zeros does one million have?",
    options: ["4", "5", "6", "7"],
    correctIndex: 2,
    explanation: "One million = 1,000,000 — it has 6 zeros after the 1.",
    subject: "Mathematics",
  },
];

export function getPublicQuestions(): QuizQuestionPublic[] {
  return SAMPLE_QUESTIONS.map(({ id, text, options, subject }) => ({
    id,
    text,
    options,
    subject,
  }));
}
