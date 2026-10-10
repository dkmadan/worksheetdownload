// ─────────────────────────────────────────────────────────────────────────────
// English Grammar Exercise Generator Engine
// Comprehensive question banks covering all 16 curriculum topics across 7 exercise formats.
// ─────────────────────────────────────────────────────────────────────────────

import { makeRng, shuffle, type Rng } from "./prng";

export type GrammarTopic =
  | "nouns"
  | "pronouns"
  | "verbs"
  | "adjectives"
  | "adverbs"
  | "articles"
  | "prepositions"
  | "conjunctions"
  | "tenses"
  | "subject-verb-agreement"
  | "punctuation"
  | "capitalization"
  | "sentence-structure"
  | "active-passive-voice"
  | "direct-indirect-speech"
  | "mixed-grammar";

export type GrammarExerciseType =
  | "fill-blanks"
  | "multiple-choice"
  | "error-correction"
  | "sentence-rewriting"
  | "sentence-completion"
  | "identify-parts-of-speech"
  | "match-columns";

export interface GrammarItem {
  id: string;
  topic: GrammarTopic;
  exerciseType: GrammarExerciseType;
  gradeMin: number;
  gradeMax: number;
  difficulty: "easy" | "medium" | "hard";
  instructions: string;
  prompt: string;
  options?: string[]; // for multiple choice
  columns?: { a: string; b: string }[]; // for match-the-columns
  answer: string;
  explanation?: string;
}

export interface GrammarConfig {
  grade: number; // 1 to 12
  difficulty: "easy" | "medium" | "hard";
  problemCount: number; // 5, 10, 15, 20, 30
  topics: GrammarTopic[];
  exerciseTypes: GrammarExerciseType[];
  includeAnswerKey: boolean;
}

export interface GeneratedGrammarSheet {
  title: string;
  subtitle: string;
  gradeLabel: string;
  difficulty: string;
  items: GrammarItem[];
  answerKey: { num: number; prompt: string; answer: string; topic: string }[];
}

export const GRAMMAR_TOPICS: { id: GrammarTopic; label: string; icon: string }[] = [
  { id: "nouns", label: "Nouns (Common, Proper, Collective)", icon: "🏷️" },
  { id: "pronouns", label: "Pronouns (Personal, Possessive, Relative)", icon: "👥" },
  { id: "verbs", label: "Verbs & Helping Verbs", icon: "⚡" },
  { id: "adjectives", label: "Adjectives & Comparisons", icon: "🎨" },
  { id: "adverbs", label: "Adverbs of Manner, Time & Place", icon: "🚀" },
  { id: "articles", label: "Articles (A, An, The)", icon: "🅰️" },
  { id: "prepositions", label: "Prepositions of Time & Place", icon: "📍" },
  { id: "conjunctions", label: "Conjunctions (And, But, Or, Because)", icon: "🔗" },
  { id: "tenses", label: "Verb Tenses (Past, Present, Future)", icon: "⏳" },
  { id: "subject-verb-agreement", label: "Subject-Verb Agreement", icon: "⚖️" },
  { id: "punctuation", label: "Punctuation & Apostrophes", icon: "❓" },
  { id: "capitalization", label: "Capitalization Rules", icon: "🔠" },
  { id: "sentence-structure", label: "Sentence Structure & Clauses", icon: "🧱" },
  { id: "active-passive-voice", label: "Active & Passive Voice", icon: "🔄" },
  { id: "direct-indirect-speech", label: "Direct & Indirect Speech", icon: "💬" },
  { id: "mixed-grammar", label: "Mixed Grammar Skills", icon: "🎯" },
];

export const EXERCISE_TYPE_OPTIONS: { id: GrammarExerciseType; label: string }[] = [
  { id: "fill-blanks", label: "Fill in the Blanks" },
  { id: "multiple-choice", label: "Multiple Choice" },
  { id: "error-correction", label: "Error Correction" },
  { id: "sentence-rewriting", label: "Sentence Rewriting" },
  { id: "sentence-completion", label: "Sentence Completion" },
  { id: "identify-parts-of-speech", label: "Identify Parts of Speech" },
  { id: "match-columns", label: "Match the Columns" },
];

