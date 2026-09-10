import { defineMap } from "../helpers";
import type { MapWorksheet } from "../types";

export const HISTORY_MAPS: MapWorksheet[] = [
  defineMap({
    slug: "thirteen-colonies-map",
    referenceImage: "thirteen-colonies-map.svg",
    title: "Thirteen Colonies Map",
    h1: "The Thirteen Colonies Worksheet",
    category: "history",
    emoji: "🇺🇸",
    gradeBand: "Grades 4–8",
    keywords: [
      "thirteen colonies worksheet",
      "13 colonies map pdf",
      "new england middle southern colonies worksheet",
      "label the thirteen colonies",
      "colonial america map",
    ],
    intro:
      "Label the thirteen British colonies of 1776 and sort them into the New England, Middle and Southern colonies.",
    labelPrompt: "Write the name of each numbered colony and its colonial region.",
    groups: [
      { heading: "New England Colonies", items: ["New Hampshire", "Massachusetts", "Rhode Island", "Connecticut"] },
      { heading: "Middle Colonies", items: ["New York", "New Jersey", "Pennsylvania", "Delaware"] },
      { heading: "Southern Colonies", items: ["Maryland", "Virginia", "North Carolina", "South Carolina", "Georgia"] },
    ],
    clues: [
      { clue: "Colony founded by Puritans at Plymouth and Boston", answer: "Massachusetts" },
      { clue: "Colony founded by William Penn as a haven for Quakers", answer: "Pennsylvania" },
      { clue: "Oldest colony, settled at Jamestown in 1607", answer: "Virginia" },
      { clue: "Last of the thirteen to be founded (1732)", answer: "Georgia" },
      { clue: "Smallest colony, founded by Roger Williams on religious freedom", answer: "Rhode Island" },
    ],
    facts: [
      "The thirteen colonies ran along the Atlantic coast between the ocean and the Appalachian Mountains.",
      "They are grouped into New England (north), Middle (centre) and Southern (south) colonies.",
      "The New England economy relied on fishing, shipbuilding and trade; the Southern colonies on plantation farming.",
      "Virginia was the first colony (1607); Georgia was the last (1732).",
      "The colonies declared independence from Britain on 4 July 1776.",
    ],
    faqs: [
      {
        q: "What were the three regions of the thirteen colonies?",
        a: "New England (New Hampshire, Massachusetts, Rhode Island, Connecticut), the Middle Colonies (New York, New Jersey, Pennsylvania, Delaware) and the Southern Colonies (Maryland, Virginia, North Carolina, South Carolina, Georgia).",
      },
      {
        q: "Where were the thirteen colonies located?",
        a: "Along the east coast of North America, between the Atlantic Ocean and the Appalachian Mountains, in what is now the eastern United States.",
      },
    ],
    related: ["united-states-map", "us-regions-map", "us-states-and-capitals-map"],
  }),

  defineMap({
    slug: "ancient-egypt-map",
    referenceImage: "ancient-egypt-map.svg",
    title: "Ancient Egypt Map",
    h1: "Ancient Egypt Map Worksheet",
    category: "history",
    emoji: "🏺",
    gradeBand: "Grades 4–8",
    keywords: [
      "ancient egypt map worksheet",
      "ancient egypt map pdf",
      "upper and lower egypt worksheet",
      "label ancient egypt nile",
      "nile river ancient egypt map",
    ],
    intro:
      "Label the geography of ancient Egypt — Upper and Lower Egypt, the Nile and its delta, the deserts on either side, and the great cities and monuments.",
    labelPrompt: "Write the name of each numbered place or feature.",
    groups: [
      {
        heading: "Regions & the river",
        items: ["Upper Egypt (south)", "Lower Egypt (north)", "Nile River", "Nile Delta", "First Cataract (Aswan)", "Red Sea", "Mediterranean Sea"],
      },
      {
        heading: "Deserts & lands",
        items: ["Western Desert (Libyan Desert)", "Eastern Desert", "Sinai Peninsula", "Nubia (to the south)"],
      },
      { heading: "Cities & sites", items: ["Memphis", "Thebes", "Giza (pyramids)", "Valley of the Kings", "Alexandria"] },
    ],
    clues: [
      { clue: "The southern, upriver part of ancient Egypt", answer: "Upper Egypt (south)" },
      { clue: "The northern part, where the Nile fans out before the sea", answer: "Nile Delta" },
      { clue: "Site of the Great Pyramid and the Sphinx", answer: "Giza (pyramids)" },
      { clue: "Rocky rapids that marked ancient Egypt's southern border", answer: "First Cataract (Aswan)" },
      { clue: "Burial place of New Kingdom pharaohs, including Tutankhamun", answer: "Valley of the Kings" },
    ],
    facts: [
      "Ancient Egyptians called their land 'Kemet' — the black land — after the dark, fertile Nile mud.",
      "Upper Egypt is in the south and Lower Egypt in the north, because the Nile flows north (downhill).",
      "The yearly Nile flood watered the fields; beyond the green strip lay barren desert.",
      "Egypt was first unified around 3100 BCE, traditionally by King Narmer (Menes).",
      "The pyramids of Giza were built during the Old Kingdom, around 2600–2500 BCE.",
    ],
    faqs: [
      {
        q: "Why is southern Egypt called 'Upper' Egypt?",
        a: "Because the Nile flows from south to north. The 'upper' part of the river — closer to its source and higher in elevation — is in the south.",
      },
      {
        q: "Why did ancient Egypt grow up along the Nile?",
        a: "Egypt is mostly desert. The Nile provided water to drink and irrigate crops, fertile silt from its yearly flood, fish, reeds for papyrus, and an easy transport route.",
      },
    ],
    related: ["nile-river-map", "africa-map", "world-map"],
  }),

  defineMap({
    slug: "ancient-greece-map",
    referenceImage: "ancient-greece-map.svg",
    title: "Ancient Greece Map",
    h1: "Ancient Greece Map Worksheet",
    category: "history",
    emoji: "🏛️",
    gradeBand: "Grades 5–9",
    keywords: [
      "ancient greece map worksheet",
      "ancient greece map pdf",
      "label greek city states",
      "athens sparta map worksheet",
      "aegean sea ancient greece map",
    ],
    intro:
      "Label the city-states, regions and seas of ancient Greece — Athens, Sparta, the Peloponnese, the Aegean Sea and the Greek colonies around the Mediterranean.",
    labelPrompt: "Write the name of each numbered city-state, region or sea.",
    groups: [
      { heading: "City-states (poleis)", items: ["Athens", "Sparta", "Corinth", "Thebes", "Delphi", "Olympia", "Marathon"] },
      { heading: "Regions & islands", items: ["Attica", "Peloponnese", "Macedonia", "Crete", "Rhodes", "Ionia (coast of Asia Minor)"] },
      { heading: "Seas", items: ["Aegean Sea", "Ionian Sea", "Mediterranean Sea", "Black Sea"] },
    ],
    clues: [
      { clue: "City-state that became the birthplace of democracy", answer: "Athens" },
      { clue: "Militaristic city-state on the Peloponnese", answer: "Sparta" },
      { clue: "Large southern peninsula joined to the mainland by the Isthmus of Corinth", answer: "Peloponnese" },
      { clue: "Sea dotted with islands between Greece and Asia Minor", answer: "Aegean Sea" },
      { clue: "Site of the ancient Olympic Games", answer: "Olympia" },
    ],
    facts: [
      "Ancient Greece was not one country but hundreds of independent city-states (poleis).",
      "Mountains divided Greece into small pockets, which is one reason the city-states stayed separate.",
      "Greeks were expert sailors and founded colonies from Spain to the Black Sea.",
      "Athens and Sparta led opposite sides in the Peloponnesian War (431–404 BCE).",
      "Alexander the Great, from Macedonia in the north, spread Greek culture across Asia and Egypt.",
    ],
    faqs: [
      {
        q: "What was a Greek city-state?",
        a: "A 'polis' — an independent city and the farmland around it, with its own government, laws, army and gods. Athens, Sparta and Corinth were among the most powerful.",
      },
      {
        q: "How did geography shape ancient Greece?",
        a: "Rugged mountains split the land into isolated valleys, encouraging separate city-states, while the long coastline and many islands made the Greeks skilled sailors and traders.",
      },
    ],
    related: ["roman-empire-map", "europe-map", "world-map"],
  }),

  defineMap({
    slug: "roman-empire-map",
    referenceImage: "roman-empire-map.svg",
    title: "Roman Empire Map",
    h1: "The Roman Empire Map Worksheet",
    category: "history",
    emoji: "🏛️",
    gradeBand: "Grades 5–10",
    keywords: [
      "roman empire map worksheet",
      "roman empire map pdf",
      "label the roman empire",
      "provinces of rome worksheet",
      "roman empire at its height map",
    ],
    intro:
      "Label the extent of the Roman Empire at its height around 117 CE — its provinces, frontier rivers and walls, and the sea the Romans called 'Mare Nostrum' (Our Sea).",
    labelPrompt: "Write the name of each numbered province, city or frontier.",
    groups: [
      { heading: "Provinces & regions", items: ["Italia", "Hispania", "Gaul (Gallia)", "Britannia", "Germania", "Dacia", "Egypt (Aegyptus)", "Syria", "Africa (Carthage)", "Greece (Achaea)"] },
      { heading: "Cities", items: ["Rome", "Alexandria", "Antioch", "Carthage", "Londinium", "Byzantium (Constantinople)"] },
      { heading: "Frontiers & seas", items: ["Hadrian's Wall", "Rhine River", "Danube River", "Euphrates River", "Mediterranean Sea ('Mare Nostrum')"] },
    ],
    clues: [
      { clue: "The Roman name for the Iberian Peninsula", answer: "Hispania" },
      { clue: "The Roman province covering modern France", answer: "Gaul (Gallia)" },
      { clue: "Wall built across northern Britain to mark the frontier", answer: "Hadrian's Wall" },
      { clue: "River frontier of the empire in central Europe", answer: "Danube River" },
      { clue: "Sea the Romans controlled entirely and called 'Our Sea'", answer: "Mediterranean Sea ('Mare Nostrum')" },
    ],
    facts: [
      "At its peak (around 117 CE, under Trajan) the empire circled the entire Mediterranean Sea.",
      "It stretched from Britain to Egypt and from Spain to the Euphrates.",
      "The Rhine and Danube rivers formed much of the northern frontier.",
      "About 400,000 km of Roman roads linked the provinces — 'all roads lead to Rome'.",
      "In 395 CE the empire split permanently into a Western and an Eastern (Byzantine) half.",
    ],
    faqs: [
      {
        q: "How big was the Roman Empire at its height?",
        a: "About 5 million km² and 50–60 million people, reaching from Hadrian's Wall in Britain to the Euphrates River, and surrounding the whole Mediterranean.",
      },
      {
        q: "Why was the Mediterranean so important to Rome?",
        a: "It was the empire's central highway. Ships carried grain from Egypt, oil from Spain and troops between provinces far faster and cheaper than travel by land.",
      },
    ],
    related: ["ancient-greece-map", "europe-map", "middle-east-map"],
  }),

  defineMap({
    slug: "indus-valley-civilization-map",
    referenceImage: "indus-valley-civilization-map.svg",
    title: "Indus Valley Civilization Map",
    h1: "Indus Valley Civilization Map Worksheet",
    category: "history",
    emoji: "🏺",
    gradeBand: "Grades 5–9",
    keywords: [
      "indus valley civilization map worksheet",
      "harappan civilization map pdf",
      "label indus valley sites",
      "mohenjo daro harappa map",
      "ancient india map worksheet",
    ],
    intro:
      "Label the major cities and rivers of the Indus Valley (Harappan) Civilization — Harappa, Mohenjo-daro, Dholavira and Lothal — and the rivers along which they grew.",
    labelPrompt: "Write the name of each numbered city, river or feature.",
    groups: [
      { heading: "Major cities", items: ["Harappa", "Mohenjo-daro", "Dholavira", "Lothal", "Kalibangan", "Rakhigarhi", "Ganweriwala"] },
      { heading: "Rivers & waters", items: ["Indus River", "Ravi River", "Ghaggar-Hakra (Saraswati) River", "Arabian Sea"] },
      { heading: "Modern countries in the region", items: ["Pakistan", "India", "Afghanistan"] },
    ],
    clues: [
      { clue: "First Indus city to be excavated, on the Ravi River", answer: "Harappa" },
      { clue: "'Mound of the Dead' — the best-preserved Indus city, with the Great Bath", answer: "Mohenjo-daro" },
      { clue: "Indus port town in Gujarat with a possible dockyard", answer: "Lothal" },
      { clue: "The river that gives the civilization its name", answer: "Indus River" },
    ],
    facts: [
      "The Indus Valley (or Harappan) Civilization flourished from about 2600 to 1900 BCE.",
      "It was one of the world's three earliest urban civilizations, alongside Mesopotamia and Egypt.",
      "Its cities had grid-planned streets, brick houses, covered drains and public wells.",
      "Most sites lie in modern Pakistan and north-west India, along the Indus and the now-dry Ghaggar-Hakra.",
      "The Harappan script has still not been deciphered.",
    ],
    faqs: [
      {
        q: "What are the two most famous Indus Valley cities?",
        a: "Harappa (on the Ravi River) and Mohenjo-daro (on the Indus). The civilization is often called 'Harappan' after the first site discovered.",
      },
      {
        q: "Where was the Indus Valley Civilization located?",
        a: "Across the north-west of the Indian subcontinent — mainly modern Pakistan and north-west India — along the Indus River and its tributaries.",
      },
    ],
    related: ["india-physical-map", "major-rivers-of-india-map", "world-map"],
  }),
];
