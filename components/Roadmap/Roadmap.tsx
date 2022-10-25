import { NextPage } from "next/types";
import { useEffect, useRef, useState } from "react";
import RoadmapMilestone from "./RoadmapMilestone";
import { RoadmapContainer } from "./styles";

const Roadmap: NextPage = () => {
  return (
    <RoadmapContainer>
      <RoadmapMilestone
        title="THE INTRODUCTION"
        description="Developing 52 unique pixel art traits, start of development of Cyber Ape Age experience. Community development begins."
        date="PHASE 1"
      />
      <RoadmapMilestone
        //buttonLinkUrl="/"
        title="CORRUPTION DAY"
        description="A massive data corruption occurs on the Solana blockchain in December 2021. Cyber Apes break into the ecosystem doing $2.6 million in volume on the first day. Giving birth to the new Cyber Ape Age. Established in 2021."
        date="PHASE 2"
      />
      <RoadmapMilestone
        //buttonLinkUrl="/"
        title="LET THE GAMES COMMENCE"
        description="Rolling out regular P2E games in The Sandbox Metaverse. 5 games were created, with highly comprehensive mechanisms, custom assets, maps and bosses. Overall games were enjoyed, a few fast bug repairs were carried out to solve issues. $350k was airdropped to participants and top 10 times."
        date="PHASE 3"
      />
      <RoadmapMilestone
        //buttonLinkUrl="/"
        title="CYBER LOCKDOWN"
        description="Complete reversal of the project roadmap and goals due to price cap provided by play-2-earn rewarding system. Illiquid staking, $APE token value in the Bazar and airdrops via multi-chain collections mints will allow for future maintenance. One last massive prize pool with the inclusion of Fusion Chambers."
        date="PHASE 4"
      />
      <RoadmapMilestone
        //buttonLinkUrl="/"
        title="[REDACTED]"
        description="Cybera... SCYTALE... Portals... X.E.M.B.A... Ani..."
        date="PHASE 5"
      />
    </RoadmapContainer>
  );
};

export default Roadmap;
