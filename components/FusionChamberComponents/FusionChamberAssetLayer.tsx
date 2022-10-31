import React, { useState, useContext } from "react";
import { AssetLayer, AssetLayerActive } from "../../styles/FusionChamber";
// import styled from "styled-components";
import {ChamberCtx} from './FusionChamberContext'

interface Props {
  id: number;
  setId: any;
  slotNumber: number;
  children: any;
}

// const Image = styled.img`
//   width: 94px;
//   height: 94px;
//   transform: translateX(75px);
// `;
const FusionChamberAssetLayer: React.FC<Props> = ({ children, id, setId, slotNumber }) => {
  const [flag, setFlag] = useState(false);
  // if (flag) console.log(slotNumber)
  
  
  return (
    <>
      {/* {flag ? (
        <AssetLayer
          onClick={() => {
            setId(id);
          setFlag(!flag)

          }}
          >
          {children}
        </AssetLayer>
      ) : (
        <AssetLayerActive
        onClick={() => {
          setFlag(!flag)
          setId(id);
          }}
        >
          {children}
        </AssetLayerActive>
      )} */}
    </>
  );
};

export default FusionChamberAssetLayer;
