import React from "react";

// Nature & Earth Scenes (1–10)
import {
  RockCycleScene,
  FoodChainScene,
  FoodWebScene,
  CarbonCycleScene,
  NitrogenCycleScene,
  WaterPollutionScene,
  RiverFormationScene,
  RaindropJourneyScene,
  SoilMadeScene,
  TreeLifeScene,
} from "./scenes/NatureScenes";

// Weather & Climate Scenes (11–20)
import {
  CloudFormationScene,
  WindJourneyScene,
  RainHappensScene,
  ThunderstormScene,
  SeasonsScene,
  SnowFormationScene,
  HurricaneScene,
  WeatherForecastingScene,
  SunlightJourneyScene,
  WeatherVsClimateScene,
} from "./scenes/WeatherScenes";

// Space Scenes (21–30)
import {
  EarthAroundSunScene,
  DayNightScene,
  MoonPhasesScene,
  StarLifeCycleScene,
  SolarEclipseScene,
  LunarEclipseScene,
  SolarSystemScene,
  RocketPhysicsScene,
  AstronautLifeScene,
  NorthernLightsScene,
} from "./scenes/SpaceScenes";

// Animal & Plant Life Scenes (31–40)
import {
  FrogLifeCycleScene,
  BeeLifeCycleScene,
  ChickenLifeCycleScene,
  LadybugLifeCycleScene,
  BirdNestScene,
  HoneyMakingScene,
  PhotosynthesisScene,
  AnimalAdaptationScene,
  AnimalDigestionScene,
  EcosystemScene,
} from "./scenes/AnimalPlantScenes";

// Human Body Scenes (41–50)
import {
  HumanDigestionScene,
  BreathingScene,
  HeartPumpScene,
  SkeletonBonesScene,
  MuscleWorkScene,
  BrainMessagesScene,
  FiveSensesScene,
  ImmuneSystemScene,
  HumanGrowthScene,
  SleepScene,
} from "./scenes/HumanBodyScenes";

// Everyday Science Scenes (51–60)
import {
  ElectricityCircuitScene,
  MagnetsScene,
  SoundWavesScene,
  LightShadowsScene,
  RainbowFormationScene,
  StatesOfMatterScene,
  HeatTransferScene,
  SimpleMachinesScene,
  BatteryPhysicsScene,
  BridgeForcesScene,
} from "./scenes/EverydayScienceScenes";

interface Props {
  slug: string;
  className?: string;
}

const SCENE_REGISTRY: Record<string, () => React.ReactElement> = {
  // ── Nature & Earth (1–10) ──────────────────────────────────────────────────
  "the-rock-cycle": RockCycleScene,
  "the-food-chain": FoodChainScene,
  "the-food-web": FoodWebScene,
  "the-carbon-cycle": CarbonCycleScene,
  "the-nitrogen-cycle": NitrogenCycleScene,
  "the-water-pollution-journey": WaterPollutionScene,
  "how-rivers-are-formed": RiverFormationScene,
  "the-journey-of-a-raindrop": RaindropJourneyScene,
  "how-soil-is-made": SoilMadeScene,
  "the-life-of-a-tree": TreeLifeScene,

  // ── Weather & Climate (11–20) ──────────────────────────────────────────────
  "how-clouds-are-made": CloudFormationScene,
  "the-journey-of-the-wind": WindJourneyScene,
  "how-rain-happens": RainHappensScene,
  "how-thunderstorms-form": ThunderstormScene,
  "why-do-we-have-seasons": SeasonsScene,
  "how-snow-is-formed": SnowFormationScene,
  "the-life-cycle-of-a-hurricane": HurricaneScene,
  "how-weather-forecasting-works": WeatherForecastingScene,
  "the-journey-of-sunlight": SunlightJourneyScene,
  "weather-vs-climate": WeatherVsClimateScene,

  // ── Space (21–30) ──────────────────────────────────────────────────────────
  "journey-of-earth-around-sun": EarthAroundSunScene,
  "why-do-we-have-day-and-night": DayNightScene,
  "the-phases-of-the-moon": MoonPhasesScene,
  "the-life-cycle-of-a-star": StarLifeCycleScene,
  "how-a-solar-eclipse-happens": SolarEclipseScene,
  "how-a-lunar-eclipse-happens": LunarEclipseScene,
  "journey-through-our-solar-system": SolarSystemScene,
  "how-rockets-reach-space": RocketPhysicsScene,
  "how-astronauts-live-in-space": AstronautLifeScene,
  "what-causes-the-northern-lights": NorthernLightsScene,

  // ── Animal & Plant Life (31–40) ────────────────────────────────────────────
  "the-life-cycle-of-a-frog": FrogLifeCycleScene,
  "the-life-cycle-of-a-bee": BeeLifeCycleScene,
  "the-life-cycle-of-a-chicken": ChickenLifeCycleScene,
  "the-life-cycle-of-a-ladybug": LadybugLifeCycleScene,
  "how-birds-build-nests": BirdNestScene,
  "how-bees-make-honey": HoneyMakingScene,
  "how-plants-make-their-food": PhotosynthesisScene,
  "how-animals-adapt-to-their-environment": AnimalAdaptationScene,
  "the-journey-of-food-through-an-animal": AnimalDigestionScene,
  "how-ecosystems-work": EcosystemScene,

  // ── Human Body (41–50) ─────────────────────────────────────────────────────
  "journey-of-food-through-your-body": HumanDigestionScene,
  "how-we-breathe": BreathingScene,
  "how-the-heart-pumps-blood": HeartPumpScene,
  "how-bones-help-us-move": SkeletonBonesScene,
  "how-muscles-work": MuscleWorkScene,
  "how-our-brain-sends-messages": BrainMessagesScene,
  "how-our-five-senses-work": FiveSensesScene,
  "how-the-immune-system-protects-us": ImmuneSystemScene,
  "how-we-grow": HumanGrowthScene,
  "why-do-we-sleep": SleepScene,

  // ── Everyday Science (51–60) ───────────────────────────────────────────────
  "how-electricity-travels": ElectricityCircuitScene,
  "how-magnets-work": MagnetsScene,
  "how-sound-travels": SoundWavesScene,
  "how-light-creates-shadows": LightShadowsScene,
  "how-a-rainbow-is-formed": RainbowFormationScene,
  "the-three-states-of-matter": StatesOfMatterScene,
  "the-journey-of-heat": HeatTransferScene,
  "how-simple-machines-make-work-easier": SimpleMachinesScene,
  "how-a-battery-works": BatteryPhysicsScene,
  "how-bridges-stay-strong": BridgeForcesScene,

  // Legacy Aliases
  "water-life-cycle": RaindropJourneyScene,
  "butterfly-life-cycle": LadybugLifeCycleScene,
  "seed-to-plant-cycle": TreeLifeScene,
  "decomposer-soil-cycle": SoilMadeScene,
  "oxygen-carbon-dioxide-breath-swap": BreathingScene,
};

export default function KnowledgeArt({ slug, className }: Props) {
  const SceneComponent = SCENE_REGISTRY[slug] || RaindropJourneyScene;
  return (
    <div className={className}>
      <SceneComponent />
    </div>
  );
}
