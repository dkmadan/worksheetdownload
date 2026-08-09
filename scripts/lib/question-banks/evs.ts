import type { Question } from "../pdf-builder";

// Shared pools keyed by topic keyword — 40–50 Q each
const BANKS: Record<string, { question: string; answer: string }[]> = {

"family": [
  { question: "Father's mother is my ___.", answer: "grandmother" },
  { question: "Mother's brother is my ___.", answer: "maternal uncle" },
  { question: "Father's sister is my ___.", answer: "aunt" },
  { question: "My parents' parents are called ___.", answer: "grandparents" },
  { question: "A family that has grandparents too is a ___ family.", answer: "joint" },
  { question: "A family of parents + children is a ___ family.", answer: "nuclear" },
  { question: "Younger sister of mother is ___.", answer: "aunt" },
  { question: "Son of my aunt is my ___.", answer: "cousin" },
  { question: "Daughter of my uncle is my ___.", answer: "cousin" },
  { question: "Father's father is my ___.", answer: "grandfather" },
  { question: "Mother's mother is my ___.", answer: "maternal grandmother" },
  { question: "Father of my husband is my ___.", answer: "father-in-law" },
  { question: "Mother of my wife is my ___.", answer: "mother-in-law" },
  { question: "Brother of my wife is my ___.", answer: "brother-in-law" },
  { question: "Members of a family care for each ___.", answer: "other" },
  { question: "Family provides love, support, and ___.", answer: "shelter/security" },
  { question: "Children of my brother/sister are my ___.", answer: "nephews/nieces" },
  { question: "Male child of my brother is my ___.", answer: "nephew" },
  { question: "Female child of my sister is my ___.", answer: "niece" },
  { question: "Grandparents share ___ and experience with family.", answer: "wisdom" }
],

"plants": [
  { question: "Plants make food using sunlight — this is called ___.", answer: "photosynthesis" },
  { question: "Roots absorb ___ from the soil.", answer: "water" },
  { question: "Leaves are green because of ___.", answer: "chlorophyll" },
  { question: "Trees give us ___ and fruits.", answer: "oxygen" },
  { question: "Sunflower turns towards ___.", answer: "sunlight" },
  { question: "Cactus stores water in its ___.", answer: "stem" },
  { question: "Lotus grows in ___.", answer: "water" },
  { question: "Plants that have beautiful flowers are ___ plants.", answer: "ornamental" },
  { question: "Neem tree is used as ___.", answer: "medicine" },
  { question: "Parts of a plant: root, stem, leaf, flower, ___.", answer: "fruit/seed" },
  { question: "Tulsi is used as a medicinal ___.", answer: "plant" },
  { question: "A mango tree is a ___ plant.", answer: "woody/perennial" },
  { question: "Grass is an example of ___ plant.", answer: "herbaceous" },
  { question: "Seeds are dispersed by wind, water, and ___.", answer: "animals" },
  { question: "Vegetable we eat that is a root: ___.", answer: "carrot/radish" },
  { question: "Vegetable we eat that is a leaf: ___.", answer: "spinach/cabbage" },
  { question: "Vegetable we eat that is a stem: ___.", answer: "potato/ginger" },
  { question: "Vegetable we eat that is a flower: ___.", answer: "cauliflower/broccoli" },
  { question: "Plants breathe through tiny pores called ___.", answer: "stomata" },
  { question: "Plants release ___ during photosynthesis.", answer: "oxygen" }
],

"animals": [
  { question: "Animals that eat grass are ___.", answer: "herbivores" },
  { question: "Animals that eat flesh are ___.", answer: "carnivores" },
  { question: "Dog, cat, and cow are ___ animals.", answer: "domestic" },
  { question: "Lion and tiger are ___ animals.", answer: "wild" },
  { question: "Animals that give us milk: cow, buffalo, and ___.", answer: "goat" },
  { question: "Animals that give us eggs: hen, duck, and ___.", answer: "goose" },
  { question: "Animals that give us wool: sheep and ___.", answer: "goat/angora rabbit" },
  { question: "Animals that live in water are called ___.", answer: "aquatic animals" },
  { question: "Animals that fly are called ___.", answer: "birds/aerial animals" },
  { question: "An animal that lays eggs is an ___.", answer: "oviparous animal" },
  { question: "An animal that gives birth to young ones is ___.", answer: "viviparous" },
  { question: "Frog lives both on land and water — it is an ___.", answer: "amphibian" },
  { question: "Snake is a ___.", answer: "reptile" },
  { question: "Parrot is a ___.", answer: "bird" },
  { question: "Whale is a ___.", answer: "mammal" },
  { question: "Camel stores water/fat in its ___.", answer: "hump" },
  { question: "Polar bear is adapted to ___ climate.", answer: "cold/Arctic" },
  { question: "Birds have ___ instead of forelimbs.", answer: "wings" },
  { question: "Fish breathe through ___.", answer: "gills" },
  { question: "Honey is produced by ___.", answer: "bees" }
],

"water": [
  { question: "Water is also called the ___ of life.", answer: "elixir" },
  { question: "Water covers ___ % of Earth's surface.", answer: "71" },
  { question: "Pure water is ___ in color.", answer: "colorless" },
  { question: "Water boils at ___ degrees Celsius.", answer: "100" },
  { question: "Water freezes at ___ degrees Celsius.", answer: "0" },
  { question: "We should ___ water to make it safe to drink.", answer: "boil/purify" },
  { question: "Rain water comes from ___ in the sky.", answer: "clouds" },
  { question: "The process of water cycle: evaporation, condensation, ___.", answer: "precipitation" },
  { question: "Evaporation happens when water is ___.", answer: "heated" },
  { question: "Groundwater is water found ___.", answer: "underground" },
  { question: "A dam stores ___ water.", answer: "river" },
  { question: "Water harvesting means collecting and storing ___.", answer: "rainwater" },
  { question: "Dirty water can cause ___.", answer: "diseases" },
  { question: "We should save water to prevent water ___.", answer: "scarcity" },
  { question: "Washing hands with soap and water prevents ___.", answer: "disease/infection" },
  { question: "A river flows into the ___.", answer: "sea/ocean" },
  { question: "Ice is ___ form of water.", answer: "solid" },
  { question: "Steam is ___ form of water.", answer: "gaseous" },
  { question: "Flood is caused by excess ___.", answer: "water/rain" },
  { question: "Drought is caused by lack of ___.", answer: "rain/water" }
],

"food": [
  { question: "Foods that give us energy are called ___.", answer: "carbohydrates" },
  { question: "Foods that help build our body are ___.", answer: "proteins" },
  { question: "Foods that protect us from diseases are ___.", answer: "vitamins and minerals" },
  { question: "Milk, eggs, fish are rich in ___.", answer: "protein" },
  { question: "Rice and bread are rich in ___.", answer: "carbohydrates" },
  { question: "Fruits and vegetables are rich in ___.", answer: "vitamins and minerals" },
  { question: "Ghee and oil are rich in ___.", answer: "fats" },
  { question: "Vitamin C is found in ___.", answer: "citrus fruits/amla" },
  { question: "Vitamin D is produced when skin is exposed to ___.", answer: "sunlight" },
  { question: "Iron is found in ___ leafy vegetables.", answer: "green" },
  { question: "Calcium is important for ___ and teeth.", answer: "bones" },
  { question: "A balanced diet has all ___ nutrients.", answer: "essential" },
  { question: "Junk food has excess ___ and salt.", answer: "sugar/fat" },
  { question: "Dehydration means lack of ___.", answer: "water" },
  { question: "Fiber helps in ___.", answer: "digestion" },
  { question: "Anaemia is caused by deficiency of ___.", answer: "iron" },
  { question: "Rickets is caused by deficiency of Vitamin ___.", answer: "D" },
  { question: "Scurvy is caused by deficiency of Vitamin ___.", answer: "C" },
  { question: "Night blindness is caused by deficiency of Vitamin ___.", answer: "A" },
  { question: "Goitre is caused by deficiency of ___.", answer: "iodine" }
],

"environment": [
  { question: "The air around us is called the ___.", answer: "atmosphere" },
  { question: "Deforestation means cutting down ___.", answer: "forests/trees" },
  { question: "Planting trees is called ___.", answer: "afforestation" },
  { question: "Pollution of air is called ___.", answer: "air pollution" },
  { question: "Pollution of water is called ___.", answer: "water pollution" },
  { question: "The 3 Rs of environment: Reduce, Reuse, ___.", answer: "Recycle" },
  { question: "Ozone layer protects us from ___ rays.", answer: "UV/ultraviolet" },
  { question: "Global warming is caused by ___ gases.", answer: "greenhouse" },
  { question: "CO2, methane are examples of ___ gases.", answer: "greenhouse" },
  { question: "Biodegradable waste can be broken down by ___.", answer: "microorganisms" },
  { question: "Non-biodegradable waste does NOT break down ___.", answer: "easily/naturally" },
  { question: "Plastic is a ___ material.", answer: "non-biodegradable" },
  { question: "Composting converts waste into ___.", answer: "manure/fertilizer" },
  { question: "Deforestation causes soil ___.", answer: "erosion" },
  { question: "Wild animals need protection in ___.", answer: "sanctuaries/national parks" },
  { question: "Rainforest is found in ___ regions.", answer: "tropical" },
  { question: "Fossil fuels are coal, petroleum, and ___.", answer: "natural gas" },
  { question: "Solar energy comes from the ___.", answer: "sun" },
  { question: "Wind energy uses ___ to generate power.", answer: "wind turbines" },
  { question: "Rainwater harvesting conserves ___.", answer: "water" }
],

"transport": [
  { question: "Vehicles that run on roads are ___ transport.", answer: "land" },
  { question: "Vehicles that run on water are ___ transport.", answer: "water" },
  { question: "Vehicles that fly in air are ___ transport.", answer: "air" },
  { question: "A train runs on ___.", answer: "tracks/rails" },
  { question: "Aeroplanes travel through the ___.", answer: "air/sky" },
  { question: "Ships travel on ___.", answer: "water/sea" },
  { question: "Bicycle is an example of ___ transport.", answer: "land" },
  { question: "Helicopter is an example of ___ transport.", answer: "air" },
  { question: "Submarine travels ___.", answer: "underwater" },
  { question: "The fastest mode of transport is ___.", answer: "air" },
  { question: "The cheapest mode of transport is ___.", answer: "road" },
  { question: "Traffic light red means ___.", answer: "stop" },
  { question: "Traffic light green means ___.", answer: "go" },
  { question: "Traffic light amber/yellow means ___.", answer: "slow down/wait" },
  { question: "Wearing a helmet is important for ___.", answer: "safety" },
  { question: "Seat belts protect passengers in ___.", answer: "cars/vehicles" },
  { question: "We should walk on the ___.", answer: "footpath/pavement" },
  { question: "We cross roads at a ___ crossing.", answer: "zebra" },
  { question: "Ambulance is used to carry ___.", answer: "patients/injured" },
  { question: "Fire engine is used to put out ___.", answer: "fires" }
],
};

