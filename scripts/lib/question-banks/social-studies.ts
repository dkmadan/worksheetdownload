import type { Question } from "../pdf-builder";

type Bank = Record<string, { question: string; answer: string }[]>;

const BANKS: Bank = {

"india": [
  { question: "India is officially called ___.", answer: "Republic of India" },
  { question: "India's capital is ___.", answer: "New Delhi" },
  { question: "Largest state of India by area is ___.", answer: "Rajasthan" },
  { question: "Smallest state of India by area is ___.", answer: "Goa" },
  { question: "Most populous state of India is ___.", answer: "Uttar Pradesh" },
  { question: "Longest river in India is ___.", answer: "Ganga" },
  { question: "Highest mountain peak in India is ___.", answer: "Kanchenjunga" },
  { question: "India shares border with ___ countries.", answer: "7" },
  { question: "India's constitution came into effect on ___.", answer: "26 January 1950" },
  { question: "India became independent on ___.", answer: "15 August 1947" },
  { question: "Tropic of Cancer passes through ___ Indian states.", answer: "8" },
  { question: "Southernmost point of India is ___.", answer: "Indira Point" },
  { question: "Northernmost point of India is ___.", answer: "Indira Col" },
  { question: "Indian Ocean is named after ___.", answer: "India" },
  { question: "India's official language is ___.", answer: "Hindi" },
  { question: "India has ___ official languages.", answer: "22" },
  { question: "Largest union territory of India is ___.", answer: "Ladakh" },
  { question: "India's parliament is called ___.", answer: "Sansad" },
  { question: "Lok Sabha has ___ seats.", answer: "543" },
  { question: "Rajya Sabha has ___ seats.", answer: "245" }
],

"history": [
  { question: "First freedom struggle against British: ___.", answer: "Revolt of 1857" },
  { question: "Indian National Congress was founded in ___.", answer: "1885" },
  { question: "Partition of Bengal occurred in ___.", answer: "1905" },
  { question: "Jallianwala Bagh massacre occurred in ___.", answer: "1919" },
  { question: "Non-Cooperation Movement was launched in ___.", answer: "1920" },
  { question: "Dandi March (Salt Satyagraha) was in ___.", answer: "1930" },
  { question: "Quit India Movement was launched in ___.", answer: "1942" },
  { question: "INA was founded by ___.", answer: "Subhas Chandra Bose" },
  { question: "Battle of Plassey was in ___.", answer: "1757" },
  { question: "Battle of Buxar was in ___.", answer: "1764" },
  { question: "First Governor General of India under crown was ___.", answer: "Lord Canning" },
  { question: "Queen Victoria became empress of India in ___.", answer: "1877" },
  { question: "Simon Commission came to India in ___.", answer: "1928" },
  { question: "Gandhi-Irwin Pact was signed in ___.", answer: "1931" },
  { question: "Khilafat Movement was in ___.", answer: "1919–1921" },
  { question: "Swadeshi Movement was a reaction to ___.", answer: "Partition of Bengal" },
  { question: "India's first census was in ___.", answer: "1872" },
  { question: "Rowlatt Act was passed in ___.", answer: "1919" },
  { question: "Indian Independence Act was passed in ___.", answer: "1947" },
  { question: "Constituent Assembly adopted constitution in ___.", answer: "1949" }
],

"geography": [
  { question: "Himalayas are located in ___ India.", answer: "Northern" },
  { question: "Deccan Plateau is in ___ India.", answer: "Southern/Central" },
  { question: "Great Indian Desert (Thar) is in ___.", answer: "Rajasthan" },
  { question: "Sundarbans is a ___ delta.", answer: "mangrove" },
  { question: "Western Ghats are also called ___.", answer: "Sahyadri" },
  { question: "Eastern Ghats run parallel to ___ coast.", answer: "eastern" },
  { question: "Rann of Kutch is in ___.", answer: "Gujarat" },
  { question: "Valley of Flowers is in ___.", answer: "Uttarakhand" },
  { question: "Kaziranga National Park is in ___.", answer: "Assam" },
  { question: "Jim Corbett National Park is in ___.", answer: "Uttarakhand" },
  { question: "Chilika Lake is in ___.", answer: "Odisha" },
  { question: "Largest fresh water lake in India is ___.", answer: "Wular Lake" },
  { question: "The Indo-Gangetic Plain is a ___ plain.", answer: "alluvial" },
  { question: "Equator passes through ___ continents.", answer: "3" },
  { question: "Prime Meridian passes through ___.", answer: "Greenwich" },
  { question: "Latitude lines are parallel to ___.", answer: "equator" },
  { question: "Longitude lines meet at ___.", answer: "poles" },
  { question: "Tropic of Cancer is at ___ degrees N.", answer: "23.5" },
  { question: "Tropic of Capricorn is at ___ degrees S.", answer: "23.5" },
  { question: "International Date Line is at ___ degrees longitude.", answer: "180" }
],

"government": [
  { question: "India is a ___ republic.", answer: "democratic" },
  { question: "President of India is elected for ___ years.", answer: "5" },
  { question: "Prime Minister is head of ___.", answer: "Government/Cabinet" },
  { question: "Supreme Court is located in ___.", answer: "New Delhi" },
  { question: "Highest court in India is ___.", answer: "Supreme Court" },
  { question: "High Courts are at ___ level.", answer: "state" },
  { question: "Panchayati Raj is ___ governance.", answer: "local/village" },
  { question: "Municipal corporation governs ___.", answer: "cities" },
  { question: "Parliament has ___ houses.", answer: "2" },
  { question: "Rajya Sabha is the ___ house of Parliament.", answer: "upper" },
  { question: "Lok Sabha is the ___ house of Parliament.", answer: "lower" },
  { question: "Speaker presides over ___.", answer: "Lok Sabha" },
  { question: "Vice President presides over ___.", answer: "Rajya Sabha" },
  { question: "Council of Ministers is headed by ___.", answer: "Prime Minister" },
  { question: "Fundamental Rights are in Part ___ of Constitution.", answer: "III" },
  { question: "Directive Principles are in Part ___ of Constitution.", answer: "IV" },
  { question: "Secularism was added to Preamble in ___.", answer: "1976" },
  { question: "Constitution of India has ___ articles.", answer: "448" },
  { question: "Emergency is declared under Article ___.", answer: "352" },
  { question: "Right to Education Act was passed in ___.", answer: "2009" }
],

"world": [
  { question: "United Nations was established in ___.", answer: "1945" },
  { question: "UNESCO promotes ___ and culture.", answer: "education/science" },
  { question: "WHO works on world ___.", answer: "health" },
  { question: "Headquarters of UN is in ___.", answer: "New York" },
  { question: "World War I was from ___ to 1918.", answer: "1914" },
  { question: "World War II was from ___ to 1945.", answer: "1939" },
  { question: "NATO is a ___ alliance.", answer: "military" },
  { question: "G20 has ___ members.", answer: "20" },
  { question: "SAARC includes ___ countries.", answer: "8" },
  { question: "BRICS stands for Brazil, Russia, India, China, ___.", answer: "South Africa" },
  { question: "EU (European Union) headquarters is in ___.", answer: "Brussels" },
  { question: "IMF stands for International Monetary ___.", answer: "Fund" },
  { question: "World Bank provides ___ to countries.", answer: "loans/assistance" },
  { question: "Amazon River is in ___.", answer: "South America" },
  { question: "Mount Kilimanjaro is in ___.", answer: "Africa" },
  { question: "Sahara Desert is in ___.", answer: "Africa" },
  { question: "Great Wall is in ___.", answer: "China" },
  { question: "Colosseum is in ___.", answer: "Rome/Italy" },
  { question: "Eiffel Tower is in ___.", answer: "Paris/France" },
  { question: "Statue of Liberty is in ___.", answer: "New York/USA" }
],

"resources": [
  { question: "Natural resources include soil, water, and ___.", answer: "forests/minerals" },
  { question: "Coal is a ___ fuel.", answer: "fossil" },
  { question: "Petroleum is found ___.", answer: "underground" },
  { question: "Solar energy comes from the ___.", answer: "sun" },
  { question: "Wind energy uses ___ to generate electricity.", answer: "wind turbines" },
  { question: "Water energy is called ___ power.", answer: "hydroelectric" },
  { question: "Renewable resources can be ___.", answer: "replenished" },
  { question: "Non-renewable resources cannot be ___.", answer: "replenished" },
  { question: "Deforestation causes soil ___.", answer: "erosion" },
  { question: "Sustainable development meets needs without harming ___.", answer: "future generations" },
  { question: "India's largest coal producing state is ___.", answer: "Jharkhand" },
  { question: "India's largest oil producing state is ___.", answer: "Rajasthan" },
  { question: "Iron ore is mainly found in ___.", answer: "Jharkhand/Odisha/Goa" },
  { question: "Mica is mainly found in ___.", answer: "Jharkhand/Rajasthan" },
  { question: "Bauxite is the ore of ___.", answer: "aluminium" },
  { question: "Conservation of resources means using them ___.", answer: "wisely/sustainably" },
  { question: "Forest is a ___ resource.", answer: "renewable" },
  { question: "Coal is a ___ resource.", answer: "non-renewable" },
  { question: "Humus makes soil ___.", answer: "fertile" },
  { question: "Rainwater harvesting conserves ___.", answer: "water" }
],
};

