import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
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

const BodyContainer = styled.div`
  width: 40%;
  padding: 2rem 2rem 0 2rem;
  border: 20px solid;
  border-image: url("stair-border-roadmap.svg");
  border-image-slice: 16;
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const DetailsButton = styled.div`
  height: 50px;
  width: 165px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
    45deg,
    transparent 6%,
    rgba(255, 255, 255, 0.15) 2% 94%,
    transparent 95%
  );

  &:hover {
    background-image: linear-gradient(
      45deg,
      transparent 6%,
      rgba(255, 255, 255, 0.3) 2% 94%,
      transparent 95%
    );
    cursor: pointer;
  }

  &:active {
    position: relative;
    top: 2px;
    left: 2px;
  }
`;

const RoadmapMilestone: NextPage<RoadmapMilestoneProps> = ({
  title,
  description,
  date,
  buttonLinkUrl,
}) => {
  const RANDOM_APE_TRAITS = useMemo(
    () => APE_DATA[getRandomApeIndex()].traits,
    []
  );

  const RoadmapMilestoneContainerRef = useRef<HTMLDivElement>(null);

  const [isAboveMiddle, setIsAboveMiddle] = useState<boolean>(false);

  const router = useRouter();

  const onClickLockdown = () => {
    router.push("/cyberlockdown");
  };

  const onDetailsClick = () => {
    if (buttonLinkUrl != null && buttonLinkUrl != "") {
      router.push(buttonLinkUrl);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!RoadmapMilestoneContainerRef.current) return;

      const isAboveMiddleCheck =
        RoadmapMilestoneContainerRef.current.getBoundingClientRect().top <
        window.innerHeight / 2;

      setIsAboveMiddle(isAboveMiddleCheck);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <RoadmapMilestoneContainer ref={RoadmapMilestoneContainerRef}>
      <BodyContainer>
        <RoadmapMilestoneTitle>{title}</RoadmapMilestoneTitle>
        <RoadmapMilestoneDesc>{description}</RoadmapMilestoneDesc>
        <BottomContainer>
          {buttonLinkUrl != null && buttonLinkUrl != "" && (
            <DetailsButton onClick={onDetailsClick}>Details</DetailsButton>
          )}
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
        </BottomContainer>
      </BodyContainer>
      <RoadmapMilestoneCenterSquare isAboveMiddle={isAboveMiddle} />
      <RoadmapMilestoneDateWrapper>
        <RoadmapMilestoneDate>{date}</RoadmapMilestoneDate>
      </RoadmapMilestoneDateWrapper>
    </RoadmapMilestoneContainer>
  );
};

export default RoadmapMilestone;