// ── Comprehensive Curated Curriculum Bank ─────────────────────────────────────

export const GRAMMAR_BANK: GrammarItem[] = [
  // 1. Nouns
  {
    id: "n1",
    topic: "nouns",
    exerciseType: "fill-blanks",
    gradeMin: 1,
    gradeMax: 4,
    difficulty: "easy",
    instructions: "Fill in the blank with the correct collective noun.",
    prompt: "A ______ of wolves howled at the full moon.",
    answer: "pack",
    explanation: "A group of wolves is called a 'pack'.",
  },
  {
    id: "n2",
    topic: "nouns",
    exerciseType: "multiple-choice",
    gradeMin: 2,
    gradeMax: 6,
    difficulty: "easy",
    instructions: "Choose the proper noun in the sentence.",
    prompt: "The children visited London during their summer vacation.",
    options: ["children", "London", "summer", "vacation"],
    answer: "B) London",
    explanation: "'London' is a proper noun because it names a specific city and begins with a capital letter.",
  },
  {
    id: "n3",
    topic: "nouns",
    exerciseType: "identify-parts-of-speech",
    gradeMin: 3,
    gradeMax: 8,
    difficulty: "medium",
    instructions: "Identify whether the underlined noun is concrete or abstract.",
    prompt: "Her [courage] inspired everyone in the village.",
    answer: "Abstract noun",
    explanation: "Courage is an idea or quality that cannot be physically touched or seen.",
  },

  // 2. Pronouns
  {
    id: "pr1",
    topic: "pronouns",
    exerciseType: "fill-blanks",
    gradeMin: 2,
    gradeMax: 5,
    difficulty: "easy",
    instructions: "Fill in the blank with the correct pronoun.",
    prompt: "Sarah forgot to bring ______ notebook to school today.",
    answer: "her",
    explanation: "Possessive pronoun referring to Sarah.",
  },
  {
    id: "pr2",
    topic: "pronouns",
    exerciseType: "multiple-choice",
    gradeMin: 4,
    gradeMax: 9,
    difficulty: "medium",
    instructions: "Select the correct relative pronoun to combine the clauses.",
    prompt: "This is the scientist ______ discovered the new asteroid.",
    options: ["which", "who", "whom", "whose"],
    answer: "B) who",
    explanation: "'Who' is the subject relative pronoun referring to people.",
  },

  // 3. Verbs
  {
    id: "v1",
    topic: "verbs",
    exerciseType: "fill-blanks",
    gradeMin: 2,
    gradeMax: 6,
    difficulty: "easy",
    instructions: "Fill in the blank with the correct irregular past tense verb.",
    prompt: "Yesterday, the eagle ______ (fly) high above the mountains.",
    answer: "flew",
    explanation: "Past tense of 'fly' is 'flew'.",
  },
  {
    id: "v2",
    topic: "verbs",
    exerciseType: "identify-parts-of-speech",
    gradeMin: 4,
    gradeMax: 9,
    difficulty: "medium",
    instructions: "Identify whether the verb in brackets is transitive or intransitive.",
    prompt: "The baby [slept] peacefully throughout the night.",
    answer: "Intransitive verb",
    explanation: "The verb 'slept' does not take a direct object.",
  },

  // 4. Adjectives
  {
    id: "adj1",
    topic: "adjectives",
    exerciseType: "fill-blanks",
    gradeMin: 2,
    gradeMax: 6,
    difficulty: "easy",
    instructions: "Complete the sentence with the correct comparative degree.",
    prompt: "Mount Everest is ______ (high) than Mount Kilimanjaro.",
    answer: "higher",
    explanation: "Comparative form of 'high' is 'higher'.",
  },
  {
    id: "adj2",
    topic: "adjectives",
    exerciseType: "multiple-choice",
    gradeMin: 3,
    gradeMax: 8,
    difficulty: "medium",
    instructions: "Select the superlative form of 'good'.",
    prompt: "She is the ______ chess player in the entire academy.",
    options: ["gooder", "better", "best", "most good"],
    answer: "C) best",
    explanation: "Irregular degrees: good -> better -> best.",
  },

  // 5. Adverbs
  {
    id: "adv1",
    topic: "adverbs",
    exerciseType: "identify-parts-of-speech",
    gradeMin: 3,
    gradeMax: 7,
    difficulty: "easy",
    instructions: "Identify the adverb of manner in the sentence.",
    prompt: "The ballerina danced gracefully across the wooden stage.",
    answer: "gracefully",
    explanation: "'Gracefully' tells how the ballerina danced.",
  },
  {
    id: "adv2",
    topic: "adverbs",
    exerciseType: "fill-blanks",
    gradeMin: 3,
    gradeMax: 8,
    difficulty: "medium",
    instructions: "Fill in the blank with an adverb formed from 'patient'.",
    prompt: "The doctor listened ______ to the patient's concerns.",
    answer: "patiently",
    explanation: "Adverb formed by adding -ly to 'patient'.",
  },

  // 6. Articles
  {
    id: "art1",
    topic: "articles",
    exerciseType: "fill-blanks",
    gradeMin: 1,
    gradeMax: 5,
    difficulty: "easy",
    instructions: "Fill in the blank with 'a' or 'an'.",
    prompt: "It was ______ historic moment when the rover landed on Mars.",
    answer: "a",
    explanation: "'Historic' begins with a consonant sound /h/, so 'a' is used.",
  },
  {
    id: "art2",
    topic: "articles",
    exerciseType: "multiple-choice",
    gradeMin: 2,
    gradeMax: 6,
    difficulty: "easy",
    instructions: "Choose the correct article for the sentence.",
    prompt: "Can you pass me ______ umbrella hanging by the front door?",
    options: ["a", "an", "the", "no article"],
    answer: "C) the",
    explanation: "'The' is used because it refers to a specific umbrella hanging by the door.",
  },

  // 7. Prepositions
  {
    id: "prep1",
    topic: "prepositions",
    exerciseType: "fill-blanks",
    gradeMin: 2,
    gradeMax: 6,
    difficulty: "easy",
    instructions: "Fill in the correct preposition of time (in / on / at).",
    prompt: "The soccer championship will commence ______ Friday afternoon.",
    answer: "on",
    explanation: "'On' is used before days of the week.",
  },
  {
    id: "prep2",
    topic: "prepositions",
    exerciseType: "multiple-choice",
    gradeMin: 3,
    gradeMax: 8,
    difficulty: "medium",
    instructions: "Choose the correct preposition to complete the sentence.",
    prompt: "The submarine plunged ______ the surface of the arctic ocean.",
    options: ["beneath", "among", "between", "over"],
    answer: "A) beneath",
    explanation: "'Beneath' means directly underneath or below.",
  },

  // 8. Conjunctions
  {
    id: "conj1",
    topic: "conjunctions",
    exerciseType: "fill-blanks",
    gradeMin: 2,
    gradeMax: 7,
    difficulty: "easy",
    instructions: "Fill in the blank with the appropriate coordinating conjunction.",
    prompt: "Ethan wanted to go to the park, ______ it started pouring rain.",
    answer: "but",
    explanation: "'But' shows contrast between wanting to go and the rain.",
  },
  {
    id: "conj2",
    topic: "conjunctions",
    exerciseType: "sentence-rewriting",
    gradeMin: 4,
    gradeMax: 9,
    difficulty: "medium",
    instructions: "Combine the sentences into one using 'although'.",
    prompt: "He was exhausted. He finished all his homework.",
    answer: "Although he was exhausted, he finished all his homework.",
    explanation: "'Although' introduces a subordinate clause of concession.",
  },

  // 9. Tenses
  {
    id: "t1",
    topic: "tenses",
    exerciseType: "sentence-rewriting",
    gradeMin: 3,
    gradeMax: 8,
    difficulty: "medium",
    instructions: "Rewrite the sentence into the present continuous tense.",
    prompt: "The chef bakes fresh loaves of sourdough bread.",
    answer: "The chef is baking fresh loaves of sourdough bread.",
    explanation: "Present continuous uses is/are + present participle (-ing).",
  },
  {
    id: "t2",
    topic: "tenses",
    exerciseType: "fill-blanks",
    gradeMin: 5,
    gradeMax: 11,
    difficulty: "hard",
    instructions: "Fill in the blank with the past perfect tense of 'leave'.",
    prompt: "By the time we arrived at the terminal, the train ______.",
    answer: "had left",
    explanation: "Past perfect (had + past participle) describes an action completed before another past event.",
  },

  // 10. Subject-Verb Agreement
  {
    id: "sva1",
    topic: "subject-verb-agreement",
    exerciseType: "multiple-choice",
    gradeMin: 3,
    gradeMax: 8,
    difficulty: "easy",
    instructions: "Choose the correct verb to agree with the subject.",
    prompt: "Either the teacher or the students ______ responsible for the display.",
    options: ["is", "are", "was", "has"],
    answer: "B) are",
    explanation: "When subjects are joined by 'or', the verb agrees with the closer subject ('students').",
  },
  {
    id: "sva2",
    topic: "subject-verb-agreement",
    exerciseType: "error-correction",
    gradeMin: 4,
    gradeMax: 10,
    difficulty: "medium",
    instructions: "Find and correct the subject-verb agreement error in the sentence.",
    prompt: "The bouquet of roses smell wonderful.",
    answer: "The bouquet of roses smells wonderful. (Change 'smell' to 'smells' because the singular subject is 'bouquet')",
    explanation: "The true subject is singular 'bouquet', not plural 'roses'.",
  },

  // 11. Punctuation
  {
    id: "punc1",
    topic: "punctuation",
    exerciseType: "error-correction",
    gradeMin: 2,
    gradeMax: 7,
    difficulty: "easy",
    instructions: "Punctuate the sentence correctly with quotation marks and commas.",
    prompt: "Look at the shooting star whispered Maya.",
    answer: '"Look at the shooting star," whispered Maya.',
    explanation: "Direct speech must be enclosed in quotation marks, with a comma preceding the dialogue tag.",
  },
  {
    id: "punc2",
    topic: "punctuation",
    exerciseType: "fill-blanks",
    gradeMin: 4,
    gradeMax: 10,
    difficulty: "medium",
    instructions: "Insert the correct punctuation mark in the bracket: semicolon (;) or comma (,).",
    prompt: "The storm knocked out power across the county [ ] therefore, all classes were cancelled.",
    answer: "; (semicolon)",
    explanation: "A semicolon joins independent clauses connected by a conjunctive adverb like 'therefore'.",
  },

  // 12. Capitalization
  {
    id: "cap1",
    topic: "capitalization",
    exerciseType: "error-correction",
    gradeMin: 1,
    gradeMax: 5,
    difficulty: "easy",
    instructions: "Rewrite the sentence fixing all capitalization errors.",
    prompt: "last tuesday, mr. johnson crossed the golden gate bridge in san francisco.",
    answer: "Last Tuesday, Mr. Johnson crossed the Golden Gate Bridge in San Francisco.",
    explanation: "Capitalize the first word, days, titles with names, and specific geographical landmarks.",
  },

  // 13. Sentence Structure
  {
    id: "ss1",
    topic: "sentence-structure",
    exerciseType: "multiple-choice",
    gradeMin: 5,
    gradeMax: 11,
    difficulty: "medium",
    instructions: "Identify whether the sentence is simple, compound, complex, or compound-complex.",
    prompt: "Because the river flooded, the bridge was closed, and detours were established.",
    options: ["Simple", "Compound", "Complex", "Compound-Complex"],
    answer: "D) Compound-Complex",
    explanation: "It contains one dependent clause ('Because the river flooded') and two independent clauses.",
  },

  // 14. Active & Passive Voice
  {
    id: "ap1",
    topic: "active-passive-voice",
    exerciseType: "sentence-rewriting",
    gradeMin: 5,
    gradeMax: 12,
    difficulty: "medium",
    instructions: "Convert the sentence from active voice into passive voice.",
    prompt: "The architect designed the innovative solar tower.",
    answer: "The innovative solar tower was designed by the architect.",
    explanation: "The object 'the innovative solar tower' becomes the subject of the passive construction.",
  },
  {
    id: "ap2",
    topic: "active-passive-voice",
    exerciseType: "sentence-rewriting",
    gradeMin: 6,
    gradeMax: 12,
    difficulty: "hard",
    instructions: "Convert the sentence from passive voice into active voice.",
    prompt: "The national anthem was sung by the children's choir.",
    answer: "The children's choir sang the national anthem.",
    explanation: "The agent ('the children's choir') becomes the active subject.",
  },

  // 15. Direct & Indirect Speech
  {
    id: "di1",
    topic: "direct-indirect-speech",
    exerciseType: "sentence-rewriting",
    gradeMin: 6,
    gradeMax: 12,
    difficulty: "hard",
    instructions: "Convert the direct speech into reported (indirect) speech.",
    prompt: 'Liam said, "I have completed my science experiment."',
    answer: "Liam said that he had completed his science experiment.",
    explanation: "Present perfect changes to past perfect, and first person 'I' changes to 'he'.",
  },

  // 16. Match the Columns
  {
    id: "mat1",
    topic: "mixed-grammar",
    exerciseType: "match-columns",
    gradeMin: 3,
    gradeMax: 8,
    difficulty: "medium",
    instructions: "Match the grammatical term in Column A with its definition or example in Column B.",
    prompt: "Match Column A with Column B.",
    columns: [
      { a: "1. Collective Noun", b: "A. Expresses strong emotion (e.g. Wow!)" },
      { a: "2. Conjunction", b: "B. Names a group as a single unit (e.g. flock)" },
      { a: "3. Preposition", b: "C. Connects words or clauses (e.g. and, but)" },
      { a: "4. Interjection", b: "D. Shows relationship in space/time (e.g. under)" },
    ],
    answer: "1-B, 2-C, 3-D, 4-A",
    explanation: "1 matches B, 2 matches C, 3 matches D, 4 matches A.",
  },
];

