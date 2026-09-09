import { defineMap } from "../helpers";
import type { MapWorksheet } from "../types";

export const SKILLS_MAPS: MapWorksheet[] = [
  defineMap({
    slug: "map-grid-references",
    title: "Grid References",
    h1: "Map Grid References Worksheet",
    category: "skills",
    emoji: "🔢",
    diagram: "grid",
    gradeBand: "Grades 3–7",
    keywords: [
      "grid references worksheet",
      "map grid references pdf",
      "four figure grid reference worksheet",
      "reading a map grid worksheet",
      "coordinates map skills",
    ],
    intro:
      "Practice locating places on a map with a letter–number grid and with four-figure grid references. Students read the grid square for a symbol and plot symbols into named squares.",
    labelPrompt: "Write the grid reference for each numbered symbol on the map.",
    groups: [
      {
        heading: "Grid skills",
        items: [
          "Eastings (columns, read first — 'along the corridor')",
          "Northings (rows, read second — 'up the stairs')",
          "Grid square (e.g. B3)",
          "Four-figure reference (e.g. 2145)",
          "Six-figure reference (e.g. 214 453)",
        ],
      },
    ],
    clues: [
      { clue: "The grid lines that run up and down; you read these first", answer: "Eastings (columns, read first — 'along the corridor')" },
      { clue: "The grid lines that run across; you read these second", answer: "Northings (rows, read second — 'up the stairs')" },
      { clue: "A reference like 2145 that names one grid square", answer: "Four-figure reference (e.g. 2145)" },
      { clue: "A reference like 214 453 that pinpoints a spot within a square", answer: "Six-figure reference (e.g. 214 453)" },
    ],
    facts: [
      "Rule for grid references: 'along the corridor, then up the stairs' — read the eastings first, then the northings.",
      "A four-figure reference names a whole grid square; a six-figure reference locates a point within it.",
      "Ordnance Survey maps in the UK use a 1 km grid with numbered lines.",
      "Latitude and longitude are a grid reference system for the whole planet.",
      "Battleship and chess both use simple letter–number grids.",
    ],
    faqs: [
      {
        q: "How do you read a grid reference?",
        a: "Read the easting (the vertical line to the left of your square) first, then the northing (the horizontal line below your square). 'Along the corridor, then up the stairs.'",
      },
      {
        q: "What is the difference between a four-figure and a six-figure grid reference?",
        a: "A four-figure reference (e.g. 21 45) identifies a 1 km grid square. A six-figure reference (e.g. 214 453) divides that square into tenths to locate a specific point.",
      },
    ],
    related: ["compass-rose-map", "latitude-and-longitude-map", "map-key-and-symbols"],
  }),

  defineMap({
    slug: "map-key-and-symbols",
    title: "Map Key & Symbols",
    h1: "Map Key and Symbols Worksheet",
    category: "skills",
    emoji: "🔑",
    gradeBand: "Grades 2–6",
    keywords: [
      "map key worksheet",
      "map symbols worksheet pdf",
      "map legend worksheet",
      "reading a map key worksheet",
      "map skills symbols",
    ],
    intro:
      "Learn to read a map key (legend). Students match common map symbols to what they mean, then use the key to answer questions about a sample map.",
    labelPrompt: "Write what each numbered symbol on the map stands for.",
    groups: [
      {
        heading: "Common map symbols",
        items: [
          "Capital city (star in a circle)",
          "City / town (dot)",
          "Country or state border (dashed line)",
          "River (blue line)",
          "Lake / sea (blue area)",
          "Mountains (triangle or brown shading)",
          "Road (red or black line)",
          "Railway (line with crossbars)",
          "Airport (aeroplane symbol)",
          "Forest / park (green area)",
        ],
      },
    ],
    clues: [
      { clue: "A star inside a circle usually marks this", answer: "Capital city (star in a circle)" },
      { clue: "A dashed line on a political map shows this", answer: "Country or state border (dashed line)" },
      { clue: "Blue areas on a map are usually this", answer: "Lake / sea (blue area)" },
      { clue: "The box that explains what all the symbols mean", answer: "City / town (dot)" },
    ],
    facts: [
      "A map key (or legend) is the box that explains the map's symbols and colours.",
      "Symbols let a small map show a lot of information without words.",
      "Blue almost always means water; green often means low land or forest; brown means high land.",
      "A star in a circle usually marks a capital city.",
      "Every good map has three things: a title, a key and a compass rose (or north arrow).",
    ],
    faqs: [
      {
        q: "What is a map key?",
        a: "A small box on a map — also called a legend — that lists each symbol, colour or line style and tells you what it represents.",
      },
      {
        q: "Why do maps use symbols instead of words?",
        a: "Symbols take up far less space, work in any language, and let one map show roads, rivers, cities, borders and land height all at once.",
      },
    ],
    related: ["compass-rose-map", "map-scale", "map-grid-references"],
  }),

  defineMap({
    slug: "map-scale",
    title: "Map Scale",
    h1: "Map Scale and Distance Worksheet",
    category: "skills",
    emoji: "📏",
    gradeBand: "Grades 4–8",
    keywords: [
      "map scale worksheet",
      "measuring distance on a map worksheet pdf",
      "scale bar worksheet",
      "map skills scale and distance",
    ],
    intro:
      "Use a map's scale to work out real distances. Students measure between points, apply the scale bar or ratio scale, and compare large-scale and small-scale maps.",
    labelPrompt: "Measure each numbered route and use the scale to find its real distance.",
    groups: [
      {
        heading: "Scale concepts",
        items: [
          "Scale bar (graphic scale)",
          "Ratio scale (e.g. 1:100,000)",
          "Statement scale (e.g. '1 cm = 1 km')",
          "Large-scale map (small area, lots of detail)",
          "Small-scale map (large area, little detail)",
        ],
      },
    ],
    clues: [
      { clue: "A ruler-like line on the map that you measure distances against", answer: "Scale bar (graphic scale)" },
      { clue: "A scale written as two numbers, like 1:50,000", answer: "Ratio scale (e.g. 1:100,000)" },
      { clue: "A map of a single town or park, showing streets and buildings", answer: "Large-scale map (small area, lots of detail)" },
      { clue: "A map of a whole continent or the world", answer: "Small-scale map (large area, little detail)" },
    ],
    facts: [
      "Scale tells you how much the real world has been shrunk to fit on the map.",
      "On a 1:100,000 map, 1 cm on the paper equals 100,000 cm (1 km) on the ground.",
      "A large-scale map covers a small area in great detail; a small-scale map covers a large area with less detail.",
      "The scale bar is the easiest scale to use because you can lay a ruler or a strip of paper along it.",
      "World maps have very small scales, such as 1:40,000,000.",
    ],
    faqs: [
      {
        q: "How do you measure distance on a map?",
        a: "Measure the straight-line distance between two points with a ruler, then multiply by the scale. For a curved route, mark a strip of paper along the route, then measure the strip against the scale bar.",
      },
      {
        q: "Which is more detailed, a large-scale or small-scale map?",
        a: "A large-scale map. It shows a small area (like one town) with lots of detail. A small-scale map shows a big area (like a continent) with much less detail.",
      },
    ],
    related: ["map-key-and-symbols", "compass-rose-map", "map-grid-references"],
  }),
];
