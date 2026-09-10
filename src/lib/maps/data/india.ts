import { defineMap } from "../helpers";
import type { MapWorksheet } from "../types";

export const INDIA_MAPS: MapWorksheet[] = [
  defineMap({
    slug: "india-political-map",
    referenceImage: "india-political-map.svg",
    title: "India Political Map",
    h1: "India Political Map Labeling Worksheet",
    category: "india",
    emoji: "🗳️",
    gradeBand: "Grades 4–10",
    keywords: [
      "india political map worksheet",
      "blank political map of india pdf",
      "label indian states and capitals",
      "india political map for students",
    ],
    intro:
      "Label India's states, union territories and their capitals on a political map. The political map shows human-made borders — state lines, the national capital and neighbouring countries.",
    labelPrompt: "Label each numbered state, union territory and capital.",
    groups: [
      {
        heading: "Large states to locate",
        items: [
          "Rajasthan",
          "Madhya Pradesh",
          "Maharashtra",
          "Uttar Pradesh",
          "Gujarat",
          "Karnataka",
          "Andhra Pradesh",
          "Odisha",
          "Tamil Nadu",
          "Bihar",
          "West Bengal",
          "Assam",
        ],
      },
      {
        heading: "Key capitals",
        items: [
          "New Delhi (national capital)",
          "Mumbai — Maharashtra",
          "Kolkata — West Bengal",
          "Chennai — Tamil Nadu",
          "Bengaluru — Karnataka",
          "Hyderabad — Telangana",
        ],
      },
      {
        heading: "Neighbouring countries",
        items: ["Pakistan", "China", "Nepal", "Bhutan", "Bangladesh", "Myanmar", "Sri Lanka"],
      },
    ],
    facts: [
      "India has 28 states and 8 union territories.",
      "New Delhi is the capital of India; it sits inside the National Capital Territory of Delhi.",
      "A political map shows borders, cities and names; a physical map shows landforms.",
      "Rajasthan is the largest state; Goa is the smallest.",
      "Chandigarh serves as the shared capital of both Punjab and Haryana.",
    ],
    faqs: [
      {
        q: "What is a political map?",
        a: "A map that shows human-made features — country and state boundaries, capitals and major cities — usually with each state or country in a different colour.",
      },
      {
        q: "How is it different from a physical map?",
        a: "A physical map shows natural features like mountains, plateaus, rivers and deserts, using colours for elevation rather than for political units.",
      },
    ],
    related: ["india-map", "states-of-india-map", "states-and-capitals-of-india-map", "india-physical-map"],
  }),

  defineMap({
    slug: "india-physical-map",
    referenceImage: "india-physical-map.svg",
    title: "India Physical Map",
    h1: "India Physical Map Labeling Worksheet",
    category: "india",
    emoji: "🏔️",
    gradeBand: "Grades 5–10",
    keywords: [
      "india physical map worksheet",
      "physical features of india pdf",
      "label india mountains rivers plateaus",
      "physiographic divisions of india worksheet",
    ],
    intro:
      "Label the physical divisions of India — the Himalayas, the Northern Plains, the Peninsular Plateau, the Coastal Plains, the Thar Desert and the islands — along with major rivers and peaks.",
    labelPrompt: "Label each numbered physical division, range, river and water body.",
    groups: [
      {
        heading: "Physiographic divisions",
        items: [
          "The Himalayan Mountains",
          "The Northern Plains (Indo-Gangetic Plain)",
          "The Peninsular Plateau (Deccan Plateau)",
          "The Indian Desert (Thar Desert)",
          "The Coastal Plains",
          "The Islands (Andaman & Nicobar; Lakshadweep)",
        ],
      },
      {
        heading: "Ranges & peaks",
        items: ["Karakoram Range", "Aravalli Range", "Vindhya Range", "Satpura Range", "Western Ghats", "Eastern Ghats", "Kangchenjunga", "Anai Mudi"],
      },
      {
        heading: "Rivers & waters",
        items: ["Ganga", "Yamuna", "Brahmaputra", "Godavari", "Krishna", "Narmada", "Arabian Sea", "Bay of Bengal"],
      },
    ],
    clues: [
      { clue: "Mountain wall along India's north; contains the world's highest peaks", answer: "The Himalayan Mountains" },
      { clue: "Flat, fertile region built by the Ganga, Indus and Brahmaputra", answer: "The Northern Plains (Indo-Gangetic Plain)" },
      { clue: "Old, triangular tableland covering most of southern India", answer: "The Peninsular Plateau (Deccan Plateau)" },
      { clue: "Range along India's west coast, running parallel to the Arabian Sea", answer: "Western Ghats" },
      { clue: "Highest mountain peak located in India", answer: "Kangchenjunga" },
      { clue: "Highest peak in South India, in the Western Ghats", answer: "Anai Mudi" },
    ],
    facts: [
      "India has six physiographic divisions: the Himalayas, Northern Plains, Peninsular Plateau, Indian Desert, Coastal Plains and Islands.",
      "Kangchenjunga (8,586 m) is the highest peak in India; Nanda Devi is the highest lying entirely within Indian territory.",
      "The Western Ghats are a UNESCO biodiversity hotspot and are older than the Himalayas.",
      "The Deccan Plateau is bordered by the Western and Eastern Ghats, which meet at the Nilgiri Hills.",
      "The Northern Plains are among the most densely farmed and populated regions on Earth.",
    ],
    faqs: [
      {
        q: "What are the physical divisions of India?",
        a: "The Himalayan Mountains, the Northern Plains, the Peninsular Plateau, the Indian (Thar) Desert, the Coastal Plains and the Islands.",
      },
      {
        q: "What is the difference between the Western and Eastern Ghats?",
        a: "The Western Ghats are higher, more continuous and run close to the Arabian Sea; the Eastern Ghats are lower, broken by rivers, and run near the Bay of Bengal.",
      },
    ],
    related: ["india-map", "mountain-ranges-of-india-map", "major-rivers-of-india-map", "india-political-map"],
  }),

  defineMap({
    slug: "indian-states-identification-map",
    referenceImage: "indian-states-identification-map.svg",
    title: "Indian States Identification",
    h1: "Indian States Identification Worksheet",
    category: "india",
    emoji: "🔎",
    gradeBand: "Grades 4–10",
    keywords: [
      "indian states identification worksheet",
      "identify the indian state map",
      "name the state of india worksheet",
      "india states quiz pdf",
    ],
    intro:
      "Identify Indian states from their shape and position. This worksheet lists all 28 states with location clues so students can build a firm mental map of the country.",
    labelPrompt: "Write the name of each numbered state.",
    groups: [
      {
        heading: "All 28 states",
        items: [
          "Andhra Pradesh",
          "Arunachal Pradesh",
          "Assam",
          "Bihar",
          "Chhattisgarh",
          "Goa",
          "Gujarat",
          "Haryana",
          "Himachal Pradesh",
          "Jharkhand",
          "Karnataka",
          "Kerala",
          "Madhya Pradesh",
          "Maharashtra",
          "Manipur",
          "Meghalaya",
          "Mizoram",
          "Nagaland",
          "Odisha",
          "Punjab",
          "Rajasthan",
          "Sikkim",
          "Tamil Nadu",
          "Telangana",
          "Tripura",
          "Uttar Pradesh",
          "Uttarakhand",
          "West Bengal",
        ],
      },
    ],
    clues: [
      { clue: "Largest state by area, in the north-west", answer: "Rajasthan" },
      { clue: "Smallest state by area, on the west coast", answer: "Goa" },
      { clue: "Most populous state, in the north", answer: "Uttar Pradesh" },
      { clue: "Southernmost state, tip of the peninsula", answer: "Tamil Nadu" },
      { clue: "Least populous state, in the eastern Himalayas", answer: "Sikkim" },
      { clue: "Landlocked central state, largest until 2000", answer: "Madhya Pradesh" },
    ],
    facts: [
      "India has 28 states, formed mostly on a linguistic basis after 1956.",
      "The newest state is Telangana, carved out of Andhra Pradesh in 2014.",
      "Nine states have a coastline; the rest are landlocked.",
      "The 'Seven Sisters' plus Sikkim make up the North-East region.",
      "Uttar Pradesh alone has more people than most countries in the world.",
    ],
    faqs: [
      {
        q: "How many states does India have?",
        a: "28 states and 8 union territories as of 2024.",
      },
      {
        q: "Which is the newest state?",
        a: "Telangana, which became India's 28th state on 2 June 2014.",
      },
    ],
    related: ["states-of-india-map", "indian-states-by-region-map", "union-territories-map"],
  }),

  defineMap({
    slug: "union-territories-map",
    referenceImage: "union-territories-map.svg",
    title: "Union Territories Map",
    h1: "Union Territories of India Worksheet",
    category: "india",
    emoji: "🏝️",
    gradeBand: "Grades 5–10",
    keywords: [
      "union territories of india worksheet",
      "8 union territories map pdf",
      "label union territories india",
      "ut of india worksheet",
    ],
    intro:
      "Locate and label all 8 union territories of India and their capitals, and learn how a union territory differs from a state.",
    labelPrompt: "Write the name and capital of each numbered union territory.",
    groups: [
      {
        heading: "8 Union Territories (with capitals)",
        items: [
          "Delhi (NCT) — New Delhi",
          "Jammu and Kashmir — Srinagar (summer) / Jammu (winter)",
          "Ladakh — Leh",
          "Chandigarh — Chandigarh",
          "Puducherry — Puducherry",
          "Andaman and Nicobar Islands — Port Blair",
          "Lakshadweep — Kavaratti",
          "Dadra and Nagar Haveli and Daman and Diu — Daman",
        ],
      },
    ],
    clues: [
      { clue: "Union territory that contains the national capital", answer: "Delhi (NCT) — New Delhi" },
      { clue: "Cold, high-altitude UT created in 2019, capital Leh", answer: "Ladakh — Leh" },
      { clue: "Island UT in the Bay of Bengal, capital Port Blair", answer: "Andaman and Nicobar Islands — Port Blair" },
      { clue: "Coral-island UT in the Arabian Sea, capital Kavaratti", answer: "Lakshadweep — Kavaratti" },
      { clue: "Former French colony on the south-east coast", answer: "Puducherry — Puducherry" },
    ],
    facts: [
      "India has 8 union territories.",
      "Jammu & Kashmir and Ladakh became union territories in 2019; Dadra & Nagar Haveli merged with Daman & Diu in 2020.",
      "Delhi, Puducherry and Jammu & Kashmir have their own elected legislatures; the others are run by an administrator.",
      "Lakshadweep is India's smallest union territory by area.",
      "Chandigarh is a UT that also serves as the capital of two states.",
    ],
    faqs: [
      {
        q: "How is a union territory different from a state?",
        a: "A state has its own elected government with wide powers. A union territory is administered by the central government through a Lieutenant Governor or Administrator, though a few also have legislatures.",
      },
      {
        q: "How many union territories are there now?",
        a: "Eight, after the changes of 2019–2020.",
      },
    ],
    related: ["states-of-india-map", "india-political-map", "indian-states-by-region-map"],
  }),

  defineMap({
    slug: "states-and-capitals-of-india-map",
    referenceImage: "states-and-capitals-of-india-map.svg",
    title: "States & Capitals of India",
    h1: "States and Capitals of India Worksheet",
    category: "india",
    emoji: "🏛️",
    gradeBand: "Grades 4–10",
    keywords: [
      "states and capitals of india worksheet",
      "28 states and capitals list pdf",
      "indian states and capitals map",
      "match state to capital india",
    ],
    intro:
      "Match every Indian state to its capital city. The worksheet lists all 28 states with a full answer key — the standard tool for the geography and civics syllabus.",
    labelPrompt: "Write the capital next to each numbered state.",
    groups: [
      {
        heading: "North & West",
        items: [
          "Rajasthan — Jaipur",
          "Punjab — Chandigarh",
          "Haryana — Chandigarh",
          "Himachal Pradesh — Shimla",
          "Uttar Pradesh — Lucknow",
          "Uttarakhand — Dehradun",
          "Gujarat — Gandhinagar",
          "Maharashtra — Mumbai",
          "Goa — Panaji",
        ],
      },
      {
        heading: "Central & East",
        items: [
          "Madhya Pradesh — Bhopal",
          "Chhattisgarh — Raipur",
          "Bihar — Patna",
          "Jharkhand — Ranchi",
          "Odisha — Bhubaneswar",
          "West Bengal — Kolkata",
        ],
      },
      {
        heading: "South",
        items: [
          "Andhra Pradesh — Amaravati",
          "Telangana — Hyderabad",
          "Karnataka — Bengaluru",
          "Kerala — Thiruvananthapuram",
          "Tamil Nadu — Chennai",
        ],
      },
      {
        heading: "North-East",
        items: [
          "Assam — Dispur",
          "Arunachal Pradesh — Itanagar",
          "Nagaland — Kohima",
          "Manipur — Imphal",
          "Mizoram — Aizawl",
          "Tripura — Agartala",
          "Meghalaya — Shillong",
          "Sikkim — Gangtok",
        ],
      },
    ],
    facts: [
      "There are 28 state capitals.",
      "Chandigarh is the capital of both Punjab and Haryana.",
      "Andhra Pradesh's capital is Amaravati, established after Hyderabad was retained by Telangana.",
      "Some states have a summer and winter capital — for example Himachal Pradesh (Shimla / Dharamshala) and J&K.",
      "Dispur, the capital of Assam, is a suburb of the larger city of Guwahati.",
    ],
    faqs: [
      {
        q: "Which Indian city is the capital of two states?",
        a: "Chandigarh — it is the shared capital of Punjab and Haryana, and is itself a union territory.",
      },
      {
        q: "What is the capital of Andhra Pradesh?",
        a: "Amaravati. Hyderabad served as a joint capital for a transition period after Telangana was created in 2014, but it is now the capital of Telangana only.",
      },
    ],
    related: ["states-of-india-map", "india-political-map", "states-and-capitals-map"],
  }),

  defineMap({
    slug: "major-rivers-of-india-map",
    referenceImage: "major-rivers-of-india-map.svg",
    title: "Major Rivers of India",
    h1: "Major Rivers of India Worksheet",
    category: "india",
    emoji: "🏞️",
    gradeBand: "Grades 4–10",
    keywords: [
      "major rivers of india worksheet",
      "rivers of india map pdf",
      "label indian rivers worksheet",
      "himalayan and peninsular rivers map",
      "ganga yamuna brahmaputra godavari map",
    ],
    intro:
      "Label the Himalayan and Peninsular river systems of India — the Ganga, Yamuna, Brahmaputra, Indus, Godavari, Krishna, Narmada and Kaveri — and identify which sea each one flows into.",
    labelPrompt: "Write the name of each numbered river.",
    groups: [
      {
        heading: "Himalayan rivers (perennial)",
        items: ["Indus", "Ganga", "Yamuna", "Brahmaputra", "Sutlej", "Ghaghara", "Kosi"],
      },
      {
        heading: "Peninsular rivers",
        items: ["Godavari", "Krishna", "Kaveri (Cauvery)", "Mahanadi", "Narmada", "Tapi (Tapti)"],
      },
    ],
    clues: [
      { clue: "Longest river in India; sacred to Hindus", answer: "Ganga" },
      { clue: "Longest river of Peninsular India, called the 'Dakshin Ganga'", answer: "Godavari" },
      { clue: "River that flows through a rift valley westward into the Arabian Sea", answer: "Narmada" },
      { clue: "River of Assam that forms a huge braided channel and the island of Majuli", answer: "Brahmaputra" },
      { clue: "Southern river central to a long water dispute between Karnataka and Tamil Nadu", answer: "Kaveri (Cauvery)" },
      { clue: "River after which India is named, now mostly in Pakistan", answer: "Indus" },
    ],
    facts: [
      "Himalayan rivers are perennial (fed by snowmelt); most Peninsular rivers are seasonal (rain-fed).",
      "The Ganga is about 2,525 km long and drains the most populated river basin on Earth.",
      "Most Peninsular rivers flow east into the Bay of Bengal; the Narmada and Tapi flow west into the Arabian Sea.",
      "The Ganga–Brahmaputra delta (the Sundarbans) is the largest delta in the world.",
      "The Godavari, Krishna and Kaveri all rise in the Western Ghats.",
    ],
    faqs: [
      {
        q: "What is the difference between Himalayan and Peninsular rivers?",
        a: "Himalayan rivers begin in glaciers, flow all year, and carve deep gorges. Peninsular rivers begin in low hills, depend on the monsoon, and often run dry in summer.",
      },
      {
        q: "Which Indian rivers flow into the Arabian Sea?",
        a: "The Indus, Narmada, Tapi, Sabarmati, Mahi and the rivers of the Western Ghats' western slopes. Most other large rivers flow east into the Bay of Bengal.",
      },
    ],
    related: ["india-physical-map", "major-rivers-map", "mountain-ranges-of-india-map"],
  }),

  defineMap({
    slug: "mountain-ranges-of-india-map",
    referenceImage: "mountain-ranges-of-india-map.svg",
    title: "Mountain Ranges of India",
    h1: "Mountain Ranges of India Worksheet",
    category: "india",
    emoji: "🏔️",
    gradeBand: "Grades 5–10",
    keywords: [
      "mountain ranges of india worksheet",
      "india mountains map pdf",
      "label himalayas aravalli vindhya satpura",
      "western ghats eastern ghats map",
    ],
    intro:
      "Label the mountain ranges of India — the three parallel Himalayan ranges, the Karakoram, and the older Peninsular ranges: the Aravallis, Vindhyas, Satpuras and the two Ghats.",
    labelPrompt: "Write the name of each numbered range or peak.",
    groups: [
      {
        heading: "Northern (Himalayan) ranges",
        items: [
          "Karakoram Range",
          "Greater Himalaya (Himadri)",
          "Lesser Himalaya (Himachal)",
          "Shivalik (Outer Himalaya)",
          "Purvanchal (North-East hills)",
        ],
      },
      {
        heading: "Peninsular ranges",
        items: ["Aravalli Range", "Vindhya Range", "Satpura Range", "Western Ghats (Sahyadri)", "Eastern Ghats", "Nilgiri Hills"],
      },
      {
        heading: "Notable peaks",
        items: ["Kangchenjunga", "Nanda Devi", "Anai Mudi", "Doda Betta", "Guru Shikhar"],
      },
    ],
    clues: [
      { clue: "Highest range of the Himalayas, with the permanent snow line", answer: "Greater Himalaya (Himadri)" },
      { clue: "One of the oldest fold mountain ranges in the world, in Rajasthan", answer: "Aravalli Range" },
      { clue: "Range along the west coast, a UNESCO biodiversity hotspot", answer: "Western Ghats (Sahyadri)" },
      { clue: "Broken, lower range near the Bay of Bengal coast", answer: "Eastern Ghats" },
      { clue: "Highest peak in India", answer: "Kangchenjunga" },
      { clue: "Highest peak of the Western Ghats and of South India", answer: "Anai Mudi" },
    ],
    facts: [
      "The Himalayas have three parallel ranges: the Greater Himalaya, the Lesser Himalaya and the Shivaliks.",
      "The Aravallis are among the oldest mountains on Earth; Guru Shikhar (Mount Abu) is their highest point.",
      "The Vindhya and Satpura ranges traditionally divide North India from South India.",
      "The Western and Eastern Ghats meet at the Nilgiri Hills.",
      "The Karakoram, in Ladakh, holds K2 and some of the world's largest glaciers outside the poles.",
    ],
    faqs: [
      {
        q: "What are the three ranges of the Himalayas?",
        a: "From north to south: the Greater Himalaya (Himadri), the Lesser Himalaya (Himachal) and the Shivaliks (Outer Himalaya).",
      },
      {
        q: "Which is the highest peak in India?",
        a: "Kangchenjunga (8,586 m) on the Sikkim–Nepal border. Nanda Devi (7,816 m) is the highest peak lying entirely within India.",
      },
    ],
    related: ["india-physical-map", "mountain-ranges-map", "major-mountains-map"],
  }),

  defineMap({
    slug: "indian-states-by-region-map",
    referenceImage: "indian-states-by-region-map.svg",
    title: "Indian States by Region",
    h1: "Indian States by Region Worksheet",
    category: "india",
    emoji: "🧭",
    gradeBand: "Grades 5–10",
    keywords: [
      "indian states by region worksheet",
      "north south east west india map pdf",
      "regions of india worksheet",
      "seven sisters states map",
    ],
    intro:
      "Sort India's states into their regions — North, South, East, West, Central and North-East — and colour-code a regional map.",
    labelPrompt: "Write the region name next to each numbered state.",
    groups: [
      {
        heading: "Northern India",
        items: ["Jammu and Kashmir (UT)", "Ladakh (UT)", "Himachal Pradesh", "Punjab", "Haryana", "Delhi (UT)", "Uttarakhand", "Uttar Pradesh", "Rajasthan"],
      },
      { heading: "Southern India", items: ["Andhra Pradesh", "Telangana", "Karnataka", "Kerala", "Tamil Nadu", "Puducherry (UT)"] },
      { heading: "Eastern India", items: ["Bihar", "Jharkhand", "Odisha", "West Bengal"] },
      { heading: "Western India", items: ["Gujarat", "Maharashtra", "Goa"] },
      { heading: "Central India", items: ["Madhya Pradesh", "Chhattisgarh"] },
      {
        heading: "North-East India (Seven Sisters + Sikkim)",
        items: ["Assam", "Arunachal Pradesh", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Tripura", "Sikkim"],
      },
    ],
    facts: [
      "The seven north-eastern states connected by the narrow Siliguri Corridor are called the 'Seven Sisters'; Sikkim is the 'brother'.",
      "The Siliguri Corridor ('Chicken's Neck') is only about 20 km wide at its narrowest.",
      "Rajasthan is often grouped with the North, sometimes with the West.",
      "South India's states were reorganised on a language basis in 1956.",
      "The zonal councils of India group states into Northern, Central, Eastern, Western, Southern and North-Eastern zones.",
    ],
    faqs: [
      {
        q: "What are the 'Seven Sisters'?",
        a: "The seven north-eastern states: Assam, Arunachal Pradesh, Manipur, Meghalaya, Mizoram, Nagaland and Tripura. Sikkim, added later, is called the 'brother' state.",
      },
      {
        q: "How many regions is India usually divided into?",
        a: "Commonly six: North, South, East, West, Central and North-East — though the exact grouping of border states like Rajasthan varies.",
      },
    ],
    related: ["states-of-india-map", "indian-states-identification-map", "union-territories-map"],
  }),

  defineMap({
    slug: "india-neighbouring-countries-map",
    referenceImage: "india-neighbouring-countries-map.svg",
    title: "India Neighbouring Countries",
    h1: "India and Its Neighbouring Countries Worksheet",
    category: "india",
    emoji: "🤝",
    gradeBand: "Grades 3–9",
    keywords: [
      "india neighbouring countries worksheet",
      "countries bordering india map pdf",
      "label india neighbours worksheet",
      "india land and sea neighbours",
    ],
    intro:
      "Label the seven countries that share a land border with India and the two island nations that are its maritime neighbours, plus the Indian state each land border touches.",
    labelPrompt: "Write the name of each numbered neighbouring country.",
    groups: [
      {
        heading: "Land neighbours (clockwise from the north-west)",
        items: ["Pakistan", "Afghanistan", "China", "Nepal", "Bhutan", "Bangladesh", "Myanmar"],
      },
      { heading: "Maritime neighbours", items: ["Sri Lanka", "Maldives"] },
    ],
    clues: [
      { clue: "India's western neighbour, across the Thar Desert and the Line of Control", answer: "Pakistan" },
      { clue: "Longest land border of India, along the Himalayas", answer: "Bangladesh" },
      { clue: "Small landlocked kingdom between India and China, east of Nepal", answer: "Bhutan" },
      { clue: "Country to the east, sharing borders with Mizoram, Manipur, Nagaland and Arunachal Pradesh", answer: "Myanmar" },
      { clue: "Island nation across the Palk Strait from Tamil Nadu", answer: "Sri Lanka" },
    ],
    facts: [
      "India shares a land border with 7 countries and a maritime boundary with Sri Lanka and the Maldives.",
      "India's longest border is with Bangladesh (~4,097 km); the shortest is with Afghanistan (~106 km, along the disputed PoK).",
      "The India–China border is called the Line of Actual Control (LAC); the India–Pakistan border in Kashmir is the Line of Control (LoC).",
      "Bangladesh is almost entirely surrounded by India.",
      "The Palk Strait and Gulf of Mannar separate India from Sri Lanka.",
    ],
    faqs: [
      {
        q: "How many countries border India?",
        a: "Seven by land — Pakistan, Afghanistan, China, Nepal, Bhutan, Bangladesh and Myanmar — plus Sri Lanka and the Maldives as sea neighbours.",
      },
      {
        q: "Which country has the longest border with India?",
        a: "Bangladesh, at about 4,097 km, followed by China and then Pakistan.",
      },
    ],
    related: ["india-map", "india-political-map", "asia-map"],
  }),

  defineMap({
    slug: "indian-national-parks-map",
    referenceImage: "indian-national-parks-map.svg",
    title: "Indian National Parks",
    h1: "National Parks of India Worksheet",
    category: "india",
    emoji: "🐅",
    gradeBand: "Grades 4–10",
    keywords: [
      "national parks of india worksheet",
      "india national parks map pdf",
      "label indian national parks",
      "kaziranga gir corbett ranthambore map",
    ],
    intro:
      "Locate India's most famous national parks and the state and signature wildlife of each — from Kaziranga's rhinos to Gir's Asiatic lions and the tigers of Ranthambore.",
    labelPrompt: "Write the name of each numbered national park.",
    groups: [
      {
        heading: "Famous national parks (state — known for)",
        items: [
          "Jim Corbett National Park — Uttarakhand — tigers",
          "Kaziranga National Park — Assam — one-horned rhinoceros",
          "Gir National Park — Gujarat — Asiatic lion",
          "Ranthambore National Park — Rajasthan — tigers",
          "Sundarbans National Park — West Bengal — mangrove, Bengal tiger",
          "Kanha National Park — Madhya Pradesh — barasingha, tigers",
          "Bandhavgarh National Park — Madhya Pradesh — tigers",
          "Periyar National Park — Kerala — elephants",
          "Hemis National Park — Ladakh — snow leopard",
          "Nanda Devi National Park — Uttarakhand — alpine wildlife",
        ],
      },
    ],
    clues: [
      { clue: "India's oldest national park (1936), in the Himalayan foothills", answer: "Jim Corbett National Park — Uttarakhand — tigers" },
      { clue: "Home to two-thirds of the world's one-horned rhinos", answer: "Kaziranga National Park — Assam — one-horned rhinoceros" },
      { clue: "The only home of the Asiatic lion", answer: "Gir National Park — Gujarat — Asiatic lion" },
      { clue: "Largest national park in India, high in the cold desert", answer: "Hemis National Park — Ladakh — snow leopard" },
      { clue: "Tiger reserve in a huge mangrove delta shared with Bangladesh", answer: "Sundarbans National Park — West Bengal — mangrove, Bengal tiger" },
    ],
    facts: [
      "India has over 100 national parks and more than 50 tiger reserves.",
      "Jim Corbett, set up in 1936, was the first national park in India (and in Asia).",
      "Project Tiger, launched in 1973, helped bring back India's tiger population.",
      "Kaziranga, Sundarbans, Nanda Devi and the Western Ghats parks are UNESCO World Heritage Sites.",
      "The tiger is India's national animal; the peacock is the national bird.",
    ],
    faqs: [
      {
        q: "What is the difference between a national park and a wildlife sanctuary?",
        a: "A national park has stricter protection — no grazing, private land or human activity is allowed. A wildlife sanctuary allows some regulated human activity, and its boundaries can be adjusted more easily.",
      },
      {
        q: "Which is the oldest national park in India?",
        a: "Jim Corbett National Park in Uttarakhand, established in 1936 (then called Hailey National Park).",
      },
    ],
    related: ["indian-wildlife-sanctuaries-map", "india-physical-map", "biomes-map"],
  }),

  defineMap({
    slug: "indian-wildlife-sanctuaries-map",
    referenceImage: "indian-wildlife-sanctuaries-map.svg",
    title: "Indian Wildlife Sanctuaries",
    h1: "Wildlife Sanctuaries of India Worksheet",
    category: "india",
    emoji: "🦌",
    gradeBand: "Grades 4–10",
    keywords: [
      "wildlife sanctuaries of india worksheet",
      "india wildlife sanctuaries map pdf",
      "bird sanctuaries india worksheet",
      "label indian sanctuaries",
    ],
    intro:
      "Locate important wildlife and bird sanctuaries across India and match each to its state and the species it protects.",
    labelPrompt: "Write the name of each numbered sanctuary.",
    groups: [
      {
        heading: "Wildlife & bird sanctuaries (state — known for)",
        items: [
          "Keoladeo (Bharatpur) Bird Sanctuary — Rajasthan — migratory birds",
          "Chilika (Nalabana) Sanctuary — Odisha — flamingos, Irrawaddy dolphin",
          "Dachigam Sanctuary — Jammu & Kashmir — hangul (Kashmir stag)",
          "Mudumalai Sanctuary — Tamil Nadu — elephants, tigers",
          "Bhitarkanika Sanctuary — Odisha — saltwater crocodile",
          "Nal Sarovar Bird Sanctuary — Gujarat — waterbirds",
          "Vedanthangal Bird Sanctuary — Tamil Nadu — oldest bird sanctuary in India",
          "Dandeli Sanctuary — Karnataka — hornbills, black panther",
        ],
      },
    ],
    clues: [
      { clue: "Former royal duck-hunting reserve, a UNESCO site famous for winter migratory birds", answer: "Keoladeo (Bharatpur) Bird Sanctuary — Rajasthan — migratory birds" },
      { clue: "Sanctuary on India's largest coastal lagoon", answer: "Chilika (Nalabana) Sanctuary — Odisha — flamingos, Irrawaddy dolphin" },
      { clue: "The only home of the hangul, or Kashmir stag", answer: "Dachigam Sanctuary — Jammu & Kashmir — hangul (Kashmir stag)" },
      { clue: "India's oldest bird sanctuary, protected for around 250 years", answer: "Vedanthangal Bird Sanctuary — Tamil Nadu — oldest bird sanctuary in India" },
    ],
    facts: [
      "India has over 550 wildlife sanctuaries covering about 3.7% of its land.",
      "Sanctuaries protect a species or habitat but allow more regulated human use than a national park.",
      "Keoladeo National Park (Bharatpur) began as a wildlife sanctuary and is now a UNESCO World Heritage Site.",
      "Many sanctuaries lie inside larger tiger reserves or biosphere reserves.",
      "A sanctuary can be upgraded to a national park as protection is tightened.",
    ],
    faqs: [
      {
        q: "How is a wildlife sanctuary different from a national park?",
        a: "Sanctuaries focus on protecting particular animals or habitats and permit some human activity like grazing or tourism; national parks ban nearly all human use and have fixed legal boundaries.",
      },
      {
        q: "Which is India's oldest bird sanctuary?",
        a: "Vedanthangal in Tamil Nadu, informally protected by villagers for around 250 years and officially since 1936.",
      },
    ],
    related: ["indian-national-parks-map", "india-physical-map"],
  }),

  defineMap({
    slug: "indian-monsoon-map",
    referenceImage: "indian-monsoon-map.svg",
    title: "Indian Monsoon Map",
    h1: "The Indian Monsoon Worksheet",
    category: "india",
    emoji: "🌧️",
    gradeBand: "Grades 5–10",
    keywords: [
      "indian monsoon worksheet",
      "monsoon map of india pdf",
      "southwest monsoon arabian sea bay of bengal branch",
      "monsoon winds india worksheet",
    ],
    intro:
      "Trace the arrival of the south-west monsoon across India — the Arabian Sea branch and the Bay of Bengal branch — and mark the wettest and driest places.",
    labelPrompt: "Label the monsoon branches, wind arrows and key places on the map.",
    groups: [
      {
        heading: "Monsoon features to label",
        items: [
          "South-West Monsoon (June–September)",
          "Arabian Sea branch",
          "Bay of Bengal branch",
          "North-East (retreating) Monsoon (October–December)",
          "Western Ghats (heavy rain on the windward side)",
          "Mawsynram / Cherrapunji (wettest places)",
          "Thar Desert (driest region)",
          "Tamil Nadu (rain from the retreating monsoon)",
        ],
      },
    ],
    clues: [
      { clue: "Season of heaviest rain, blowing in from the south-west", answer: "South-West Monsoon (June–September)" },
      { clue: "Monsoon branch that strikes the Western Ghats and Mumbai first", answer: "Arabian Sea branch" },
      { clue: "Monsoon branch that travels up the Ganga plain from the east", answer: "Bay of Bengal branch" },
      { clue: "Meghalaya town that is one of the wettest places on Earth", answer: "Mawsynram / Cherrapunji (wettest places)" },
      { clue: "State that gets most of its rain from the retreating monsoon in winter", answer: "Tamil Nadu (rain from the retreating monsoon)" },
    ],
    facts: [
      "'Monsoon' comes from the Arabic mausim, meaning 'season' — winds that reverse direction with the seasons.",
      "The south-west monsoon usually reaches Kerala around 1 June and covers all of India by mid-July.",
      "The Arabian Sea branch and the Bay of Bengal branch together bring about 75% of India's yearly rainfall.",
      "Mawsynram in Meghalaya is the wettest inhabited place on Earth.",
      "A weak monsoon can cause drought; a strong one can cause floods — Indian farming depends heavily on it.",
    ],
    faqs: [
      {
        q: "What are the two branches of the south-west monsoon?",
        a: "The Arabian Sea branch, which brings rain to the west coast and interior, and the Bay of Bengal branch, which brings rain to the north-east and the Ganga plain.",
      },
      {
        q: "Why does Tamil Nadu get rain in winter?",
        a: "It receives most of its rain from the north-east (retreating) monsoon between October and December, when winds pick up moisture over the Bay of Bengal.",
      },
    ],
    related: ["indian-climate-zones-map", "india-physical-map", "climate-zones-map"],
  }),

  defineMap({
    slug: "indian-crops-map",
    referenceImage: "indian-crops-map.svg",
    title: "Indian Crops Map",
    h1: "Agriculture and Crops of India Worksheet",
    category: "india",
    emoji: "🌾",
    gradeBand: "Grades 5–10",
    keywords: [
      "crops of india worksheet",
      "agriculture map of india pdf",
      "rice wheat cotton tea growing regions india",
      "kharif and rabi crops worksheet",
    ],
    intro:
      "Match India's major crops to the states where they are grown — rice in the east and south, wheat in the north-west, cotton on the Deccan, tea in Assam and the Nilgiris.",
    labelPrompt: "Write the crop grown in each numbered region.",
    groups: [
      {
        heading: "Major crops and growing regions",
        items: [
          "Rice — West Bengal, Punjab, Uttar Pradesh, Andhra Pradesh",
          "Wheat — Uttar Pradesh, Punjab, Haryana, Madhya Pradesh",
          "Cotton — Gujarat, Maharashtra, Telangana",
          "Sugarcane — Uttar Pradesh, Maharashtra, Karnataka",
          "Tea — Assam, West Bengal, Tamil Nadu (Nilgiris)",
          "Coffee — Karnataka, Kerala, Tamil Nadu",
          "Jute — West Bengal, Bihar, Assam",
          "Millets (Bajra/Jowar) — Rajasthan, Maharashtra, Karnataka",
        ],
      },
    ],
    clues: [
      { clue: "Staple food grain of eastern and southern India, needs standing water", answer: "Rice — West Bengal, Punjab, Uttar Pradesh, Andhra Pradesh" },
      { clue: "Rabi cereal that dominates the north-western plains", answer: "Wheat — Uttar Pradesh, Punjab, Haryana, Madhya Pradesh" },
      { clue: "Fibre crop grown on the black soil of the Deccan", answer: "Cotton — Gujarat, Maharashtra, Telangana" },
      { clue: "Plantation crop of the hillsides of Assam and the Nilgiris", answer: "Tea — Assam, West Bengal, Tamil Nadu (Nilgiris)" },
      { clue: "'Golden fibre' grown in the humid Ganga–Brahmaputra delta", answer: "Jute — West Bengal, Bihar, Assam" },
    ],
    facts: [
      "Kharif crops (rice, cotton, maize) are sown with the monsoon in June–July and harvested in autumn.",
      "Rabi crops (wheat, gram, mustard) are sown in winter and harvested in spring.",
      "Zaid crops (watermelon, cucumber) grow in the short summer season.",
      "India is the world's largest producer of milk, pulses, jute and spices, and a top producer of rice, wheat, cotton and sugarcane.",
      "The Green Revolution of the 1960s made Punjab and Haryana India's grain bowl.",
    ],
    faqs: [
      {
        q: "What is the difference between Kharif and Rabi crops?",
        a: "Kharif crops are sown at the start of the monsoon (June–July) and harvested after it (September–October). Rabi crops are sown in winter (October–December) and harvested in spring (March–April).",
      },
      {
        q: "Where is tea grown in India?",
        a: "Mainly in Assam and the Darjeeling hills of West Bengal in the north-east, and in the Nilgiri Hills of Tamil Nadu in the south.",
      },
    ],
    related: ["indian-soil-types-map", "indian-climate-zones-map", "india-physical-map"],
  }),

  defineMap({
    slug: "indian-mineral-resources-map",
    referenceImage: "indian-mineral-resources-map.svg",
    title: "Indian Mineral Resources",
    h1: "Mineral Resources of India Worksheet",
    category: "india",
    emoji: "⛏️",
    gradeBand: "Grades 6–10",
    keywords: [
      "mineral resources of india worksheet",
      "minerals map of india pdf",
      "coal iron ore bauxite mica map india",
      "mineral belt chota nagpur plateau",
    ],
    intro:
      "Map India's mineral belts — the Chota Nagpur Plateau's coal and iron, Odisha's bauxite, Rajasthan's copper and mica — and match each mineral to its leading states.",
    labelPrompt: "Write the mineral mined in each numbered region.",
    groups: [
      {
        heading: "Minerals and leading states",
        items: [
          "Coal — Jharkhand, Odisha, Chhattisgarh, West Bengal",
          "Iron ore — Odisha, Chhattisgarh, Jharkhand, Karnataka",
          "Bauxite — Odisha, Gujarat, Jharkhand",
          "Manganese — Odisha, Madhya Pradesh, Maharashtra",
          "Mica — Jharkhand, Rajasthan, Andhra Pradesh",
          "Copper — Rajasthan, Jharkhand, Madhya Pradesh",
          "Petroleum & natural gas — Mumbai High, Gujarat, Assam",
          "Limestone — Rajasthan, Madhya Pradesh, Chhattisgarh",
        ],
      },
    ],
    clues: [
      { clue: "Fossil fuel that powers most of India's electricity; mostly from the Damodar Valley", answer: "Coal — Jharkhand, Odisha, Chhattisgarh, West Bengal" },
      { clue: "Ore smelted into steel; Odisha is the leading producer", answer: "Iron ore — Odisha, Chhattisgarh, Jharkhand, Karnataka" },
      { clue: "Ore of aluminium, mined heavily in Odisha", answer: "Bauxite — Odisha, Gujarat, Jharkhand" },
      { clue: "Offshore oilfield in the Arabian Sea off Maharashtra", answer: "Petroleum & natural gas — Mumbai High, Gujarat, Assam" },
      { clue: "Shiny mineral used as an electrical insulator; India is a top exporter", answer: "Mica — Jharkhand, Rajasthan, Andhra Pradesh" },
    ],
    facts: [
      "The Chota Nagpur Plateau (Jharkhand–Odisha–Chhattisgarh) is called the 'mineral heartland of India'.",
      "India has large reserves of coal, iron ore, bauxite and mica but must import most of its crude oil.",
      "Minerals are grouped as metallic (iron, copper, bauxite), non-metallic (mica, limestone) and energy (coal, petroleum).",
      "Mumbai High, discovered in 1974, is India's largest oil field.",
      "The Kolar Gold Fields in Karnataka were once among the deepest gold mines in the world.",
    ],
    faqs: [
      {
        q: "Where is most of India's coal found?",
        a: "In the Gondwana rock beds of the Damodar Valley — Jharkhand, West Bengal — and in Odisha and Chhattisgarh.",
      },
      {
        q: "Which state leads in iron ore and bauxite?",
        a: "Odisha is the leading producer of both iron ore and bauxite in India.",
      },
    ],
    related: ["indian-industries-map", "india-physical-map", "indian-soil-types-map"],
  }),

  defineMap({
    slug: "indian-industries-map",
    referenceImage: "indian-industries-map.svg",
    title: "Indian Industries Map",
    h1: "Major Industries of India Worksheet",
    category: "india",
    emoji: "🏭",
    gradeBand: "Grades 6–10",
    keywords: [
      "major industries of india worksheet",
      "industrial regions of india map pdf",
      "iron and steel plants india map",
      "cotton textile it hubs india",
    ],
    intro:
      "Locate India's industrial centres — the iron and steel plants of the east, the cotton mills of the west, and the IT hubs of Bengaluru, Hyderabad and Pune.",
    labelPrompt: "Write the industry associated with each numbered city or region.",
    groups: [
      {
        heading: "Iron & steel plants",
        items: [
          "Jamshedpur (TISCO) — Jharkhand",
          "Bhilai — Chhattisgarh",
          "Rourkela — Odisha",
          "Durgapur — West Bengal",
          "Bokaro — Jharkhand",
        ],
      },
      {
        heading: "Cotton textiles",
        items: ["Mumbai — Maharashtra", "Ahmedabad — Gujarat", "Coimbatore — Tamil Nadu"],
      },
      {
        heading: "IT & software hubs",
        items: ["Bengaluru — Karnataka", "Hyderabad — Telangana", "Pune — Maharashtra", "Chennai — Tamil Nadu", "Gurugram / Noida — NCR"],
      },
      {
        heading: "Automobile centres",
        items: ["Chennai ('Detroit of India')", "Pune", "Gurugram", "Sanand — Gujarat"],
      },
    ],
    clues: [
      { clue: "India's first large steel plant, founded by the Tata family in 1907", answer: "Jamshedpur (TISCO) — Jharkhand" },
      { clue: "City nicknamed the 'Silicon Valley of India'", answer: "Bengaluru — Karnataka" },
      { clue: "'Manchester of India' — an old cotton-mill city in Gujarat", answer: "Ahmedabad — Gujarat" },
      { clue: "Southern city called the 'Detroit of India' for car manufacturing", answer: "Chennai ('Detroit of India')" },
      { clue: "Steel plant in Chhattisgarh built with Soviet help in the 1950s", answer: "Bhilai — Chhattisgarh" },
    ],
    facts: [
      "The eastern steel belt (Jharkhand–Odisha–West Bengal–Chhattisgarh) sits close to coal and iron ore.",
      "Cotton textile mills first grew in Mumbai and Ahmedabad, near the cotton-growing Deccan and the ports.",
      "Bengaluru, Hyderabad, Pune, Chennai and the Delhi NCR are India's main IT export hubs.",
      "Mumbai is India's financial capital and home to the Bombay Stock Exchange.",
      "Industries locate near raw materials, power, transport, labour and markets.",
    ],
    faqs: [
      {
        q: "Why is the iron and steel industry concentrated in eastern India?",
        a: "Because coal, iron ore, manganese and limestone — all needed to make steel — are found close together on the Chota Nagpur Plateau, with river water and rail links nearby.",
      },
      {
        q: "Which city is called the Silicon Valley of India?",
        a: "Bengaluru (Bangalore), the centre of India's software and information-technology industry.",
      },
    ],
    related: ["indian-mineral-resources-map", "india-political-map"],
  }),

  defineMap({
    slug: "indian-climate-zones-map",
    referenceImage: "indian-climate-zones-map.svg",
    title: "Indian Climate Zones",
    h1: "Climate Zones of India Worksheet",
    category: "india",
    emoji: "🌡️",
    gradeBand: "Grades 6–10",
    keywords: [
      "climate zones of india worksheet",
      "climate map of india pdf",
      "tropical monsoon climate india worksheet",
      "koppen climate india map",
    ],
    intro:
      "Label India's climate regions — from the tropical wet coast to the arid Thar Desert, the humid subtropical north and the alpine Himalayas — and the four seasons of the Indian year.",
    labelPrompt: "Write the climate type for each numbered region.",
    groups: [
      {
        heading: "Climate regions of India",
        items: [
          "Tropical Wet (Am) — Western Ghats, Kerala, north-east",
          "Tropical Wet and Dry (Aw) — most of the peninsula",
          "Tropical Semi-Arid (BSh) — rain-shadow interior, Deccan",
          "Arid / Desert (BWh) — western Rajasthan (Thar)",
          "Humid Subtropical (Cwa) — Ganga plains, north India",
          "Mountain / Alpine (E) — Himalayas",
        ],
      },
      {
        heading: "Seasons of India",
        items: ["Winter (Dec–Feb)", "Summer / Pre-monsoon (Mar–May)", "South-West Monsoon (Jun–Sep)", "Retreating Monsoon / Post-monsoon (Oct–Nov)"],
      },
    ],
    clues: [
      { clue: "Climate of the Western Ghats coast and the north-east — rain most of the year", answer: "Tropical Wet (Am) — Western Ghats, Kerala, north-east" },
      { clue: "Hot, dry climate of western Rajasthan", answer: "Arid / Desert (BWh) — western Rajasthan (Thar)" },
      { clue: "Climate of the northern plains — hot summers, cool dry winters", answer: "Humid Subtropical (Cwa) — Ganga plains, north India" },
      { clue: "Cold climate with snow, found above about 2,000 m in the Himalayas", answer: "Mountain / Alpine (E) — Himalayas" },
    ],
    facts: [
      "Most of India has a 'tropical monsoon' climate — dominated by the seasonal reversal of winds.",
      "The India Meteorological Department recognises four seasons: winter, summer, monsoon and post-monsoon.",
      "The Himalayas block cold Central Asian winds, keeping northern India warmer than places at the same latitude.",
      "The Thar Desert gets under 250 mm of rain a year; parts of Meghalaya get over 11,000 mm.",
      "Altitude, distance from the sea, and the Western Ghats' rain shadow all shape local climate.",
    ],
    faqs: [
      {
        q: "What type of climate does India have?",
        a: "Broadly a tropical monsoon climate, but it ranges from arid desert in the west to alpine in the Himalayas and tropical wet along the western coast.",
      },
      {
        q: "What are the seasons in India?",
        a: "Winter (December–February), summer (March–May), the south-west monsoon (June–September) and the retreating monsoon or post-monsoon season (October–November).",
      },
    ],
    related: ["indian-monsoon-map", "climate-zones-map", "india-physical-map"],
  }),

  defineMap({
    slug: "indian-soil-types-map",
    referenceImage: "indian-soil-types-map.svg",
    title: "Indian Soil Types",
    h1: "Soil Types of India Worksheet",
    category: "india",
    emoji: "🟤",
    gradeBand: "Grades 6–10",
    keywords: [
      "soil types of india worksheet",
      "soils of india map pdf",
      "alluvial black red laterite soil india",
      "label soil regions india",
    ],
    intro:
      "Map the major soils of India — alluvial soil of the plains, black soil of the Deccan, red soil of the south-east, laterite soil of the hills — and the crops each supports.",
    labelPrompt: "Write the soil type found in each numbered region.",
    groups: [
      {
        heading: "Major soils and where they occur",
        items: [
          "Alluvial Soil — Northern Plains, coastal deltas",
          "Black Soil (Regur) — Deccan Trap: Maharashtra, Gujarat, MP, Telangana",
          "Red and Yellow Soil — eastern & southern peninsula",
          "Laterite Soil — Western Ghats, Eastern Ghats, north-east hills",
          "Arid / Desert Soil — western Rajasthan",
          "Mountain / Forest Soil — Himalayas",
          "Saline / Alkaline Soil — parts of Gujarat, Punjab, coastal areas",
          "Peaty / Marshy Soil — Kerala backwaters, Sundarbans",
        ],
      },
    ],
    clues: [
      { clue: "Most fertile and widespread soil, deposited by rivers in the plains", answer: "Alluvial Soil — Northern Plains, coastal deltas" },
      { clue: "Dark, moisture-retaining soil ideal for cotton, on old lava flows", answer: "Black Soil (Regur) — Deccan Trap: Maharashtra, Gujarat, MP, Telangana" },
      { clue: "Reddish soil coloured by iron, found on the old crystalline rocks of the south-east", answer: "Red and Yellow Soil — eastern & southern peninsula" },
      { clue: "Soil formed by heavy leaching in wet, hilly tropics; used for bricks", answer: "Laterite Soil — Western Ghats, Eastern Ghats, north-east hills" },
    ],
    facts: [
      "Alluvial soil covers about 40% of India's land and feeds most of its people.",
      "Black soil is also called 'regur' and 'cotton soil' because it suits cotton so well.",
      "Laterite gets its name from the Latin 'later', meaning brick — it hardens when dry.",
      "Red soil looks red because of iron oxide, not because it is rich in iron for plants.",
      "Soil forms slowly from weathered rock, plus climate, living things, slope and time.",
    ],
    faqs: [
      {
        q: "Which is the most important soil type in India?",
        a: "Alluvial soil — it is the most fertile and covers the densely farmed Northern Plains and the river deltas.",
      },
      {
        q: "Why is black soil good for cotton?",
        a: "It holds moisture well, is rich in lime, iron and magnesium, and develops deep cracks in the dry season that help air reach the roots — all suited to cotton.",
      },
    ],
    related: ["indian-crops-map", "india-physical-map", "indian-climate-zones-map"],
  }),

  defineMap({
    slug: "indian-historical-places-map",
    referenceImage: "indian-historical-places-map.svg",
    title: "Indian Historical Places",
    h1: "Historical Places of India Worksheet",
    category: "india",
    emoji: "🏛️",
    gradeBand: "Grades 4–10",
    keywords: [
      "historical places of india worksheet",
      "monuments of india map pdf",
      "taj mahal red fort hampi khajuraho map",
      "unesco sites india worksheet",
    ],
    intro:
      "Locate India's famous monuments and heritage sites — the Taj Mahal, Red Fort, Qutub Minar, Hampi, Khajuraho, Konark and the Ajanta and Ellora caves — and match each to its city and state.",
    labelPrompt: "Write the name of the monument at each numbered location.",
    groups: [
      {
        heading: "Monuments (city — state)",
        items: [
          "Taj Mahal — Agra — Uttar Pradesh",
          "Red Fort & Qutub Minar — Delhi",
          "Hawa Mahal & Amber Fort — Jaipur — Rajasthan",
          "Ajanta & Ellora Caves — Aurangabad — Maharashtra",
          "Khajuraho Temples — Khajuraho — Madhya Pradesh",
          "Sanchi Stupa — Sanchi — Madhya Pradesh",
          "Konark Sun Temple — Konark — Odisha",
          "Hampi (Vijayanagara ruins) — Hampi — Karnataka",
          "Group of Monuments at Mahabalipuram — Tamil Nadu",
          "Golden Temple — Amritsar — Punjab",
          "Gateway of India — Mumbai — Maharashtra",
        ],
      },
    ],
    clues: [
      { clue: "White marble mausoleum built by Shah Jahan for Mumtaz Mahal", answer: "Taj Mahal — Agra — Uttar Pradesh" },
      { clue: "Tallest brick minaret in the world, built by the Delhi Sultanate", answer: "Red Fort & Qutub Minar — Delhi" },
      { clue: "Rock-cut Buddhist, Hindu and Jain cave temples in Maharashtra", answer: "Ajanta & Ellora Caves — Aurangabad — Maharashtra" },
      { clue: "13th-century temple in Odisha shaped like a giant stone chariot", answer: "Konark Sun Temple — Konark — Odisha" },
      { clue: "Ruined capital of the Vijayanagara Empire, among boulder hills in Karnataka", answer: "Hampi (Vijayanagara ruins) — Hampi — Karnataka" },
    ],
    facts: [
      "India has over 40 UNESCO World Heritage Sites, cultural and natural.",
      "The Taj Mahal was completed around 1653 and is made of white Makrana marble.",
      "The Ajanta caves date from the 2nd century BCE; the Ellora caves span Buddhist, Hindu and Jain faiths.",
      "The Sanchi Stupa is one of the oldest stone structures in India, begun by Emperor Ashoka.",
      "Hampi was one of the largest and richest cities in the world in the 15th century.",
    ],
    faqs: [
      {
        q: "Where is the Taj Mahal?",
        a: "In Agra, on the bank of the Yamuna River in the state of Uttar Pradesh, northern India.",
      },
      {
        q: "What is the difference between Ajanta and Ellora?",
        a: "Ajanta's caves are older (from around 200 BCE) and mainly Buddhist, famous for their paintings. Ellora's are later (600–1000 CE) and include Buddhist, Hindu and Jain temples, including the huge Kailasa Temple carved from a single rock.",
      },
    ],
    related: ["india-political-map", "world-map"],
  }),
];
