import styled, { css } from "styled-components";
import { RoadmapMilestoneCenterSquareProps, RoadmapTimelineProps } from "./types";

const ATIVATION_PERCENTAGE = "65%";

export const RoadmapContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 5rem;

  position: relative;
  z-index: 1;

  overflow-y: hidden;

  background: linear-gradient(180deg, #fff ${ATIVATION_PERCENTAGE}, #222 ${ATIVATION_PERCENTAGE});

  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 2px 100%;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 120px;
    background: linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0) 100%);
  }

  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 120px;
    background: linear-gradient(to top, #000 0%, rgba(0, 0, 0, 0) 100%);
  }
`;

export const RoadmapMilestoneContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  &:nth-child(odd) {
    flex-direction: row-reverse;

    h3 {
      text-align: right;
    }
  }
`;

export const RoadmapMilestoneTitle = styled.h2`
  text-transform: uppercase;
  font-size: 2.25rem;
`;

export const RoadmapMilestoneCenterSquare = styled.div<RoadmapMilestoneCenterSquareProps>`
  width: 10px;
  height: 10px;
  margin-right:16px;
  background: #222;

  transition: all 0.5s ease-in-out;

  position: relative;
  z-index: 10;

  ${({ isAboveMiddle }) =>
    isAboveMiddle &&
    css`
      width: 12px;
      height: 12px;

      background: white;

      &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
      
        width: 100%;
        height: 100%;
        background: white;

        animation: center-square-flow 1.5s ease-out infinite;

        @keyframes center-square-flow {
          from {
            transform: scale(1);
            opacity: 1;
          }
          to {
            transform: scale(3);
            opacity: 0;
          }
        }
      }
    `}
`;

export const RoadmapMilestoneDesc = styled.p`
  text-transform: uppercase;
  font-size: 1.15rem;
  color: white;
  opacity: 0.5;
`;

export const RoadmapMilestoneDateWrapper = styled.div`
  width: 40%;
`;

export const RoadmapMilestoneDate = styled.h3`
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: normal;
`;
