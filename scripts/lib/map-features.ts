// Approximate [lon, lat] for named geographic features — good enough for a
// classroom reference map (within ~1–2°). Rivers / ranges are short polylines
// from roughly mouth → source.

export type LL = [number, number];

// ── World rivers (mouth → upstream) ─────────────────────────────────────────
export const WORLD_RIVERS: Record<string, LL[]> = {
  Nile: [[31.5, 30.5], [32.9, 24.1], [32.5, 15.6], [31.8, 9.5], [32.5, 3.5]],
  "Amazon": [[-50, -0.5], [-55, -2.5], [-60, -3.3], [-67, -3.8], [-73, -4.5]],
  Yangtze: [[121.8, 31.4], [114, 30.5], [107, 29.6], [99, 27], [91, 33]],
  Mississippi: [[-89.3, 29.2], [-90.2, 35], [-91, 40], [-92, 44], [-95.2, 47.2]],
  "Yenisei": [[82, 71.8], [86, 66], [92, 58], [94, 53]],
  "Yellow River": [[118.9, 37.5], [113, 35], [104, 36], [96, 35]],
  Ob: [[68, 66.5], [72, 61], [79, 56], [84, 52]],
  "Paraná": [[-58.4, -34], [-58, -27], [-55, -24], [-52, -21]],
  Congo: [[13.1, -6], [16, -4], [20, -1], [25, 0.5], [27, 4]],
  Amur: [[141, 53], [135, 48], [128, 47], [121, 49]],
  Lena: [[126, 72], [128, 66], [124, 60], [108, 55]],
  Mekong: [[106.2, 10], [105, 15], [102, 20], [98, 26], [94, 33]],
  Niger: [[6.5, 4.8], [3, 12], [-4, 14], [-8, 13], [-10, 11]],
  Volga: [[48, 46], [46, 50], [45, 55], [37, 58]],
  Danube: [[29.7, 45.2], [26, 44], [21, 45], [16, 48], [8.2, 48]],
  Ganges: [[89, 22.5], [86, 25], [83, 25.5], [78, 30]],
  Indus: [[67.5, 24], [69, 28], [71, 32], [74, 35], [81, 32]],
  Brahmaputra: [[90.5, 24], [92, 26], [95, 27.5], [90, 29]],
  Rhine: [[6.1, 51.9], [7, 50], [8, 48], [9.5, 46.5]],
  Colorado: [[-114.6, 31.8], [-114, 36], [-111, 37], [-108, 39]],
  "Rio Grande": [[-97.2, 25.9], [-101, 29.5], [-105, 31.8], [-106.5, 35], [-106.6, 37.8]],
  Columbia: [[-124, 46.2], [-121, 46], [-118, 46], [-117, 49], [-116, 51]],
  Zambezi: [[36.3, -18.5], [33, -16], [28, -16], [24, -17], [23, -13]],
  Murray: [[139.3, -35.5], [143, -34], [146, -35], [148, -36]],
};

// ── World mountains (single peaks) ─────────────────────────────────────────
export const WORLD_MOUNTAINS: Record<string, LL> = {
  "Mount Everest": [86.93, 27.99],
  K2: [76.51, 35.88],
  Kangchenjunga: [88.15, 27.7],
  "Aconcagua": [-70.01, -32.65],
  Denali: [-151, 63.07],
  "Mount Kilimanjaro": [37.35, -3.07],
  "Mount Elbrus": [42.44, 43.35],
  "Vinson Massif": [-85.62, -78.53],
  "Puncak Jaya": [137.16, -4.08],
  Matterhorn: [7.66, 45.98],
  "Mont Blanc": [6.86, 45.83],
  "Mount Fuji": [138.73, 35.36],
  "Mauna Kea": [-155.47, 19.82],
  "Mount McKinley": [-151, 63.07],
  Chimborazo: [-78.82, -1.47],
  "Nanda Devi": [79.97, 30.37],
  "Anai Mudi": [77.06, 10.17],
};

