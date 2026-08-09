export interface GradeDef {
  id: string;
  label: string;
  ageRange: string;
  emoji: string;
  gradient: string;
}

export interface SubjectDef {
  id: string;
  label: string;
  emoji: string;
  description: string;
  color: string;
  iconColor: string;
  headerGradient: string;
}

export const GRADES_CURRICULUM: GradeDef[] = [
  { id: "kindergarten", label: "Kindergarten", ageRange: "Ages 4–5", emoji: "⭐", gradient: "from-pink-400 to-purple-500" },
  { id: "grade-1",      label: "Grade 1",      ageRange: "Ages 6–7", emoji: "🌱", gradient: "from-blue-400 to-cyan-500" },
  { id: "grade-2",      label: "Grade 2",      ageRange: "Ages 7–8", emoji: "🚀", gradient: "from-emerald-400 to-teal-500" },
  { id: "grade-3",      label: "Grade 3",      ageRange: "Ages 8–9", emoji: "🦁", gradient: "from-orange-400 to-amber-500" },
  { id: "grade-4",      label: "Grade 4",      ageRange: "Ages 9–10", emoji: "🔭", gradient: "from-teal-400 to-cyan-600" },
  { id: "grade-5",      label: "Grade 5",      ageRange: "Ages 10–11", emoji: "⚡", gradient: "from-purple-500 to-indigo-600" },
  { id: "grade-6",      label: "Grade 6",      ageRange: "Ages 11–12", emoji: "🌍", gradient: "from-red-400 to-orange-500" },
  { id: "grade-7",      label: "Grade 7",      ageRange: "Ages 12–13", emoji: "🧬", gradient: "from-indigo-500 to-blue-600" },
  { id: "grade-8",      label: "Grade 8",      ageRange: "Ages 13–14", emoji: "🏆", gradient: "from-slate-500 to-gray-700" },
];

export const SUBJECTS_META: Record<string, SubjectDef> = {
  "english-language": { id: "english-language", label: "English / Language", emoji: "📚", description: "Alphabets, phonics, letter tracing, vowels, consonants, and more.", color: "bg-green-50 border-green-200", iconColor: "text-green-600", headerGradient: "from-green-400 to-emerald-600" },
  "mathematics":      { id: "mathematics",      label: "Mathematics",        emoji: "🔢", description: "Numbers, operations, geometry, measurement, and problem solving.", color: "bg-blue-50 border-blue-200", iconColor: "text-blue-600", headerGradient: "from-blue-500 to-indigo-600" },
  "general-awareness":{ id: "general-awareness",label: "General Awareness / EVS", emoji: "🌿", description: "Self, family, environment, nature, and the world around us.", color: "bg-teal-50 border-teal-200", iconColor: "text-teal-600", headerGradient: "from-teal-400 to-teal-600" },
  "shapes-visual":    { id: "shapes-visual",    label: "Shapes & Visual Skills", emoji: "🔷", description: "Shapes, tracing, matching, and spatial awareness activities.", color: "bg-pink-50 border-pink-200", iconColor: "text-pink-600", headerGradient: "from-pink-400 to-fuchsia-500" },
  "coloring-creative":{ id: "coloring-creative",label: "Coloring & Creative", emoji: "🎨", description: "Coloring pages, drawing, patterns, and creative expression.", color: "bg-orange-50 border-orange-200", iconColor: "text-orange-500", headerGradient: "from-orange-400 to-amber-500" },
  "logic-thinking":   { id: "logic-thinking",   label: "Logic & Thinking",   emoji: "🧩", description: "Matching, sorting, classification, sequencing, and mazes.", color: "bg-purple-50 border-purple-200", iconColor: "text-purple-600", headerGradient: "from-purple-500 to-violet-600" },
  "social-emotional": { id: "social-emotional", label: "Social & Emotional",  emoji: "💝", description: "Emotions, empathy, friendship, manners, and safety.", color: "bg-rose-50 border-rose-200", iconColor: "text-rose-500", headerGradient: "from-rose-400 to-pink-600" },
  "english":          { id: "english",          label: "English",             emoji: "📖", description: "Grammar, comprehension, vocabulary, writing, and literature.", color: "bg-emerald-50 border-emerald-200", iconColor: "text-emerald-600", headerGradient: "from-emerald-500 to-green-600" },
  "evs":              { id: "evs",              label: "EVS",                 emoji: "🌱", description: "Environmental studies — nature, body, family, community.", color: "bg-green-50 border-green-200", iconColor: "text-green-600", headerGradient: "from-green-500 to-teal-600" },
  "gk":               { id: "gk",              label: "General Knowledge",   emoji: "🌐", description: "India, world, animals, sports, festivals, and more.", color: "bg-amber-50 border-amber-200", iconColor: "text-amber-600", headerGradient: "from-amber-400 to-orange-500" },
  "reasoning":        { id: "reasoning",        label: "Reasoning",           emoji: "🧠", description: "Analogy, series, coding, direction, and logical puzzles.", color: "bg-violet-50 border-violet-200", iconColor: "text-violet-600", headerGradient: "from-violet-500 to-purple-600" },
  "science":          { id: "science",          label: "Science",             emoji: "🔬", description: "Plants, animals, matter, energy, earth, and experiments.", color: "bg-cyan-50 border-cyan-200", iconColor: "text-cyan-600", headerGradient: "from-cyan-500 to-sky-600" },
  "social-studies":   { id: "social-studies",   label: "Social Studies",      emoji: "🗺️", description: "History, geography, civics, maps, and society.", color: "bg-red-50 border-red-200", iconColor: "text-red-600", headerGradient: "from-red-500 to-rose-600" },
};

