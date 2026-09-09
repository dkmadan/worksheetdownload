import { defineMap } from "../helpers";
import type { MapWorksheet } from "../types";

export const GEOGRAPHY_MAPS: MapWorksheet[] = [
  defineMap({
    slug: "countries-and-capitals-map",
    title: "Countries & Capitals",
    h1: "Countries and Capitals Worksheet",
    category: "geography",
    emoji: "🏙️",
    gradeBand: "Grades 5–12",
    keywords: [
      "countries and capitals worksheet",
      "world capitals map",
      "capital cities quiz pdf",
      "match country to capital",
      "world countries and capitals list",
    ],
    intro:
      "Match major countries to their capital cities, grouped by continent. A world-capitals study sheet with a full answer key for geography bees, MUN prep and general knowledge.",
    labelPrompt: "Write the capital city next to each numbered country.",
    groups: [
      {
        heading: "Europe",
        items: [
          "United Kingdom — London",
          "France — Paris",
          "Germany — Berlin",
          "Italy — Rome",
          "Spain — Madrid",
          "Russia — Moscow",
          "Greece — Athens",
          "Poland — Warsaw",
        ],
      },
      {
        heading: "Asia",
        items: [
          "China — Beijing",
          "India — New Delhi",
          "Japan — Tokyo",
          "Indonesia — Jakarta",
          "Saudi Arabia — Riyadh",
          "Iran — Tehran",
          "Thailand — Bangkok",
          "South Korea — Seoul",
        ],
      },
      {
        heading: "Africa",
        items: [
          "Egypt — Cairo",
          "Nigeria — Abuja",
          "South Africa — Pretoria",
          "Kenya — Nairobi",
          "Ethiopia — Addis Ababa",
          "Morocco — Rabat",
        ],
      },
      {
        heading: "Americas & Oceania",
        items: [
          "United States — Washington, D.C.",
          "Canada — Ottawa",
          "Mexico — Mexico City",
          "Brazil — Brasília",
          "Argentina — Buenos Aires",
          "Australia — Canberra",
        ],
      },
    ],
    facts: [
      "South Africa has three capitals: Pretoria (executive), Cape Town (legislative) and Bloemfontein (judicial).",
      "Brasília and Canberra were both purpose-built as capital cities.",
      "The largest city in a country is often not its capital — e.g. New York, Sydney, Mumbai, Istanbul.",
      "Washington, D.C. is a federal district, not part of any state.",
    ],
    faqs: [
      {
        q: "Why isn't Sydney the capital of Australia?",
        a: "Sydney and Melbourne both wanted the honour, so a new city, Canberra, was built between them in 1913.",
      },
      {
        q: "What is the capital of the United States?",
        a: "Washington, D.C. — the 'D.C.' stands for District of Columbia.",
      },
    ],
    related: ["country-identification-map", "world-map", "states-and-capitals-map"],
  }),

  defineMap({
    slug: "states-and-capitals-map",
    title: "States & Capitals",
    h1: "States and Capitals Worksheet",
    category: "geography",
    emoji: "🏛️",
    gradeBand: "Grades 4–10",
    keywords: [
      "states and capitals worksheet",
      "states and capitals map pdf",
      "us states and capitals",
      "indian states and capitals",
      "match state to capital",
    ],
    intro:
      "Practice state capitals with a combined worksheet: a sample of US states and Indian states with their capitals, plus links to the full 50-state and 28-state sheets and answer keys.",
    labelPrompt: "Write the capital next to each numbered state.",
    groups: [
      {
        heading: "United States (sample)",
        items: [
          "California — Sacramento",
          "Texas — Austin",
          "New York — Albany",
          "Florida — Tallahassee",
          "Illinois — Springfield",
          "Washington — Olympia",
          "Colorado — Denver",
          "Georgia — Atlanta",
        ],
      },
      {
        heading: "India (sample)",
        items: [
          "Maharashtra — Mumbai",
          "Tamil Nadu — Chennai",
          "Karnataka — Bengaluru",
          "West Bengal — Kolkata",
          "Uttar Pradesh — Lucknow",
          "Rajasthan — Jaipur",
          "Gujarat — Gandhinagar",
          "Kerala — Thiruvananthapuram",
        ],
      },
    ],
    facts: [
      "A capital city is where a state or country's government meets — not always its biggest city.",
      "In the USA, only 17 of 50 state capitals are the largest city in their state.",
      "India has 28 state capitals plus capitals for its union territories.",
      "Some Indian states share a capital city — Chandigarh serves both Punjab and Haryana.",
    ],
    faqs: [
      {
        q: "Do any states share a capital?",
        a: "Yes. In India, Chandigarh is the capital of both Punjab and Haryana. Historically some US territories shared capitals before statehood.",
      },
      {
        q: "Where can I get the full list?",
        a: "Use the US States & Capitals worksheet for all 50 and the States & Capitals of India worksheet for all 28.",
      },
    ],
    related: ["us-states-and-capitals-map", "states-and-capitals-of-india-map", "countries-and-capitals-map"],
  }),

  defineMap({
    slug: "major-rivers-map",
    title: "Major Rivers Map",
    h1: "Major Rivers of the World Worksheet",
    category: "geography",
    emoji: "🏞️",
    gradeBand: "Grades 4–10",
    keywords: [
      "major rivers of the world worksheet",
      "world rivers map pdf",
      "label the rivers worksheet",
      "longest rivers map",
      "rivers of the world quiz",
    ],
    intro:
      "Locate and label the great rivers of the world by continent — the Nile, Amazon, Yangtze, Mississippi, Ganges and more. Includes a longest-rivers reference and answer key.",
    labelPrompt: "Write the name of each numbered river.",
    groups: [
      { heading: "Africa", items: ["Nile", "Congo", "Niger", "Zambezi"] },
      { heading: "Asia", items: ["Yangtze", "Yellow River (Huang He)", "Ganges", "Mekong", "Indus", "Ob"] },
      { heading: "Americas", items: ["Amazon", "Mississippi–Missouri", "Paraná", "Colorado"] },
      { heading: "Europe", items: ["Volga", "Danube", "Rhine"] },
    ],
    clues: [
      { clue: "Longest river in the world (about 6,650 km)", answer: "Nile" },
      { clue: "River with the largest discharge of water on Earth", answer: "Amazon" },
      { clue: "Longest river in Asia", answer: "Yangtze" },
      { clue: "Sacred river of northern India", answer: "Ganges" },
      { clue: "Longest river in Europe", answer: "Volga" },
      { clue: "Main river of the central United States", answer: "Mississippi–Missouri" },
    ],
    facts: [
      "The Nile and the Amazon are the two longest rivers; sources disagree on which is #1.",
      "The Amazon carries about 20% of all the river water that reaches the oceans.",
      "A river's mouth is where it ends; its source is where it begins.",
      "The area of land drained by a river is its basin or watershed.",
      "The Danube flows through or borders 10 countries — more than any other river.",
    ],
    faqs: [
      {
        q: "What is the longest river in the world?",
        a: "Traditionally the Nile (~6,650 km), though some measurements put the Amazon slightly longer. Both answers are commonly accepted.",
      },
      {
        q: "What is the difference between a river's source and mouth?",
        a: "The source is where a river starts (often a spring, lake or melting glacier); the mouth is where it empties into a sea, lake or larger river.",
      },
    ],
    related: ["major-mountains-map", "lakes-map", "landforms-map", "major-rivers-of-india-map"],
  }),

  defineMap({
    slug: "major-mountains-map",
    title: "Major Mountains Map",
    h1: "Major Mountains of the World Worksheet",
    category: "geography",
    emoji: "🏔️",
    gradeBand: "Grades 4–10",
    keywords: [
      "major mountains of the world worksheet",
      "world mountains map pdf",
      "highest mountains map",
      "label the mountains worksheet",
      "tallest peaks worksheet",
    ],
    intro:
      "Locate the world's highest and most famous individual peaks — Everest, K2, Kilimanjaro, Denali, Aconcagua and Mont Blanc — and match each to its range and continent.",
    labelPrompt: "Write the name of each numbered mountain.",
    groups: [
      {
        heading: "Highest peak on each continent (the 'Seven Summits')",
        items: [
          "Mount Everest — Asia",
          "Aconcagua — South America",
          "Denali — North America",
          "Mount Kilimanjaro — Africa",
          "Mount Elbrus — Europe",
          "Vinson Massif — Antarctica",
          "Puncak Jaya — Oceania",
        ],
      },
      {
        heading: "Other famous peaks",
        items: ["K2", "Kangchenjunga", "Matterhorn", "Mont Blanc", "Mount Fuji", "Mauna Kea"],
      },
    ],
    clues: [
      { clue: "Highest mountain above sea level (8,849 m)", answer: "Mount Everest — Asia" },
      { clue: "Second-highest mountain on Earth, on the China–Pakistan border", answer: "K2" },
      { clue: "Highest peak in the Americas, in the Argentine Andes", answer: "Aconcagua — South America" },
      { clue: "Highest free-standing mountain in the world, in Tanzania", answer: "Mount Kilimanjaro — Africa" },
      { clue: "Highest peak in the Alps", answer: "Mont Blanc" },
      { clue: "Measured base-to-peak, the tallest mountain on Earth (Hawaii)", answer: "Mauna Kea" },
    ],
    facts: [
      "Mount Everest (8,849 m) is the highest point above sea level.",
      "Mauna Kea is taller than Everest measured from its base on the ocean floor.",
      "Chimborazo in Ecuador is the point farthest from Earth's centre, because Earth bulges at the Equator.",
      "The 'Seven Summits' are the highest peaks of each continent.",
      "Fourteen mountains rise above 8,000 m — all in the Himalayas and Karakoram.",
    ],
    faqs: [
      {
        q: "What is the tallest mountain in the world?",
        a: "It depends how you measure. Highest above sea level: Everest. Tallest base to summit: Mauna Kea. Farthest from Earth's centre: Chimborazo.",
      },
      {
        q: "What is the difference between a mountain and a mountain range?",
        a: "A mountain is a single peak; a range is a connected chain of mountains formed by the same geological process, like the Himalayas or the Andes.",
      },
    ],
    related: ["mountain-ranges-map", "major-rivers-map", "volcanoes-map", "mountain-ranges-of-india-map"],
  }),

  defineMap({
    slug: "mountain-ranges-map",
    title: "Mountain Ranges Map",
    h1: "Mountain Ranges of the World Worksheet",
    category: "geography",
    emoji: "⛰️",
    gradeBand: "Grades 4–10",
    keywords: [
      "mountain ranges of the world worksheet",
      "world mountain ranges map pdf",
      "label the mountain ranges",
      "himalayas andes rockies map",
    ],
    intro:
      "Label the great mountain ranges — the Himalayas, Andes, Rockies, Alps, Atlas, Urals and more — and match each range to its continent.",
    labelPrompt: "Write the name of each numbered mountain range.",
    groups: [
      {
        heading: "Ranges by continent",
        items: [
          "Himalayas — Asia",
          "Andes — South America",
          "Rocky Mountains — North America",
          "Appalachian Mountains — North America",
          "Alps — Europe",
          "Pyrenees — Europe",
          "Ural Mountains — Europe/Asia",
          "Atlas Mountains — Africa",
          "Great Dividing Range — Australia",
          "Transantarctic Mountains — Antarctica",
        ],
      },
    ],
    clues: [
      { clue: "Longest mountain range on land (~7,000 km)", answer: "Andes — South America" },
      { clue: "Highest mountain range, containing Everest and K2", answer: "Himalayas — Asia" },
      { clue: "Range that forms the Europe–Asia boundary", answer: "Ural Mountains — Europe/Asia" },
      { clue: "Range separating France and Spain", answer: "Pyrenees — Europe" },
      { clue: "Old, eroded range in the eastern United States", answer: "Appalachian Mountains — North America" },
      { clue: "Range along the north-western edge of Africa", answer: "Atlas Mountains — Africa" },
    ],
    facts: [
      "The Andes are the longest continental range; the Mid-Ocean Ridge under the sea is far longer still.",
      "The Himalayas are still rising as the Indian Plate pushes into Asia.",
      "The Appalachians are among the oldest mountains on Earth, once as high as the Alps.",
      "Ranges usually form at the boundaries where tectonic plates collide.",
      "The Ural Mountains are low and worn, yet mark a continental divide.",
    ],
    faqs: [
      {
        q: "How do mountain ranges form?",
        a: "Most form where two tectonic plates push together, folding and lifting the crust. Some form from volcanic activity or from blocks of crust being uplifted along faults.",
      },
      {
        q: "Which is the longest mountain range?",
        a: "On land, the Andes (~7,000 km). Overall, the underwater Mid-Ocean Ridge system, at over 65,000 km.",
      },
    ],
    related: ["major-mountains-map", "tectonic-plates-map", "volcanoes-map"],
  }),

  defineMap({
    slug: "deserts-map",
    title: "Deserts Map",
    h1: "Deserts of the World Worksheet",
    category: "geography",
    emoji: "🏜️",
    gradeBand: "Grades 4–10",
    keywords: [
      "deserts of the world worksheet",
      "world deserts map pdf",
      "label the deserts worksheet",
      "sahara gobi kalahari map",
      "hot and cold deserts map",
    ],
    intro:
      "Locate the world's great deserts — hot deserts like the Sahara and Arabian, and cold deserts like the Gobi and Antarctic. Match each desert to its continent.",
    labelPrompt: "Write the name of each numbered desert.",
    groups: [
      {
        heading: "Deserts by continent",
        items: [
          "Sahara Desert — Africa",
          "Kalahari Desert — Africa",
          "Namib Desert — Africa",
          "Arabian Desert — Asia",
          "Gobi Desert — Asia",
          "Thar Desert — Asia",
          "Great Victoria Desert — Australia",
          "Atacama Desert — South America",
          "Mojave Desert — North America",
          "Antarctic Desert — Antarctica",
        ],
      },
    ],
    clues: [
      { clue: "Largest hot desert in the world", answer: "Sahara Desert — Africa" },
      { clue: "Largest desert of any kind (a cold polar desert)", answer: "Antarctic Desert — Antarctica" },
      { clue: "Driest place on Earth outside the poles", answer: "Atacama Desert — South America" },
      { clue: "Cold desert of Mongolia and northern China", answer: "Gobi Desert — Asia" },
      { clue: "Desert between India and Pakistan", answer: "Thar Desert — Asia" },
      { clue: "Coastal desert of south-western Africa", answer: "Namib Desert — Africa" },
    ],
    facts: [
      "A desert is defined by dryness — under 250 mm of precipitation a year — not by heat or sand.",
      "The largest desert on Earth is Antarctica; the largest hot desert is the Sahara.",
      "Only about 20% of the Sahara is sand; the rest is rock, gravel and salt flats.",
      "The Atacama has places where no rain has ever been recorded.",
      "Deserts cover roughly one-third of Earth's land surface.",
    ],
    faqs: [
      {
        q: "What makes a place a desert?",
        a: "Very low precipitation — generally less than 250 mm (10 inches) per year — so that evaporation exceeds rainfall.",
      },
      {
        q: "Is Antarctica really a desert?",
        a: "Yes. Its interior gets less precipitation than the Sahara, which makes it the world's largest cold desert.",
      },
    ],
    related: ["climate-zones-map", "biomes-map", "sahara-desert-map"],
  }),

  defineMap({
    slug: "lakes-map",
    title: "Lakes Map",
    h1: "Major Lakes of the World Worksheet",
    category: "geography",
    emoji: "💧",
    gradeBand: "Grades 4–10",
    keywords: [
      "major lakes of the world worksheet",
      "world lakes map pdf",
      "label the lakes worksheet",
      "great lakes caspian sea map",
      "largest lakes map",
    ],
    intro:
      "Locate the largest and deepest lakes in the world — the Caspian Sea, the Great Lakes, Lake Baikal, Lake Victoria and Lake Titicaca — and match each to its continent.",
    labelPrompt: "Write the name of each numbered lake.",
    groups: [
      {
        heading: "Largest lakes",
        items: [
          "Caspian Sea — Asia/Europe",
          "Lake Superior — North America",
          "Lake Victoria — Africa",
          "Lake Huron — North America",
          "Lake Michigan — North America",
          "Lake Tanganyika — Africa",
          "Lake Baikal — Asia",
        ],
      },
      {
        heading: "Other notable lakes",
        items: ["Lake Titicaca — South America", "Great Salt Lake — North America", "Dead Sea — Asia", "Lake Eyre — Australia"],
      },
    ],
    clues: [
      { clue: "World's largest lake (a salt lake sometimes called a sea)", answer: "Caspian Sea — Asia/Europe" },
      { clue: "World's deepest and oldest freshwater lake, in Siberia", answer: "Lake Baikal — Asia" },
      { clue: "Largest freshwater lake by surface area", answer: "Lake Superior — North America" },
      { clue: "Africa's largest lake, source of the White Nile", answer: "Lake Victoria — Africa" },
      { clue: "Salt lake so dense that swimmers float easily", answer: "Dead Sea — Asia" },
      { clue: "Highest large navigable lake, on the Peru–Bolivia border", answer: "Lake Titicaca — South America" },
    ],
    facts: [
      "Lake Baikal holds about 20% of the world's unfrozen fresh surface water.",
      "The Great Lakes together form the largest group of freshwater lakes on Earth.",
      "The Caspian Sea is a lake because it is fully enclosed by land.",
      "The Dead Sea shore is the lowest land on Earth, about 430 m below sea level.",
      "A lake fed and drained by rivers stays fresh; one with no outlet often turns salty.",
    ],
    faqs: [
      {
        q: "Why is the Caspian Sea called a sea if it's a lake?",
        a: "It is huge, salty and was once connected to the ocean, so people named it a sea. Because it is now entirely landlocked, geographers classify it as the world's largest lake.",
      },
      {
        q: "What are the five Great Lakes?",
        a: "Superior, Michigan, Huron, Erie and Ontario — remembered by the word 'HOMES'.",
      },
    ],
    related: ["major-rivers-map", "great-lakes-map", "seas-and-gulfs-map"],
  }),

  defineMap({
    slug: "islands-map",
    title: "Islands Map",
    h1: "Major Islands of the World Worksheet",
    category: "geography",
    emoji: "🏝️",
    gradeBand: "Grades 4–10",
    keywords: [
      "major islands of the world worksheet",
      "world islands map pdf",
      "label the islands worksheet",
      "largest islands map",
      "greenland madagascar borneo map",
    ],
    intro:
      "Locate the world's largest islands — Greenland, New Guinea, Borneo, Madagascar and Great Britain — and match each to its ocean and continent.",
    labelPrompt: "Write the name of each numbered island.",
    groups: [
      {
        heading: "Largest islands",
        items: [
          "Greenland",
          "New Guinea",
          "Borneo",
          "Madagascar",
          "Baffin Island",
          "Sumatra",
          "Honshu",
          "Great Britain",
          "Sri Lanka",
          "Iceland",
        ],
      },
    ],
    clues: [
      { clue: "World's largest island (Australia is counted as a continent, not an island)", answer: "Greenland" },
      { clue: "Island shared by Indonesia and Papua New Guinea", answer: "New Guinea" },
      { clue: "Large island off the south-east coast of Africa", answer: "Madagascar" },
      { clue: "Largest of the Japanese islands, home to Tokyo", answer: "Honshu" },
      { clue: "Island nation just south of India", answer: "Sri Lanka" },
      { clue: "Volcanic island nation between Greenland and Norway", answer: "Iceland" },
    ],
    facts: [
      "Greenland is the largest island; Australia is larger but is classed as a continent.",
      "An archipelago is a chain or cluster of islands, like Indonesia, Japan or the Philippines.",
      "Indonesia has more than 17,000 islands — the most of any country.",
      "Islands form from volcanoes, coral, rising sea levels, or pieces of continents breaking away.",
      "Madagascar broke away from Africa around 165 million years ago and has unique wildlife.",
    ],
    faqs: [
      {
        q: "Why isn't Australia the world's largest island?",
        a: "By size it would be, but geographers classify Australia as a continent, so Greenland is called the largest island.",
      },
      {
        q: "What is an archipelago?",
        a: "A group of islands scattered in a sea or ocean, such as the Caribbean, the Philippines or the Greek islands.",
      },
    ],
    related: ["peninsulas-map", "volcanoes-map", "oceans-map", "caribbean-map"],
  }),

  defineMap({
    slug: "seas-and-gulfs-map",
    title: "Seas & Gulfs Map",
    h1: "Seas, Gulfs and Bays Worksheet",
    category: "geography",
    emoji: "⚓",
    gradeBand: "Grades 5–10",
    keywords: [
      "seas and gulfs worksheet",
      "world seas map pdf",
      "label the seas and bays",
      "mediterranean caribbean gulf of mexico map",
    ],
    intro:
      "Label the world's important seas, gulfs and bays — the Mediterranean, Caribbean, Gulf of Mexico, Persian Gulf, Bay of Bengal and more — and connect each to the ocean it belongs to.",
    labelPrompt: "Write the name of each numbered sea, gulf or bay.",
    groups: [
      {
        heading: "Seas",
        items: ["Mediterranean Sea", "Caribbean Sea", "South China Sea", "Red Sea", "Black Sea", "North Sea", "Arabian Sea"],
      },
      {
        heading: "Gulfs & Bays",
        items: ["Gulf of Mexico", "Persian Gulf", "Bay of Bengal", "Hudson Bay", "Gulf of Guinea", "Bay of Biscay"],
      },
    ],
    clues: [
      { clue: "Sea between Europe, Africa and the Middle East", answer: "Mediterranean Sea" },
      { clue: "Oil-rich gulf between Arabia and Iran", answer: "Persian Gulf" },
      { clue: "Large gulf bordered by the USA and Mexico", answer: "Gulf of Mexico" },
      { clue: "Narrow sea separating Africa from the Arabian Peninsula", answer: "Red Sea" },
      { clue: "Huge bay in northern Canada", answer: "Hudson Bay" },
      { clue: "Arm of the Indian Ocean east of India", answer: "Bay of Bengal" },
    ],
    facts: [
      "A gulf is a large area of ocean partly enclosed by land — usually bigger than a bay.",
      "The Mediterranean connects to the Atlantic through the narrow Strait of Gibraltar.",
      "The Red Sea sits over a spreading boundary where Africa and Arabia are slowly pulling apart.",
      "The Sargasso Sea, in the Atlantic, is the only sea with no land borders.",
      "The Persian Gulf carries a large share of the world's oil shipping.",
    ],
    faqs: [
      {
        q: "What is the difference between a gulf and a bay?",
        a: "Both are parts of an ocean or sea reaching into land. A gulf is generally larger and more enclosed with a narrower opening; a bay is smaller and more open. The terms overlap in everyday use.",
      },
      {
        q: "What is a strait?",
        a: "A narrow channel of water connecting two larger bodies of water, such as the Strait of Gibraltar or the Strait of Malacca.",
      },
    ],
    related: ["oceans-map", "peninsulas-map", "bodies-of-water-map"],
  }),

  defineMap({
    slug: "peninsulas-map",
    title: "Peninsulas Map",
    h1: "Peninsulas of the World Worksheet",
    category: "geography",
    emoji: "🗾",
    gradeBand: "Grades 5–10",
    keywords: [
      "peninsulas of the world worksheet",
      "world peninsulas map pdf",
      "label the peninsulas",
      "iberian arabian scandinavian peninsula map",
    ],
    intro:
      "Locate the great peninsulas — the Arabian, Iberian, Scandinavian, Indian, Korean and Italian peninsulas — and describe the seas that surround each one.",
    labelPrompt: "Write the name of each numbered peninsula.",
    groups: [
      {
        heading: "Major peninsulas",
        items: [
          "Arabian Peninsula",
          "Iberian Peninsula",
          "Scandinavian Peninsula",
          "Indian (Deccan) Peninsula",
          "Korean Peninsula",
          "Italian Peninsula",
          "Balkan Peninsula",
          "Anatolian Peninsula",
          "Florida Peninsula",
          "Baja California Peninsula",
        ],
      },
    ],
    clues: [
      { clue: "Largest peninsula in the world", answer: "Arabian Peninsula" },
      { clue: "Peninsula shared by Spain and Portugal", answer: "Iberian Peninsula" },
      { clue: "Peninsula shared by Norway and Sweden", answer: "Scandinavian Peninsula" },
      { clue: "Peninsula divided into two countries at the 38th parallel", answer: "Korean Peninsula" },
      { clue: "Boot-shaped peninsula in southern Europe", answer: "Italian Peninsula" },
      { clue: "Long peninsula forming the south-eastern United States", answer: "Florida Peninsula" },
    ],
    facts: [
      "A peninsula is land almost surrounded by water but still joined to a larger landmass.",
      "The word comes from Latin: paene ('almost') + insula ('island').",
      "The Arabian Peninsula is about the size of India.",
      "An isthmus is the opposite idea — a narrow strip of land joining two larger areas.",
      "The Deccan Peninsula makes up most of southern India.",
    ],
    faqs: [
      {
        q: "What is a peninsula?",
        a: "A piece of land that sticks out into a sea or lake and is surrounded by water on three sides, while remaining connected to the mainland.",
      },
      {
        q: "Is a cape the same as a peninsula?",
        a: "A cape is a pointed piece of land jutting into water — usually the tip of a peninsula, and generally smaller.",
      },
    ],
    related: ["islands-map", "seas-and-gulfs-map", "landforms-map"],
  }),

  defineMap({
    slug: "volcanoes-map",
    title: "Volcanoes Map",
    h1: "Volcanoes and the Ring of Fire Worksheet",
    category: "geography",
    emoji: "🌋",
    gradeBand: "Grades 4–10",
    keywords: [
      "volcanoes map worksheet",
      "ring of fire map pdf",
      "label famous volcanoes worksheet",
      "world volcanoes map",
      "plate boundaries volcanoes",
    ],
    intro:
      "Locate famous volcanoes and trace the Pacific 'Ring of Fire'. Students connect volcano locations to tectonic plate boundaries and identify each volcano's country.",
    labelPrompt: "Write the name of each numbered volcano or feature.",
    groups: [
      {
        heading: "Famous volcanoes",
        items: [
          "Mount Fuji — Japan",
          "Mount Vesuvius — Italy",
          "Mount Etna — Italy",
          "Krakatoa — Indonesia",
          "Mount St. Helens — USA",
          "Mauna Loa — USA (Hawaii)",
          "Mount Kilimanjaro — Tanzania",
          "Popocatépetl — Mexico",
          "Eyjafjallajökull — Iceland",
        ],
      },
      { heading: "Feature", items: ["Pacific Ring of Fire"] },
    ],
    clues: [
      { clue: "Belt of volcanoes and earthquakes around the Pacific Ocean", answer: "Pacific Ring of Fire" },
      { clue: "Volcano that destroyed the Roman city of Pompeii in 79 CE", answer: "Mount Vesuvius — Italy" },
      { clue: "Iconic snow-capped volcano near Tokyo", answer: "Mount Fuji — Japan" },
      { clue: "1883 eruption in Indonesia heard thousands of kilometres away", answer: "Krakatoa — Indonesia" },
      { clue: "Volcano that erupted in Washington State in 1980", answer: "Mount St. Helens — USA" },
      { clue: "One of the world's largest active volcanoes, in Hawaii", answer: "Mauna Loa — USA (Hawaii)" },
    ],
    facts: [
      "About 75% of the world's active volcanoes lie along the Pacific Ring of Fire.",
      "Most volcanoes form at plate boundaries where crust is created or destroyed.",
      "Hotspot volcanoes, like Hawaii's, form away from plate edges over rising plumes of magma.",
      "There are roughly 1,350 potentially active volcanoes on Earth.",
      "Shield volcanoes are wide and gently sloped; stratovolcanoes are steep and cone-shaped.",
    ],
    faqs: [
      {
        q: "What is the Ring of Fire?",
        a: "A roughly 40,000 km horseshoe around the Pacific Ocean where many tectonic plates meet, producing about 90% of the world's earthquakes and most of its volcanoes.",
      },
      {
        q: "Why does Hawaii have volcanoes if it isn't on a plate boundary?",
        a: "Hawaii sits over a 'hotspot' — a fixed plume of hot rock rising from deep in the mantle that melts through the middle of the Pacific Plate.",
      },
    ],
    related: ["tectonic-plates-map", "mountain-ranges-map", "major-mountains-map"],
  }),

  defineMap({
    slug: "rainforest-map",
    title: "Rainforest Map",
    h1: "Rainforests of the World Worksheet",
    category: "geography",
    emoji: "🌴",
    gradeBand: "Grades 3–9",
    keywords: [
      "rainforests of the world worksheet",
      "tropical rainforest map pdf",
      "amazon congo rainforest map",
      "label the rainforests worksheet",
    ],
    intro:
      "Locate the world's tropical rainforests — the Amazon, Congo, Southeast Asian and Daintree — and see how they cluster in a band around the Equator.",
    labelPrompt: "Write the name of each numbered rainforest.",
    groups: [
      {
        heading: "Tropical rainforests",
        items: [
          "Amazon Rainforest — South America",
          "Congo Rainforest — Africa",
          "Southeast Asian Rainforest — Asia",
          "Daintree Rainforest — Australia",
          "Valdivian Rainforest — South America",
          "New Guinea Rainforest — Oceania",
        ],
      },
    ],
    clues: [
      { clue: "The largest rainforest in the world, mostly in Brazil", answer: "Amazon Rainforest — South America" },
      { clue: "The second-largest rainforest, in central Africa", answer: "Congo Rainforest — Africa" },
      { clue: "Ancient rainforest in north-eastern Australia", answer: "Daintree Rainforest — Australia" },
      { clue: "Rainforest region spread across Indonesia, Malaysia and Borneo", answer: "Southeast Asian Rainforest — Asia" },
    ],
    facts: [
      "Tropical rainforests grow in a belt roughly between the Tropics of Cancer and Capricorn.",
      "The Amazon produces a large share of the world's oxygen and stores huge amounts of carbon.",
      "Rainforests cover about 6% of Earth's land but hold more than half of all plant and animal species.",
      "A rainforest has four layers: emergent, canopy, understory and forest floor.",
      "Temperate rainforests, like those in the Pacific Northwest, are cooler and wetter than tropical ones.",
    ],
    faqs: [
      {
        q: "Where are rainforests found?",
        a: "Mostly near the Equator in South America, central Africa and Southeast Asia, where it is warm and wet all year. Cooler temperate rainforests grow along some mid-latitude coasts.",
      },
      {
        q: "Why are rainforests important?",
        a: "They regulate climate, store carbon, produce oxygen, hold most of Earth's biodiversity and are home to hundreds of Indigenous peoples.",
      },
    ],
    related: ["biomes-map", "climate-zones-map", "amazon-rainforest-map", "equator-map"],
  }),

  defineMap({
    slug: "climate-zones-map",
    title: "Climate Zones Map",
    h1: "World Climate Zones Worksheet",
    category: "geography",
    emoji: "🌦️",
    diagram: "climate-zones",
    gradeBand: "Grades 4–10",
    keywords: [
      "climate zones worksheet",
      "world climate zones map pdf",
      "tropical temperate polar zones worksheet",
      "label the climate zones",
    ],
    intro:
      "Label the three great climate zones — tropical, temperate and polar — and the key latitude lines that separate them. The diagram shows how climate changes with distance from the Equator.",
    labelPrompt: "Label each climate zone and boundary line on the diagram.",
    groups: [
      {
        heading: "Climate zones (pole to pole)",
        items: [
          "North Polar (Frigid) Zone",
          "Northern Temperate Zone",
          "Tropical (Torrid) Zone",
          "Southern Temperate Zone",
          "South Polar (Frigid) Zone",
        ],
      },
      {
        heading: "Boundary lines",
        items: ["Arctic Circle", "Tropic of Cancer", "Equator", "Tropic of Capricorn", "Antarctic Circle"],
      },
    ],
    clues: [
      { clue: "Hot zone between the two tropics, where the Sun is directly overhead twice a year", answer: "Tropical (Torrid) Zone" },
      { clue: "Mild zone between a tropic and a polar circle — where most people live", answer: "Northern Temperate Zone" },
      { clue: "Cold zone poleward of 66.5° where the Sun never sets in summer or rises in winter", answer: "North Polar (Frigid) Zone" },
      { clue: "Line of latitude at 23.5° north", answer: "Tropic of Cancer" },
      { clue: "Line of latitude at 66.5° south", answer: "Antarctic Circle" },
    ],
    facts: [
      "The three broad zones are tropical (0°–23.5°), temperate (23.5°–66.5°) and polar (66.5°–90°).",
      "The Köppen system splits these into five main types: A tropical, B dry, C temperate, D continental, E polar.",
      "Climate depends on latitude, altitude, distance from the sea, ocean currents and prevailing winds.",
      "Weather is what happens day to day; climate is the average of weather over about 30 years.",
      "The tropics get the most direct sunlight all year, so they stay warm.",
    ],
    faqs: [
      {
        q: "What are the three main climate zones?",
        a: "Tropical (near the Equator, hot all year), temperate (in the middle latitudes, with four seasons) and polar (near the poles, cold all year).",
      },
      {
        q: "What is the difference between weather and climate?",
        a: "Weather is the atmosphere's condition right now or over a few days. Climate is the long-term pattern of weather for a place, usually averaged over 30 years.",
      },
    ],
    related: ["latitude-and-longitude-map", "tropics-map", "biomes-map", "polar-circles-map"],
  }),

  defineMap({
    slug: "time-zones-map",
    title: "Time Zones Map",
    h1: "World Time Zones Worksheet",
    category: "geography",
    emoji: "🕒",
    diagram: "time-zones",
    gradeBand: "Grades 5–10",
    keywords: [
      "time zones worksheet",
      "world time zones map pdf",
      "gmt utc time zones worksheet",
      "international date line worksheet",
      "label the time zones",
    ],
    intro:
      "Learn how the world is divided into 24 time zones, each about 15° of longitude wide, measured from the Prime Meridian. The diagram lets students label key meridians and calculate time differences.",
    labelPrompt: "Label the meridians and time-zone markers on the diagram.",
    groups: [
      {
        heading: "Key lines & references",
        items: [
          "Prime Meridian (0°)",
          "International Date Line (~180°)",
          "UTC / GMT",
          "Tropic of Cancer",
          "Equator",
        ],
      },
      {
        heading: "Sample zone offsets",
        items: [
          "London — UTC+0",
          "New York — UTC−5",
          "Los Angeles — UTC−8",
          "New Delhi — UTC+5:30",
          "Tokyo — UTC+9",
          "Sydney — UTC+10",
        ],
      },
    ],
    clues: [
      { clue: "The 0° line of longitude that time is measured from", answer: "Prime Meridian (0°)" },
      { clue: "The line near 180° where the date changes by a day", answer: "International Date Line (~180°)" },
      { clue: "The modern world time standard, based on atomic clocks", answer: "UTC / GMT" },
      { clue: "Time zone of India, offset by an unusual half hour", answer: "New Delhi — UTC+5:30" },
      { clue: "Roughly how many degrees of longitude each time zone spans", answer: "UTC / GMT" },
    ],
    facts: [
      "Earth turns 360° in 24 hours, so it moves 15° of longitude each hour.",
      "There are 24 standard time zones, but political borders create around 38 in practice.",
      "India, Iran, Nepal and parts of Australia use half-hour or 45-minute offsets.",
      "Crossing the International Date Line westward adds a day; eastward subtracts one.",
      "China spans five geographic zones but officially uses just one, Beijing time.",
    ],
    faqs: [
      {
        q: "Why are there time zones?",
        a: "So that clocks roughly match the Sun's position everywhere — noon is near midday. Before railways and telegraphs, every town kept its own local time.",
      },
      {
        q: "What is UTC?",
        a: "Coordinated Universal Time — the global reference clock kept at the Prime Meridian. Every time zone is written as an offset from UTC, such as UTC−5 or UTC+9.",
      },
    ],
    related: ["prime-meridian-map", "latitude-and-longitude-map", "longitude-map"],
  }),

  defineMap({
    slug: "tropics-map",
    title: "Tropic of Cancer & Capricorn",
    h1: "Tropic of Cancer and Capricorn Worksheet",
    category: "geography",
    emoji: "☀️",
    diagram: "tropics",
    gradeBand: "Grades 4–9",
    keywords: [
      "tropic of cancer and capricorn worksheet",
      "tropics map pdf",
      "label the tropics worksheet",
      "tropic of cancer latitude worksheet",
    ],
    intro:
      "Label the Equator, the Tropic of Cancer (23.5°N) and the Tropic of Capricorn (23.5°S), and mark the tropical zone between them where the Sun can be directly overhead.",
    labelPrompt: "Label each line and zone on the diagram.",
    groups: [
      {
        heading: "Lines & zones",
        items: [
          "Tropic of Cancer (23.5°N)",
          "Equator (0°)",
          "Tropic of Capricorn (23.5°S)",
          "Tropical Zone (between the tropics)",
          "Northern Hemisphere",
          "Southern Hemisphere",
        ],
      },
    ],
    clues: [
      { clue: "Line of latitude 23.5° north of the Equator", answer: "Tropic of Cancer (23.5°N)" },
      { clue: "Line of latitude 23.5° south of the Equator", answer: "Tropic of Capricorn (23.5°S)" },
      { clue: "0° line halfway between the poles", answer: "Equator (0°)" },
      { clue: "The warm region between the two tropics", answer: "Tropical Zone (between the tropics)" },
    ],
    facts: [
      "The tropics sit at 23.5° because that is the tilt of Earth's axis.",
      "On the June solstice the Sun is directly over the Tropic of Cancer; on the December solstice, over the Tropic of Capricorn.",
      "Between the tropics the Sun is overhead at noon twice a year.",
      "The Tropic of Cancer crosses through Mexico, the Sahara, India and southern China.",
      "The Tropic of Capricorn crosses Brazil, southern Africa and Australia.",
    ],
    faqs: [
      {
        q: "Why are they at 23.5 degrees?",
        a: "Because Earth's axis is tilted 23.5° from vertical. That tilt sets the farthest north and south the Sun can appear directly overhead.",
      },
      {
        q: "Why are they named after Cancer and Capricorn?",
        a: "Thousands of years ago the Sun appeared in the constellation Cancer at the June solstice and Capricorn at the December solstice. The names stuck even though the alignment has since shifted.",
      },
    ],
    related: ["equator-map", "climate-zones-map", "latitude-and-longitude-map", "polar-circles-map"],
  }),

  defineMap({
    slug: "equator-map",
    title: "Equator Map",
    h1: "The Equator Worksheet",
    category: "geography",
    emoji: "🌐",
    diagram: "equator",
    gradeBand: "Grades 3–8",
    keywords: [
      "equator worksheet",
      "equator map pdf",
      "label the equator worksheet",
      "countries on the equator worksheet",
      "0 degrees latitude worksheet",
    ],
    intro:
      "Find the Equator — 0° latitude — and label the continents and countries it passes through. The diagram shows how the Equator splits Earth into the Northern and Southern Hemispheres.",
    labelPrompt: "Label the Equator, the hemispheres and the landmasses it crosses.",
    groups: [
      {
        heading: "On the diagram",
        items: ["Equator (0° latitude)", "Northern Hemisphere", "Southern Hemisphere", "North Pole", "South Pole"],
      },
      {
        heading: "Continents the Equator crosses",
        items: ["South America", "Africa", "Asia (islands of Indonesia)"],
      },
      {
        heading: "Countries on the Equator (sample)",
        items: ["Ecuador", "Brazil", "Democratic Republic of the Congo", "Kenya", "Indonesia"],
      },
    ],
    clues: [
      { clue: "The 0° line of latitude, halfway between the poles", answer: "Equator (0° latitude)" },
      { clue: "The half of Earth north of the Equator", answer: "Northern Hemisphere" },
      { clue: "South American country whose name is Spanish for 'equator'", answer: "Ecuador" },
      { clue: "East African country the Equator passes through, near Mount Kenya", answer: "Kenya" },
    ],
    facts: [
      "The Equator is about 40,075 km long — the widest circle around Earth.",
      "It passes through 13 countries across South America, Africa and Asia.",
      "Places on the Equator have roughly 12 hours of daylight all year.",
      "The Sun is directly overhead at the Equator on the March and September equinoxes.",
      "Earth spins fastest at the Equator — about 1,670 km/h.",
    ],
    faqs: [
      {
        q: "What is the Equator?",
        a: "An imaginary line around the middle of Earth at 0° latitude, equally distant from the North and South Poles. It divides the planet into the Northern and Southern Hemispheres.",
      },
      {
        q: "Which continents does the Equator cross?",
        a: "South America, Africa and the islands of Asia (Indonesia). It also crosses the Pacific, Atlantic and Indian Oceans.",
      },
    ],
    related: ["latitude-and-longitude-map", "tropics-map", "hemispheres-map", "prime-meridian-map"],
  }),

  defineMap({
    slug: "prime-meridian-map",
    title: "Prime Meridian Map",
    h1: "The Prime Meridian Worksheet",
    category: "geography",
    emoji: "📍",
    diagram: "prime-meridian",
    gradeBand: "Grades 4–9",
    keywords: [
      "prime meridian worksheet",
      "prime meridian map pdf",
      "0 degrees longitude worksheet",
      "greenwich meridian worksheet",
      "label the prime meridian",
    ],
    intro:
      "Locate the Prime Meridian — 0° longitude — running through Greenwich, England, and label the countries it crosses and the hemispheres it divides.",
    labelPrompt: "Label the Prime Meridian, the hemispheres and the countries it crosses.",
    groups: [
      {
        heading: "On the diagram",
        items: ["Prime Meridian (0° longitude)", "Eastern Hemisphere", "Western Hemisphere", "180° meridian (antimeridian)"],
      },
      {
        heading: "Countries the Prime Meridian crosses",
        items: ["United Kingdom", "France", "Spain", "Algeria", "Mali", "Ghana"],
      },
    ],
    clues: [
      { clue: "The 0° line of longitude", answer: "Prime Meridian (0° longitude)" },
      { clue: "London borough the Prime Meridian is defined from", answer: "United Kingdom" },
      { clue: "The half of Earth east of the Prime Meridian", answer: "Eastern Hemisphere" },
      { clue: "West African country on the Prime Meridian, near the Equator", answer: "Ghana" },
    ],
    facts: [
      "The Prime Meridian was fixed at Greenwich, England, by international agreement in 1884.",
      "It divides Earth into the Eastern and Western Hemispheres.",
      "The Prime Meridian and the Equator cross in the Gulf of Guinea, off West Africa.",
      "Unlike the Equator, the choice of Prime Meridian is arbitrary — any meridian could have been '0'.",
      "The modern reference line (IERS) sits about 100 m east of the historic Greenwich line.",
    ],
    faqs: [
      {
        q: "What is the Prime Meridian?",
        a: "The line of longitude marked 0°, running from the North Pole to the South Pole through Greenwich, England. All other longitudes are measured east or west of it.",
      },
      {
        q: "Why is it at Greenwich?",
        a: "In 1884, delegates from 25 nations chose Greenwich because most of the world's shipping already used sea charts based on it.",
      },
    ],
    related: ["latitude-and-longitude-map", "time-zones-map", "equator-map", "longitude-map"],
  }),

  defineMap({
    slug: "latitude-and-longitude-map",
    title: "Latitude & Longitude Map",
    h1: "Latitude and Longitude Worksheet",
    category: "geography",
    emoji: "🧭",
    diagram: "latitude-longitude",
    gradeBand: "Grades 4–10",
    keywords: [
      "latitude and longitude worksheet",
      "latitude longitude map pdf",
      "coordinates worksheet geography",
      "label lines of latitude and longitude",
      "parallels and meridians worksheet",
    ],
    intro:
      "Label the lines of latitude (parallels) and longitude (meridians), including the Equator, Prime Meridian, tropics and polar circles. Then practice reading and writing coordinates.",
    labelPrompt: "Label every reference line on the grid, then write coordinates for the marked points.",
    groups: [
      {
        heading: "Lines of Latitude (parallels)",
        items: [
          "North Pole (90°N)",
          "Arctic Circle (66.5°N)",
          "Tropic of Cancer (23.5°N)",
          "Equator (0°)",
          "Tropic of Capricorn (23.5°S)",
          "Antarctic Circle (66.5°S)",
          "South Pole (90°S)",
        ],
      },
      {
        heading: "Lines of Longitude (meridians)",
        items: ["Prime Meridian (0°)", "90°E", "180° (antimeridian)", "90°W"],
      },
    ],
    clues: [
      { clue: "Lines that run east–west and measure distance north or south", answer: "Equator (0°)" },
      { clue: "Lines that run north–south and measure distance east or west", answer: "Prime Meridian (0°)" },
      { clue: "The 0° parallel", answer: "Equator (0°)" },
      { clue: "The 0° meridian", answer: "Prime Meridian (0°)" },
      { clue: "Parallel at 66.5° north", answer: "Arctic Circle (66.5°N)" },
    ],
    facts: [
      "Latitude is measured 0°–90° north or south of the Equator; longitude 0°–180° east or west of the Prime Meridian.",
      "Parallels of latitude never meet; meridians of longitude all meet at the poles.",
      "One degree of latitude is about 111 km everywhere.",
      "Coordinates are written latitude first, then longitude — e.g. 28°N, 77°E for New Delhi.",
      "A GPS receiver reports your position as a latitude and longitude.",
    ],
    faqs: [
      {
        q: "How do you remember which is which?",
        a: "Lines of latitude are like the rungs of a ladder (they go across); 'latitude = flat'. Lines of longitude are 'long' — they run the long way, pole to pole.",
      },
      {
        q: "How are coordinates written?",
        a: "Latitude first (N or S), then longitude (E or W), for example 40°N, 74°W for New York City.",
      },
    ],
    related: ["equator-map", "prime-meridian-map", "tropics-map", "time-zones-map", "map-grid-references"],
  }),

  defineMap({
    slug: "hemispheres-map",
    title: "Hemispheres Map",
    h1: "Hemispheres of the Earth Worksheet",
    category: "geography",
    emoji: "🌗",
    diagram: "hemispheres-ns",
    gradeBand: "Grades 3–8",
    keywords: [
      "hemispheres worksheet",
      "northern and southern hemisphere map pdf",
      "eastern and western hemisphere worksheet",
      "label the hemispheres",
      "four hemispheres worksheet",
    ],
    intro:
      "Label the four hemispheres and the two lines that create them — the Equator (north/south) and the Prime Meridian with the 180° line (east/west). Sort continents into the hemispheres they lie in.",
    labelPrompt: "Label each hemisphere and dividing line, then sort the continents.",
    groups: [
      {
        heading: "Hemispheres & dividers",
        items: [
          "Northern Hemisphere",
          "Southern Hemisphere",
          "Eastern Hemisphere",
          "Western Hemisphere",
          "Equator",
          "Prime Meridian",
        ],
      },
      {
        heading: "Where continents lie",
        items: [
          "North America — Northern & Western",
          "Europe — Northern (mostly Eastern)",
          "Australia — Southern & Eastern",
          "Antarctica — Southern (all)",
          "Africa — all four hemispheres",
        ],
      },
    ],
    clues: [
      { clue: "Line that divides the Northern and Southern Hemispheres", answer: "Equator" },
      { clue: "Line that divides the Eastern and Western Hemispheres (with the 180° line)", answer: "Prime Meridian" },
      { clue: "The only continent in all four hemispheres", answer: "Africa — all four hemispheres" },
      { clue: "The hemisphere that contains almost 90% of the world's people", answer: "Northern Hemisphere" },
    ],
    facts: [
      "A hemisphere is half of a sphere — half of the Earth.",
      "The Equator divides north from south; the Prime Meridian and 180° line divide east from west.",
      "Seasons are opposite in the two hemispheres: July is summer in the north, winter in the south.",
      "About 68% of Earth's land and 90% of its people are in the Northern Hemisphere.",
      "Africa is the only continent that lies in all four hemispheres.",
    ],
    faqs: [
      {
        q: "What are the four hemispheres?",
        a: "Northern and Southern (split by the Equator), and Eastern and Western (split by the Prime Meridian and the 180° meridian).",
      },
      {
        q: "Why are the seasons reversed between hemispheres?",
        a: "Because of Earth's tilt: when the Northern Hemisphere leans toward the Sun (summer), the Southern Hemisphere leans away (winter), and vice versa.",
      },
    ],
    related: ["equator-map", "prime-meridian-map", "latitude-and-longitude-map"],
  }),

  defineMap({
    slug: "polar-circles-map",
    title: "Arctic & Antarctic Circles",
    h1: "Arctic Circle and Antarctic Circle Worksheet",
    category: "geography",
    emoji: "❄️",
    diagram: "polar-circles",
    gradeBand: "Grades 4–9",
    keywords: [
      "arctic circle worksheet",
      "antarctic circle map pdf",
      "polar circles worksheet",
      "label the arctic and antarctic circles",
      "midnight sun polar night worksheet",
    ],
    intro:
      "Label the Arctic Circle (66.5°N) and Antarctic Circle (66.5°S), the poles, and the polar regions where the Sun can stay up or down for 24 hours.",
    labelPrompt: "Label each circle, pole and polar region on the diagram.",
    groups: [
      {
        heading: "Lines & regions",
        items: [
          "North Pole (90°N)",
          "Arctic Circle (66.5°N)",
          "Antarctic Circle (66.5°S)",
          "South Pole (90°S)",
          "Arctic region",
          "Antarctic region",
        ],
      },
      {
        heading: "Countries with land inside the Arctic Circle",
        items: ["Norway", "Sweden", "Finland", "Russia", "United States (Alaska)", "Canada", "Greenland (Denmark)"],
      },
    ],
    clues: [
      { clue: "Line of latitude at 66.5° north", answer: "Arctic Circle (66.5°N)" },
      { clue: "Line of latitude at 66.5° south", answer: "Antarctic Circle (66.5°S)" },
      { clue: "The northernmost point on Earth", answer: "North Pole (90°N)" },
      { clue: "Nordic country with a large area north of the Arctic Circle", answer: "Norway" },
    ],
    facts: [
      "Inside the polar circles the Sun stays up for at least one full day in summer (the 'midnight Sun') and down for at least one full day in winter (the 'polar night').",
      "At the poles themselves, day and night each last about six months.",
      "The Arctic is an ocean surrounded by land; the Antarctic is land surrounded by ocean.",
      "The polar circles sit at 66.5° because that is 90° minus Earth's 23.5° axial tilt.",
      "About 4 million people live in the Arctic region; no one lives permanently in the Antarctic.",
    ],
    faqs: [
      {
        q: "What is special about the Arctic and Antarctic Circles?",
        a: "They mark the lowest latitudes where you can experience a full 24 hours of daylight or a full 24 hours of darkness at least once a year.",
      },
      {
        q: "Why are they at 66.5 degrees?",
        a: "Because Earth's axis tilts 23.5°. The polar circles sit at 90° − 23.5° = 66.5° from the Equator.",
      },
    ],
    related: ["latitude-and-longitude-map", "tropics-map", "climate-zones-map", "antarctica-map"],
  }),

  defineMap({
    slug: "longitude-map",
    title: "Longitude & Latitude of Cities",
    h1: "Longitude and Latitude of World Cities Worksheet",
    category: "geography",
    emoji: "🎯",
    diagram: "grid",
    gradeBand: "Grades 5–10",
    keywords: [
      "longitude and latitude of cities worksheet",
      "find the coordinates worksheet",
      "world cities coordinates pdf",
      "latitude longitude practice worksheet",
    ],
    intro:
      "Practice reading coordinates by matching world cities to their approximate latitude and longitude, then plotting them on a grid.",
    labelPrompt: "Write the approximate coordinates of each numbered city.",
    groups: [
      {
        heading: "City coordinates (approximate)",
        items: [
          "London — 51°N, 0°",
          "New York — 41°N, 74°W",
          "New Delhi — 29°N, 77°E",
          "Tokyo — 36°N, 140°E",
          "Sydney — 34°S, 151°E",
          "Cairo — 30°N, 31°E",
          "Rio de Janeiro — 23°S, 43°W",
          "Nairobi — 1°S, 37°E",
        ],
      },
    ],
    clues: [
      { clue: "City almost exactly on the Prime Meridian", answer: "London — 51°N, 0°" },
      { clue: "City almost exactly on the Equator", answer: "Nairobi — 1°S, 37°E" },
      { clue: "City near the Tropic of Capricorn in South America", answer: "Rio de Janeiro — 23°S, 43°W" },
      { clue: "City in the Southern Hemisphere at about 151° east", answer: "Sydney — 34°S, 151°E" },
    ],
    facts: [
      "Coordinates are always written latitude first, then longitude.",
      "Positive latitude is north, negative is south; positive longitude is east, negative is west.",
      "One minute of latitude equals one nautical mile (about 1.85 km).",
      "GPS gives coordinates to several decimal places — enough to locate a doorway.",
      "The 'null island' point at 0°, 0° is in the Gulf of Guinea, with only a weather buoy.",
    ],
    faqs: [
      {
        q: "Which number comes first, latitude or longitude?",
        a: "Latitude first. For example, Paris is 48°N, 2°E — 48 degrees north of the Equator and 2 degrees east of the Prime Meridian.",
      },
      {
        q: "How precise are coordinates?",
        a: "One degree is about 111 km, one minute about 1.85 km, and one second about 31 m. Decimal degrees to five places locate a spot within about a metre.",
      },
    ],
    related: ["latitude-and-longitude-map", "prime-meridian-map", "time-zones-map"],
  }),

  defineMap({
    slug: "tectonic-plates-map",
    title: "Tectonic Plates Map",
    h1: "Tectonic Plates Worksheet",
    category: "geography",
    emoji: "🧩",
    gradeBand: "Grades 5–10",
    keywords: [
      "tectonic plates worksheet",
      "plate boundaries map pdf",
      "label the tectonic plates",
      "lithospheric plates worksheet",
      "plate tectonics map",
    ],
    intro:
      "Label the major tectonic plates and the three kinds of plate boundary. Connect plate edges to the world's earthquake and volcano belts.",
    labelPrompt: "Write the name of each numbered plate or boundary type.",
    groups: [
      {
        heading: "Major plates",
        items: [
          "Pacific Plate",
          "North American Plate",
          "South American Plate",
          "Eurasian Plate",
          "African Plate",
          "Antarctic Plate",
          "Indo-Australian Plate",
          "Nazca Plate",
        ],
      },
      {
        heading: "Boundary types",
        items: ["Convergent (plates collide)", "Divergent (plates spread apart)", "Transform (plates slide past)"],
      },
    ],
    clues: [
      { clue: "The largest tectonic plate, mostly ocean floor", answer: "Pacific Plate" },
      { clue: "Small plate off western South America, sinking under the Andes", answer: "Nazca Plate" },
      { clue: "Boundary type that builds mountains and deep ocean trenches", answer: "Convergent (plates collide)" },
      { clue: "Boundary type found along the Mid-Atlantic Ridge", answer: "Divergent (plates spread apart)" },
      { clue: "Boundary type of California's San Andreas Fault", answer: "Transform (plates slide past)" },
    ],
    facts: [
      "Earth's rigid outer shell is broken into about 7 major and many minor plates.",
      "Plates move a few centimetres a year — about as fast as fingernails grow.",
      "At divergent boundaries new crust forms; at convergent boundaries crust is destroyed.",
      "The theory that explains this is plate tectonics, accepted since the 1960s.",
      "India was once a separate plate that crashed into Asia, raising the Himalayas.",
    ],
    faqs: [
      {
        q: "What are the three types of plate boundary?",
        a: "Convergent (plates move together), divergent (plates move apart) and transform (plates slide past each other sideways).",
      },
      {
        q: "How does this connect to earthquakes and volcanoes?",
        a: "Almost all earthquakes and most volcanoes occur along plate boundaries, where the crust is being pushed, pulled or sheared.",
      },
    ],
    related: ["volcanoes-map", "mountain-ranges-map", "world-map"],
  }),

  defineMap({
    slug: "biomes-map",
    title: "Biomes Map",
    h1: "World Biomes Worksheet",
    category: "geography",
    emoji: "🌲",
    gradeBand: "Grades 4–10",
    keywords: [
      "world biomes worksheet",
      "biomes map pdf",
      "label the biomes worksheet",
      "tundra taiga desert grassland map",
      "ecosystems of the world map",
    ],
    intro:
      "Label the world's major land biomes — tundra, taiga, temperate forest, grassland, desert, tropical rainforest and savanna — and see how they follow bands of latitude and climate.",
    labelPrompt: "Write the name of each numbered biome.",
    groups: [
      {
        heading: "Major land biomes",
        items: [
          "Tundra",
          "Taiga (Boreal Forest)",
          "Temperate Deciduous Forest",
          "Temperate Grassland",
          "Desert",
          "Savanna (Tropical Grassland)",
          "Tropical Rainforest",
          "Mediterranean (Chaparral)",
        ],
      },
    ],
    clues: [
      { clue: "Cold, treeless biome with permafrost, near the Arctic", answer: "Tundra" },
      { clue: "Vast northern forest of conifers across Canada and Russia", answer: "Taiga (Boreal Forest)" },
      { clue: "Hot grassland with scattered trees, home to African wildlife herds", answer: "Savanna (Tropical Grassland)" },
      { clue: "Wettest, most biodiverse biome, found near the Equator", answer: "Tropical Rainforest" },
      { clue: "Biome defined by very low rainfall", answer: "Desert" },
      { clue: "Biome of the North American prairie and Eurasian steppe", answer: "Temperate Grassland" },
    ],
    facts: [
      "A biome is a large community of plants and animals shaped mainly by climate.",
      "Temperature and rainfall are the two biggest factors deciding which biome forms.",
      "Biomes tend to run in bands: rainforest near the Equator, then desert, grassland, forest, taiga and tundra toward the poles.",
      "The same biome can appear on different continents — grassland is 'prairie' in the US, 'steppe' in Asia, 'pampas' in Argentina.",
      "Aquatic biomes (freshwater and marine) cover most of the planet.",
    ],
    faqs: [
      {
        q: "What is the difference between a biome and an ecosystem?",
        a: "An ecosystem is a specific community of living things and their environment (a pond, a forest patch). A biome is a very large region of similar ecosystems, like 'tropical rainforest' worldwide.",
      },
      {
        q: "What decides where a biome is?",
        a: "Mostly climate — average temperature and precipitation — which depends on latitude, altitude and distance from the ocean.",
      },
    ],
    related: ["climate-zones-map", "rainforest-map", "deserts-map"],
  }),

  defineMap({
    slug: "landforms-map",
    title: "Landforms Map",
    h1: "Landforms Worksheet",
    category: "geography",
    emoji: "🏕️",
    gradeBand: "Grades 2–7",
    keywords: [
      "landforms worksheet",
      "landforms map pdf",
      "label the landforms worksheet",
      "mountain plateau valley plain worksheet",
      "types of landforms worksheet",
    ],
    intro:
      "Identify and label common landforms — mountain, hill, plateau, valley, plain, canyon, delta, peninsula, island and isthmus — on a diagram landscape.",
    labelPrompt: "Write the name of each numbered landform.",
    groups: [
      {
        heading: "Landforms",
        items: [
          "Mountain",
          "Hill",
          "Plateau",
          "Valley",
          "Plain",
          "Canyon",
          "Delta",
          "Peninsula",
          "Island",
          "Isthmus",
          "Cape",
          "Bay",
        ],
      },
    ],
    clues: [
      { clue: "A landform much higher than the land around it, with steep sides and a peak", answer: "Mountain" },
      { clue: "Flat, raised area of land — a 'tableland'", answer: "Plateau" },
      { clue: "Low area between hills or mountains, often carved by a river", answer: "Valley" },
      { clue: "Triangle of land and sediment where a river meets the sea", answer: "Delta" },
      { clue: "Narrow strip of land joining two larger land areas", answer: "Isthmus" },
      { clue: "Deep, narrow valley with very steep rock walls", answer: "Canyon" },
    ],
    facts: [
      "Landforms are natural features of Earth's surface, shaped by forces like plates, water, ice and wind.",
      "Erosion wears land down; deposition builds it up (as in a delta or sand dune).",
      "A plateau is flat like a plain but sits high above sea level.",
      "The four major landform types are mountains, plateaus, plains and hills.",
      "An isthmus (like Panama) connects land; a strait connects water.",
    ],
    faqs: [
      {
        q: "What are the four main types of landform?",
        a: "Mountains, hills, plateaus and plains — classified mostly by height and how flat or steep they are.",
      },
      {
        q: "How do landforms form?",
        a: "Through tectonic forces (uplift, folding, faulting, volcanoes) and surface processes (weathering, erosion and deposition by rivers, glaciers, waves and wind).",
      },
    ],
    related: ["bodies-of-water-map", "major-mountains-map", "peninsulas-map"],
  }),

  defineMap({
    slug: "bodies-of-water-map",
    title: "Bodies of Water Map",
    h1: "Bodies of Water Worksheet",
    category: "geography",
    emoji: "🌊",
    gradeBand: "Grades 2–7",
    keywords: [
      "bodies of water worksheet",
      "types of water bodies map pdf",
      "ocean sea lake river bay worksheet",
      "label the bodies of water",
    ],
    intro:
      "Identify and label the different bodies of water — ocean, sea, lake, river, bay, gulf, strait, channel and tributary — on a diagram coastline.",
    labelPrompt: "Write the name of each numbered body of water.",
    groups: [
      {
        heading: "Bodies of water",
        items: [
          "Ocean",
          "Sea",
          "Gulf",
          "Bay",
          "Lake",
          "River",
          "Tributary",
          "Strait",
          "Channel",
          "Delta",
          "Harbor",
          "Lagoon",
        ],
      },
    ],
    clues: [
      { clue: "The largest bodies of salt water on Earth", answer: "Ocean" },
      { clue: "Large area of ocean partly enclosed by land, with a narrow opening", answer: "Gulf" },
      { clue: "A smaller river that flows into a bigger one", answer: "Tributary" },
      { clue: "A narrow strip of water joining two larger water bodies", answer: "Strait" },
      { clue: "A body of water completely surrounded by land", answer: "Lake" },
      { clue: "Shallow body of water separated from the sea by a reef or sandbar", answer: "Lagoon" },
    ],
    facts: [
      "About 71% of Earth's surface is water, and about 97% of that is salt water in the oceans.",
      "Fresh water makes up only about 3% of Earth's water, and most of that is frozen.",
      "Rivers carry fresh water from the land to the sea; the sea evaporates and rains back onto land — the water cycle.",
      "A gulf is usually bigger and more enclosed than a bay.",
      "A strait connects two bodies of water; an isthmus connects two areas of land.",
    ],
    faqs: [
      {
        q: "What is the difference between a lake and a sea?",
        a: "A lake is inland and usually fresh water; a sea is part of the ocean and salt water. A few very large salty lakes, like the Caspian, are called seas by tradition.",
      },
      {
        q: "What is a tributary?",
        a: "A stream or river that flows into a larger river rather than into the sea. The point where they join is a confluence.",
      },
    ],
    related: ["landforms-map", "oceans-map", "seas-and-gulfs-map", "major-rivers-map"],
  }),

  defineMap({
    slug: "compass-rose-map",
    title: "Compass Rose",
    h1: "Compass Rose and Cardinal Directions Worksheet",
    category: "skills",
    emoji: "🧭",
    diagram: "compass-rose",
    gradeBand: "Grades 1–5",
    keywords: [
      "compass rose worksheet",
      "cardinal directions worksheet pdf",
      "north south east west worksheet",
      "intermediate directions worksheet",
      "label the compass rose",
    ],
    intro:
      "Label a compass rose with the four cardinal directions (N, E, S, W) and the four intermediate directions (NE, SE, SW, NW), then practice giving directions on a simple map.",
    labelPrompt: "Label all eight points of the compass rose.",
    groups: [
      {
        heading: "Cardinal directions",
        items: ["North", "East", "South", "West"],
      },
      {
        heading: "Intermediate (ordinal) directions",
        items: ["Northeast", "Southeast", "Southwest", "Northwest"],
      },
    ],
    clues: [
      { clue: "The direction toward the top of most maps", answer: "North" },
      { clue: "The direction the Sun rises", answer: "East" },
      { clue: "The direction the Sun sets", answer: "West" },
      { clue: "The direction halfway between north and east", answer: "Northeast" },
      { clue: "The direction opposite northwest", answer: "Southeast" },
    ],
    facts: [
      "A compass rose is the star-shaped symbol that shows directions on a map.",
      "The four cardinal directions are North, East, South and West — clockwise from the top.",
      "A common memory aid reading clockwise is 'Never Eat Soggy Waffles'.",
      "In-between directions combine two cardinals: north + east = northeast.",
      "A magnetic compass needle points toward magnetic north, which is close to but not exactly true north.",
    ],
    faqs: [
      {
        q: "What are the cardinal and intermediate directions?",
        a: "Cardinal: North, East, South, West. Intermediate (or ordinal): Northeast, Southeast, Southwest, Northwest — each halfway between two cardinals.",
      },
      {
        q: "Why is north usually at the top of a map?",
        a: "It is a convention that started in the age of magnetic compasses and printed charts. A compass rose (or a north arrow) tells you if a map is drawn a different way.",
      },
    ],
    related: ["map-grid-references", "map-key-and-symbols", "latitude-and-longitude-map"],
  }),
];
