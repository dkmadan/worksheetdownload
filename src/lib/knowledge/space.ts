import { KnowledgeArticle } from "../knowledge";

export const SPACE_ARTICLES: KnowledgeArticle[] = [
  // 21. The Journey of Earth Around the Sun
  {
    slug: "journey-of-earth-around-sun",
    title: "The Journey of Earth Around the Sun",
    subtitle: "How our planet speeds through cosmic space on its 584-million-mile annual orbit",
    category: "Space",
    categorySlug: "space",
    categoryEmoji: "🪐",
    emoji: "🌍",
    accent: "indigo",
    readingMinutes: 5,
    bigIdea:
      "Right now, sitting completely still in your chair, you are hurtling through space around the Sun at 67,000 miles per hour (107,000 km/h)!",
    intro:
      "Every year, Earth completes a massive elliptical lap around the Sun. This 365.25-day journey—combined with Earth's loyal 23.5-degree tilt—creates our calendar year, regulates our climate, and guides the cycles of plant and animal life across the globe.",
    cycleTitle: "Earth's Year-Long Orbit and Astronomical Markers",
    cycle: [
      {
        emoji: "❄️",
        label: "1. Perihelion (Early January)",
        description:
          "Earth reaches its closest point to the Sun (about 147 million km away) during the Northern Hemisphere winter.",
      },
      {
        emoji: "🌱",
        label: "2. March Equinox (Spring Begins)",
        description:
          "Day and night are exactly equal as the Sun shines directly over Earth's equator.",
      },
      {
        emoji: "☀️",
        label: "3. Aphelion (Early July)",
        description:
          "Earth reaches its farthest point from the Sun (about 152 million km away) during the Northern Hemisphere summer.",
      },
      {
        emoji: "🍂",
        label: "4. September Equinox (Autumn Begins)",
        description:
          "Sunlight crosses the equator again, bringing crisp autumn days to the North and spring to the South.",
      },
      {
        emoji: "🎆",
        label: "5. Completing the 365.25-Day Loop",
        description:
          "Earth completes one full orbit; the extra 0.25 days add up to create a Leap Year day every four years on February 29.",
      },
    ],
    sections: [
      {
        heading: "Gravity: The Invisible Leash",
        paragraphs: [
          "Why doesn't Earth fly off into the dark depths of deep space? The Sun contains 99.8% of all mass in the Solar System. Its immense gravitational pull acts like an invisible tether, constantly bending Earth's path into a smooth, stable elliptical orbit.",
        ],
      },
      {
        heading: "Why We Need Leap Years",
        paragraphs: [
          "It takes Earth exactly 365 days, 5 hours, 48 minutes, and 46 seconds to circle the Sun. To keep our calendar aligned with the seasons, we add one extra day (February 29) every four years. Without leap years, July would eventually become a snowy winter month in the Northern Hemisphere!",
        ],
      },
      {
        heading: "The Goldilocks Habitable Zone",
        paragraphs: [
          "Earth's orbital distance from the Sun is in the 'Goldilocks Zone'—not too hot like Venus, not too cold like Mars, but just right for liquid water oceans to exist. Liquid water is the vital ingredient that allows life to flourish.",
        ],
      },
    ],
    vocabulary: [
      { term: "Orbit", definition: "The curved, repeating path that an object takes around a star or planet in space." },
      { term: "Perihelion", definition: "The point in a planet's orbit where it is closest to the Sun." },
      { term: "Aphelion", definition: "The point in a planet's orbit where it is farthest from the Sun." },
      { term: "Habitable Zone", definition: "The orbital region around a star where temperatures allow liquid water on a planet's surface." },
    ],
    facts: [
      "In the time it takes you to read this sentence (about 10 seconds), Earth has traveled over 300 kilometres through space!",
      "Earth's orbit is not a perfect circle—it is an ellipse (a slightly squashed oval).",
      "If you live to be 80 years old, you will have traveled over 74 billion kilometres around the Sun in your lifetime.",
    ],
    activity: {
      title: "Model an Elliptical Orbit with String & Pins",
      steps: [
        "Push two pushpins 10 cm apart into a sheet of cardboard (representing the two orbital focal points, one being the Sun).",
        "Tie a loop of string around both pins.",
        "Place a pencil inside the loop, pull the string taut, and trace a smooth oval around the pins to draw a true Keplerian ellipse!",
      ],
    },
    related: [
      { gradeId: "grade-5", subjectId: "science", topic: "Earth and Space" },
      { gradeId: "grade-6", subjectId: "social-studies", topic: "The Earth in the Solar System" },
      { gradeId: "grade-8", subjectId: "science", topic: "Stars and the Solar System" },
    ],
  },

  // 22. Why Do We Have Day and Night?
  {
    slug: "why-do-we-have-day-and-night",
    title: "Why Do We Have Day and Night?",
    subtitle: "How Earth's 24-hour axial rotation creates sunrise, shadows, and starry nights",
    category: "Space",
    categorySlug: "space",
    categoryEmoji: "🪐",
    emoji: "🌅",
    accent: "orange",
    readingMinutes: 5,
    bigIdea:
      "The Sun does not actually rise and move across the sky — Earth is spinning like a giant cosmic spinning top at 1,000 miles per hour!",
    intro:
      "Every morning, the Sun seems to climb out of the eastern horizon, travel high across the sky, and dip below the western horizon at dusk. For thousands of years, humans thought the Sun revolved around a stationary Earth. Today, we know the truth: Earth is spinning on its own axis every 24 hours.",
    cycleTitle: "The 24-Hour Cycle of Earth's Rotation",
    cycle: [
      {
        emoji: "🌅",
        label: "1. Dawn / Sunrise (East)",
        description:
          "As Earth rotates eastward, your location turns into the sunlight; long morning shadows point to the west.",
      },
      {
        emoji: "☀️",
        label: "2. Solar Noon (Peak)",
        description:
          "The Sun reaches its highest elevation in the sky; shadows shrink to their shortest length of the day.",
      },
      {
        emoji: "🌇",
        label: "3. Dusk / Sunset (West)",
        description:
          "Your location rotates away from the Sun; sunlight skims the atmosphere at a low angle, painting orange sunsets.",
      },
      {
        emoji: "🌌",
        label: "4. Midnight / Earth's Shadow",
        description:
          "Your side of the planet faces the deep darkness of space, revealing constellations, planets, and the Moon.",
      },
      {
        emoji: "⏰",
        label: "5. Completing the 24-Hour Turn",
        description:
          "One full 360-degree rotation is complete; the eastern horizon brightens again as a new day dawns.",
      },
    ],
    sections: [
      {
        heading: "Why Can't We Feel Earth Spinning?",
        paragraphs: [
          "Earth rotates at about 1,670 km/h (1,040 mph) at the equator. You don't feel it for the same reason you don't feel motion inside a smooth, cruising airplane at 500 mph: everything around you (the atmosphere, oceans, buildings, trees) is moving at the exact same constant speed!",
        ],
      },
      {
        heading: "Time Zones: Connecting the Spinning Globe",
        paragraphs: [
          "Because Earth rotates 360 degrees in 24 hours, it spins through 15 degrees of longitude every single hour. To keep noon aligned with the highest Sun position everywhere, the world is divided into 24 standard time zones.",
        ],
      },
      {
        heading: "The Terminator Line",
        paragraphs: [
          "Astronauts aboard the International Space Station can see the 'Terminator'—the crisp shadow boundary that separates day from night on Earth. From orbit, astronauts experience 16 sunrises and 16 sunsets every 24 hours as they zip around Earth every 90 minutes!",
        ],
      },
    ],
    vocabulary: [
      { term: "Rotation", definition: "The spinning of an object around its own internal axis (takes Earth 24 hours)." },
      { term: "Axis", definition: "An imaginary straight line through the North and South Poles around which Earth spins." },
      { term: "Terminator", definition: "The moving dividing line that separates the illuminated day side from the dark night side." },
      { term: "Time Zone", definition: "A geographic region of the globe that observes a uniform standard time for legal and social purposes." },
    ],
    facts: [
      "At the equator, you are spinning through space at over 1,600 km/h, but at the exact North Pole, you simply rotate in a slow circle in place!",
      "Earth's rotation is slowing down very slightly (by about 1.8 milliseconds per century) due to gravitational friction from the Moon's tides.",
      "Venus rotates backwards (retrograde rotation) and takes 243 Earth days to spin just once, making its day longer than its year!",
    ],
    activity: {
      title: "Build a Backyard Sun Clock (Sundial)",
      steps: [
        "Push a straight wooden stick upright into the ground in a sunny spot in your garden.",
        "Every hour on the hour (9 AM, 10 AM, 11 AM, etc.), place a small stone at the tip of the stick's shadow.",
        "Label the stones with chalk; on the next sunny day, use your shadow stones to tell the time without a watch!",
      ],
    },
    related: [
      { gradeId: "grade-3", subjectId: "evs", topic: "Our Earth" },
      { gradeId: "grade-5", subjectId: "science", topic: "Earth and Space" },
      { gradeId: "grade-6", subjectId: "social-studies", topic: "Motions of the Earth" },
    ],
  },

  // 23. The Phases of the Moon
  {
    slug: "the-phases-of-the-moon",
    title: "The Phases of the Moon",
    subtitle: "How the 29.5-day lunar dance between Earth, Moon, and Sun changes what we see in the night sky",
    category: "Space",
    categorySlug: "space",
    categoryEmoji: "🪐",
    emoji: "🌙",
    accent: "indigo",
    readingMinutes: 5,
    bigIdea:
      "The Moon does not produce its own light — it is a rocky sphere reflecting sunlight, and its shape appears to change as it circles Earth every month.",
    intro:
      "Sometimes the Moon is a brilliant glowing circle; other nights it is a slender silver fingernail, or completely invisible. These changing shapes are called the lunar phases. Half of the Moon is always lit by the Sun—we simply see different angles of that illuminated half as the Moon orbits Earth.",
    cycleTitle: "The Eight Phases of the 29.5-Day Lunar Cycle",
    cycle: [
      {
        emoji: "🌑",
        label: "1. New Moon",
        description:
          "The Moon sits between Earth and the Sun; its sunlit side faces away from us, making it invisible in the night sky.",
      },
      {
        emoji: "🌒",
        label: "2. Waxing Crescent",
        description:
          "A thin silver sliver of light appears on the right side in the western evening sky as the illuminated portion grows.",
      },
      {
        emoji: "🌓",
        label: "3. First Quarter (Half Moon)",
        description:
          "One-quarter of the orbital cycle is complete; exactly half of the Moon's visible face shines brightly.",
      },
      {
        emoji: "🌔",
        label: "4. Waxing Gibbous",
        description:
          "More than half of the visible disk is lit and growing ('waxing' means growing larger).",
      },
      {
        emoji: "🌕",
        label: "5. Full Moon",
        description:
          "Earth is between the Sun and Moon; the entire near side is fully illuminated, rising at sunset and shining all night.",
      },
      {
        emoji: "🌖",
        label: "6. Waning Gibbous",
        description:
          "The sunlit portion begins to shrink ('waning' means decreasing in illuminated size).",
      },
      {
        emoji: "🌗",
        label: "7. Third / Last Quarter",
        description:
          "The left half of the Moon is illuminated; it rises around midnight and stays visible in the morning blue sky.",
      },
      {
        emoji: "🌘",
        label: "8. Waning Crescent",
        description:
          "A final thin sliver shines on the left side before dawn, leading back into the New Moon.",
      },
    ],
    sections: [
      {
        heading: "Waxing vs. Waning: The Easy Memory Trick",
        paragraphs: [
          "In the Northern Hemisphere, when the illuminated side is on the right like the letter 'D', the light is GROWING (Waxing). When the light is on the left like the letter 'C', the light is SHRINKING (Waning).",
          "Remember: Wax on (right side grows), Wane off (left side fades)!",
        ],
      },
      {
        heading: "Why Do We Only Ever See One Side of the Moon?",
        paragraphs: [
          "The Moon is in 'tidal locking' with Earth. It takes the Moon exactly the same amount of time to spin once on its axis (27.3 days) as it takes to orbit Earth once. Because of this perfect synchronization, the same side of the Moon always faces Earth!",
        ],
      },
      {
        heading: "The Moon's Pull on Ocean Tides",
        paragraphs: [
          "The Moon's gravity pulls on Earth's oceans, creating a bulge of water on both the side facing the Moon and the opposite side. As Earth spins beneath these bulges, coastal areas experience two high tides and two low tides every 24 hours and 50 minutes.",
        ],
      },
    ],
    vocabulary: [
      { term: "Waxing", definition: "The phase period when the visible illuminated portion of the Moon is growing larger." },
      { term: "Waning", definition: "The phase period when the visible illuminated portion of the Moon is shrinking." },
      { term: "Gibbous", definition: "A lunar phase where more than half but not all of the visible surface is illuminated." },
      { term: "Tidal Locking", definition: "When an orbiting body rotates at the same speed it orbits, keeping the same face pointing inward." },
    ],
    facts: [
      "The Moon is slowly drifting away from Earth at a rate of 3.8 centimetres (1.5 inches) per year!",
      "Footprints left by Apollo astronauts on the Moon will remain preserved for millions of years because the Moon has no wind or rain to erode them.",
      "A lunar month (from New Moon back to New Moon) takes 29.5 days, which is where our word 'month' originated.",
    ],
    activity: {
      title: "The Oreo Cookie Moon Phase Demonstration",
      steps: [
        "Take 8 Oreo sandwich cookies and carefully twist them apart so the white cream stays on one side.",
        "Use a butter knife to scrape away the cream on each cookie to match the 8 lunar phases (from full white cream to completely bare black biscuit).",
        "Arrange the cookies in a circle around a central paper Earth in correct order!",
      ],
    },
    related: [
      { gradeId: "grade-4", subjectId: "evs", topic: "Our Earth" },
      { gradeId: "grade-5", subjectId: "science", topic: "Earth and Space" },
      { gradeId: "grade-8", subjectId: "science", topic: "Stars and the Solar System" },
    ],
  },

  // 24. The Life Cycle of a Star
  {
    slug: "the-life-cycle-of-a-star",
    title: "The Life Cycle of a Star",
    subtitle: "From glowing stellar nurseries to red giants, blinding supernovae, and black holes",
    category: "Space",
    categorySlug: "space",
    categoryEmoji: "🪐",
    emoji: "⭐",
    accent: "amber",
    readingMinutes: 6,
    bigIdea:
      "Every atom of gold, iron, oxygen, and carbon in your body was forged inside the blazing heart of a dying star billions of years ago — you are literally made of stardust!",
    intro:
      "Stars look like quiet pinpricks of light in the night sky, but they are colossal thermonuclear furnaces living through dramatic billion-year lifecycles. They are born in colourful cosmic gas clouds, shine brightly for eons, and die in spectacular cosmic fireworks.",
    cycleTitle: "The Life and Death Pathway of Stellar Giants",
    cycle: [
      {
        emoji: "🌌",
        label: "1. Stellar Nebula (The Cosmic Nursery)",
        description:
          "Gravity pulls vast clouds of hydrogen gas and cosmic dust together into dense, spinning balls of matter.",
      },
      {
        emoji: "🌟",
        label: "2. Protostar & Nuclear Fusion Ignition",
        description:
          "Core temperature reaches 15 million °C; hydrogen nuclei fuse into helium, releasing blazing light and heat.",
      },
      {
        emoji: "☀️",
        label: "3. Main Sequence (Stable Adulthood)",
        description:
          "The star spends billions of years in equilibrium, with outward nuclear explosive pressure perfectly balancing inward gravitational pull.",
      },
      {
        emoji: "🔴",
        label: "4. Red Giant / Supergiant Expansion",
        description:
          "Core runs out of hydrogen; the star swells to hundreds of times its original size, fusing heavier helium and carbon.",
      },
      {
        emoji: "💥",
        label: "5. Supernova / Planetary Nebula Death",
        description:
          "Massive stars explode in blinding supernovae, leaving behind super-dense Neutron Stars, Black Holes, or White Dwarfs.",
      },
    ],
    sections: [
      {
        heading: "What Will Happen to Our Sun?",
        paragraphs: [
          "Our Sun is a middle-aged yellow dwarf star, about 4.6 billion years old, with enough hydrogen fuel to shine for another 5 billion years. When it runs low on hydrogen, it will swell into a Red Giant, engulfing Mercury and Venus, before shedding its outer layers into a glowing planetary nebula and leaving behind a cooling White Dwarf the size of Earth.",
        ],
      },
      {
        heading: "Supernovae: Cosmic Element Factories",
        paragraphs: [
          "Stars bigger than 8 times our Sun end their lives with catastrophic explosions called supernovae. A single supernova outshines an entire galaxy of 100 billion stars for several weeks! The extreme heat forges heavy elements like gold, silver, uranium, and platinum, scattering them across space to seed new solar systems.",
        ],
      },
      {
        heading: "Black Holes: Gravity's Ultimate Triumph",
        paragraphs: [
          "When the most colossal stars die, gravity crushes their remaining core down to an infinitely dense point called a singularity. A Black Hole has such powerful gravity that nothing—not even light itself—can escape its gravitational grasp.",
        ],
      },
    ],
    vocabulary: [
      { term: "Nebula", definition: "A vast interstellar cloud of dust, hydrogen, and helium gas where new stars are born." },
      { term: "Main Sequence", definition: "The longest, most stable phase of a star's life where it steadily fuses hydrogen into helium." },
      { term: "Supernova", definition: "A colossal, brilliant explosion marking the catastrophic death of a massive star." },
      { term: "Neutron Star", definition: "The ultra-dense collapsed core of an exploded massive star made almost entirely of tightly packed neutrons." },
    ],
    facts: [
      "A single teaspoon of matter from a neutron star would weigh about 6 billion tons on Earth—as much as Mount Everest!",
      "The nearest star to Earth (after the Sun) is Proxima Centauri, located 4.24 light-years (40 trillion km) away.",
      "Red hypergiant stars like UY Scuti are so massive that over 5 billion Suns could fit inside their volume!",
    ],
    activity: {
      title: "Map the Life of a Star on a Poster",
      steps: [
        "Divide a large sheet of paper into two branching paths: 'Average Stars (Like Our Sun)' and 'Massive Stars'.",
        "Draw and color the stages: Nebula -> Protostar -> Main Sequence -> Red Giant / Supergiant -> White Dwarf / Supernova / Black Hole.",
        "Add sparkly glitter to the Supernova stage to represent the creation of stardust!",
      ],
    },
    related: [
      { gradeId: "grade-5", subjectId: "science", topic: "Earth and Space" },
      { gradeId: "grade-8", subjectId: "science", topic: "Stars and the Solar System" },
      { gradeId: "grade-8", subjectId: "science", topic: "Chemical Effects of Electric Current" },
    ],
  },

  // 25. How a Solar Eclipse Happens
  {
    slug: "how-a-solar-eclipse-happens",
    title: "How a Solar Eclipse Happens",
    subtitle: "When the Moon passes directly between Earth and Sun, turning day into twilight",
    category: "Space",
    categorySlug: "space",
    categoryEmoji: "🪐",
    emoji: "🌑",
    accent: "indigo",
    readingMinutes: 5,
    bigIdea:
      "A total solar eclipse is a cosmic miracle of mathematics: the Sun is 400 times bigger than the Moon, but it is also 400 times farther away, making both appear identical in size in our sky!",
    intro:
      "During a total solar eclipse, the daytime sky suddenly darkens into deep twilight, birds stop singing, temperatures drop by several degrees, and the ghostly glowing corona of the Sun appears around a pitch-black lunar disk. Let's see how this alignment happens.",
    cycleTitle: "The Alignment & Stages of a Total Solar Eclipse",
    cycle: [
      {
        emoji: "📐",
        label: "1. Syzygy Alignment",
        description:
          "The Sun, Moon, and Earth align in a straight line during a New Moon phase on an orbital node.",
      },
      {
        emoji: "🌑",
        label: "2. First Contact (Partial Phase)",
        description:
          "The black edge of the Moon takes its first 'bite' out of the Sun's bright disk.",
      },
      {
        emoji: "💎",
        label: "3. Baily's Beads & Diamond Ring",
        description:
          "Sunlight beams through deep lunar valleys, creating sparkling 'beads' and a brilliant single diamond ring flash.",
      },
      {
        emoji: "👑",
        label: "4. Totality (The Solar Corona)",
        description:
          "The Moon completely blocks the Sun's disk for 2 to 7 minutes; the pearl-white solar corona glows in the darkened sky.",
      },
      {
        emoji: "☀️",
        label: "5. Fourth Contact & Daylight Return",
        description:
          "The diamond ring flashes on the opposite side; the Moon slides away, restoring full daylight.",
      },
    ],
    sections: [
      {
        heading: "Umbra vs. Penumbra: The Moon's Shadows",
        paragraphs: [
          "The Moon casts two shadows on Earth. The dark inner cone is the Umbra—if you stand inside the umbra, you experience 100% totality. The larger outer shadow is the Penumbra—standing here allows you to see a partial solar eclipse where the Sun looks like a glowing crescent.",
        ],
      },
      {
        heading: "Why Don't We Have an Eclipse Every Month?",
        paragraphs: [
          "The Moon orbits Earth once every month during the New Moon phase. However, the Moon's orbit is tilted about 5 degrees relative to Earth's orbit around the Sun. Most months, the Moon's shadow passes slightly above or below Earth. An eclipse only happens when the orbits cross at intersection points called nodes.",
        ],
      },
      {
        heading: "Eclipse Eye Safety: Never Look Directly!",
        paragraphs: [
          "Looking directly at the Sun during partial phases can permanently burn your retinas without causing pain. You must always use ISO 12312-2 certified eclipse glasses or safe pinhole projection boxes to view an eclipse.",
        ],
      },
    ],
    vocabulary: [
      { term: "Solar Eclipse", definition: "When the Moon passes directly between Earth and the Sun, casting its shadow on Earth." },
      { term: "Totality", definition: "The brief period during a solar eclipse when the Sun's disk is 100% obscured by the Moon." },
      { term: "Corona", definition: "The faint, superheated outer plasma atmosphere of the Sun, visible only during totality." },
      { term: "Umbra", definition: "The darkest central region of a shadow where all direct light from the source is blocked." },
    ],
    facts: [
      "The path of totality is narrow—usually only about 100 to 160 kilometres (60 to 100 miles) wide on Earth's surface.",
      "Animals often behave as if night has arrived during totality: crickets chirp, cows return to barns, and flowers close their petals.",
      "In about 600 million years, the Moon will have drifted too far from Earth to ever produce a total solar eclipse again!",
    ],
    activity: {
      title: "Build a Safe Cereal Box Pinhole Projector",
      steps: [
        "Cut two rectangular openings at the bottom of an empty cereal box.",
        "Tape a square of white paper inside the box opposite one hole (this is your screen).",
        "Cover the other hole with aluminium foil and poke a clean tiny pinhole in the center with a needle.",
        "Stand with your back to the Sun, look into the open view hole, and see a sharp projected image of the Sun on the white screen!",
      ],
    },
    related: [
      { gradeId: "grade-5", subjectId: "science", topic: "Earth and Space" },
      { gradeId: "grade-6", subjectId: "science", topic: "Light, Shadows and Reflections" },
      { gradeId: "grade-8", subjectId: "science", topic: "Stars and the Solar System" },
    ],
  },

  // 26. How a Lunar Eclipse Happens
  {
    slug: "how-a-lunar-eclipse-happens",
    title: "How a Lunar Eclipse Happens",
    subtitle: "When Earth casts its giant shadow across the Full Moon, turning it into a copper-red 'Blood Moon'",
    category: "Space",
    categorySlug: "space",
    categoryEmoji: "🪐",
    emoji: "🩸",
    accent: "rose",
    readingMinutes: 5,
    bigIdea:
      "A Blood Moon turns copper red because Earth's atmosphere bends and filters sunlight, projecting the light of all the world's sunrises and sunsets simultaneously onto the Moon!",
    intro:
      "Unlike a solar eclipse which requires special glasses and lasts only minutes, a lunar eclipse is completely safe to watch with the naked eye and can be enjoyed by anyone on the night side of Earth for several hours. Let's see how Earth turns the Moon red.",
    cycleTitle: "The Progression of a Total Lunar Eclipse",
    cycle: [
      {
        emoji: "🌕",
        label: "1. Full Moon Alignment",
        description:
          "Earth moves directly between the Sun and the Full Moon in a straight syzygy line.",
      },
      {
        emoji: "🌖",
        label: "2. Penumbral Shadow Entry",
        description:
          "The Moon enters Earth's faint outer penumbra shadow; a subtle tea-colored dimming occurs.",
      },
      {
        emoji: "🌗",
        label: "3. Partial Umbral Eclipse",
        description:
          "The dark curved edge of Earth's true umbra shadow begins creeping across the Moon's face.",
      },
      {
        emoji: "🩸",
        label: "4. Totality (The Blood Moon)",
        description:
          "The Moon is completely immersed inside Earth's umbra, glowing eerie copper-red for over an hour.",
      },
      {
        emoji: "🌕",
        label: "5. Shadow Exit & Full Brightness",
        description:
          "The Moon slowly emerges from the shadow over the next 90 minutes, returning to its dazzling silver brilliance.",
      },
    ],
    sections: [
      {
        heading: "Why Does the Moon Turn Blood Red?",
        paragraphs: [
          "If Earth had no atmosphere, the eclipsed Moon would turn completely pitch black. But Earth's atmosphere acts like a giant lens. It scatters away short blue wavelengths of sunlight while bending the long red and orange wavelengths into the shadow cone.",
          "When you look at a red lunar eclipse, you are seeing the glow of every sunrise and sunset happening on Earth at that exact moment projected onto the Moon!",
        ],
      },
      {
        heading: "Safe for Everyone to Watch",
        paragraphs: [
          "Unlike solar eclipses, you do not need any special filters or glasses to view a lunar eclipse. You are simply looking at the gentle reflected glow of moonlight. Binoculars or a small backyard telescope reveal stunning crater details in deep copper hues.",
        ],
      },
      {
        heading: "How Lunar Eclipses Proved Earth Is Round",
        paragraphs: [
          "More than 2,300 years ago, the ancient Greek philosopher Aristotle noticed that the shadow Earth casts on the Moon during every lunar eclipse is always a perfect curved arc. This was one of the earliest scientific proofs that Earth is a sphere, not a flat disk!",
        ],
      },
    ],
    vocabulary: [
      { term: "Lunar Eclipse", definition: "When Earth passes directly between the Sun and Moon, casting its shadow across the lunar surface." },
      { term: "Blood Moon", definition: "The popular name for a total lunar eclipse due to the copper-red hue created by filtered sunlight." },
      { term: "Rayleigh Scattering", definition: "The scattering of light by atmospheric particles, which removes blue light and allows red light to bend into shadow." },
      { term: "Umbra", definition: "The dark central cone of Earth's shadow where all direct sunlight is blocked." },
    ],
    facts: [
      "A total lunar eclipse can last up to 1 hour and 45 minutes of totality—far longer than a solar eclipse!",
      "If you stood on the Moon during a total lunar eclipse, you would see a magnificent glowing red ring around a dark Earth (the atmosphere glowing with all sunrises and sunsets).",
      "Christopher Columbus used his knowledge of an upcoming 1504 lunar eclipse to convince Jamaican indigenous leaders to provide his stranded crew with food!",
    ],
    activity: {
      title: "Model a Lunar Eclipse with a Ball and Flashlight",
      steps: [
        "In a dark room, place a flashlight on a table (the Sun).",
        "Hold a basketball or soccer ball in the middle (Earth).",
        "Hold a small tennis ball or white foam ball (the Moon) directly behind the basketball in its shadow cone.",
        "Observe how the basketball completely blocks light from reaching the tennis ball, simulating a total lunar eclipse!",
      ],
    },
    related: [
      { gradeId: "grade-5", subjectId: "science", topic: "Earth and Space" },
      { gradeId: "grade-6", subjectId: "science", topic: "Light, Shadows and Reflections" },
      { gradeId: "grade-8", subjectId: "science", topic: "Stars and the Solar System" },
    ],
  },

  // 27. The Journey Through Our Solar System
  {
    slug: "journey-through-our-solar-system",
    title: "The Journey Through Our Solar System",
    subtitle: "From the blazing Sun past rocky inner worlds, asteroid belts, gas giants, and the icy Kuiper Belt",
    category: "Space",
    categorySlug: "space",
    categoryEmoji: "🪐",
    emoji: "🚀",
    accent: "indigo",
    readingMinutes: 6,
    bigIdea:
      "Our Solar System is a cosmic neighborhood spanning billions of miles, home to one star, 8 unique planets, hundreds of moons, millions of asteroids, and trillions of icy comets.",
    intro:
      "Climb aboard our imaginary starship as we blast off from the blazing Sun on a grand tour of our cosmic neighborhood. We will visit baking rocky worlds, dodge boulders in the asteroid belt, fly past supersonic gas giants, and explore the icy frontiers of the Kuiper Belt.",
    cycleTitle: "Outward Tour of the Solar System",
    cycle: [
      {
        emoji: "☀️",
        label: "1. The Central Sun",
        description:
          "A massive yellow dwarf star containing 99.8% of the Solar System's total mass, holding all planets in orbit with its gravity.",
      },
      {
        emoji: "🪨",
        label: "2. The 4 Terrestrial Inner Worlds",
        description:
          "Mercury (cratered & fast), Venus (scorching & runaway greenhouse), Earth (water & life), and Mars (red desert & giant volcanoes).",
      },
      {
        emoji: "☄️",
        label: "3. The Main Asteroid Belt",
        description:
          "Millions of rocky boulders and dwarf planet Ceres orbiting between Mars and Jupiter.",
      },
      {
        emoji: "🪐",
        label: "4. The 4 Outer Giant Worlds",
        description:
          "Jupiter (Great Red Spot storm), Saturn (majestic ring system), Uranus (sideways ice giant), and Neptune (supersonic blue winds).",
      },
      {
        emoji: "❄️",
        label: "5. The Kuiper Belt & Oort Cloud",
        description:
          "Icy realm of dwarf planets (Pluto, Eris, Makemake) and trillions of sleeping comets at the frontier of interstellar space.",
      },
    ],
    sections: [
      {
        heading: "The Rocky Inner Planets vs. The Gas Giants",
        paragraphs: [
          "The inner four planets (Mercury, Venus, Earth, Mars) are dense, solid balls of rock and iron with few moons. The outer four planets (Jupiter, Saturn, Uranus, Neptune) are colossal giants made mostly of hydrogen, helium, water, and methane gases with deep atmospheres, ring systems, and dozens of moons.",
        ],
      },
      {
        heading: "Extreme Records in Our Solar Neighborhood",
        paragraphs: [
          "Hottest Planet: Venus at 465°C—hot enough to melt lead, due to thick carbon dioxide clouds trapping heat.",
          "Largest Volcano: Olympus Mons on Mars—three times taller than Mount Everest and the size of France!",
          "Largest Storm: Jupiter's Great Red Spot—a spinning hurricane wider than the entire planet Earth that has raged for over 300 years.",
        ],
      },
      {
        heading: "Ocean Moons: Where Alien Life Might Hide",
        paragraphs: [
          "Scientists believe the best place to find microbial life in our Solar System is not on Mars, but under the ice of ocean moons like Jupiter's Europa and Saturn's Enceladus, which hide warm liquid saltwater oceans beneath their icy crusts.",
        ],
      },
    ],
    vocabulary: [
      { term: "Terrestrial Planet", definition: "A planet composed primarily of silicate rocks or metals with a solid surface (Mercury, Venus, Earth, Mars)." },
      { term: "Gas Giant", definition: "A large planet composed mostly of hydrogen and helium gases (Jupiter and Saturn)." },
      { term: "Asteroid Belt", definition: "The circumstellar disc in the Solar System located between the orbits of Mars and Jupiter." },
      { term: "Kuiper Belt", definition: "A ring of icy bodies and dwarf planets located beyond the orbit of Neptune." },
    ],
    facts: [
      "Saturn's rings are over 280,000 km wide, but they are incredibly thin—averaging only about 10 to 30 metres thick!",
      "All 8 planets could easily fit inside the volume of Jupiter with plenty of room to spare.",
      "A day on Venus is longer than its year: it takes Venus 243 Earth days to spin once, but only 225 Earth days to orbit the Sun!",
    ],
    activity: {
      title: "Create a Scale Model Toilet Paper Solar System",
      steps: [
        "Unroll toilet paper in a long hallway or playground.",
        "Place the Sun at sheet 0, Mercury at sheet 1, Venus at sheet 2, Earth at sheet 3, Mars at sheet 5, Jupiter at sheet 16, Saturn at sheet 30, Uranus at sheet 60, and Neptune at sheet 95!",
        "Notice how crowded the inner planets are compared to the vast empty distances between outer giants!",
      ],
    },
    related: [
      { gradeId: "grade-4", subjectId: "evs", topic: "Our Earth" },
      { gradeId: "grade-5", subjectId: "science", topic: "Earth and Space" },
      { gradeId: "grade-8", subjectId: "science", topic: "Stars and the Solar System" },
    ],
  },

  // 28. How Rockets Reach Space
  {
    slug: "how-rockets-reach-space",
    title: "How Rockets Reach Space",
    subtitle: "The physics of propulsion, escape velocity, and multistage rockets fighting gravity",
    category: "Space",
    categorySlug: "space",
    categoryEmoji: "🪐",
    emoji: "🚀",
    accent: "rose",
    readingMinutes: 5,
    bigIdea:
      "Rockets work because of Sir Isaac Newton's Third Law of Motion: for every action, there is an equal and opposite reaction — hot gas blasting down pushes the rocket up!",
    intro:
      "Standing beside a Saturn V or Falcon 9 rocket on the launchpad is awe-inspiring: these skyscrapers of steel and carbon fiber weigh millions of pounds. How does a machine that heavy escape Earth's fierce gravity and reach orbital speeds of 17,500 mph? Let's explore the rocket science.",
    cycleTitle: "The Five Stages of a Rocket Launch to Orbit",
    cycle: [
      {
        emoji: "🔥",
        label: "1. Ignition & Maximum Thrust",
        description:
          "Rocket engines mix liquid oxygen and fuel in combustion chambers, generating millions of pounds of downward thrust.",
      },
      {
        emoji: "💨",
        label: "2. Max Q (Maximum Dynamic Pressure)",
        description:
          "The rocket powers through the thick lower atmosphere where aerodynamic stress on the hull reaches its peak.",
      },
      {
        emoji: "🚀",
        label: "3. First Stage Separation (MECO)",
        description:
          "The giant booster runs out of fuel and separates, dropping away or landing autonomously back on a droneship.",
      },
      {
        emoji: "🌌",
        label: "4. Upper Stage Vacuum Burn",
        description:
          "The second stage engine ignites in the vacuum of space, accelerating the spacecraft to orbital speed (28,000 km/h).",
      },
      {
        emoji: "🛰️",
        label: "5. Payload Deployment in Orbit",
        description:
          "The protective nosecone fairing splits open and the satellite, telescope, or crew capsule separates safely into orbit.",
      },
    ],
    sections: [
      {
        heading: "Newton's Third Law: Action and Reaction",
        paragraphs: [
          "Imagine standing on a skateboard and throwing a heavy bowling ball forward as hard as you can: you will roll backward! A rocket does the exact same thing. It burns tons of fuel and shoots high-speed exhaust gas downward, propelling the rocket upward into the sky.",
          "Unlike jet airplanes that need air to burn fuel, rockets carry their own tanks of liquid oxygen so their engines can fire in the empty vacuum of space.",
        ],
      },
      {
        heading: "Why Rockets Are Built in Stages",
        paragraphs: [
          "Over 90% of a rocket's total launch weight is just fuel. Once a fuel tank is empty, it becomes useless heavy deadweight. Multistage rockets drop empty tanks as they climb, making the remaining spacecraft lighter and able to accelerate much faster.",
        ],
      },
      {
        heading: "What Is Orbit? Falling Around the Earth",
        paragraphs: [
          "Reaching space is easy—it's only 100 km (62 miles) straight up. But staying in space requires orbital velocity. A spacecraft must travel sideways at 17,500 mph (28,000 km/h). At this speed, as the spacecraft falls toward Earth, the planet curves away beneath it at the exact same rate, so the satellite falls forever in a circle!",
        ],
      },
    ],
    vocabulary: [
      { term: "Thrust", definition: "The mechanical propulsive force generated by a rocket engine's high-speed exhaust gases." },
      { term: "Escape Velocity", definition: "The minimum speed required to break completely free from a planet's gravitational pull (approx. 40,000 km/h on Earth)." },
      { term: "Orbital Velocity", definition: "The forward speed needed to balance gravity and stay in a stable orbit around Earth (approx. 28,000 km/h)." },
      { term: "Payload", definition: "The cargo carried by a rocket into space (such as a science satellite, rover, or astronauts)." },
    ],
    facts: [
      "The Saturn V rocket that took astronauts to the Moon generated 7.5 million pounds of thrust—equivalent to the horsepower of 85 Hoover Dams!",
      "Modern reusable rockets like SpaceX Falcon 9 can fly back from the edge of space and land vertically on a floating ocean platform.",
      "The boundary where Earth's atmosphere ends and outer space officially begins is called the Kármán Line at 100 km (62 miles) altitude.",
    ],
    activity: {
      title: "Launch a Balloon Rocket on a String Track",
      steps: [
        "Thread a 10-foot piece of string through a plastic drinking straw and tie the string taut between two chairs across a room.",
        "Blow up a long latex balloon and hold the neck closed with your fingers (do not tie it).",
        "Tape the balloon securely to the straw along the string line.",
        "Release the neck and watch Newton's Third Law shoot your rocket racing down the track!",
      ],
    },
    related: [
      { gradeId: "grade-5", subjectId: "science", topic: "Force and Energy" },
      { gradeId: "grade-8", subjectId: "science", topic: "Force and Pressure" },
      { gradeId: "grade-8", subjectId: "science", topic: "Stars and the Solar System" },
    ],
  },

  // 29. How Astronauts Live in Space
  {
    slug: "how-astronauts-live-in-space",
    title: "How Astronauts Live in Space",
    subtitle: "Eating floating tortillas, sleeping vertically, exercising in zero-G, and recycling water on the ISS",
    category: "Space",
    categorySlug: "space",
    categoryEmoji: "🪐",
    emoji: "👨‍🚀",
    accent: "sky",
    readingMinutes: 5,
    bigIdea:
      "Living in microgravity is like living in a giant superhero playground where you can float with a single finger touch — but everyday tasks like eating, sleeping, and using the bathroom require specialized space engineering!",
    intro:
      "Aboard the International Space Station (ISS), orbiting 250 miles above Earth at 5 miles per second, astronauts live and work for six months at a time. In weightlessness, crumbs can choke astronauts, water forms floating liquid bubbles, and muscles quickly weaken without 2 hours of daily exercise.",
    cycleTitle: "A Typical Daily Routine Aboard the Space Station",
    cycle: [
      {
        emoji: "🛌",
        label: "1. Waking Up in a Wall Sleeping Bag",
        description:
          "Astronauts wake up tethered inside vertical sleeping booths so they don't float into control buttons or air vents during sleep.",
      },
      {
        emoji: "🌯",
        label: "2. Breakfast with Tortillas (No Bread Crumbs)",
        description:
          "Crews eat tortillas instead of bread to prevent floating crumbs from getting in eyes or clogging sensitive electronic filters.",
      },
      {
        emoji: "🔬",
        label: "3. Science Experiments & Spacewalks",
        description:
          "Astronauts spend 8 to 10 hours growing plants, testing new alloys, and researching medical treatments in microgravity.",
      },
      {
        emoji: "🏋️",
        label: "4. Two Hours of Mandatory Workout",
        description:
          "Special resistive exercise machines (ARED), stationary bikes, and treadmills with bungees keep bones and muscles strong.",
      },
      {
        emoji: "🌍",
        label: "5. Gazing from the Cupola Window",
        description:
          "Crews look down through the 7-window Cupola at breathtaking views of auroras, lightning storms, and sunrises over Earth.",
      },
    ],
    sections: [
      {
        heading: "How Do Astronauts Use the Bathroom?",
        paragraphs: [
          "Without gravity to pull waste down, space toilets use gentle air suction! Astronauts strap their feet in, hold onto handles, and use specialized funnels with airflow to safely capture liquids and solids. All liquid waste is purified and recycled into 100% pure drinking water.",
        ],
      },
      {
        heading: "Eating and Drinking in Weightlessness",
        paragraphs: [
          "Liquids don't pour in space—surface tension pulls water into floating spherical blobs! Astronauts drink with specialized sealed pouches and one-way valves. Spicy sauces are popular because body fluids shift into the upper head in zero-G, slightly congesting sinuses and dulling taste buds.",
        ],
      },
      {
        heading: "The Space Suit: A Personal Spaceship",
        paragraphs: [
          "When performing an Extravehicular Activity (EVA or spacewalk), astronauts wear an Extravehicular Mobility Unit (EMU). This suit provides oxygen, removes carbon dioxide, maintains air pressure, and shields against cosmic radiation and extreme temperatures ranging from -150°C to +120°C.",
        ],
      },
    ],
    vocabulary: [
      { term: "Microgravity", definition: "The condition of near-weightlessness experienced by objects in continuous freefall orbit around Earth." },
      { term: "Spacewalk (EVA)", definition: "Any activity conducted by an astronaut outside a spacecraft in the vacuum of space." },
      { term: "Cupola", definition: "A 7-window observatory module on the International Space Station providing 360-degree views of Earth." },
      { term: "Muscle Atrophy", definition: "The loss of muscle mass and bone density caused by the absence of gravity pulling on the body." },
    ],
    facts: [
      "Astronauts grow up to 2 inches (5 cm) taller while living on the ISS because microgravity allows their spinal discs to expand!",
      "The ISS water recovery system recycles about 98% of all moisture on the station—including astronaut sweat and breath condensation!",
      "Astronauts on the ISS witness 16 sunrises and 16 sunsets every 24 hours as the station orbits Earth every 90 minutes.",
    ],
    activity: {
      title: "Test Astronaut Dexterity with Thick Winter Gloves",
      steps: [
        "Put on two pairs of thick winter mittens or ski gloves to simulate a stiff, pressurized spacewalk glove.",
        "Try picking up a coin, tying your shoelaces, and assembling a 5-piece Lego model.",
        "Notice how much extra forearm effort is needed for astronauts to turn bolts in space!",
      ],
    },
    related: [
      { gradeId: "grade-4", subjectId: "evs", topic: "Our Earth" },
      { gradeId: "grade-5", subjectId: "science", topic: "Force and Energy" },
      { gradeId: "grade-8", subjectId: "science", topic: "Stars and the Solar System" },
    ],
  },

  // 30. What Causes the Northern Lights?
  {
    slug: "what-causes-the-northern-lights",
    title: "What Causes the Northern Lights?",
    subtitle: "How solar wind particles colliding with Earth's magnetic shield paint the polar skies in glowing green and purple ribbons",
    category: "Space",
    categorySlug: "space",
    categoryEmoji: "🪐",
    emoji: "🌌",
    accent: "teal",
    readingMinutes: 5,
    bigIdea:
      "The Northern Lights are nature's ultimate neon sign — glowing ribbons of light created when high-speed solar storm particles crash into oxygen and nitrogen atoms in our upper atmosphere.",
    intro:
      "On cold, clear nights in the Arctic and Antarctic, the sky comes alive with shimmering curtains of emerald green, violet, and ruby red light that dance silently across the stars. This breathtaking celestial light show is called the Aurora Borealis in the North and Aurora Australis in the South.",
    cycleTitle: "From Solar Flare to Dancing Polar Aurora",
    cycle: [
      {
        emoji: "☀️",
        label: "1. Solar Flare / Coronal Mass Ejection",
        description:
          "The Sun releases a magnetic storm, blasting billions of tons of superheated charged plasma (electrons and protons) into space.",
      },
      {
        emoji: "💨",
        label: "2. The Solar Wind Voyage",
        description:
          "The stream of charged particles races through space at speeds between 1 and 3 million kilometres per hour, reaching Earth in 2 to 3 days.",
      },
      {
        emoji: "🛡️",
        label: "3. Deflection by Earth's Magnetosphere",
        description:
          "Earth's molten iron core creates a magnetic shield that deflects the solar wind safely around the planet.",
      },
      {
        emoji: "🧲",
        label: "4. Funneling Down the Magnetic Poles",
        description:
          "Some particles get trapped and funneled down magnetic field lines into the upper atmosphere near the North and South Poles.",
      },
      {
        emoji: "✨",
        label: "5. Atmospheric Atom Excitation & Light",
        description:
          "Solar electrons crash into atmospheric oxygen and nitrogen atoms, exciting them to release glowing photons of green, red, and purple light.",
      },
    ],
    sections: [
      {
        heading: "What Makes the Different Colors?",
        paragraphs: [
          "The colors of the aurora depend on which atmospheric gas is struck and at what altitude the collision happens:",
          "Green (Most Common): Oxygen atoms struck at 100 to 300 km altitude.",
          "Red (Rare): Oxygen atoms struck high up in the thin air above 300 km.",
          "Purple / Blue / Pink: Nitrogen molecules struck below 100 km during intense geomagnetic storms.",
        ],
      },
      {
        heading: "Earth's Magnetic Shield Protects All Life",
        paragraphs: [
          "The auroras are visible proof that Earth's magnetic shield is working. Without our magnetosphere shielding us from dangerous cosmic radiation and solar winds, Earth's atmosphere and oceans would have been stripped away billions of years ago—just like what happened to Mars.",
        ],
      },
      {
        heading: "Do Other Planets Have Auroras?",
        paragraphs: [
          "Yes! Any planet with a magnetic field and an atmosphere experiences auroras. Space probes and the Hubble Space Telescope have captured colossal ultraviolet and infrared auroral rings dancing over the poles of Jupiter, Saturn, Uranus, and Neptune!",
        ],
      },
    ],
    vocabulary: [
      { term: "Aurora Borealis", definition: "The Northern Lights; radiant light displays seen in the northern polar sky." },
      { term: "Aurora Australis", definition: "The Southern Lights; radiant light displays seen in the southern polar sky over Antarctica." },
      { term: "Magnetosphere", definition: "The magnetic field region surrounding Earth that shields the planet from charged solar wind particles." },
      { term: "Coronal Mass Ejection (CME)", definition: "A giant magnetic eruption on the Sun that releases billions of tons of charged plasma into space." },
    ],
    facts: [
      "Astronauts on the Space Station don't look up at the Northern Lights—they fly right through the middle of the glowing green ribbons!",
      "Strong solar storms can cause auroras to be seen as far south as Florida, Mexico, and India.",
      "The Northern Lights make subtle clapping and crackling sounds in the Arctic air, caused by electrical discharge pockets 70 metres above the ground.",
    ],
    activity: {
      title: "Paint a Vibrant Northern Lights Watercolor Scene",
      steps: [
        "Wet a piece of heavy watercolor paper with clean water.",
        "Dab vibrant stripes of lime green, cyan, royal blue, and magenta paint across the wet paper, letting the colors bleed into glowing curtains.",
        "Once dry, paint black pine tree silhouettes and a snowy mountain range along the bottom edge!",
      ],
    },
    related: [
      { gradeId: "grade-5", subjectId: "science", topic: "Earth and Space" },
      { gradeId: "grade-6", subjectId: "science", topic: "Fun with Magnets" },
      { gradeId: "grade-8", subjectId: "science", topic: "Stars and the Solar System" },
    ],
  },
];
