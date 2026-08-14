import type { GradeMeta, Grade, Subject, SubjectMeta, Worksheet } from "./types";

const WORKSHEET_TEST_PDF = "https://cdn.worksheetdownload.com/pdfs/Class5_LCM_Worksheet.pdf";

export const SUBJECTS: SubjectMeta[] = [
  { id: "math", label: "Math", emoji: "🔢", description: "Numbers, counting, addition, subtraction, and more fun math activities." },
  { id: "reading", label: "Reading", emoji: "📖", description: "Phonics, sight words, comprehension, and story-based exercises." },
  { id: "writing", label: "Writing", emoji: "✏️", description: "Letter tracing, spelling, sentence building, and creative prompts." },
  { id: "science", label: "Science", emoji: "🔬", description: "Animals, plants, space, and hands-on experiment ideas." },
  { id: "art", label: "Art", emoji: "🎨", description: "Coloring, drawing prompts, pattern making, and craft activities." },
];

export const GRADES: GradeMeta[] = [
  { id: "kindergarten", label: "Kindergarten", ageRange: "Ages 4–5" },
  { id: "1st", label: "1st Grade", ageRange: "Ages 6–7" },
  { id: "2nd", label: "2nd Grade", ageRange: "Ages 7–8" },
  { id: "3rd", label: "3rd Grade", ageRange: "Ages 8–9" },
  { id: "4th", label: "4th Grade", ageRange: "Ages 9–10" },
  { id: "5th", label: "5th Grade", ageRange: "Ages 10–11" },
];