// ── World mountain ranges (polylines along the crest) ──────────────────────
export const WORLD_RANGES: Record<string, LL[]> = {
  Himalayas: [[73, 35], [78, 32], [83, 29], [88, 28], [95, 29]],
  Andes: [[-72, 10], [-77, -5], [-70, -18], [-69, -30], [-71, -42], [-73, -52]],
  "Rocky Mountains": [[-114, 50], [-111, 44], [-107, 39], [-105, 35]],
  "Appalachian Mountains": [[-68, 46], [-76, 40], [-82, 36], [-84, 34]],
  Alps: [[6, 45], [9, 46], [12, 47], [15, 47]],
  Pyrenees: [[-1.5, 43], [0.5, 42.6], [2.5, 42.4]],
  "Ural Mountains": [[59, 68], [59, 60], [58, 54], [58, 48]],
  "Atlas Mountains": [[-9, 31], [-5, 32], [0, 34], [5, 36], [9, 37]],
  "Great Dividing Range": [[145, -17], [149, -25], [151, -32], [149, -37]],
  "Transantarctic Mountains": [[160, -78], [180, -83], [-150, -85], [-60, -85]],
  "Western Ghats": [[73.5, 20], [74, 15], [76, 11], [77, 8.5]],
  "Eastern Ghats": [[85, 20], [82, 17], [79, 13.5], [78, 11.5]],
  "Aravalli Range": [[73, 24.5], [74.5, 26], [76, 27.5], [77.2, 28.6]],
  Vindhya: [[74, 22.5], [78, 23.5], [82, 24]],
  Satpura: [[73.5, 21.7], [78, 22.2], [81, 22.5]],
  Karakoram: [[74, 36], [76.5, 35.9], [78, 35.5]],
};

// ── Deserts (label at centre) ─────────────────────────────────────────────
export const WORLD_DESERTS: Record<string, LL> = {
  "Sahara Desert": [13, 23],
  "Arabian Desert": [45, 22],
  "Gobi Desert": [105, 43],
  "Kalahari Desert": [21, -23],
  "Namib Desert": [14.5, -24],
  "Patagonian Desert": [-69, -46],
  "Great Victoria Desert": [128, -29],
  "Great Sandy Desert": [124, -21],
  "Atacama Desert": [-69.5, -24],
  "Mojave Desert": [-116, 35],
  "Sonoran Desert": [-112, 31],
  "Chihuahuan Desert": [-105, 27],
  "Thar Desert": [72, 27],
  "Taklamakan Desert": [82, 39],
  "Antarctic Desert": [45, -80],
  "Arctic Desert": [-40, 80],
};

// ── Lakes ────────────────────────────────────────────────────────────────
export const WORLD_LAKES: Record<string, LL> = {
  "Caspian Sea": [50.5, 41.5],
  "Lake Superior": [-87.5, 47.7],
  "Lake Victoria": [33, -1],
  "Lake Huron": [-82.4, 44.8],
  "Lake Michigan": [-87, 43.5],
  "Lake Tanganyika": [29.6, -6],
  "Lake Baikal": [107.7, 53.5],
  "Great Bear Lake": [-121, 66],
  "Lake Malawi": [34.5, -12],
  "Great Slave Lake": [-114, 61.6],
  "Lake Erie": [-81.2, 42.2],
  "Lake Ontario": [-77.8, 43.7],
  "Lake Titicaca": [-69.4, -15.8],
  "Lake Chad": [14, 13.5],
  "Aral Sea": [59.5, 45],
  "Great Salt Lake": [-112.5, 41],
  "Dead Sea": [35.5, 31.5],
  "Lake Eyre": [137.3, -28.7],
};

// ── Islands ──────────────────────────────────────────────────────────────
export const WORLD_ISLANDS: Record<string, LL> = {
  Greenland: [-42, 74],
  "New Guinea": [141, -5],
  Borneo: [114, 1],
  Madagascar: [46.7, -19],
  "Baffin Island": [-72, 68],
  Sumatra: [101.5, 0],
  Honshu: [138, 36],
  "Great Britain": [-1.5, 53],
  Victoria: [-110, 71],
  Ellesmere: [-80, 79.5],
  Sulawesi: [120.5, -2],
  "South Island": [170, -44],
  Java: [110, -7.5],
  "North Island": [175.5, -39],
  "Sri Lanka": [80.7, 7.9],
  Cuba: [-79, 21.7],
  Iceland: [-18.6, 64.9],
  Hispaniola: [-71, 19],
};

// ── Seas / gulfs / bays ──────────────────────────────────────────────────
export const WORLD_SEAS: Record<string, LL> = {
  "Mediterranean Sea": [17, 35],
  "Caribbean Sea": [-75, 15],
  "South China Sea": [114, 12],
  "Bering Sea": [-178, 58],
  "Sea of Okhotsk": [150, 55],
  "Gulf of Mexico": [-90, 25],
  "Norwegian Sea": [2, 67],
  "Gulf of Guinea": [3, 2],
  "Barents Sea": [40, 74],
  "Hudson Bay": [-85, 59],
  "Arabian Sea": [63, 15],
  "Bay of Bengal": [88, 13],
  "Red Sea": [37.5, 20],
  "Black Sea": [34, 43],
  "North Sea": [3, 56],
  "Baltic Sea": [19, 58],
  "Persian Gulf": [51, 27],
  "Coral Sea": [155, -16],
};