const FALLBACK: { question: string; answer: string }[] = [
  { question: "The place where we live is called our ___.", answer: "home" },
  { question: "We breathe in ___.", answer: "oxygen" },
  { question: "We breathe out ___.", answer: "carbon dioxide" },
  { question: "The sun rises in the ___.", answer: "east" },
  { question: "The sun sets in the ___.", answer: "west" },
  { question: "Shadow is shortest at ___.", answer: "noon" },
  { question: "We see our image in a ___.", answer: "mirror" },
  { question: "A compass shows ___ directions.", answer: "four" },
  { question: "The North Star shows ___.", answer: "north direction" },
  { question: "Soil is made of rock particles and ___.", answer: "organic matter" },
  { question: "Earthworms make soil ___.", answer: "fertile" },
  { question: "Seasons are caused by ___ of Earth.", answer: "revolution" },
  { question: "Day and night are caused by ___ of Earth.", answer: "rotation" },
  { question: "Earth rotates from ___ to east.", answer: "west" },
  { question: "Earth takes ___ hours to complete one rotation.", answer: "24" },
  { question: "Earth takes ___ days to complete one revolution.", answer: "365" },
  { question: "The Moon revolves around ___.", answer: "Earth" },
  { question: "The Moon takes ___ days to go around Earth.", answer: "28/29" },
  { question: "Gravity holds things on ___.", answer: "Earth" },
  { question: "A rainbow has ___ colors.", answer: "7" }
];

function normalize(t: string) { return t.toLowerCase().replace(/[^a-z ]/g, "").trim(); }

function findBank(topic: string): { question: string; answer: string }[] {
  const n = normalize(topic);
  for (const key of Object.keys(BANKS)) {
    if (n.includes(key)) return BANKS[key];
  }
  if (n.includes("famil") || n.includes("relation")) return BANKS["family"];
  if (n.includes("plant")) return BANKS["plants"];
  if (n.includes("animal")) return BANKS["animals"];
  if (n.includes("water") || n.includes("rain")) return BANKS["water"];
  if (n.includes("food") || n.includes("nutrition")) return BANKS["food"];
  if (n.includes("environ") || n.includes("pollut") || n.includes("soil")) return BANKS["environment"];
  if (n.includes("transport")) return BANKS["transport"];
  return FALLBACK;
}

export function generateEvsQuestions(
  _gradeId: string,
  topicLabel: string,
  sheetNumber: number
): { question: string; answer: string }[] {
  const bank = findBank(topicLabel);
  const start = ((sheetNumber - 1) * 20) % bank.length;
  const end = start + 20;
  if (end <= bank.length) return bank.slice(start, end);
  return [...bank.slice(start), ...bank.slice(0, end - bank.length)];
}
