// ─────────────────────────────────────────────────────────────────────────────
// Knowledge articles — illustrated explainers about nature's cycles for K–8.
// Each article links out to the relevant grade + subject worksheet pages.
// Rendered by src/app/knowledge/[slug]/page.tsx.
// ─────────────────────────────────────────────────────────────────────────────

import {
  GRADES_CURRICULUM,
  SUBJECTS_META,
  getTopicsForGradeSubject,
  slugifyTopic,
} from "./curriculum";

export type KnowledgeAccent = "sky" | "orange" | "emerald" | "amber" | "violet";

export interface AccentTokens {
  /** hero + tile gradient — Tailwind from / via / to classes */
  gradient: string;
  text: string;
  groupHoverText: string;
  softBg: string;
  softBorder: string;
  chipBg: string;
  chipText: string;
  ring: string;
  dot: string;
  strongBg: string;
  strongHoverBg: string;
  /** hex pair used inside inline SVG illustrations */
  svg: { a: string; b: string; ink: string };
}

// NOTE: every class string below must appear here in full so Tailwind's
// source scanner keeps it in the build. Do not build these names dynamically.
export const ACCENTS: Record<KnowledgeAccent, AccentTokens> = {
  sky: {
    gradient: "from-sky-500 via-cyan-500 to-blue-600",
    text: "text-sky-700",
    groupHoverText: "group-hover:text-sky-700",
    softBg: "bg-sky-50",
    softBorder: "border-sky-200",
    chipBg: "bg-sky-100",
    chipText: "text-sky-700",
    ring: "ring-sky-200",
    dot: "bg-sky-500",
    strongBg: "bg-sky-600",
    strongHoverBg: "hover:bg-sky-500",
    svg: { a: "#38bdf8", b: "#2563eb", ink: "#0c4a6e" },
  },
  orange: {
    gradient: "from-orange-400 via-pink-500 to-fuchsia-600",
    text: "text-orange-700",
    groupHoverText: "group-hover:text-orange-700",
    softBg: "bg-orange-50",
    softBorder: "border-orange-200",
    chipBg: "bg-orange-100",
    chipText: "text-orange-700",
    ring: "ring-orange-200",
    dot: "bg-orange-500",
    strongBg: "bg-orange-600",
    strongHoverBg: "hover:bg-orange-500",
    svg: { a: "#fb923c", b: "#db2777", ink: "#9a3412" },
  },
  emerald: {
    gradient: "from-lime-500 via-emerald-500 to-green-600",
    text: "text-emerald-700",
    groupHoverText: "group-hover:text-emerald-700",
    softBg: "bg-emerald-50",
    softBorder: "border-emerald-200",
    chipBg: "bg-emerald-100",
    chipText: "text-emerald-700",
    ring: "ring-emerald-200",
    dot: "bg-emerald-500",
    strongBg: "bg-emerald-600",
    strongHoverBg: "hover:bg-emerald-500",
    svg: { a: "#4ade80", b: "#16a34a", ink: "#14532d" },
  },
  amber: {
    gradient: "from-amber-500 via-orange-600 to-stone-700",
    text: "text-amber-700",
    groupHoverText: "group-hover:text-amber-700",
    softBg: "bg-amber-50",
    softBorder: "border-amber-200",
    chipBg: "bg-amber-100",
    chipText: "text-amber-800",
    ring: "ring-amber-200",
    dot: "bg-amber-600",
    strongBg: "bg-amber-600",
    strongHoverBg: "hover:bg-amber-500",
    svg: { a: "#f59e0b", b: "#78350f", ink: "#78350f" },
  },
  violet: {
    gradient: "from-teal-400 via-cyan-500 to-violet-600",
    text: "text-violet-700",
    groupHoverText: "group-hover:text-violet-700",
    softBg: "bg-violet-50",
    softBorder: "border-violet-200",
    chipBg: "bg-violet-100",
    chipText: "text-violet-700",
    ring: "ring-violet-200",
    dot: "bg-violet-500",
    strongBg: "bg-violet-600",
    strongHoverBg: "hover:bg-violet-500",
    svg: { a: "#2dd4bf", b: "#7c3aed", ink: "#4c1d95" },
  },
};