export const CURRICULUM: Record<string, Record<string, string[]>> = {
  "kindergarten": {
    "english-language": [
      "Alphabet A–Z", "Capital & Small Letters", "Letter Tracing",
      "Letter Recognition", "Alphabet Matching", "Beginning Letter Sounds",
      "Phonics – Basic Sounds", "Vowels", "Consonants", "Picture & Letter Matching",
    ],
    "mathematics": [
      "Number Recognition 1–10", "Number Recognition 1–20", "Number Recognition 1–50",
      "Number Tracing", "Counting Objects", "Number & Quantity Matching",
      "Missing Numbers", "Number Sequencing", "Before, After & Between",
      "Greater Than / Less Than",
    ],
    "general-awareness": [
      "Myself", "My Family", "My Home", "My School", "My Classroom",
      "School Objects", "Body Parts", "Sense Organs", "Healthy Habits",
      "Personal Hygiene", "Good Habits", "Food", "Fruits", "Vegetables", "Animals",
    ],
    "shapes-visual": [
      "Circle", "Square", "Triangle", "Rectangle", "Oval",
      "Star", "Heart", "Shape Tracing", "Shape Matching",
    ],
    "coloring-creative": [
      "Alphabet Coloring", "Number Coloring", "Shape Coloring", "Animal Coloring",
      "Fruit & Vegetable Coloring", "Nature Coloring", "Festival Coloring",
      "Vehicle Coloring", "Community Helper Coloring", "Color by Number",
      "Color by Shape", "Complete the Picture", "Draw & Color",
    ],
    "logic-thinking": [
      "Matching", "Sorting", "Classification", "Sequencing", "Patterns",
      "Odd One Out", "Same & Different", "Find the Missing Object",
      "Picture Puzzles", "Simple Mazes", "Memory Activities",
      "Which One Does Not Belong?", "What Comes Next?", "Find the Hidden Object",
    ],
    "social-emotional": [
      "Emotions", "Happy / Sad / Angry", "Sharing", "Caring", "Helping Others",
      "Good Manners", "Please & Thank You", "Taking Turns", "Friendship",
      "Classroom Rules", "Personal Safety", "Stranger Safety", "Healthy Choices",
    ],
  },
  "grade-1": {
    "mathematics": [
      "Comparing Numbers", "Place Value", "Addition", "Subtraction",
      "Addition and Subtraction Word Problems", "Shapes", "Patterns",
      "Measurement", "Time", "Money", "Data Handling",
    ],
    "english": [
      "Alphabet", "Phonics", "Vowels and Consonants", "Capital and Small Letters",
      "CVC Words", "Rhyming Words", "Sight Words", "Word Matching", "Nouns",
      "Pronouns", "Verbs", "Adjectives", "Singular and Plural", "Opposite Words",
      "Articles", "Sentence Formation", "Reading Comprehension", "Picture Composition",
    ],
    "evs": [
      "Myself", "My Family", "My School", "My Home", "My Neighbourhood",
      "Food", "Clothes", "Plants", "Animals", "Body Parts", "Sense Organs",
      "Water", "Air", "Weather", "Transport", "Safety Rules", "Cleanliness", "Community Helpers",
    ],
    "gk": [
      "Animals", "Birds", "Fruits", "Vegetables", "Colors", "Shapes",
      "Transport", "Festivals", "National Symbols", "India Basics",
    ],
    "reasoning": [
      "Odd One Out", "Matching", "Classification", "Patterns",
      "Picture Analogy", "Number Patterns", "Shape Patterns", "Missing Objects",
    ],
  },
  "grade-2": {
    "mathematics": [
      "Numbers up to 1000", "Number Names", "Place Value", "Expanded Form",
      "Comparing Numbers", "Ascending and Descending Order", "Addition", "Subtraction",
      "Multiplication Basics", "Division Basics", "Multiplication Tables",
      "Fractions Basics", "Shapes", "Patterns", "Measurement", "Time", "Money",
      "Data Handling", "Word Problems",
    ],
    "english": [
      "Nouns", "Common and Proper Nouns", "Pronouns", "Verbs", "Adjectives",
      "Articles", "Prepositions", "Conjunctions", "Singular and Plural", "Gender",
      "Opposite Words", "Synonyms", "Antonyms", "Spellings", "Sentence Formation",
      "Punctuation", "Reading Comprehension", "Picture Composition",
    ],
    "evs": [
      "Family", "School", "Neighbourhood", "Plants", "Animals", "Human Body",
      "Food and Nutrition", "Water", "Air", "Weather", "Seasons", "Transport",
      "Communication", "Community Helpers", "Safety", "Cleanliness and Hygiene",
    ],
    "gk": [
      "India", "States and Capitals", "National Symbols", "Famous People",
      "Animals", "Birds", "Inventions", "Sports", "Festivals", "Space",
    ],
    "reasoning": [
      "Odd One Out", "Classification", "Analogy", "Patterns", "Number Series",
      "Alphabet Series", "Missing Numbers", "Mirror Images", "Shape Patterns",
    ],
  },
  "grade-3": {
    "mathematics": [
      "Numbers up to 10000", "Place Value", "Expanded Form", "Comparing Numbers",
      "Roman Numerals", "Addition", "Subtraction", "Multiplication", "Division",
      "Multiplication Tables", "Fractions", "Decimals Basics", "Geometry",
      "Lines and Shapes", "Perimeter Basics", "Measurement", "Time", "Money",
      "Data Handling", "Word Problems",
    ],
    "english": [
      "Nouns", "Pronouns", "Verbs", "Adjectives", "Adverbs", "Articles",
      "Prepositions", "Conjunctions", "Tenses Basics", "Subject Verb Agreement",
      "Singular and Plural", "Gender", "Synonyms", "Antonyms", "Homophones",
      "Spellings", "Punctuation", "Reading Comprehension", "Paragraph Writing",
    ],
    "evs": [
      "Family and Relationships", "Plants", "Animals", "Human Body",
      "Food and Nutrition", "Water", "Air", "Weather", "Soil", "Materials",
      "Force and Motion Basics", "Light", "Sound", "Transport", "Communication",
      "Environment", "Safety",
    ],
    "gk": [
      "India", "World", "States and Capitals", "National Symbols",
      "Famous Personalities", "Inventions", "Space", "Sports", "Animals", "Plants", "Environment",
    ],
    "reasoning": [
      "Classification", "Analogy", "Odd One Out", "Number Series",
      "Alphabet Series", "Coding Basics", "Direction Sense", "Ranking",
      "Missing Numbers", "Patterns",
    ],
  },
  "grade-4": {
    "mathematics": [
      "Large Numbers", "Place Value", "Addition", "Subtraction", "Multiplication",
      "Division", "Factors", "Multiples", "Prime Numbers", "Fractions", "Decimals",
      "Geometry", "Lines and Angles", "Perimeter", "Area Basics", "Measurement",
      "Time", "Money", "Data Handling", "Word Problems",
    ],
    "english": [
      "Nouns", "Pronouns", "Verbs", "Adjectives", "Adverbs", "Articles",
      "Prepositions", "Conjunctions", "Tenses", "Subject Verb Agreement",
      "Types of Sentences", "Synonyms", "Antonyms", "Homophones", "Idioms",
      "Punctuation", "Reading Comprehension", "Paragraph Writing", "Letter Writing",
    ],
    "evs": [
      "Plants", "Animals", "Human Body", "Food and Nutrition", "Matter",
      "States of Matter", "Force and Motion", "Light", "Sound", "Water Cycle",
      "Air", "Weather", "Earth and Space", "Natural Resources", "Environment", "Pollution",
    ],
    "gk": [
      "India", "World", "Geography", "History Basics", "Science GK",
      "Famous Personalities", "Inventions", "Space", "Sports", "Books and Authors",
    ],
    "reasoning": [
      "Analogy", "Classification", "Number Series", "Alphabet Series",
      "Coding Decoding", "Direction Sense", "Blood Relations Basics", "Ranking",
      "Calendar", "Clock", "Mirror Images", "Figure Completion",
    ],
  },
  "grade-5": {
    "mathematics": [
      "Large Numbers", "Place Value", "Addition", "Subtraction", "Multiplication",
      "Division", "Factors", "Multiples", "Prime and Composite Numbers",
      "LCM", "HCF", "Fractions", "Decimals", "Percentage Basics", "Ratio Basics",
      "Geometry", "Angles", "Perimeter", "Area", "Volume Basics",
      "Measurement", "Time", "Money", "Data Handling", "Word Problems",
    ],
    "english": [
      "Nouns", "Pronouns", "Verbs", "Adjectives", "Adverbs", "Articles",
      "Prepositions", "Conjunctions", "Tenses", "Subject Verb Agreement",
      "Direct and Indirect Speech Basics", "Active and Passive Voice Basics",
      "Synonyms", "Antonyms", "Homophones", "Idioms and Phrases",
      "Punctuation", "Reading Comprehension", "Paragraph Writing",
      "Letter Writing", "Story Writing",
    ],
    "science": [
      "Plants", "Animals", "Human Body", "Food and Nutrition", "Matter",
      "States of Matter", "Physical and Chemical Changes", "Force and Motion",
      "Energy", "Light", "Sound", "Water Cycle", "Air", "Earth and Space",
      "Natural Resources", "Environment", "Pollution", "Safety",
    ],
    "social-studies": [
      "India", "States and Capitals", "Indian History Basics", "Indian Geography",
      "Maps", "Continents and Oceans", "Natural Resources",
      "Government Basics", "Community", "Environment",
    ],
    "reasoning": [
      "Analogy", "Classification", "Number Series", "Alphabet Series",
      "Coding Decoding", "Direction Sense", "Blood Relations", "Ranking",
      "Calendar", "Clock", "Venn Diagrams", "Mirror Images", "Cubes and Dice Basics",
    ],
  },
  "grade-6": {
    "mathematics": [
      "Whole Numbers", "Integers", "Factors and Multiples", "LCM", "HCF",
      "Fractions", "Decimals", "Rational Numbers Basics", "Ratio", "Percentage",
      "Algebra Basics", "Variables and Constants", "Simple Equations", "Geometry",
      "Lines and Angles", "Triangles", "Quadrilaterals", "Symmetry",
      "Mensuration", "Perimeter and Area", "Data Handling", "Word Problems",
    ],
    "science": [
      "Food and Components", "Separation of Substances", "Changes Around Us",
      "Materials", "Plants", "Body Movements", "Living Organisms", "Motion",
      "Light", "Electricity", "Magnets", "Water", "Air", "Garbage and Waste",
    ],
    "english": [
      "Nouns", "Pronouns", "Verbs", "Adjectives", "Adverbs", "Articles",
      "Prepositions", "Conjunctions", "Tenses", "Modals", "Subject Verb Agreement",
      "Active and Passive Voice", "Direct and Indirect Speech", "Phrases and Clauses",
      "Sentence Transformation", "Synonyms", "Antonyms", "Idioms and Phrases",
      "Reading Comprehension", "Letter Writing", "Story Writing",
    ],
    "social-studies": [
      "Ancient Civilizations", "Early Humans", "Ancient India", "Earth and Globe",
      "Maps", "Major Landforms", "Climate", "Diversity", "Government",
      "Local Government", "Rural Administration", "Urban Administration",
    ],
    "reasoning": [
      "Number Series", "Alphabet Series", "Analogy", "Classification",
      "Coding Decoding", "Direction Sense", "Blood Relations", "Ranking",
      "Syllogisms Basics", "Venn Diagrams", "Calendar", "Clock", "Cubes and Dice", "Mirror Images",
    ],
  },
  "grade-7": {
    "mathematics": [
      "Integers", "Fractions", "Decimals", "Rational Numbers", "Exponents Basics",
      "Ratio and Proportion", "Percentage", "Profit and Loss", "Simple Interest",
      "Algebraic Expressions", "Linear Equations", "Lines and Angles", "Triangles",
      "Congruence of Triangles", "Quadrilaterals", "Perimeter and Area",
      "Mensuration", "Symmetry", "Data Handling", "Probability Basics", "Word Problems",
    ],
    "science": [
      "Nutrition in Plants", "Nutrition in Animals", "Heat",
      "Acids Bases and Salts", "Physical and Chemical Changes", "Weather and Climate",
      "Soil", "Respiration", "Transportation in Plants and Animals",
      "Reproduction in Plants", "Motion and Time", "Electric Current",
      "Light", "Forests", "Wastewater",
    ],
    "english": [
      "Nouns", "Pronouns", "Verbs", "Adjectives", "Adverbs", "Tenses", "Modals",
      "Determiners", "Prepositions", "Conjunctions", "Subject Verb Agreement",
      "Active and Passive Voice", "Direct and Indirect Speech", "Phrases and Clauses",
      "Sentence Transformation", "Synonyms", "Antonyms", "Idioms and Phrases",
      "Reading Comprehension", "Letter Writing", "Essay Writing",
    ],
    "social-studies": [
      "Medieval India", "Delhi Sultanate", "Mughal Empire", "Tribes and Nomads",
      "Medieval Culture", "Environment", "Air", "Water", "Natural Vegetation",
      "Human Environment", "Markets", "Media", "Democracy", "State Government",
    ],
    "reasoning": [
      "Number Series", "Alphabet Series", "Analogy", "Classification",
      "Coding Decoding", "Direction Sense", "Blood Relations", "Ranking",
      "Syllogisms", "Venn Diagrams", "Calendar", "Clock", "Cubes and Dice", "Non Verbal Reasoning",
    ],
  },
  "grade-8": {
    "mathematics": [
      "Rational Numbers", "Exponents and Powers", "Squares and Square Roots",
      "Cubes and Cube Roots", "Linear Equations", "Algebraic Expressions",
      "Factorisation", "Direct Proportion", "Inverse Proportion", "Percentage",
      "Profit and Loss", "Simple Interest", "Compound Interest Basics",
      "Geometry", "Quadrilaterals", "Triangles", "Construction",
      "Mensuration", "Area", "Volume", "Data Handling", "Probability", "Graphs", "Word Problems",
    ],
    "science": [
      "Crop Production", "Microorganisms", "Synthetic Fibres", "Metals and Nonmetals",
      "Coal and Petroleum", "Combustion", "Conservation of Plants and Animals",
      "Cell Structure", "Reproduction in Animals", "Reaching Adolescence",
      "Force and Pressure", "Friction", "Sound", "Light", "Electricity",
      "Chemical Effects of Electric Current", "Pollution",
    ],
    "english": [
      "Nouns", "Pronouns", "Verbs", "Adjectives", "Adverbs", "Tenses", "Modals",
      "Determiners", "Prepositions", "Conjunctions", "Subject Verb Agreement",
      "Active and Passive Voice", "Direct and Indirect Speech", "Phrases and Clauses",
      "Sentence Transformation", "Synonyms", "Antonyms", "Idioms and Phrases",
      "Vocabulary", "Reading Comprehension", "Formal Letter Writing", "Essay Writing",
    ],
    "social-studies": [
      "Modern Indian History", "British Rule in India", "Revolt of 1857",
      "Indian National Movement", "Colonialism", "Resources", "Agriculture",
      "Industries", "Mineral Resources", "Human Resources",
      "Indian Constitution", "Parliament", "Judiciary", "Social Justice", "Secularism",
    ],
    "reasoning": [
      "Number Series", "Alphabet Series", "Analogy", "Classification",
      "Coding Decoding", "Direction Sense", "Blood Relations", "Ranking",
      "Syllogisms", "Venn Diagrams", "Calendar", "Clock", "Cubes and Dice",
      "Mirror Images", "Paper Folding", "Figure Completion",
    ],
  },
};