// ── Peninsulas ───────────────────────────────────────────────────────────
export const WORLD_PENINSULAS: Record<string, LL> = {
  "Arabian Peninsula": [46, 23],
  "Iberian Peninsula": [-4, 40],
  "Scandinavian Peninsula": [15, 63],
  "Indian (Deccan) Peninsula": [78, 16],
  "Korean Peninsula": [127.5, 37],
  "Italian Peninsula": [13, 42],
  "Balkan Peninsula": [21, 42],
  "Anatolian Peninsula": [33, 39],
  "Florida Peninsula": [-81.5, 28],
  "Baja California Peninsula": [-113, 27],
  "Kamchatka Peninsula": [159, 56],
  "Labrador Peninsula": [-64, 54],
};

// ── Volcanoes ────────────────────────────────────────────────────────────
export const WORLD_VOLCANOES: Record<string, LL> = {
  "Mount Fuji": [138.73, 35.36],
  "Mount Vesuvius": [14.43, 40.82],
  "Mount Etna": [15, 37.75],
  Krakatoa: [105.42, -6.1],
  "Mount St. Helens": [-122.18, 46.2],
  "Mauna Loa": [-155.6, 19.48],
  "Mount Kilimanjaro": [37.35, -3.07],
  "Popocatépetl": [-98.62, 19.02],
  "Eyjafjallajökull": [-19.6, 63.63],
  "Mount Pinatubo": [120.35, 15.13],
  "Mount Rainier": [-121.76, 46.85],
  "Cotopaxi": [-78.44, -0.68],
  "Nevado Ojos del Salado": [-68.54, -27.11],
  "Mount Erebus": [167.15, -77.53],
};

// ── Rainforests ──────────────────────────────────────────────────────────
export const RAINFORESTS: Record<string, LL> = {
  "Amazon Rainforest": [-62, -5],
  "Congo Rainforest": [22, 0],
  "Southeast Asian Rainforest": [113, 2],
  "Daintree Rainforest": [145.4, -16.2],
  "Valdivian Rainforest": [-72.5, -41],
  "New Guinea Rainforest": [142, -5],
};

// ── Biomes (band centres) ────────────────────────────────────────────────
export const BIOMES: Record<string, LL> = {
  Tundra: [100, 71],
  "Taiga (Boreal Forest)": [95, 58],
  "Temperate Forest": [-80, 40],
  "Temperate Grassland": [-100, 42],
  Desert: [15, 23],
  "Savanna": [22, 10],
  "Tropical Rainforest": [-62, -3],
  "Mediterranean": [5, 38],
};

// ── Major plate labels ───────────────────────────────────────────────────
export const PLATES: Record<string, LL> = {
  "Pacific Plate": [-160, 0],
  "North American Plate": [-100, 45],
  "South American Plate": [-60, -20],
  "Eurasian Plate": [80, 55],
  "African Plate": [20, 5],
  "Antarctic Plate": [40, -82],
  "Indo-Australian Plate": [125, -20],
  "Nazca Plate": [-90, -20],
};

// ── World capital cities (country → [capital, lon, lat]) ─────────────────
export const CAPITALS: Record<string, [string, number, number]> = {
  "United Kingdom": ["London", -0.13, 51.5],
  France: ["Paris", 2.35, 48.85],
  Germany: ["Berlin", 13.4, 52.52],
  Italy: ["Rome", 12.5, 41.9],
  Spain: ["Madrid", -3.7, 40.4],
  Russia: ["Moscow", 37.6, 55.75],
  Greece: ["Athens", 23.73, 37.98],
  Poland: ["Warsaw", 21, 52.23],
  China: ["Beijing", 116.4, 39.9],
  India: ["New Delhi", 77.2, 28.6],
  Japan: ["Tokyo", 139.7, 35.68],
  Indonesia: ["Jakarta", 106.85, -6.2],
  "Saudi Arabia": ["Riyadh", 46.7, 24.7],
  Iran: ["Tehran", 51.4, 35.7],
  Thailand: ["Bangkok", 100.5, 13.75],
  "South Korea": ["Seoul", 126.98, 37.57],
  Egypt: ["Cairo", 31.24, 30.05],
  Nigeria: ["Abuja", 7.5, 9.06],
  "South Africa": ["Pretoria", 28.19, -25.75],
  Kenya: ["Nairobi", 36.82, -1.29],
  Ethiopia: ["Addis Ababa", 38.75, 9.02],
  Morocco: ["Rabat", -6.83, 34.02],
  "United States of America": ["Washington, D.C.", -77.04, 38.9],
  Canada: ["Ottawa", -75.7, 45.42],
  Mexico: ["Mexico City", -99.13, 19.43],
  Brazil: ["Brasília", -47.93, -15.78],
  Argentina: ["Buenos Aires", -58.4, -34.6],
  Australia: ["Canberra", 149.13, -35.28],
};

