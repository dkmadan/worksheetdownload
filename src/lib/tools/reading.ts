// ─────────────────────────────────────────────────────────────────────────────
// Reading Comprehension Engine & Curated Passage Bank
// Generates age-appropriate passages and paired comprehension questions.
// ─────────────────────────────────────────────────────────────────────────────

import { makeRng, pick, shuffle, type Rng } from "./prng";

export type ReadingGrade =
  | "K"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12";

export type ReadingDifficulty = "easy" | "medium" | "hard";

export type ReadingCategory =
  | "fiction"
  | "nonfiction"
  | "science"
  | "history"
  | "biography"
  | "nature"
  | "moral-stories"
  | "general-knowledge";

export type ReadingLength = "short" | "medium" | "long";

export type ReadingQuestionType =
  | "multiple-choice"
  | "true-false"
  | "short-answer"
  | "fill-blanks"
  | "vocabulary"
  | "main-idea"
  | "inference"
  | "sequencing";

export interface ReadingQuestion {
  id: string;
  type: ReadingQuestionType;
  prompt: string;
  options?: string[]; // for multiple-choice (4 choices)
  answer: string;
  explanation?: string;
}

export interface ReadingPassage {
  id: string;
  title: string;
  category: ReadingCategory;
  gradeMin: number; // 0 for K, 1-12
  gradeMax: number;
  difficulty: ReadingDifficulty;
  length: ReadingLength;
  paragraphs: string[];
  wordCount: number;
  questions: ReadingQuestion[];
}

export interface ReadingConfig {
  grade: ReadingGrade;
  difficulty: ReadingDifficulty;
  category: ReadingCategory;
  topic?: string;
  customText?: string;
  customTitle?: string;
  length: ReadingLength;
  questionCount: number; // 5, 10, 15, 20
  questionTypes: ReadingQuestionType[];
  includeAnswerKey: boolean;
  layout: "compact" | "standard" | "spacious";
}

export interface GeneratedReadingSheet {
  title: string;
  category: string;
  grade: string;
  difficulty: string;
  paragraphs: string[];
  wordCount: number;
  questions: ReadingQuestion[];
  answerKey: { num: number; prompt: string; answer: string; type: ReadingQuestionType }[];
}

export const READING_CATEGORIES: { id: ReadingCategory; label: string; icon: string }[] = [
  { id: "fiction", label: "Fiction & Stories", icon: "📖" },
  { id: "nonfiction", label: "Nonfiction", icon: "📰" },
  { id: "science", label: "Science & Technology", icon: "🔬" },
  { id: "history", label: "World History", icon: "🏛️" },
  { id: "biography", label: "Biographies", icon: "👤" },
  { id: "nature", label: "Nature & Animals", icon: "🌿" },
  { id: "moral-stories", label: "Fables & Moral Tales", icon: "🕊️" },
  { id: "general-knowledge", label: "General Knowledge", icon: "🌍" },
];

export const QUESTION_TYPES: { id: ReadingQuestionType; label: string }[] = [
  { id: "multiple-choice", label: "Multiple Choice" },
  { id: "true-false", label: "True / False" },
  { id: "short-answer", label: "Short Answer" },
  { id: "fill-blanks", label: "Fill in the Blanks" },
  { id: "vocabulary", label: "Vocabulary in Context" },
  { id: "main-idea", label: "Main Idea" },
  { id: "inference", label: "Inference & Deduction" },
  { id: "sequencing", label: "Event Sequencing" },
];

export const GRADE_LABELS: Record<ReadingGrade, string> = {
  K: "Kindergarten",
  "1": "Grade 1",
  "2": "Grade 2",
  "3": "Grade 3",
  "4": "Grade 4",
  "5": "Grade 5",
  "6": "Grade 6",
  "7": "Grade 7",
  "8": "Grade 8",
  "9": "Grade 9",
  "10": "Grade 10",
  "11": "Grade 11",
  "12": "Grade 12",
};

export function gradeToNum(g: ReadingGrade): number {
  if (g === "K") return 0;
  return parseInt(g, 10);
}

// ── Curated High-Quality Passage Bank ─────────────────────────────────────────

