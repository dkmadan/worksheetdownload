import React from "react";
import {
  VolcanoAnatomyDiagram,
  VolcanoTectonicsDiagram,
  VolcanoTypesDiagram,
  VolcanoRingOfFireDiagram,
} from "./diagrams/VolcanoDiagrams";
import {
  TidesLunarBulgeDiagram,
  TidesSpringNeapDiagram,
  TidesDailyClockDiagram,
  TidesIntertidalEcosystemDiagram,
} from "./diagrams/OceanTidesDiagrams";
import {
  PlanetsNebulaDiskDiagram,
  PlanetsAccretionGrowthDiagram,
  PlanetsFrostLineDiagram,
  PlanetsCoreDifferentiationDiagram,
} from "./diagrams/PlanetsFormationDiagrams";
import {
  DnaScaleZoomDiagram,
  DnaDoubleHelixBasesDiagram,
  DnaProteinFactoryDiagram,
  DnaInheritedTraitsDiagram,
} from "./diagrams/DnaDiagrams";
import {
  AirplaneFourForcesDiagram,
  AirplaneAirfoilCamberDiagram,
  AirplaneFlightControlsDiagram,
  AirplaneJetEngineDiagram,
} from "./diagrams/AirplaneDiagrams";

const DIAGRAM_REGISTRY: Record<string, () => React.ReactElement> = {
  // Volcanoes
  "volcano-anatomy": VolcanoAnatomyDiagram,
  "volcano-tectonics": VolcanoTectonicsDiagram,
  "volcano-types": VolcanoTypesDiagram,
  "volcano-ring-of-fire": VolcanoRingOfFireDiagram,

  // Ocean Tides
  "tides-lunar-bulge": TidesLunarBulgeDiagram,
  "tides-spring-neap": TidesSpringNeapDiagram,
  "tides-daily-clock": TidesDailyClockDiagram,
  "tides-intertidal-ecosystem": TidesIntertidalEcosystemDiagram,

  // Planets Formation
  "planets-nebula-disk": PlanetsNebulaDiskDiagram,
  "planets-accretion-growth": PlanetsAccretionGrowthDiagram,
  "planets-frost-line": PlanetsFrostLineDiagram,
  "planets-core-differentiation": PlanetsCoreDifferentiationDiagram,

  // DNA & Genetics
  "dna-scale-zoom": DnaScaleZoomDiagram,
  "dna-double-helix-bases": DnaDoubleHelixBasesDiagram,
  "dna-protein-factory": DnaProteinFactoryDiagram,
  "dna-inherited-traits": DnaInheritedTraitsDiagram,

  // Airplane Flight
  "airplane-four-forces": AirplaneFourForcesDiagram,
  "airplane-airfoil-camber": AirplaneAirfoilCamberDiagram,
  "airplane-flight-controls": AirplaneFlightControlsDiagram,
  "airplane-jet-engine": AirplaneJetEngineDiagram,
};

interface Props {
  diagramId: string;
}

export default function SectionDiagram({ diagramId }: Props) {
  const Component = DIAGRAM_REGISTRY[diagramId];
  if (!Component) return null;
  return (
    <figure className="my-6">
      <Component />
    </figure>
  );
}