// ── World cities for coordinate practice ─────────────────────────────────
export const WORLD_CITIES: Record<string, LL> = {
  London: [-0.13, 51.5],
  "New York": [-74, 40.7],
  "New Delhi": [77.2, 28.6],
  Tokyo: [139.7, 35.7],
  Sydney: [151.2, -33.87],
  Cairo: [31.24, 30.05],
  "Rio de Janeiro": [-43.2, -22.9],
  Nairobi: [36.82, -1.29],
  Moscow: [37.6, 55.75],
  "Los Angeles": [-118.24, 34.05],
};

// ── Landform / water-body diagram labels handled in the generator ────────

// ── India features (outline-only base) ──────────────────────────────────
export const INDIA_CITIES: Record<string, LL> = {
  "New Delhi": [77.2, 28.6],
  Mumbai: [72.88, 19.08],
  Kolkata: [88.36, 22.57],
  Chennai: [80.27, 13.08],
  Bengaluru: [77.59, 12.97],
  Hyderabad: [78.49, 17.39],
  Jaipur: [75.79, 26.91],
  Ahmedabad: [72.57, 23.03],
  Lucknow: [80.95, 26.85],
  Bhopal: [77.41, 23.26],
  Patna: [85.14, 25.59],
  Guwahati: [91.75, 26.14],
  Bhubaneswar: [85.82, 20.3],
  Thiruvananthapuram: [76.95, 8.52],
  Srinagar: [74.8, 34.08],
};

export const INDIA_RIVERS: Record<string, LL[]> = {
  Ganga: [[89, 22.5], [87, 25], [83, 25.6], [80, 27], [78, 30]],
  Yamuna: [[81.9, 25.4], [80, 26.5], [78, 27.5], [77.3, 28.6], [78.5, 31]],
  Brahmaputra: [[90.6, 24], [92, 26.5], [95, 27.5], [96, 29]],
  Indus: [[68, 24], [70, 28], [73, 32], [76, 34]],
  Godavari: [[82.3, 16.9], [80, 18], [77, 19], [74, 19.9], [73.5, 19.9]],
  Krishna: [[80.9, 15.9], [78, 16.5], [76, 16.8], [74, 17.5], [73.7, 17.9]],
  Narmada: [[72.6, 21.7], [75, 22.2], [78, 22.7], [81.7, 22.7]],
  Kaveri: [[79.85, 11.35], [78.5, 11.5], [77.5, 12], [76, 12.4], [75.8, 12.4]],
  Mahanadi: [[86.7, 20.3], [84.5, 20.7], [82.5, 21], [81.9, 20.1]],
  Tapi: [[72.7, 21.1], [75, 21.3], [77.5, 21.4], [78.4, 21.5]],
};

export const INDIA_FEATURES: Record<string, LL> = {
  Himalayas: [80, 32],
  "Thar Desert": [72, 27],
  "Deccan Plateau": [77, 17.5],
  "Western Ghats": [74, 14],
  "Eastern Ghats": [82, 16],
  "Aravalli Range": [74, 26],
  "Ganga Plain": [82, 27],
  "Rann of Kutch": [70, 24],
  Sundarbans: [89, 22],
};

export const INDIA_PARKS: Record<string, LL> = {
  "Jim Corbett NP": [78.9, 29.5],
  "Kaziranga NP": [93.4, 26.6],
  "Gir NP": [70.8, 21.1],
  "Ranthambore NP": [76.5, 26],
  "Sundarbans NP": [88.9, 21.9],
  "Kanha NP": [80.6, 22.3],
  "Bandhavgarh NP": [81, 23.7],
  "Periyar NP": [77.2, 9.5],
  "Hemis NP": [77.5, 34],
  "Bandipur NP": [76.6, 11.7],
};

