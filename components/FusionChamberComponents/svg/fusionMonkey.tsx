import React, { useContext } from "react";
import { ChamberCtx } from "../FusionChamberContext";
import styled from "styled-components";

interface Props {
  className: string;
}
const SelectedImage = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -53%;
  block-size: 45%;
`;
export const FusionMonkey: React.FC<Props> = ({ className }) => {
  const { selectedCards } = useContext(ChamberCtx);
  console.log(selectedCards);
  return (
    <React.Fragment>
      <SelectedImage>
        {selectedCards.length > 0 && (
          <img
            className="className"
            src={`/fusionchamber/NFTs/${
              selectedCards[selectedCards.length - 1]
            }`}
          />
        )}
      </SelectedImage>
    </React.Fragment>
  );
};
