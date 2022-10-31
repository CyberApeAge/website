import React, { createContext } from "react";
import {
  FusionChamberEditArea,
  FusionChamberBoxArea,
  BackButton,
} from "../../styles/FusionChamber";
import { ChamberBox, FusionMonkey, FusionStart, FusionGlass } from "./svg";
import { NFTSelectBox } from "./box";
import { ChamberProvider } from "./FusionChamberContext";
import StakedNotConnectFusion from "../StakedNotConnectFusion";
import { CardSelectArea, SteperBox, CardBox } from "../../styles/FusionChamber";

interface Props {
  toNext: () => void;
  toBack: () => void;
}
interface ChamberSelectContextInterface {
  selectedId: number;
}
export const ChamberSelectCtx =
  createContext<ChamberSelectContextInterface | null>(null);
const chamberSelectContext: ChamberSelectContextInterface = {
  selectedId: 0,
};
const FusionChamberSelectComponent: React.FC<Props> = ({ toNext, toBack }) => {
  return (
    <ChamberProvider>
      <FusionChamberEditArea>
        <FusionChamberBoxArea>
          <ChamberBox className="back" />
          <FusionGlass className="glass" />
          <FusionMonkey className="monkey" />
          <FusionStart className="start" onClick={() => toNext()} />
        </FusionChamberBoxArea>
        <CardSelectArea>
          <StakedNotConnectFusion/>
        </CardSelectArea>
        {/* <NFTSelectBox /> */}
        <BackButton onClick={() => toBack()}>&lt; back</BackButton>
      </FusionChamberEditArea>
    </ChamberProvider>
  );
};

export default FusionChamberSelectComponent;