export interface CycleStep {
  emoji: string;
  label: string;
  description: string;
}

export interface KnowledgeSection {
  heading: string;
  paragraphs: string[];
}

/** A pointer to a curriculum grade + subject (and optionally an exact topic). */
export interface RelatedLink {
  gradeId: string;
  subjectId: string;
  topic?: string;
}

export interface KnowledgeArticle {
  slug: string;
  title: string;
  subtitle: string;
  emoji: string;
  accent: KnowledgeAccent;
  readingMinutes: number;
  /** One-sentence "big idea" shown in the hero. */
  bigIdea: string;
  /** Lead paragraph. */
  intro: string;
  cycleTitle: string;
  cycle: CycleStep[];
  sections: KnowledgeSection[];
  vocabulary: { term: string; definition: string }[];
  facts: string[];
  /** Try-it-yourself activity for parents / teachers. */
  activity: { title: string; steps: string[] };
  related: RelatedLink[];
}

export const KNOWLEDGE_ARTICLES: KnowledgeArticle[] = [
  // ──────────────────────────────────────────────────────────────────────────
  {
    slug: "water-life-cycle",
    title: "The Water Life Cycle",
    subtitle: "How the same water travels from the ocean to the sky and back again",
    emoji: "💧",
    accent: "sky",
    readingMinutes: 5,
    bigIdea:
      "Earth has never made a single new drop of water — it keeps cleaning and reusing the same water, over and over, forever.",
    intro:
      "Every glass of water you drink has been on an incredible journey. It has floated in clouds, frozen inside glaciers, rushed down rivers, and soaked deep into the ground. The water cycle is nature's way of moving water around the planet and cleaning it along the way. Powered entirely by the Sun and gravity, it never stops — not for a single second.",
    cycleTitle: "The five stops on water's journey",
    cycle: [
      {
        emoji: "☀️",
        label: "Evaporation",
        description:
          "The Sun heats the surface of oceans, lakes and rivers. Liquid water turns into an invisible gas called water vapour and rises into the air.",
      },
      {
        emoji: "🌿",
        label: "Transpiration",
        description:
          "Plants pull water up from the soil through their roots and release it as vapour through tiny holes in their leaves. A large tree can release hundreds of litres a day.",
      },
      {
        emoji: "☁️",
        label: "Condensation",
        description:
          "High in the cooler air, water vapour cools and clings to specks of dust, turning back into tiny liquid droplets. Billions of these droplets together make a cloud.",
      },
      {
        emoji: "🌧️",
        label: "Precipitation",
        description:
          "When the droplets grow heavy enough, they fall as rain, snow, sleet or hail. This is how water returns from the sky to the land and sea.",
      },
      {
        emoji: "🏞️",
        label: "Collection & runoff",
        description:
          "Fallen water flows downhill into streams, rivers, lakes and oceans, or soaks into the ground to become groundwater. From there the Sun lifts it up again and the cycle repeats.",
      },
    ],
    sections: [
      {
        heading: "The Sun is the engine",
        paragraphs: [
          "The whole cycle runs on energy from the Sun. Sunlight warms water until the fastest-moving particles escape into the air as vapour. Without the Sun's heat, evaporation would stop and the cycle would grind to a halt.",
          "Gravity does the other half of the work. It pulls raindrops out of clouds and drags rivers downhill toward the sea, keeping the water moving in a loop instead of piling up in one place.",
        ],
      },
      {
        heading: "Where does all the water go?",
        paragraphs: [
          "About 97% of Earth's water sits in the salty oceans. Only a small slice is fresh water, and most of that is locked away in ice caps and glaciers or hidden underground. The rivers and lakes we can see hold just a tiny fraction.",
          "Water can pause at any stage for a very long time. A drop might spend a week in the atmosphere, thousands of years frozen in a glacier, or tens of thousands of years deep underground before rejoining the flow.",
        ],
      },
      {
        heading: "Why the water cycle matters",
        paragraphs: [
          "The water cycle delivers fresh water to farms, forests and cities. It shapes weather and climate, carves valleys and canyons over millions of years, and moves nutrients between land and sea.",
          "When people cut down forests, pave over soil, or add pollution to rivers, they change how water moves and how clean it is when it arrives. Understanding the cycle helps us protect the water everyone depends on.",
        ],
      },
    ],
    vocabulary: [
      { term: "Evaporation", definition: "The change from liquid water into water vapour (a gas)." },
      { term: "Condensation", definition: "The change from water vapour back into liquid droplets." },
      { term: "Precipitation", definition: "Water falling from clouds as rain, snow, sleet or hail." },
      { term: "Water vapour", definition: "Water in its invisible gas form, floating in the air." },
      { term: "Transpiration", definition: "Water vapour released into the air by plants through their leaves." },
      { term: "Groundwater", definition: "Water stored underground in the spaces between soil and rock." },
    ],
    facts: [
      "The water you drank today may once have been sipped by a dinosaur — it is the same water, just recycled.",
      "A single raindrop can fall at speeds of up to 30 km/h.",
      "At any moment the atmosphere holds about 13,000 cubic kilometres of water — enough to cover the whole planet if it all fell at once.",
      "Water is the only common substance on Earth found naturally as a solid, a liquid and a gas.",
      "It can take a drop of water around 3,000 years to make one full trip through the ocean.",
    ],
    activity: {
      title: "Make a water cycle in a bag",
      steps: [
        "Draw a Sun, a cloud and some waves on a zip-lock bag with a marker.",
        "Pour in a few spoonfuls of water with a drop of blue food colouring.",
        "Seal the bag and tape it to a sunny window.",
        "Over a few hours, watch droplets form near the top (condensation) and slide back down (precipitation).",
      ],
    },
    related: [
      { gradeId: "grade-4", subjectId: "evs", topic: "Water Cycle" },
      { gradeId: "grade-5", subjectId: "science", topic: "Water Cycle" },
      { gradeId: "grade-4", subjectId: "evs", topic: "Air" },
    ],
  },

  // ──────────────────────────────────────────────────────────────────────────
  {
    slug: "butterfly-life-cycle",
    title: "The Life Cycle of a Butterfly",
    subtitle: "The astonishing four-stage transformation from egg to winged adult",
    emoji: "🦋",
    accent: "orange",
    readingMinutes: 5,
    bigIdea:
      "A caterpillar does not grow wings — inside its chrysalis it almost completely dissolves and rebuilds itself into a butterfly.",
    intro:
      "Few changes in nature are as dramatic as the one a butterfly makes. It begins life as a tiny egg, becomes an eating machine with no wings, seals itself inside a case, and emerges as a delicate flying insect. This process is called complete metamorphosis, and it happens in four clear stages.",
    cycleTitle: "The four stages of metamorphosis",
    cycle: [
      {
        emoji: "🥚",
        label: "Egg",
        description:
          "A female butterfly lays tiny eggs on a leaf — almost always on a plant the future caterpillar can eat. Eggs usually hatch within 3 to 7 days.",
      },
      {
        emoji: "🐛",
        label: "Larva (caterpillar)",
        description:
          "The caterpillar's only job is to eat and grow. It munches leaves day and night and sheds its skin several times because its body outgrows it. Some caterpillars grow 100 times bigger.",
      },
      {
        emoji: "🟢",
        label: "Pupa (chrysalis)",
        description:
          "The caterpillar attaches to a stem and forms a hard case called a chrysalis. Inside, its body breaks down into a soupy mixture and reorganises into wings, legs and antennae.",
      },
      {
        emoji: "🦋",
        label: "Adult butterfly",
        description:
          "The adult breaks out, pumps fluid into its crumpled wings until they stiffen, and flies off. It sips nectar, finds a mate, and the females lay eggs — starting the cycle again.",
      },
    ],
    sections: [
      {
        heading: "What really happens inside the chrysalis",
        paragraphs: [
          "The chrysalis looks still and quiet, but inside it is one of the busiest places in nature. Special cells that were hidden in the caterpillar, called imaginal discs, switch on and build the adult body part by part.",
          "Scientists have shown that a butterfly can still remember things it learned as a caterpillar. So even though most of the body is rebuilt, a thread of memory survives the transformation.",
        ],
      },
      {
        heading: "Why change so completely?",
        paragraphs: [
          "Living as two totally different animals is a clever survival trick. The caterpillar is built for eating leaves and staying hidden. The butterfly is built for flying, drinking nectar and travelling to find mates and new plants.",
          "Because they eat different food and live in different places, caterpillars and adults never compete with each other for the same meal — even though they are the same creature.",
        ],
      },
      {
        heading: "How long does it take?",
        paragraphs: [
          "For many butterflies the whole cycle takes about a month in warm weather. The adult stage is often the shortest — some butterflies live only a week or two as adults, just long enough to reproduce.",
          "The monarch butterfly is a famous exception. One special autumn generation lives for up to eight months and flies thousands of kilometres to spend the winter in warmer forests.",
        ],
      },
    ],
    vocabulary: [
      { term: "Metamorphosis", definition: "A major change in body form as an animal develops." },
      { term: "Larva", definition: "The young, worm-like stage of an insect — a caterpillar for butterflies." },
      { term: "Pupa", definition: "The resting stage where the larva transforms; a butterfly's pupa is a chrysalis." },
      { term: "Chrysalis", definition: "The hard protective case a butterfly pupa forms around itself." },
      { term: "Nectar", definition: "The sugary liquid inside flowers that adult butterflies drink for energy." },
      { term: "Molt", definition: "To shed and replace an old, outgrown outer skin." },
    ],
    facts: [
      "Butterflies taste with sensors on their feet — they stand on a leaf to check if it is the right food plant.",
      "A caterpillar has around 4,000 muscles in its body. Humans have about 600.",
      "The chrysalis of some tropical butterflies is shiny gold or silver, like polished metal.",
      "Butterfly wings are actually see-through — the colours come from thousands of tiny overlapping scales.",
      "Moths go through the same four stages, but usually spin a silk cocoon instead of forming a bare chrysalis.",
    ],
    activity: {
      title: "Raise and release a butterfly",
      steps: [
        "Find caterpillars on their host plant (milkweed for monarchs, fennel or parsley for swallowtails).",
        "Keep them in a ventilated container with fresh leaves added daily.",
        "Watch each stage and note the dates in a journal.",
        "Once the adult's wings are dry and firm, release it outdoors near flowers.",
      ],
    },
    related: [
      { gradeId: "grade-2", subjectId: "evs", topic: "Animals" },
      { gradeId: "grade-3", subjectId: "evs", topic: "Animals" },
      { gradeId: "grade-5", subjectId: "science", topic: "Animals" },
    ],
  },

  // ──────────────────────────────────────────────────────────────────────────
  {
    slug: "seed-to-plant-cycle",
    title: "The Seed-to-Plant Cycle",
    subtitle: "How a tiny seed becomes a plant that makes thousands of new seeds",
    emoji: "🌱",
    accent: "emerald",
    readingMinutes: 5,
    bigIdea:
      "A seed is a tiny plant packed inside a lunchbox — it carries a baby plant and its first meal, waiting for the right moment to wake up.",
    intro:
      "Inside every seed sleeps a tiny plant, called an embryo, along with a store of food to get it started. Given water, warmth and air, that seed will burst open, push a root down and a shoot up, and grow into a plant that flowers, makes new seeds, and starts the whole story over again.",
    cycleTitle: "From seed back to seed",
    cycle: [
      {
        emoji: "🌰",
        label: "Seed & dormancy",
        description:
          "A seed can wait — sometimes for years — in a resting state called dormancy. Its tough coat protects the baby plant and its packed lunch of stored food.",
      },
      {
        emoji: "💧",
        label: "Germination",
        description:
          "Water softens the seed coat and wakes the embryo. A root pushes down toward water and a shoot pushes up toward light. The seed's stored food powers this first growth.",
      },
      {
        emoji: "🌿",
        label: "Seedling & growth",
        description:
          "Once leaves unfold, the plant starts making its own food from sunlight, air and water through photosynthesis. Roots spread, the stem thickens, and the plant grows larger.",
      },
      {
        emoji: "🌸",
        label: "Flowering & pollination",
        description:
          "The mature plant grows flowers. Pollen moves from one flower to another — carried by bees, birds, wind or water — in a step called pollination.",
      },
      {
        emoji: "🍎",
        label: "Seeds & dispersal",
        description:
          "Pollinated flowers develop into fruits holding new seeds. Wind, animals, water and bursting pods scatter the seeds to new ground, where the cycle begins again.",
      },
    ],
    sections: [
      {
        heading: "What a seed needs to wake up",
        paragraphs: [
          "Three things trigger germination: water, the right temperature, and oxygen from the air. Light is not usually needed for a seed to sprout — many seeds germinate happily in the dark soil.",
          "The first root, called the radicle, always grows downward and the first shoot grows upward, no matter which way the seed is planted. The plant senses gravity and grows accordingly.",
        ],
      },
      {
        heading: "Making food from sunlight",
        paragraphs: [
          "Once green leaves appear, the plant no longer depends on the food stored in the seed. In photosynthesis, leaves use sunlight to combine water from the roots with carbon dioxide from the air, producing sugar for energy and releasing oxygen.",
          "This is why plants are called producers: they build their own food, and in doing so they feed almost every other living thing on Earth.",
        ],
      },
      {
        heading: "Why seeds travel",
        paragraphs: [
          "If every seed sprouted right next to its parent, the seedlings would crowd each other and fight for light and water. Seed dispersal spreads the next generation out so more of them survive.",
          "Plants have clever tricks for this: dandelion seeds have parachutes, burrs hook onto fur, coconuts float across oceans, and some pods dry out and explode, flinging seeds metres away.",
        ],
      },
    ],
    vocabulary: [
      { term: "Germination", definition: "The moment a seed sprouts and begins to grow into a plant." },
      { term: "Embryo", definition: "The tiny undeveloped plant inside a seed." },
      { term: "Photosynthesis", definition: "How green plants make food from sunlight, water and carbon dioxide." },
      { term: "Pollination", definition: "Moving pollen between flowers so seeds can form." },
      { term: "Seed dispersal", definition: "The way seeds are carried away from the parent plant." },
      { term: "Dormancy", definition: "A resting state in which a seed stays alive but does not grow." },
    ],
    facts: [
      "Scientists grew a healthy date palm from a 2,000-year-old seed found in an ancient fortress.",
      "The largest seed in the world, the coco de mer, can weigh as much as a small child — up to 25 kg.",
      "An orchid seed pod can hold over a million dust-sized seeds.",
      "About 90% of the plants we eat come from flowering plants that make seeds inside fruit.",
      "Some pine cones only open to release their seeds after the heat of a forest fire.",
    ],
    activity: {
      title: "Grow a bean in a jar",
      steps: [
        "Fold a damp paper towel and press it against the inside of a clear glass jar.",
        "Slip two or three dried beans between the towel and the glass.",
        "Keep the towel moist and place the jar somewhere warm and bright.",
        "Within a week you can watch the root, shoot and first leaves appear right through the glass.",
      ],
    },
    related: [
      { gradeId: "grade-3", subjectId: "evs", topic: "Plants" },
      { gradeId: "grade-4", subjectId: "evs", topic: "Plants" },
      { gradeId: "grade-5", subjectId: "science", topic: "Plants" },
    ],
  },

  // ──────────────────────────────────────────────────────────────────────────
  {
    slug: "decomposer-soil-cycle",
    title: "The Decomposer & Soil Cycle",
    subtitle: "How nature's clean-up crew turns dead leaves into living soil",
    emoji: "🍄",
    accent: "amber",
    readingMinutes: 5,
    bigIdea:
      "Nothing in nature is truly thrown away — decomposers recycle every dead leaf and creature back into food for new life.",
    intro:
      "When a leaf falls or an animal dies, it does not simply disappear. An army of fungi, bacteria and small animals gets to work breaking it down. They release the nutrients trapped inside back into the soil, where growing plants can use them again. Without decomposers, the world would be buried in dead material and life would run out of the building blocks it needs.",
    cycleTitle: "How dead matter becomes new soil",
    cycle: [
      {
        emoji: "🍂",
        label: "Dead matter falls",
        description:
          "Fallen leaves, twigs, fruit, animal droppings and dead creatures collect on the ground. This layer of organic litter is the decomposers' raw material.",
      },
      {
        emoji: "🪱",
        label: "Shredders move in",
        description:
          "Earthworms, woodlice, millipedes and beetle larvae chew the litter into tiny pieces. Breaking it up gives microbes far more surface to work on.",
      },
      {
        emoji: "🍄",
        label: "Fungi & bacteria break it down",
        description:
          "Fungal threads and bacteria release chemicals that digest the tough material, absorbing the energy and turning the rest into simpler substances.",
      },
      {
        emoji: "🌍",
        label: "Nutrients enter the soil",
        description:
          "Nitrogen, phosphorus, potassium and carbon are released into the soil as humus — a dark, spongy material that holds water and feeds plants.",
      },
      {
        emoji: "🌱",
        label: "Plants take them up",
        description:
          "Plant roots absorb the freed nutrients and use them to grow new leaves, stems and seeds — which will one day fall and feed the decomposers again.",
      },
    ],
    sections: [
      {
        heading: "Meet the clean-up crew",
        paragraphs: [
          "Decomposers are living things that feed on dead material. The main ones are fungi and bacteria, which do most of the chemical work. Detritivores like earthworms, millipedes and dung beetles help by physically breaking material apart and mixing it into the soil.",
          "A single teaspoon of healthy soil can contain more microbes than there are people on Earth. Most of them are decomposers, quietly recycling everything that dies.",
        ],
      },
      {
        heading: "Why soil is alive",
        paragraphs: [
          "Good soil is not just crushed rock. It is a mix of mineral grains, water, air and humus — the rich, dark material decomposers create. Humus acts like a sponge, holding water and nutrients where roots can reach them.",
          "It can take nature hundreds of years to build a few centimetres of fertile topsoil. That is why protecting soil from erosion and pollution matters so much.",
        ],
      },
      {
        heading: "Closing the loop",
        paragraphs: [
          "Energy in an ecosystem flows one way: from the Sun, to plants, to animals, and finally to decomposers. But the chemical nutrients go round and round in a loop, used again and again by generation after generation of living things.",
          "Composting at home does exactly what forest decomposers do. Food scraps and garden waste are broken down by the same fungi, bacteria and worms into a crumbly material that makes soil richer.",
        ],
      },
    ],
    vocabulary: [
      { term: "Decomposer", definition: "A living thing that feeds on and breaks down dead material." },
      { term: "Detritivore", definition: "An animal, like a worm, that eats dead matter and breaks it into pieces." },
      { term: "Humus", definition: "The dark, rich part of soil made from fully broken-down matter." },
      { term: "Nutrient", definition: "A substance living things need to grow, such as nitrogen or phosphorus." },
      { term: "Microorganism", definition: "A living thing too small to see without a microscope, such as a bacterium." },
      { term: "Compost", definition: "Decomposed food and plant waste used to enrich soil." },
    ],
    facts: [
      "The largest living organism known is a honey fungus in Oregon, USA — its underground threads spread across an area bigger than 1,600 football pitches.",
      "Earthworms can eat their own body weight in soil and litter every day.",
      "Fungi were breaking down wood for about 60 million years before any animal could digest it well.",
      "Without decomposers, the carbon locked in dead plants would never return to the air for new plants to use.",
      "Healthy garden soil is roughly one-quarter air and one-quarter water by volume.",
    ],
    activity: {
      title: "Build a decomposition column",
      steps: [
        "Cut the top off a large clear plastic bottle and add a layer of soil.",
        "Add fruit peel, a dead leaf, a small piece of bread and a scrap of paper.",
        "Cover lightly with more soil, add a few spoonfuls of water, and keep it in a warm spot.",
        "Check every few days for two to three weeks and record which items break down fastest.",
      ],
    },
    related: [
      { gradeId: "grade-3", subjectId: "evs", topic: "Soil" },
      { gradeId: "grade-7", subjectId: "science", topic: "Soil" },
      { gradeId: "grade-8", subjectId: "science", topic: "Microorganisms" },
    ],
  },

  // ──────────────────────────────────────────────────────────────────────────
  {
    slug: "oxygen-carbon-dioxide-breath-swap",
    title: "The Oxygen–Carbon Dioxide Breath Swap",
    subtitle: "How plants and animals trade the gases that keep each other alive",
    emoji: "🌬️",
    accent: "violet",
    readingMinutes: 5,
    bigIdea:
      "Every breath out feeds a plant, and every leaf in sunlight feeds your next breath in — animals and plants breathe for each other.",
    intro:
      "Air is a mixture of gases, and two of them are traded back and forth between living things all day long. Animals breathe in oxygen and breathe out carbon dioxide. Plants, in sunlight, do the reverse. This continuous swap keeps the air balanced and keeps almost every living thing alive.",
    cycleTitle: "How the gases go around",
    cycle: [
      {
        emoji: "🫁",
        label: "Animals breathe in oxygen",
        description:
          "Lungs (or gills, or skin) pull oxygen from the air into the blood, which carries it to every cell in the body.",
      },
      {
        emoji: "🔥",
        label: "Cells release energy",
        description:
          "Inside each cell, oxygen helps break down food to release energy — a process called cellular respiration. Carbon dioxide and water are left over.",
      },
      {
        emoji: "💨",
        label: "Animals breathe out carbon dioxide",
        description:
          "The waste carbon dioxide travels back to the lungs and is breathed out into the air, along with a little water vapour.",
      },
      {
        emoji: "🍃",
        label: "Plants take in carbon dioxide",
        description:
          "Leaves absorb carbon dioxide from the air through tiny pores called stomata, and draw up water through their roots.",
      },
      {
        emoji: "☀️",
        label: "Photosynthesis makes oxygen",
        description:
          "Using sunlight, leaves combine carbon dioxide and water into sugar for the plant, releasing oxygen back into the air for animals to breathe.",
      },
    ],
    sections: [
      {
        heading: "Two opposite reactions",
        paragraphs: [
          "Respiration and photosynthesis are almost perfect mirror images. Respiration takes sugar and oxygen and releases energy, carbon dioxide and water. Photosynthesis takes carbon dioxide and water and, with light energy, builds sugar and releases oxygen.",
          "Animals only do respiration. Plants do both: they photosynthesise in the light and respire all the time, day and night. Over a full day a healthy plant still produces far more oxygen than it uses.",
        ],
      },
      {
        heading: "Where our oxygen comes from",
        paragraphs: [
          "Forests matter, but most of the oxygen in the air is made by tiny drifting ocean plants and plant-like microbes called phytoplankton. Scientists estimate they produce roughly half of all the oxygen we breathe.",
          "The oxygen already in the atmosphere is a huge, stable store built up over billions of years. The daily swap keeps topping it up and removing carbon dioxide that living things add.",
        ],
      },
      {
        heading: "Keeping the balance",
        paragraphs: [
          "For a long time the amount of oxygen made and carbon dioxide removed roughly matched the amount animals and decomposers released. That balance is part of why Earth's air has stayed breathable.",
          "Burning fuels like coal, oil and wood releases extra carbon dioxide much faster than plants and oceans can take it back. Planting trees, protecting oceans and burning less fuel all help keep the swap in balance.",
        ],
      },
    ],
    vocabulary: [
      { term: "Respiration", definition: "How living cells release energy from food, using oxygen and giving off carbon dioxide." },
      { term: "Photosynthesis", definition: "How plants use sunlight to turn carbon dioxide and water into food and oxygen." },
      { term: "Oxygen", definition: "The gas in air that animals need to release energy from food." },
      { term: "Carbon dioxide", definition: "The gas animals breathe out and plants take in." },
      { term: "Stomata", definition: "Tiny openings on a leaf that let gases move in and out." },
      { term: "Phytoplankton", definition: "Microscopic ocean drifters that photosynthesise and make much of our oxygen." },
    ],
    facts: [
      "You breathe about 20,000 times a day, moving roughly 11,000 litres of air.",
      "A large leafy tree can release enough oxygen in a year for two people.",
      "Phytoplankton in the oceans make an estimated 50% or more of Earth's oxygen.",
      "Astronauts on the space station recycle their exhaled carbon dioxide and split water to make oxygen.",
      "Plants give off a small amount of carbon dioxide at night, which is why respiration and photosynthesis are not the same thing.",
    ],
    activity: {
      title: "See a plant breathe out oxygen",
      steps: [
        "Put a few sprigs of a water plant like Elodea into a clear glass of water.",
        "Cover them with a clear funnel and balance a water-filled test tube upside-down over the spout.",
        "Place the glass in bright sunlight.",
        "Over a few hours, bubbles of oxygen rise and collect at the top of the test tube.",
      ],
    },
    related: [
      { gradeId: "grade-4", subjectId: "evs", topic: "Air" },
      { gradeId: "grade-5", subjectId: "science", topic: "Air" },
      { gradeId: "grade-7", subjectId: "science", topic: "Respiration" },
    ],
  },
];

