import { NextPage } from "next/types";
import { useEffect, useRef, useState } from "react";
import RoadmapMilestone from "./RoadmapMilestone";
import { RoadmapContainer } from "./styles";

const Roadmap: NextPage = () => {
  return (
    <RoadmapContainer>
      <RoadmapMilestone
        title="MAKING OF: CYBER APE AGE"
        description="Developing 52 unique pixel art traits, start of development of Cyber Ape Age experience. Community development begins."
        date="PHASE 1"
      />
      <RoadmapMilestone
        title="CORRUPTION DAY"
        description="A massive data corruption occurs on the Solana blockchain and Cyber Apes break into it's ecosystem. Giving birth to the new Cyber Ape Age"
        date="PHASE 2"
      />
      <RoadmapMilestone
        title="Let the games commence"
        description="Rolling out regular P2E games in thesandbox metaverse"
        date="PHASE 3"
      />
      <RoadmapMilestone
        title="?Staking?"
        description="Rolling out regular P2E games in thesandbox metaverse"
        date="PHASE 4"
      />
    </RoadmapContainer>
  );
};

export default Roadmap;