export const WORKSHEETS: Worksheet[] = [
  // Math
  { id: "counting-to-10", title: "Counting to 10", subject: "math", grade: "kindergarten", description: "Trace and count numbers 1 through 10 with fun picture groups.", pdfUrl: WORKSHEET_TEST_PDF, thumbnailEmoji: "🔢" },
  { id: "addition-to-10", title: "Addition to 10", subject: "math", grade: "1st", description: "Practice simple addition equations with sums up to 10.", pdfUrl: WORKSHEET_TEST_PDF, thumbnailEmoji: "➕" },
  { id: "subtraction-basics", title: "Subtraction Basics", subject: "math", grade: "1st", description: "Introduction to subtraction with visual number lines.", pdfUrl: WORKSHEET_TEST_PDF, thumbnailEmoji: "➖" },
  { id: "skip-counting", title: "Skip Counting by 2s and 5s", subject: "math", grade: "2nd", description: "Fill in the blanks to complete skip counting patterns.", pdfUrl: WORKSHEET_TEST_PDF, thumbnailEmoji: "🔢" },
  { id: "multiplication-tables", title: "Multiplication Tables 1–5", subject: "math", grade: "3rd", description: "Practice times tables from 1 to 5 with drills and puzzles.", pdfUrl: WORKSHEET_TEST_PDF, thumbnailEmoji: "✖️" },
  { id: "fractions-intro", title: "Introduction to Fractions", subject: "math", grade: "3rd", description: "Identify halves, thirds, and quarters using shape diagrams.", pdfUrl: WORKSHEET_TEST_PDF, thumbnailEmoji: "🍕" },
  { id: "long-division", title: "Long Division Practice", subject: "math", grade: "4th", description: "Step-by-step long division problems with remainders.", pdfUrl: WORKSHEET_TEST_PDF, thumbnailEmoji: "➗" },
  { id: "decimals-place-value", title: "Decimals & Place Value", subject: "math", grade: "5th", description: "Understand tenths and hundredths with place value charts.", pdfUrl: WORKSHEET_TEST_PDF, thumbnailEmoji: "🔣" },

  // Reading
  { id: "alphabet-sounds", title: "Alphabet Sounds", subject: "reading", grade: "kindergarten", description: "Match letters to their beginning sounds with picture clues.", pdfUrl: WORKSHEET_TEST_PDF, thumbnailEmoji: "🔤" },
  { id: "sight-words-set1", title: "Sight Words – Set 1", subject: "reading", grade: "1st", description: "Practice the first 25 Dolch sight words with tracing and reading.", pdfUrl: WORKSHEET_TEST_PDF, thumbnailEmoji: "👁️" },
  { id: "short-vowel-words", title: "Short Vowel Words", subject: "reading", grade: "1st", description: "Read and sort CVC words by their short vowel sound.", pdfUrl: WORKSHEET_TEST_PDF, thumbnailEmoji: "🔠" },
  { id: "reading-comprehension-2", title: "Reading Comprehension – Animals", subject: "reading", grade: "2nd", description: "Read a short passage about animals and answer questions.", pdfUrl: WORKSHEET_TEST_PDF, thumbnailEmoji: "🐘" },
  { id: "main-idea", title: "Finding the Main Idea", subject: "reading", grade: "3rd", description: "Identify the main idea and supporting details in paragraphs.", pdfUrl: WORKSHEET_TEST_PDF, thumbnailEmoji: "💡" },
  { id: "context-clues", title: "Context Clues", subject: "reading", grade: "4th", description: "Use surrounding words to figure out the meaning of new vocabulary.", pdfUrl: WORKSHEET_TEST_PDF, thumbnailEmoji: "🕵️" },

  // Writing
  { id: "letter-tracing-az", title: "Letter Tracing A–Z", subject: "writing", grade: "kindergarten", description: "Trace uppercase and lowercase letters with dotted guidelines.", pdfUrl: WORKSHEET_TEST_PDF, thumbnailEmoji: "✏️" },
  { id: "sentence-starters", title: "Sentence Starters", subject: "writing", grade: "1st", description: "Complete sentences using picture prompts and word banks.", pdfUrl: WORKSHEET_TEST_PDF, thumbnailEmoji: "📝" },
  { id: "creative-writing-prompt", title: "My Favourite Animal", subject: "writing", grade: "2nd", description: "Write three sentences about your favourite animal with a drawing box.", pdfUrl: WORKSHEET_TEST_PDF, thumbnailEmoji: "🦁" },
  { id: "paragraph-writing", title: "Paragraph Writing", subject: "writing", grade: "4th", description: "Structure a five-sentence paragraph with topic and closing sentences.", pdfUrl: WORKSHEET_TEST_PDF, thumbnailEmoji: "📄" },

  // Science
  { id: "parts-of-a-plant", title: "Parts of a Plant", subject: "science", grade: "kindergarten", description: "Label the roots, stem, leaves, and flower on a diagram.", pdfUrl: WORKSHEET_TEST_PDF, thumbnailEmoji: "🌱" },
  { id: "life-cycles", title: "Life Cycle of a Butterfly", subject: "science", grade: "2nd", description: "Sequence the stages of a butterfly's life cycle.", pdfUrl: WORKSHEET_TEST_PDF, thumbnailEmoji: "🦋" },
  { id: "solar-system", title: "Our Solar System", subject: "science", grade: "4th", description: "Label the planets and learn key facts about the solar system.", pdfUrl: WORKSHEET_TEST_PDF, thumbnailEmoji: "🪐" },
  { id: "food-chains", title: "Food Chains", subject: "science", grade: "5th", description: "Build and identify producer-consumer food chain relationships.", pdfUrl: WORKSHEET_TEST_PDF, thumbnailEmoji: "🐛" },

  // Art
  { id: "color-mixing", title: "Color Mixing Chart", subject: "art", grade: "kindergarten", description: "Discover what happens when you mix primary colors together.", pdfUrl: WORKSHEET_TEST_PDF, thumbnailEmoji: "🎨" },
  { id: "symmetry-drawing", title: "Symmetry Drawing", subject: "art", grade: "3rd", description: "Complete the other half of a symmetrical picture.", pdfUrl: WORKSHEET_TEST_PDF, thumbnailEmoji: "🪞" },
  { id: "pattern-making", title: "Pattern Making", subject: "art", grade: "1st", description: "Extend and create repeating shape and colour patterns.", pdfUrl: WORKSHEET_TEST_PDF, thumbnailEmoji: "🔷" },
];

export function getAllWorksheets(): Worksheet[] {
  return WORKSHEETS;
}

export function getWorksheetsBySubject(subject: Subject): Worksheet[] {
  return WORKSHEETS.filter((w) => w.subject === subject);
}

export function getWorksheetsByGrade(grade: Grade): Worksheet[] {
  return WORKSHEETS.filter((w) => w.grade === grade);
}
