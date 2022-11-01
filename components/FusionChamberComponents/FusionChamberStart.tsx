import React from "react";
import {
  MainContainer,
  FusionChamberStart,
  FusionChamberStartButton,
  FusionChamberStartLeftButton,
  FusionChamberStartRightButton,
} from "../../styles/FusionChamber";
import Script from "next/script";

interface Props {
  toNext: () => void;
}

const FusionChamberStartComponent: React.FC<Props> = ({ toNext }) => {
  return (
    <>
      {/* <div className="wordart" data-wordart-src="" /> */}
      <MainContainer>
        <FusionChamberStart>
          <FusionChamberStartLeftButton />
          <FusionChamberStartButton onClick={() => toNext()} />
          <FusionChamberStartRightButton />
        </FusionChamberStart>
      </MainContainer>
      {/* <Script id="stripe-js" src="/bg.js" /> */}
    </>
  );
};

export default FusionChamberStartComponent;
