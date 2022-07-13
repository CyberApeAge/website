import styled from "styled-components";
import { PAGE_MAX_WIDTH } from "../constants";

const headerH = `94px`;
const emptyH = `150px`;
const containerH = `calc(100vh - ${emptyH} - ${headerH})`;
const headerPaddingX = `(22 / 1920) * 100vw`;

export const MainContainer = styled.div`
  width: 100%;
  min-height: ${containerH};
  margin: 0 auto;
  background-image: url(/wordart.png);
  background-size: 100vw ${containerH};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow: auto;
`;

export const EmptyContainer = styled.div`
  height: ${emptyH};
`;

export const BottomContainer = styled.div`
  height: 50px;
`;

export const DefaultHeaderContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 22px 0;
  text-align: center;
  font-size: 50px;
  line-height: 50px;
  text-transform: uppercase;
  color: #ffffff;
  background: linear-gradient(89.56deg, #71bace 29.57%, #5fad67 82.94%);
`;

export const FusionChamberStart = styled.div`
    width: inherit;
    height: ${containerH};
    background-image: url(/fusionchamber/chamber.svg);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    justify-content: center;
    display: flex;
`;

export const FusionChamberStartButton = styled.div`
    cursor: pointer;
    width: 156px;
    height: 129px;
    margin-top: calc(80vh - ${emptyH} - ${headerH});
    background-image: url(/fusionchamber/startbutton.svg);
    background-size: cover;

  /* transition: all 0.3s ease-in-out; */

    :active {
      transform: translateY(calc((5 / 1920) * 100vw));
    }
`;

export const FusionChamberEditArea = styled.div`
  min-height: ${containerH};
  position: relative;
  background-color: #000;
  width: 100%;
  padding-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const FusionChamberBoxArea = styled.div`
  width: inherit;
  height: ${containerH};

  position: relative;

  svg {
    position: absolute;
  }

  .back {
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
  }

  .monkey {
    top: calc((270 / 1920) * 100vw);

    width: calc((552 / 1920) * 100vw);
    height: calc((580 / 1920) * 100vw);
  }

  .start {
    cursor: pointer;
    position: absolute;

    top: calc((937 / 1920) * 100vw);
    left: calc((200 / 1920) * 100vw);

    width: calc((160.06 / 1920) * 100vw);
    height: calc((137.2 / 1920) * 100vw);

    /* transition: all 0.3s ease-in; */

    :active {
      transform: translateY(calc((5 / 1920) * 100vw));
    }
  }
`;

export const CardSelectArea = styled.div`
  width: calc((950 / 1920) * 100vw);
  min-height: calc((1101 / 1920) * 100vw);

  margin-top: calc((93 / 1920) * 100vw);

  padding: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  position: relative;
`;

export const SteperBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  font-size: 25px;

  cursor: pointer;
`;

export const CardBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: start;

  width: calc((950 / 1920) * 100vw);
  height: calc((1101 / 1920) * 100vw);
`;

export const CardS = styled.div`
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 5px;
  margin-right: 5px;

  width: calc((274.35 / 1920) * 100vw);
  height: calc((351 / 1920) * 100vw);
`;

export const CardImage = styled.div``;

export const BackButton = styled.div`
  position: absolute;
  cursor: pointer;

  right: calc((40 / 1920) * 100vw);
  top: calc((25 / 1920) * 100vw);

  font-family: "VT323";
  font-style: normal;
  font-weight: 400;
  font-size: calc((40 / 1920) * 100vw);
  line-height: calc((40 / 1920) * 100vw);

  text-transform: uppercase;

  color: #ffffff;

  transition: all 0.3s ease-in-out;

  :hover {
    transform: scale(1.03);
  }
`;

export const AssetSelectArea = styled.div`
  position: relative;

  background-color: #000;
  width: 100%;

  padding-top: calc((63 / 1920) * 100vw);

  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const AssetBoxArea = styled.div`
  width: calc((793 / 1920) * 100vw);
  height: calc((1683.41 / 1920) * 100vw);

  position: relative;

  svg {
    position: absolute;
  }

  .back {
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
  }

  .switch {
    cursor: pointer;
    top: calc((963 / 1920) * 100vw);

    width: calc((150 / 1920) * 100vw);
    height: calc((300 / 1920) * 100vw);
  }

  .first {
    left: calc((145 / 1920) * 100vw);
  }
  .second {
    left: calc((255 / 1920) * 100vw);
  }
  .third {
    left: calc((365 / 1920) * 100vw);
  }
  .fourth {
    left: calc((475 / 1920) * 100vw);
  }

  .start {
    cursor: pointer;
    position: absolute;

    top: calc((1210 / 1920) * 100vw);
    left: calc((300 / 1920) * 100vw);

    width: calc((190 / 1920) * 100vw);
    height: calc((230 / 1920) * 100vw);

    /* transition: all 0.3s ease-in; */

    :active {
      transform: translateY(calc((5 / 1920) * 100vw));
    }
  }
`;

export const AssetDescription = styled.div`
  width: calc((991 / 1920) * 100vw);

  font-family: "VT323";
  font-style: normal;
  font-weight: 400;
  font-size: calc((64 / 1920) * 100vw);
  line-height: calc((64 / 1920) * 100vw);
  text-align: center;
  text-transform: uppercase;

  color: #ffffff;
`;

export const AssetSelectBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 30px;

  padding-top: 60px;
`;

export const AssetSelectionArea = styled.div`
  width: calc((1000 / 1920) * 100vw);

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const AssetBox = styled.div`
  width: calc((800 / 1920) * 100vw);
  height: calc((600 / 1920) * 100vw);

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: calc((54 / 1920) * 100vw);
  padding-top: 13px;

  background-color: red;
`;

export const AssetSymbol = styled.div`
  width: calc((125 / 1920) * 100vw);
  height: calc((500 / 1920) * 100vw);

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 35px;

  background-color: blue;
`;

export const AssetLayer = styled.div`
  width: calc((770 / 1920) * 100vw);
  height: calc((110 / 1920) * 100vw);

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 72px;
`;
