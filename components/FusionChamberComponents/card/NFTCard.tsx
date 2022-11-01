import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { CardS } from "../../../styles/FusionChamber";
import NFTType from "./NFTType";
import { ChamberCtx } from "../FusionChamberContext";

interface Props {
  url: string;
  type: string;
  selected?: boolean;
  disabled?: boolean;
}

const CardImageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 147.33px;
  padding: 0;
  margin-bottom: 8px;
`;

const CardImageDescription = styled.div`
  display: flex;
  flex-direction: row;
  width: 147.33px;
  font-family: "VT323";
  font-style: normal;
  font-weight: 400;
  font-size: calc((28 / 1920) * 100vw);
  line-height: calc((28 / 1920) * 100vw);
  color: #ffffff;
  justify-content: space-between;
  p:last-child {
    font-size: 15px;
    margin-right: 10px;
  }
`;

const CardImage = styled.img`
  width: 147.33px;
  height: 153.24px;
  background: #71bace;
  clip-path: polygon(
    0% 6%,
    2% 6%,
    2% 4%,
    4% 4%,
    4% 2%,
    6% 2%,
    6% 0%,
    94% 0%,
    94% 2%,
    96% 2%,
    96% 4%,
    98% 4%,
    98% 6%,
    100% 6%,
    100% 94%,
    98% 94%,
    98% 96%,
    96% 96%,
    96% 98%,
    94% 98%,
    94% 100%,
    6% 100%,
    6% 98%,
    4% 98%,
    4% 96%,
    2% 96%,
    2% 94%,
    0% 94%
  );
`;

const ImageContainer = styled.div`
  position: relative;
  clip-path: polygon(
    0% 6%,
    2% 6%,
    2% 4%,
    4% 4%,
    4% 2%,
    6% 2%,
    6% 0%,
    94% 0%,
    94% 2%,
    96% 2%,
    96% 4%,
    98% 4%,
    98% 6%,
    100% 6%,
    100% 94%,
    98% 94%,
    98% 96%,
    96% 96%,
    96% 98%,
    94% 98%,
    94% 100%,
    6% 100%,
    6% 98%,
    4% 98%,
    4% 96%,
    2% 96%,
    2% 94%,
    0% 94%
  );
  &:hover {
    background: #284c56;
    opacity: 0.8;
    // filter: blur(2.2px);
    transition: ease-in-out 0.35s;
    /* clip-path: polygon(
            0% 6%, 2% 6%, 2% 4%, 4% 4%, 4% 2%, 6% 2%, 6% 0%,
            94% 0%, 94% 2%, 96% 2%, 96% 4%, 98% 4%, 98% 6%, 100% 6%,
            100% 94%, 98% 94%, 98% 96%, 96% 96%, 96% 98%, 94% 98%, 94% 100%,
            6% 100%, 6% 98%, 4% 98%, 4% 96%, 2% 96%, 2% 94%, 0% 94%); */
  }
`;

const ImageOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 147.33px;
  height: 153.24px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #1f1f1f;
  opacity: 0.78;
`;

const OverlayText = styled.p`
  text-transform: uppercase;
  font-size: 31px;
  margin-top: -30px;
`;

const NFTCard: React.FC<Props> = ({
  url,
  type,
  selected = false,
  disabled = false,
}) => {
  const [status, setStatus] = useState(false);
  const { selectedCards, pushSelection, popSelection } = useContext(ChamberCtx);

  const onCardClick = (url: string) => {
    if (!status) pushSelection(url);
    else popSelection(url);
    setStatus(!status);
  };

  return (
    <CardS onClick={() => onCardClick(url)}>
      <CardImageBox>
        <ImageContainer>
          <CardImage src={`/fusionchamber/NFTs/${url}`} />
          {status ? (
            <ImageOverlay>
              <OverlayText>selected</OverlayText>
            </ImageOverlay>
          ) : null}
        </ImageContainer>
        <CardImageDescription>
          <p>#3131</p>
          <p>121º</p>
        </CardImageDescription>
      </CardImageBox>
      <NFTType type={type} />
    </CardS>
  );
};

export default NFTCard;