export function getArticle(slug: string): KnowledgeArticle | undefined {
  return KNOWLEDGE_ARTICLES.find((a) => a.slug === slug);
}

// ── Curriculum linking ──────────────────────────────────────────────────────

export interface ResolvedRelatedLink {
  href: string;
  gradeId: string;
  gradeLabel: string;
  gradeEmoji: string;
  gradeGradient: string;
  subjectId: string;
  subjectLabel: string;
  subjectEmoji: string;
  topic?: string;
}

/** Turn a RelatedLink into a real curriculum URL + display data. */
export function resolveRelatedLink(link: RelatedLink): ResolvedRelatedLink | null {
  const grade = GRADES_CURRICULUM.find((g) => g.id === link.gradeId);
  const subject = SUBJECTS_META[link.subjectId];
  if (!grade || !subject) return null;

  const topics = getTopicsForGradeSubject(link.gradeId, link.subjectId);
  const hasTopic = !!link.topic && topics.includes(link.topic);
  const href = hasTopic
    ? `/grades/${link.gradeId}/${link.subjectId}/${slugifyTopic(link.topic!)}`
    : `/grades/${link.gradeId}/${link.subjectId}`;

  return {
    href,
    gradeId: grade.id,
    gradeLabel: grade.label,
    gradeEmoji: grade.emoji,
    gradeGradient: grade.gradient,
    subjectId: subject.id,
    subjectLabel: subject.label,
    subjectEmoji: subject.emoji,
    topic: hasTopic ? link.topic : undefined,
  };
}

/** Distinct subject pages referenced by an article's related links. */
export function relatedSubjects(
  article: KnowledgeArticle
): { id: string; label: string; emoji: string }[] {
  const seen = new Map<string, { id: string; label: string; emoji: string }>();
  for (const link of article.related) {
    const s = SUBJECTS_META[link.subjectId];
    if (s && !seen.has(s.id)) seen.set(s.id, { id: s.id, label: s.label, emoji: s.emoji });
  }
  return [...seen.values()];
}

/** Distinct grades referenced by an article's related links (for tile chips). */
export function relatedGrades(
  article: KnowledgeArticle
): { id: string; label: string; emoji: string }[] {
  const seen = new Map<string, { id: string; label: string; emoji: string }>();
  for (const link of article.related) {
    const g = GRADES_CURRICULUM.find((x) => x.id === link.gradeId);
    if (g && !seen.has(g.id)) seen.set(g.id, { id: g.id, label: g.label, emoji: g.emoji });
  }
  return [...seen.values()];
}