export function slugifyTopic(topic: string): string {
  return topic
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function unslugifyTopic(gradeId: string, subjectId: string, slug: string): string | undefined {
  const topics = CURRICULUM[gradeId]?.[subjectId] ?? [];
  return topics.find((t) => slugifyTopic(t) === slug);
}

export function getSubjectsForGrade(gradeId: string): SubjectDef[] {
  const subjectIds = Object.keys(CURRICULUM[gradeId] ?? {});
  return subjectIds.map((id) => SUBJECTS_META[id]).filter(Boolean);
}

export function getTopicsForGradeSubject(gradeId: string, subjectId: string): string[] {
  return CURRICULUM[gradeId]?.[subjectId] ?? [];
}

export function isValidGrade(gradeId: string): boolean {
  return gradeId in CURRICULUM;
}

export function isValidSubject(gradeId: string, subjectId: string): boolean {
  return subjectId in (CURRICULUM[gradeId] ?? {});
}

export function isValidSubjectGlobal(subjectId: string): boolean {
  return GRADES_CURRICULUM.some((g) => subjectId in (CURRICULUM[g.id] ?? {}));
}

export function getGradesForSubject(subjectId: string): GradeDef[] {
  return GRADES_CURRICULUM.filter((g) => (CURRICULUM[g.id]?.[subjectId]?.length ?? 0) > 0);
}

export function getAllTopicsForSubject(
  subjectId: string
): { gradeId: string; gradeLabel: string; gradeEmoji: string; topic: string }[] {
  const out: { gradeId: string; gradeLabel: string; gradeEmoji: string; topic: string }[] = [];
  for (const grade of GRADES_CURRICULUM) {
    for (const topic of (CURRICULUM[grade.id]?.[subjectId] ?? [])) {
      out.push({ gradeId: grade.id, gradeLabel: grade.label, gradeEmoji: grade.emoji, topic });
    }
  }
  return out;
}
