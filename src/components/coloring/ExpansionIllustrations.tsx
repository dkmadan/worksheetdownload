import React from "react";
import { renderOceanAndFarm } from "./expansion/OceanAndFarmIllustrations";
import { renderInsectsAndForest } from "./expansion/InsectsAndForestIllustrations";
import { renderArcticAndReptiles } from "./expansion/ArcticAndReptilesIllustrations";
import { renderHelpersAndMachinery } from "./expansion/HelpersAndMachineryIllustrations";
import { renderCampingAndMusic } from "./expansion/CampingAndMusicIllustrations";
import { renderStemAndHealth } from "./expansion/StemAndHealthIllustrations";
import { renderLandmarksAndFood } from "./expansion/LandmarksAndFoodIllustrations";
import { renderRobotsAndToys } from "./expansion/RobotsAndToysIllustrations";
import { renderTransportAndLifeCycles } from "./expansion/TransportAndLifeCyclesIllustrations";
import { renderLiteracyAndEmotions } from "./expansion/LiteracyAndEmotionsIllustrations";

function tryRender(slug: string): React.ReactNode | null {
  return (
    renderOceanAndFarm(slug) ??
    renderInsectsAndForest(slug) ??
    renderArcticAndReptiles(slug) ??
    renderHelpersAndMachinery(slug) ??
    renderCampingAndMusic(slug) ??
    renderStemAndHealth(slug) ??
    renderLandmarksAndFood(slug) ??
    renderRobotsAndToys(slug) ??
    renderTransportAndLifeCycles(slug) ??
    renderLiteracyAndEmotions(slug)
  );
}

// Master renderer for all 200 expansion coloring sheets
export function renderExpansionArtwork(type: string): React.ReactNode | null {
  if (!type) return null;
  const norm = type.toLowerCase().trim();

  // 1. Direct slug or svgType match
  const direct = tryRender(norm);
  if (direct) return direct;

  // 2. Handle cases where id has category prefix (e.g. 'ocean-marine-life-blue-whale-...')
  const parts = norm.split("-");
  for (let i = 1; i < parts.length; i++) {
    const stripped = parts.slice(i).join("-");
    const match = tryRender(stripped);
    if (match) return match;
  }

  return null;
}