const FALLBACK: { question: string; answer: string }[] = [
  { question: "A map uses a ___ to represent actual distances.", answer: "scale" },
  { question: "A globe is a model of ___.", answer: "Earth" },
  { question: "Compass shows ___ directions.", answer: "four/eight" },
  { question: "Legend/key on a map shows ___.", answer: "symbols/meaning" },
  { question: "Physical map shows ___.", answer: "landforms/terrain" },
  { question: "Political map shows ___.", answer: "borders/capitals" },
  { question: "Climate is the average ___ over a long period.", answer: "weather" },
  { question: "Weather is the ___ condition of atmosphere.", answer: "current/daily" },
  { question: "Monsoon winds bring ___ to India.", answer: "rain" },
  { question: "Tropical climate is near the ___.", answer: "equator" },
  { question: "Desert climate has very little ___.", answer: "rainfall" },
  { question: "Population density = population / ___.", answer: "area" },
  { question: "Census is done every ___ years in India.", answer: "10" },
  { question: "Birth rate and death rate affect ___.", answer: "population growth" },
  { question: "Migration is movement of people from one ___ to another.", answer: "place" },
  { question: "Agriculture is the ___ of crops.", answer: "growing/cultivation" },
  { question: "Kharif crops are grown in ___.", answer: "summer/monsoon" },
  { question: "Rabi crops are grown in ___.", answer: "winter" },
  { question: "Rice needs ___ water to grow.", answer: "a lot of" },
  { question: "Wheat is mainly grown in ___ India.", answer: "northern" }
];