export const PASSAGE_BANK: ReadingPassage[] = [
  // 1. Nature & Animals — K–2 Easy Short
  {
    id: "busy-honeybees",
    title: "The Busy Honeybees",
    category: "nature",
    gradeMin: 0,
    gradeMax: 3,
    difficulty: "easy",
    length: "short",
    paragraphs: [
      "Honeybees are small insects that do very big jobs in gardens and meadows. A honeybee has six legs, two delicate wings, and yellow and black stripes across its fuzzy body.",
      "Every morning, worker bees fly from flower to flower drinking sweet liquid called nectar. As they gather nectar, dusty golden pollen sticks to their furry legs and rubs off onto other blossoms, helping fruits and seeds grow.",
      "Back inside the hive, bees turn the nectar into rich golden honey to feed their colony all winter long.",
    ],
    wordCount: 88,
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        prompt: "What sweet liquid do honeybees drink from flowers?",
        options: ["Pollen", "Nectar", "Water", "Dew"],
        answer: "B) Nectar",
      },
      {
        id: "q2",
        type: "true-false",
        prompt: "Honeybees have four legs and red spots.",
        answer: "False (Honeybees have six legs and yellow and black stripes)",
      },
      {
        id: "q3",
        type: "short-answer",
        prompt: "How do honeybees help new plants and flowers grow?",
        answer: "By carrying pollen from one flower to another.",
      },
      {
        id: "q4",
        type: "fill-blanks",
        prompt: "Inside the hive, bees turn nectar into rich golden ______.",
        answer: "honey",
      },
      {
        id: "q5",
        type: "vocabulary",
        prompt: "What does the word 'colony' mean in the passage?",
        answer: "A community or large family of bees living together in a hive.",
      },
      {
        id: "q6",
        type: "main-idea",
        prompt: "What is the main idea of this passage?",
        answer: "Honeybees work hard collecting nectar to make honey and help plants grow.",
      },
      {
        id: "q7",
        type: "inference",
        prompt: "Why do bees store honey for the winter?",
        answer: "Because flowers do not bloom in the winter, so food is scarce.",
      },
      {
        id: "q8",
        type: "sequencing",
        prompt: "What happens first: bees visit flowers, or bees store honey in the hive?",
        answer: "Bees visit flowers first to gather nectar.",
      },
    ],
  },

  // 2. Science — Grade 3–5 Medium Medium
  {
    id: "water-cycle-journey",
    title: "The Endless Journey of Water",
    category: "science",
    gradeMin: 3,
    gradeMax: 6,
    difficulty: "medium",
    length: "medium",
    paragraphs: [
      "Every drop of water on Earth today is billions of years old. The water you drank with breakfast may once have rained down on grazing dinosaurs or drifted across an ancient frozen glacier. Water moves through a continuous planetary loop known as the water cycle.",
      "The cycle begins with evaporation. Warm sunlight beats down on oceans, lakes, and soil, heating liquid water until it transforms into an invisible gas called water vapor. Because warm vapor is light, it rises high into the sky.",
      "As vapor ascends, the surrounding air turns chilly. The cooling gas condenses around tiny floating specks of dust, creating microscopic water droplets that cluster together into billowing clouds. When these droplets bump into one another and become too heavy to float, gravity pulls them downward as precipitation—rain, sleet, hail, or snow.",
      "Precipitation flows across land into rivers or soaks deep underground into aquifers, ultimately returning to the ocean where the sunny journey begins all over again.",
    ],
    wordCount: 165,
    questions: [
      {
        id: "w1",
        type: "multiple-choice",
        prompt: "What drives the process of evaporation on Earth?",
        options: ["Cold wind", "Warm sunlight", "Ocean tides", "Moonlight"],
        answer: "B) Warm sunlight",
      },
      {
        id: "w2",
        type: "true-false",
        prompt: "Water on Earth today is completely new water created each year.",
        answer: "False (The water on Earth is billions of years old and constantly recycled)",
      },
      {
        id: "w3",
        type: "short-answer",
        prompt: "What happens during condensation in the atmosphere?",
        answer: "Water vapor cools down and turns back into liquid droplets around dust particles to form clouds.",
      },
      {
        id: "w4",
        type: "fill-blanks",
        prompt: "Water falling from clouds as rain, snow, sleet, or hail is called ______.",
        answer: "precipitation",
      },
      {
        id: "w5",
        type: "vocabulary",
        prompt: "According to the text, what is an 'aquifer'?",
        answer: "An underground layer of rock or soil that holds water.",
      },
      {
        id: "w6",
        type: "main-idea",
        prompt: "What is the primary message of this passage?",
        answer: "Water constantly circulates between the Earth's surface and sky through the water cycle.",
      },
      {
        id: "w7",
        type: "inference",
        prompt: "Why does precipitation fall instead of staying suspended in clouds?",
        answer: "Gravity pulls the droplets down once they combine and become too heavy.",
      },
      {
        id: "w8",
        type: "sequencing",
        prompt: "Put these stages in order: Condensation, Precipitation, Evaporation.",
        answer: "1. Evaporation -> 2. Condensation -> 3. Precipitation.",
      },
      {
        id: "w9",
        type: "multiple-choice",
        prompt: "Which form of water is invisible?",
        options: ["Clouds", "Ice crystals", "Water vapor", "Raindrops"],
        answer: "C) Water vapor",
      },
      {
        id: "w10",
        type: "short-answer",
        prompt: "Where does runoff water eventually return?",
        answer: "Rivers, aquifers, and the ocean.",
      },
    ],
  },

  // 3. History — Grade 4–8 Medium Long
  {
    id: "rosetta-stone",
    title: "Cracking the Code of the Pharaohs",
    category: "history",
    gradeMin: 4,
    gradeMax: 8,
    difficulty: "medium",
    length: "medium",
    paragraphs: [
      "For over a thousand years, the painted walls of ancient Egyptian temples guarded an impenetrable secret. Carved with thousands of intricate symbols—eagles, snakes, seated kings, and eye symbols known as hieroglyphics—the writings baffled historians worldwide.",
      "The breakthrough arrived in 1799 near the northern Egyptian port of Rashid (Rosetta). Soldiers uncovered a dark granite-like slab measuring nearly four feet high. Known as the Rosetta Stone, the slab contained a royal decree from 196 BCE carved in three distinct scripts: ancient Egyptian hieroglyphics, everyday Egyptian demotic script, and Ancient Greek.",
      "Because European scholars could easily read Ancient Greek, they finally held a bilingual key. A brilliant French linguist named Jean-François Champollion devoted years to comparing the Greek names of royal pharaohs like Ptolemy and Cleopatra with matching oval symbols called cartouches.",
      "In 1822, Champollion announced his astonishing discovery: Egyptian hieroglyphs were not merely mystical picture-drawings; they represented phonetic sounds, syllables, and spoken words. The silent voices of ancient Egypt could speak to humanity once again.",
    ],
    wordCount: 167,
    questions: [
      {
        id: "r1",
        type: "multiple-choice",
        prompt: "In which year was the Rosetta Stone discovered?",
        options: ["196 BCE", "1799", "1822", "1922"],
        answer: "B) 1799",
      },
      {
        id: "r2",
        type: "true-false",
        prompt: "The Rosetta Stone was carved with four completely different languages.",
        answer: "False (It was carved with three scripts: Hieroglyphic, Demotic, and Ancient Greek)",
      },
      {
        id: "r3",
        type: "short-answer",
        prompt: "Why was Ancient Greek on the stone so critical for scholars?",
        answer: "Because scholars already knew how to read Greek, so they could use it as a translation guide.",
      },
      {
        id: "r4",
        type: "vocabulary",
        prompt: "What is a 'cartouche' in Egyptian hieroglyphics?",
        answer: "An oval loop enclosing the hieroglyphic name of a royal king or pharaoh.",
      },
      {
        id: "r5",
        type: "main-idea",
        prompt: "What was Jean-François Champollion's main accomplishment?",
        answer: "He cracked the code of hieroglyphs by proving they represented phonetic spoken sounds.",
      },
      {
        id: "r6",
        type: "inference",
        prompt: "Why had nobody been able to read hieroglyphics for a thousand years?",
        answer: "The knowledge of reading the script had died out over centuries after Egypt changed languages.",
      },
      {
        id: "r7",
        type: "fill-blanks",
        prompt: "The French linguist who deciphered the stone was named Jean-François ______.",
        answer: "Champollion",
      },
      {
        id: "r8",
        type: "sequencing",
        prompt: "Which happened first: the stone was carved in 196 BCE, or Champollion cracked the code in 1822?",
        answer: "The stone was carved first in 196 BCE.",
      },
    ],
  },

  // 4. Biography — Grade 5–10 Medium Long
  {
    id: "ada-lovelace",
    title: "Ada Lovelace: Visionary of the Digital Age",
    category: "biography",
    gradeMin: 5,
    gradeMax: 10,
    difficulty: "medium",
    length: "medium",
    paragraphs: [
      "Born in London in 1815, Augusta Ada Byron—later known as Ada Lovelace—grew up during a time when young women were rarely encouraged to study mathematics and science. Her mother, Lady Byron, insisted Ada study strict logic and calculus to keep her mind disciplined.",
      "As a teenager, Ada met Charles Babbage, a brilliant inventor who had designed the Analytical Engine—a massive brass calculating machine powered by steam. While Babbage viewed his machine as a lightning-fast calculator for arithmetic tables, Lovelace imagined something far grander.",
      "In 1843, Lovelace published an extensive translation of an Italian paper about the engine, adding her own detailed commentary labeled 'Notes'. In Note G, she outlined an algorithm to calculate Bernoulli numbers, which historians now recognize as the world's very first computer program.",
      "More profoundly, Lovelace prophesied that if the machine could manipulate symbols according to mathematical rules, it could compose music, create elaborate graphics, and assist human science in limitless ways. Today, Ada Lovelace is revered as the pioneer of computer programming.",
    ],
    wordCount: 172,
    questions: [
      {
        id: "a1",
        type: "multiple-choice",
        prompt: "What was Charles Babbage's steam-powered calculating machine called?",
        options: ["Difference Robot", "Analytical Engine", "Turing Machine", "Logic Weaver"],
        answer: "B) Analytical Engine",
      },
      {
        id: "a2",
        type: "true-false",
        prompt: "Ada Lovelace only saw the machine as a tool to add simple numbers.",
        answer: "False (She foresaw that machines could manipulate symbols, compose music, and create graphics)",
      },
      {
        id: "a3",
        type: "short-answer",
        prompt: "Why is Note G famous in the history of computer science?",
        answer: "It contained the first published algorithm intended to be executed by a machine.",
      },
      {
        id: "a4",
        type: "vocabulary",
        prompt: "What does the word 'algorithm' mean in computer science?",
        answer: "A step-by-step set of mathematical instructions to solve a specific problem.",
      },
      {
        id: "a5",
        type: "main-idea",
        prompt: "What is the central focus of Ada Lovelace's legacy?",
        answer: "Her groundbreaking foresight that machines could follow programmed algorithms to perform diverse creative tasks.",
      },
      {
        id: "a6",
        type: "inference",
        prompt: "How did Ada's vision differ from Charles Babbage's view of the Analytical Engine?",
        answer: "Babbage saw it as a number calculator, whereas Ada realized it could manipulate any symbolic data.",
      },
      {
        id: "a7",
        type: "fill-blanks",
        prompt: "Ada Lovelace wrote an algorithm to calculate a sequence of numbers known as ______ numbers.",
        answer: "Bernoulli",
      },
      {
        id: "a8",
        type: "sequencing",
        prompt: "Arrange in order: Ada meets Babbage; Ada's mother insists on math studies; Ada publishes Note G.",
        answer: "1. Math studies -> 2. Meets Babbage -> 3. Publishes Note G.",
      },
    ],
  },

  // 5. Fiction — Grade 3–7 Medium Medium
  {
    id: "whispering-woods",
    title: "The Clockwork Compass of Whispering Woods",
    category: "fiction",
    gradeMin: 3,
    gradeMax: 7,
    difficulty: "medium",
    length: "medium",
    paragraphs: [
      "Kiran pulled his woolen coat tighter as autumn wind rattled the golden canopy above Whispering Woods. According to town folklore, travellers who ventured past the mossy stone boundary marker lost their sense of direction within minutes.",
      "In his leather satchel lay his grandfather's prize possession: a brass compass with three interlocking dials and a luminous emerald needle that clicked softly like a mechanical heartbeat. Rather than pointing north, the dial bore etched constellation symbols and a tiny inscription: 'To find your path, seek the truest spring.'",
      "As dusk purpled the horizon, the emerald needle spun wildly, then locked firmly toward an overgrown hazel thicket. Kiran stepped through the tangled branches, catching the gentle musical sound of bubbling fresh water. There, nestled beneath a hollow willow, sparkled a pristine crystal pool mirroring the evening star. Kiran smiled; the woods were not trying to lose him—they were guiding him home.",
    ],
    wordCount: 153,
    questions: [
      {
        id: "f1",
        type: "multiple-choice",
        prompt: "What color was the compass needle?",
        options: ["Ruby red", "Sapphire blue", "Luminous emerald", "Golden yellow"],
        answer: "C) Luminous emerald",
      },
      {
        id: "f2",
        type: "true-false",
        prompt: "The compass needle pointed directly to magnetic north.",
        answer: "False (It pointed toward the truest spring)",
      },
      {
        id: "f3",
        type: "short-answer",
        prompt: "What did town folklore claim happened to travellers in Whispering Woods?",
        answer: "They lost their sense of direction within minutes.",
      },
      {
        id: "f4",
        type: "vocabulary",
        prompt: "What does the word 'canopy' refer to in the first paragraph?",
        answer: "The high, continuous overhead layer formed by the branches and leaves of the trees.",
      },
      {
        id: "f5",
        type: "main-idea",
        prompt: "What is the theme of Kiran's journey?",
        answer: "Trusting inherited wisdom and observation can turn an intimidating unknown into a place of sanctuary.",
      },
      {
        id: "f6",
        type: "inference",
        prompt: "Why did Kiran smile at the end of the story?",
        answer: "He realized the compass had brought him to safety and he was no longer lost.",
      },
      {
        id: "f7",
        type: "fill-blanks",
        prompt: "The compass bore the inscription: 'To find your path, seek the truest ______.'",
        answer: "spring",
      },
      {
        id: "f8",
        type: "sequencing",
        prompt: "Did Kiran find the crystal pool before or after stepping through the hazel thicket?",
        answer: "After stepping through the hazel thicket.",
      },
    ],
  },

  // 6. Moral Stories — Grade 1–4 Easy Short
  {
    id: "honest-woodcutter",
    title: "The Silver Axe in the River",
    category: "moral-stories",
    gradeMin: 1,
    gradeMax: 5,
    difficulty: "easy",
    length: "short",
    paragraphs: [
      "A poor woodcutter was chopping fallen timber beside a rushing mountain river. As he swung his axe, the worn iron blade loosened from the wooden handle and splashed into the deep water.",
      "The woodcutter wept, for without his axe he could not earn bread for his hungry children. Suddenly, a gentle river spirit rose from the ripples holding a magnificent axe made of gleaming solid gold. 'Is this golden axe yours?' asked the spirit. 'No,' replied the honest woodcutter.",
      "The spirit dove under the water again and returned holding a radiant silver axe. Again the woodcutter shook his head: 'My axe was made of plain rusted iron.'",
      "Pleased by the man's unyielding truthfulness, the spirit retrieved the simple iron axe and presented him with both the gold and silver axes as a reward for his honesty.",
    ],
    wordCount: 147,
    questions: [
      {
        id: "m1",
        type: "multiple-choice",
        prompt: "What was the woodcutter's original axe made of?",
        options: ["Gold", "Silver", "Plain iron", "Bronze"],
        answer: "C) Plain iron",
      },
      {
        id: "m2",
        type: "true-false",
        prompt: "The woodcutter claimed the golden axe belonged to him.",
        answer: "False (He spoke the truth and denied it was his)",
      },
      {
        id: "m3",
        type: "short-answer",
        prompt: "Why did the river spirit reward the woodcutter with all three axes?",
        answer: "Because the woodcutter was honest and did not try to steal what wasn't his.",
      },
      {
        id: "m4",
        type: "fill-blanks",
        prompt: "The spirit first emerged holding an axe made of gleaming solid ______.",
        answer: "gold",
      },
      {
        id: "m5",
        type: "vocabulary",
        prompt: "What does the word 'unyielding' mean in this moral story?",
        answer: "Firm, unwavering, and steadfast.",
      },
      {
        id: "m6",
        type: "main-idea",
        prompt: "What is the moral lesson of this fable?",
        answer: "Honesty and integrity are virtues that bring true honor and reward.",
      },
      {
        id: "m7",
        type: "inference",
        prompt: "What would have happened if the woodcutter had lied about the golden axe?",
        answer: "The river spirit would have caught him in a lie and he would have lost even his iron axe.",
      },
      {
        id: "m8",
        type: "sequencing",
        prompt: "Which axe did the spirit offer second: the silver axe or the iron axe?",
        answer: "The silver axe.",
      },
    ],
  },

  // 7. Science / High School — Grade 8–12 Hard Long
  {
    id: "crispr-biotechnology",
    title: "CRISPR-Cas9: The Molecular Scissors of Genetics",
    category: "science",
    gradeMin: 7,
    gradeMax: 12,
    difficulty: "hard",
    length: "long",
    paragraphs: [
      "In the microscopic realm of single-celled bacteria, an evolutionary war against invading viruses has raged for hundreds of millions of years. To defend themselves, bacteria evolved an ingenious molecular immune system known as CRISPR (Clustered Regularly Interspaced Short Palindromic Repeats). When a bacterium survives a viral attack, it extracts a snippet of the virus's genetic blueprint and archives it between repeated DNA sequences inside its own genome.",
      "Should the same bacteriophage virus attempt another invasion, the bacterium transcribes this stored viral sequence into a guide RNA molecule. This guide RNA complexes with a specialized endonuclease enzyme known as Cas9. The guide acts like a biochemical GPS, directing Cas9 to patrol the cellular interior until it locates the viral genome.",
      "Once Cas9 identifies a matching base-pair sequence, its enzymatic catalytic domains act as molecular scissors, cleaving both strands of the viral DNA. The resulting double-strand break neutralizes the invader before it can replicate.",
      "In 2012, researchers Jennifer Doudna and Emmanuelle Charpentier made the epochal leap of reprogramming CRISPR-Cas9 to target any synthetic DNA sequence. This transformed a humble bacterial defense into a revolutionary gene-editing technology, enabling scientists to correct inherited mutations, engineer disease-resistant crops, and decipher complex cell biology.",
    ],
    wordCount: 198,
    questions: [
      {
        id: "c1",
        type: "multiple-choice",
        prompt: "What is the primary biological function of Cas9 in bacteria?",
        options: [
          "Photosynthetic energy generation",
          "An endonuclease that cuts DNA",
          "A structural membrane protein",
          "A ribosomal messenger",
        ],
        answer: "B) An endonuclease that cuts DNA",
      },
      {
        id: "c2",
        type: "true-false",
        prompt: "CRISPR was originally engineered in a laboratory rather than existing in nature.",
        answer: "False (It evolved naturally as an immune defense mechanism in bacteria)",
      },
      {
        id: "c3",
        type: "short-answer",
        prompt: "How does guide RNA assist Cas9 in finding its target?",
        answer: "It acts like a biochemical GPS by matching complementary base pairs with the viral sequence.",
      },
      {
        id: "c4",
        type: "fill-blanks",
        prompt: "CRISPR stands for Clustered Regularly Interspaced Short ______ Repeats.",
        answer: "Palindromic",
      },
      {
        id: "c5",
        type: "vocabulary",
        prompt: "What does 'endonuclease' mean in biochemistry?",
        answer: "An enzyme that cleaves phosphodiester bonds within a polynucleotide chain.",
      },
      {
        id: "c6",
        type: "main-idea",
        prompt: "What is the central achievement of Doudna and Charpentier described in the passage?",
        answer: "Reprogramming natural bacterial CRISPR-Cas9 into a customizable gene-editing tool for any DNA sequence.",
      },
      {
        id: "c7",
        type: "inference",
        prompt: "Why does cleaving both strands of viral DNA neutralize a virus?",
        answer: "Because a double-strand break shatters the viral genome, preventing it from replicating.",
      },
      {
        id: "c8",
        type: "sequencing",
        prompt: "Put these events in order: Cas9 cleaves DNA; Guide RNA matches sequence; Bacterium archives viral snippet.",
        answer: "1. Bacterium archives snippet -> 2. Guide RNA matches sequence -> 3. Cas9 cleaves DNA.",
      },
    ],
  },

  // 8. General Knowledge / Nonfiction — Grade 4–9 Medium Medium
  {
    id: "deep-sea-bioluminescence",
    title: "Creatures of the Midnight Ocean Abyss",
    category: "general-knowledge",
    gradeMin: 4,
    gradeMax: 9,
    difficulty: "medium",
    length: "medium",
    paragraphs: [
      "Beneath the sunlit surface of the open ocean lies a twilight realm where sunlight fades to perpetual blackness. At depths exceeding 1,000 meters (3,300 feet), in the bathypelagic zone, temperatures hover near freezing and water pressure is immense. Yet, this abyss is illuminated by a spectacle of living light: bioluminescence.",
      "Over 75 percent of deep-sea creatures produce their own illumination through a chemical reaction between an organic compound called luciferin and an enzyme named luciferase, energized by oxygen. Unlike incandescent light bulbs that release 90 percent of their energy as wasted heat, bioluminescence is 'cold light' with almost 100 percent efficiency.",
      "Creatures employ living light for survival. The deep-sea anglerfish dangles a glowing bacterial lure above its needle-sharp jaws to attract prey. Lanternfish flash bioluminescent bellies in counterillumination, blending seamlessly with faint downward light from above so predators below cannot see their silhouette.",
    ],
    wordCount: 154,
    questions: [
      {
        id: "b1",
        type: "multiple-choice",
        prompt: "Which two chemical components interact with oxygen to create bioluminescence?",
        options: ["Chlorophyll and Carotene", "Luciferin and Luciferase", "Melanin and Keratin", "Hemoglobin and Iron"],
        answer: "B) Luciferin and Luciferase",
      },
      {
        id: "b2",
        type: "true-false",
        prompt: "Bioluminescent light wastes 90 percent of its energy as heat like a light bulb.",
        answer: "False (It is 'cold light' that produces virtually no heat and is almost 100% efficient)",
      },
      {
        id: "b3",
        type: "short-answer",
        prompt: "How does the deep-sea anglerfish use light to catch food?",
        answer: "It dangles a glowing lure above its mouth to entice curious prey close to its jaws.",
      },
      {
        id: "b4",
        type: "fill-blanks",
        prompt: "Lanternfish use light on their bellies for ______ to camouflage against predators below.",
        answer: "counterillumination",
      },
      {
        id: "b5",
        type: "vocabulary",
        prompt: "What is the 'bathypelagic zone'?",
        answer: "The deep open-ocean layer between 1,000 and 4,000 meters where sunlight cannot penetrate.",
      },
      {
        id: "b6",
        type: "main-idea",
        prompt: "What is the main topic of this passage?",
        answer: "How deep-sea creatures generate and use bioluminescent light for survival in complete darkness.",
      },
      {
        id: "b7",
        type: "inference",
        prompt: "Why would counterillumination be helpful against predators swimming beneath you?",
        answer: "It breaks up the animal's dark shadow against the faint light from the surface above.",
      },
      {
        id: "b8",
        type: "sequencing",
        prompt: "Does oxygen react with luciferin before or after the light is emitted?",
        answer: "Before the light is emitted.",
      },
    ],
  },
];