// ── Generator Function ────────────────────────────────────────────────────────

export const DEFAULT_GRAMMAR_CONFIG: GrammarConfig = {
  grade: 4,
  difficulty: "medium",
  problemCount: 10,
  topics: ["nouns", "verbs", "adjectives", "tenses", "subject-verb-agreement"],
  exerciseTypes: ["fill-blanks", "multiple-choice", "error-correction", "sentence-rewriting"],
  includeAnswerKey: true,
};

export function generateGrammarWorksheet(
  cfg: GrammarConfig,
  seed: number
): GeneratedGrammarSheet {
  const rng = makeRng(seed);
  const selectedTopics = cfg.topics.length > 0 ? cfg.topics : ["nouns", "verbs", "tenses"];
  const selectedExTypes = cfg.exerciseTypes.length > 0 ? cfg.exerciseTypes : ["fill-blanks", "multiple-choice"];

  // Filter bank items
  let candidates = GRAMMAR_BANK.filter(
    (item) =>
      (selectedTopics.includes("mixed-grammar") || selectedTopics.includes(item.topic)) &&
      selectedExTypes.includes(item.exerciseType)
  );

  if (candidates.length < 5) {
    // Broaden filter to any exercise type within selected topics
    candidates = GRAMMAR_BANK.filter(
      (item) => selectedTopics.includes("mixed-grammar") || selectedTopics.includes(item.topic)
    );
  }

  if (candidates.length < 5) {
    candidates = GRAMMAR_BANK;
  }

  const shuffled = shuffle(rng, candidates);
  const items: GrammarItem[] = [];

  for (let i = 0; i < cfg.problemCount; i++) {
    const base = shuffled[i % shuffled.length];
    items.push({
      ...base,
      id: `q-${i + 1}`,
    });
  }

  const gradeLabel = `Grade ${cfg.grade}`;
  const title = "English Grammar Practice Worksheet";
  const subtitle = `Focus Topics: ${selectedTopics
    .map((t) => GRAMMAR_TOPICS.find((gt) => gt.id === t)?.label || t)
    .slice(0, 3)
    .join(", ")} · ${items.length} Exercises`;

  return {
    title,
    subtitle,
    gradeLabel,
    difficulty: cfg.difficulty.toUpperCase(),
    items,
    answerKey: items.map((it, idx) => ({
      num: idx + 1,
      prompt: it.prompt,
      answer: it.answer,
      topic: it.topic,
    })),
  };
}
