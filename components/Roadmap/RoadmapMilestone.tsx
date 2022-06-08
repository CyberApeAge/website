import { NextPage } from "next";
import { useRouter } from "next/router";
import { useContext, useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { APE_DATA } from "../../constants/cyberapeage-data";
import SuperModalContext from "../../contexts/SuperModal";
import { getRandomApeIndex } from "../../utils";
import BloomingContainer from "../BloomingContainer";
import CyberApeRenderer from "../CyberApeRenderer";
import SignatureButton from "../SignatureButton";
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
  flex-direction: row-reverse;
  align-items: flex-end;
`;

const ApeContainer = styled.div`
  position: relative;
  top: 18px;
`;

const RoadmapMilestone: NextPage<RoadmapMilestoneProps> = ({
  title,
  description,
  date,
  detailsPopup,
  popupTitle,
}) => {
  const RANDOM_APE_TRAITS = useMemo(
    () => APE_DATA[getRandomApeIndex()].traits,
    []
  );

  const RoadmapMilestoneContainerRef = useRef<HTMLDivElement>(null);

  const [isAboveMiddle, setIsAboveMiddle] = useState<boolean>(false);
  const { open } = useContext(SuperModalContext);
  const router = useRouter();

  function license(): void {
    if (popupTitle != null && detailsPopup != null) {
      open(popupTitle, detailsPopup);
    }
  }

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
          <ApeContainer>
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
          </ApeContainer>
          {popupTitle != null && detailsPopup != null && (
            <SignatureButton
              backgroundColor={"#333"}
              onClick={license}
              accent="#111"
            >
              DETAILS
            </SignatureButton>
          )}
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