// ── Generator Function ────────────────────────────────────────────────────────

export const DEFAULT_READING_CONFIG: ReadingConfig = {
  grade: "4",
  difficulty: "medium",
  category: "science",
  length: "medium",
  questionCount: 5,
  questionTypes: ["multiple-choice", "true-false", "short-answer", "fill-blanks", "vocabulary"],
  includeAnswerKey: true,
  layout: "standard",
};

export function generateReadingWorksheet(
  cfg: ReadingConfig,
  seed: number
): GeneratedReadingSheet {
  const rng = makeRng(seed);
  const gradeN = gradeToNum(cfg.grade);

  // If user supplied custom passage text
  if (cfg.customText && cfg.customText.trim().length > 30) {
    const rawParas = cfg.customText
      .split(/\n\s*\n/)
      .map((p) => p.trim())
      .filter((p) => p.length > 0);
    const title = cfg.customTitle?.trim() || "Reading Comprehension";
    const wordCount = rawParas.reduce((acc, p) => acc + p.split(/\s+/).length, 0);

    // Synthesize question items based on custom passage sentences
    const sentences = rawParas
      .flatMap((p) => p.split(/(?<=[.?!])\s+/))
      .map((s) => s.trim())
      .filter((s) => s.length > 15);

    const qs: ReadingQuestion[] = [];
    const count = Math.min(cfg.questionCount, Math.max(5, sentences.length));

    for (let i = 0; i < count; i++) {
      const s = sentences[i % sentences.length];
      const words = s.split(/\s+/);
      const keyWord = words[Math.floor(words.length / 2)].replace(/[^a-zA-Z]/g, "");

      if (i % 3 === 0) {
        qs.push({
          id: `cust-${i}`,
          type: "multiple-choice",
          prompt: `Based on paragraph ${Math.min(rawParas.length, Math.floor(i / 2) + 1)}, which statement is supported by the text?`,
          options: [
            `"${s.slice(0, 50)}..."`,
            "The author rejects this concept completely.",
            "This event occurred centuries earlier.",
            "None of the evidence supports this detail.",
          ],
          answer: `A) "${s.slice(0, 50)}..."`,
        });
      } else if (i % 3 === 1) {
        qs.push({
          id: `cust-${i}`,
          type: "fill-blanks",
          prompt: `Complete the sentence: "${s.replace(keyWord, "________")}"`,
          answer: keyWord,
        });
      } else {
        qs.push({
          id: `cust-${i}`,
          type: "short-answer",
          prompt: `Explain the significance of: "${s.slice(0, 60)}..."`,
          answer: `Refer directly to the passage context: ${s}`,
        });
      }
    }

    return {
      title,
      category: "Custom Topic",
      grade: GRADE_LABELS[cfg.grade],
      difficulty: cfg.difficulty.toUpperCase(),
      paragraphs: rawParas,
      wordCount,
      questions: qs,
      answerKey: qs.map((q, idx) => ({
        num: idx + 1,
        prompt: q.prompt,
        answer: q.answer,
        type: q.type,
      })),
    };
  }

  // 1. Find matching passages in the curated bank
  const categoryPassages = PASSAGE_BANK.filter((p) => p.category === cfg.category);
  const gradeMatching = (categoryPassages.length ? categoryPassages : PASSAGE_BANK).filter(
    (p) => gradeN >= p.gradeMin && gradeN <= p.gradeMax
  );
  const pool = gradeMatching.length > 0 ? gradeMatching : PASSAGE_BANK;
  const passage = pick(rng, pool);

  // 2. Select questions matching user's preferred question types
  const preferredTypes = cfg.questionTypes.length > 0 ? cfg.questionTypes : QUESTION_TYPES.map((q) => q.id);
  const matchingQuestions = passage.questions.filter((q) => preferredTypes.includes(q.type));
  const fallbackQuestions = passage.questions;

  const candidatePool = matchingQuestions.length >= 3 ? matchingQuestions : fallbackQuestions;
  const shuffledQs = shuffle(rng, candidatePool);

  // Take requested count (or duplicate with slight variations if requested count > available pool)
  let chosenQs: ReadingQuestion[] = shuffledQs.slice(0, cfg.questionCount);
  if (chosenQs.length < cfg.questionCount) {
    // Fill remaining from full passage question pool
    for (const q of passage.questions) {
      if (chosenQs.length >= cfg.questionCount) break;
      if (!chosenQs.some((c) => c.id === q.id)) chosenQs.push(q);
    }
  }

  // If still less than requested count, construct contextual extension questions
  while (chosenQs.length < cfg.questionCount) {
    const idx = chosenQs.length + 1;
    chosenQs.push({
      id: `ext-${idx}`,
      type: "short-answer",
      prompt: `Identify one key fact or lesson highlighted in paragraph ${(idx % passage.paragraphs.length) + 1}.`,
      answer: `Answers may vary. Students should cite factual evidence from paragraph ${(idx % passage.paragraphs.length) + 1}.`,
    });
  }

  return {
    title: passage.title,
    category: READING_CATEGORIES.find((c) => c.id === passage.category)?.label || passage.category,
    grade: GRADE_LABELS[cfg.grade],
    difficulty: cfg.difficulty.toUpperCase(),
    paragraphs: passage.paragraphs,
    wordCount: passage.wordCount,
    questions: chosenQs,
    answerKey: chosenQs.map((q, idx) => ({
      num: idx + 1,
      prompt: q.prompt,
      answer: q.answer,
      type: q.type,
    })),
  };
}
