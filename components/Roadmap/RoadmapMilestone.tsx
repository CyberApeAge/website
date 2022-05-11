import { NextPage } from "next";
import { useEffect, useMemo, useRef, useState } from "react";
import { APE_DATA } from "../../constants/cyberapeage-data";
import { getRandomApeIndex } from "../../utils";
import BloomingContainer from "../BloomingContainer";
import CyberApeRenderer from "../CyberApeRenderer";
import {
  RoadmapMilestoneCenterSquare,
  RoadmapMilestoneContainer,
  RoadmapMilestoneDate,
  RoadmapMilestoneDateWrapper,
  RoadmapMilestoneDesc,
  RoadmapMilestoneTitle,
} from "./styles";
import { RoadmapMilestoneProps } from "./types";

const RoadmapMilestone: NextPage<RoadmapMilestoneProps> = ({ title, description, date }) => {
  const RANDOM_APE_TRAITS = useMemo(() => APE_DATA[getRandomApeIndex()].traits, []);

  const RoadmapMilestoneContainerRef = useRef<HTMLDivElement>(null);

  const [isAboveMiddle, setIsAboveMiddle] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!RoadmapMilestoneContainerRef.current) return;

      const isAboveMiddleCheck =
        RoadmapMilestoneContainerRef.current.getBoundingClientRect().top < window.innerHeight / 2;

      setIsAboveMiddle(isAboveMiddleCheck);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <RoadmapMilestoneContainer ref={RoadmapMilestoneContainerRef}>
      <BloomingContainer
        accent="#444"
        customStyles={{
          width: "40%",
          padding: "2rem 2rem 0 2rem",
          border: "none",
        }}
      >
        <RoadmapMilestoneTitle>{title}</RoadmapMilestoneTitle>
        <RoadmapMilestoneDesc>{description}</RoadmapMilestoneDesc>
        <CyberApeRenderer
          isLookingRight
          size="150px"
          traits={{
            ape: RANDOM_APE_TRAITS.ape,
            head: RANDOM_APE_TRAITS.head,
            ears: RANDOM_APE_TRAITS.ears,
            eyes: RANDOM_APE_TRAITS.eyes,
            mouth: RANDOM_APE_TRAITS.mouth,
          }}
        />
      </BloomingContainer>
      <RoadmapMilestoneCenterSquare isAboveMiddle={isAboveMiddle} />
      <RoadmapMilestoneDateWrapper>
        <RoadmapMilestoneDate>{date}</RoadmapMilestoneDate>
      </RoadmapMilestoneDateWrapper>
    </RoadmapMilestoneContainer>
  );
};

export default RoadmapMilestone;