function normalize(t: string) { return t.toLowerCase().replace(/[^a-z ]/g, "").trim(); }

function findBank(topic: string): { question: string; answer: string }[] {
  const n = normalize(topic);
  for (const key of Object.keys(BANKS)) {
    if (n.includes(key)) return BANKS[key];
  }
  if (n.includes("ancient") || n.includes("medieval") || n.includes("revolt") || n.includes("mughal") || n.includes("british") || n.includes("movement") || n.includes("colonialism") || n.includes("partition") || n.includes("delhi sultanate")) return BANKS["history"];
  if (n.includes("geograph") || n.includes("landform") || n.includes("mountain") || n.includes("river") || n.includes("climate") || n.includes("continent")) return BANKS["geography"];
  if (n.includes("govern") || n.includes("parliament") || n.includes("constitution") || n.includes("judiciary") || n.includes("democracy") || n.includes("justice") || n.includes("admin")) return BANKS["government"];
  if (n.includes("world") || n.includes("global") || n.includes("united nation")) return BANKS["world"];
  if (n.includes("resource") || n.includes("agriculture") || n.includes("industri") || n.includes("mineral") || n.includes("human resource")) return BANKS["resources"];
  if (n.includes("india") || n.includes("state") || n.includes("capital")) return BANKS["india"];
  return FALLBACK;
}

export function generateSocialStudiesQuestions(
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