export const INDIA_HERITAGE: Record<string, LL> = {
  "Taj Mahal (Agra)": [78.04, 27.17],
  "Red Fort (Delhi)": [77.24, 28.66],
  "Qutub Minar (Delhi)": [77.19, 28.52],
  "Hampi": [76.47, 15.34],
  "Khajuraho": [79.92, 24.85],
  "Ajanta & Ellora": [75.7, 20.55],
  "Sanchi Stupa": [77.74, 23.48],
  "Konark Sun Temple": [86.09, 19.89],
  "Mahabalipuram": [80.19, 12.62],
  "Golden Temple (Amritsar)": [74.88, 31.62],
  "Gateway of India (Mumbai)": [72.83, 18.92],
};

// ── US rivers ────────────────────────────────────────────────────────────
export const US_RIVERS: Record<string, LL[]> = {
  "Mississippi River": [[-89.25, 29.15], [-91, 33], [-90, 38.6], [-91.5, 43], [-95.2, 47.2]],
  "Missouri River": [[-90.2, 38.8], [-96, 41], [-100, 43], [-104, 47], [-111.5, 45.9]],
  "Ohio River": [[-89, 37], [-86, 37.9], [-82, 38.5], [-80, 40.4]],
  "Colorado River": [[-114.6, 31.8], [-114, 36.1], [-111.6, 36.9], [-108, 39], [-105.8, 40.4]],
  "Rio Grande": [[-97.2, 25.9], [-101, 29.4], [-105, 31.8], [-106.5, 35], [-106.6, 37.8]],
  "Columbia River": [[-124, 46.25], [-121, 45.7], [-119, 46], [-117.5, 46.2], [-118, 48.9]],
  "Arkansas River": [[-91.2, 33.9], [-95, 35.4], [-99, 37], [-104, 38.3], [-106, 39.2]],
  "Tennessee River": [[-89, 37], [-88, 35], [-86, 34.9], [-83.5, 35.7]],
  "Hudson River": [[-74, 40.7], [-73.9, 42], [-73.7, 43.3], [-73.9, 44]],
  "Snake River": [[-118, 46.2], [-117, 44], [-114, 43.5], [-111, 43.6]],
};

export const GREAT_LAKES: Record<string, LL> = {
  "Lake Superior": [-87.5, 47.7],
  "Lake Michigan": [-87, 43.6],
  "Lake Huron": [-82.4, 44.8],
  "Lake Erie": [-81.2, 42.2],
  "Lake Ontario": [-77.8, 43.7],
  "Niagara Falls": [-79.07, 43.08],
};

// ── History-map features ────────────────────────────────────────────────
export const EGYPT_SITES: Record<string, LL> = {
  Memphis: [31.25, 29.85],
  Thebes: [32.6, 25.7],
  "Giza (Pyramids)": [31.13, 29.98],
  Alexandria: [29.92, 31.2],
  "Aswan (1st Cataract)": [32.9, 24.09],
  "Nile Delta": [31, 31],
  "Valley of the Kings": [32.6, 25.74],
};

export const GREECE_SITES: Record<string, LL> = {
  Athens: [23.73, 37.98],
  Sparta: [22.43, 37.08],
  Corinth: [22.93, 37.94],
  Thebes: [23.32, 38.32],
  Delphi: [22.5, 38.48],
  Olympia: [21.63, 37.64],
  Marathon: [23.96, 38.15],
  Knossos: [25.16, 35.3],
  Troy: [26.24, 39.96],
};

export const ROME_SITES: Record<string, LL> = {
  Rome: [12.5, 41.9],
  Carthage: [10.32, 36.85],
  Alexandria: [29.92, 31.2],
  Antioch: [36.16, 36.2],
  Londinium: [-0.09, 51.51],
  "Byzantium": [28.98, 41.01],
  "Hadrian's Wall": [-2.3, 55],
};

export const COLONY_SITES: Record<string, LL> = {
  "New Hampshire": [-71.5, 43.6],
  Massachusetts: [-71.8, 42.2],
  "Rhode Island": [-71.5, 41.7],
  Connecticut: [-72.7, 41.6],
  "New York": [-74.7, 42.2],
  "New Jersey": [-74.6, 40.2],
  Pennsylvania: [-77.2, 40.9],
  Delaware: [-75.5, 39],
  Maryland: [-76.6, 39],
  Virginia: [-78.5, 37.5],
  "North Carolina": [-79.4, 35.5],
  "South Carolina": [-80.9, 33.9],
  Georgia: [-83.4, 32.6],
};

export const INDUS_SITES: Record<string, LL> = {
  Harappa: [72.86, 30.63],
  "Mohenjo-daro": [68.14, 27.33],
  Dholavira: [70.21, 23.89],
  Lothal: [72.25, 22.52],
  Kalibangan: [74.13, 29.47],
  Rakhigarhi: [76.11, 29.28],
  Ganweriwala: [71.5, 28.6],
};
