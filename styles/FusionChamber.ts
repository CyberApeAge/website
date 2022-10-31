import styled from "styled-components";
import { PAGE_MAX_WIDTH } from "../constants";

const headerH = `77px`;
const emptyH = `134px`;
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
  height: 134px;
`;

export const BottomContainer = styled.div`
  height: 50px;
`;

export const DefaultHeaderContainer = styled.div`
  width: 100%;
  height: 77px;
  margin: 0 auto;
  padding: 23px 0;
  text-align: center;
  font-size: 64px;
  line-height: 30px;
  text-transform: uppercase;
  color: #ffffff;
  background: linear-gradient(89.56deg, #71bace 29.57%, #5fad67 82.94%);
  @media screen and (max-width:600px){
    font-size:48px;
  }
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
    width: 120px;
    height: 90px;
    margin-top: calc(81.5vh - ${emptyH} - ${headerH});
    background-image: url(/fusionchamber/startbutton.svg);
    background-size: cover;
  /* transition: all 0.3s ease-in-out; */
    :active {
      transform: translateY(calc((5 / 1920) * 100vw));
    }
`;
export const FusionChamberStartLeftButton = styled.div`
    cursor: pointer;
    width: 51px;
    height: 86px;
    background-image: url(/fusionchamber/side-left-button.svg);
    background-size: cover;
    margin-top: calc(75.7vh - ${emptyH} - ${headerH});
    margin-right: 50px;
    /* margin-left: calc(20vh - ${emptyH} - ${headerH}); */
  /* transition: all 0.3s ease-in-out; */
    :active {
      transform: translateX(calc((2 / 1920) * 100vw));
    }
`;
export const FusionChamberStartRightButton = styled.div`
    cursor: pointer;
    width: 46px;
    height: 87px;
    background-image: url(/fusionchamber/side-right-button.svg);
    background-size: cover;
    margin-top: calc(75.7vh - ${emptyH} - ${headerH});
    margin-left: 50px;
  /* transition: all 0.3s ease-in-out; */
    :active {
      transform: translateX(calc((-2 / 1920) * 100vw));
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
  justify-content: flex-start;
  @media screen and (max-width:800px){
    flex-wrap:wrap;
    margin-top:40px;
  }
`;

export const FusionChamberBoxArea = styled.div`
  max-width:600px;
  min-width:600px;
  height: 849px;
  margin-left: 119px;
  position: relative;
  svg {
    position: absolute;
  }
  .back {
    top: 0;
    left: 0;
    width: 132%;
    height: 100%;
  }
  .glass{
    /* width: 334px; */
    height: 458px;
    top: 78px;
    left: 130px
  }
  // .monkey {
  //   top: calc((270 / 1920) * 100vw);
  //   width: calc((552 / 1920) * 100vw);
  //   height: calc((580 / 1920) * 100vw);
  // }
  .start {
    overflow: visible;
    cursor: pointer;
    position: absolute;
    // top: calc((515 / 1920) * 100vw);
    bottom: 18%;
    // left: calc((445 / 1920) * 100vw);
    width: 600px;
    height: 10%;
    /* transition: all 0.3s ease-in; */
    z-index:1;
    :active {
      transform: translateY(calc((5 / 1920) * 100vw));
    }
  }
`;

export const CardSelectArea = styled.div`
  width: calc((950 / 1920) * 100vw);
  margin-top: 46px;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */
  position: relative;
  @media screen and (max-width:800px){
    margin-top:100px;
  }
`;

export const SteperBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:center;
  width: 100%;
  align-items: center;
  gap: 0px;
  font-size: 25px;
  cursor: pointer;
  padding-top: 30px;
`;

export const SteperBox2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 0px;
  font-size: 25px;
  cursor: pointer;
  padding-right: 80px;
`;

export const CardBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: start;
  width: 800px;
  gap: 20px;
  align-items: center;
    justify-content: center;
  /* height: 210px; */
  @media screen and (max-width:1200px){
    width:600px;
  }
`;

export const CardS = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 22px;
  margin-right: 20px;
  height: 218px;
  width: 147.33px;
`;

export const CardImage = styled.div``;

export const BackButton = styled.div`
  position: absolute;
  cursor: pointer;
  right: calc((200 / 1920) * 100vw);
  top: calc((20 / 1920) * 100vw);
  font-family: "VT323";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: calc((40 / 1920) * 100vw);
  text-transform: uppercase;
  color: #ffffff;
  transition: all 0.3s ease-in-out;
  :hover {
    transform: scale(1.03);
  }
  @media screen and (max-width:800px){
    margin-top:40px;
  }
`;

export const AssetSelectArea = styled.div`
  position: relative;
  background-color: #000;
  width: 100%;
  padding-top: calc((63 / 1920) * 100vw);
`;

export const AssetSelectContainer = styled.div`
  background-color: #000;
  width: 100%;
  max-width: 1280px;
  margin: auto;
  display: flex;
  flex-wrap:wrap;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width:1200px){
  justify-content: center;
  }
`;

export const AssetBoxArea = styled.div`
  width: 389.08px;
  height: 824.67px;
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
    top: 471.87px;
    width: 73.5px;
    height: 147px;
  }
  .first {
    left: 71.295px;
  }
  .second {
    left: 124.95px;
  }
  .third {
    left: 178.6px;
  }
  .fourth {
    left: 233px;
  }
  .start {
    cursor: pointer;
    position: absolute;
    top: 593.145px;
    left: 147px;
    width: 93.345px;
    height: 112.45px;
    /* transition: all 0.3s ease-in; */
    :active {
      transform: translateY(2px);
    }
  }
  @media screen and (max-width:1200px){
    margin-top:40px;
  
    }
`;

export const AssetDescription = styled.div`
  width: 500px;
  display: flex;
  justify-content:center;
  font-family: "VT323";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 32px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  @media screen and (max-width:800px){
    font-size:24px;
  }
`;

export const AssetSelectBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 10px;
  @media screen and (max-width:1200px){
    margin-top:40px;
  
    }
`;

export const AssetSelectionArea = styled.div`
  width: calc((1000 / 1920) * 100vw);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const AssetBox = styled.div`
  width: calc((800 / 1920) * 100vw);
  height: calc((600 / 1920) * 100vw);
  flex-wrap:nowrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: calc((80 / 1920) * 100vw);
  padding-top: 13px;
  // background-color: red;
`;

export const AssetSymbol = styled.div`
  width: calc((125 / 1920) * 100vw);
  height: calc((500 / 1920) * 100vw);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  // background-color: blue;
`;

export const AssetLayer = styled.a`
  width: calc((770 / 1920) * 100vw);
  height: calc((85 / 1920) * 100vw);
  display: flex;
  flex-direction: row;
  align-items: center;
   gap: 72px;
  position: relative;
  background-image: linear-gradient(21deg,transparent 3%,#333 -11% 97%,transparent 95%);
  padding: 20px;
  padding-bottom: 0px;
  z-index: 0;
  ::before {
    z-index: -1;
    content: '';
    position: absolute;
    left: 3px;
    right: 3px;
    top: 3px;
    bottom: 3px;
    background-image: linear-gradient(21deg,transparent 3%,#333 -11% 97%,transparent 95%);
  }
`;

export const AssetLayerActive = styled.a<{selected:boolean, disabled1:boolean,disabled2:boolean}>`
  width: 100%;
  height: 75px;
  display: flex;
  flex-direction: row;
  align-items: center;
  // gap: 72px;
  justify-content:space-between;
  position: relative;
  background-image: linear-gradient(21deg,transparent 3%,#333 -11% 97%,transparent 95%);
  padding-bottom: 0px;
  z-index: 0;
  pointer-events:${p=>(p.disabled1||p.disabled2?'none':'')};
  ::before {
    z-index: -1;
    content: '';
    position: absolute;
    left: 3px;
    right: 3px;
    top: 3px;
    bottom: 3px;
    background-image:  ${(p)=>(p.selected?'linear-gradient(21deg,transparent 3%,#000000 -11% 97%,transparent 95%);':'')};
   
    overflow:auto;
  }
  :hover{
    ::before {
    z-index: -1;
    content: '';
    position: absolute;
    left: 3px;
    right: 3px;
    top: 3px;
    bottom: 3px;
    background-image: linear-gradient(21deg, transparent 5%, #333 5% 95%, transparent 95%);
  }
  }
`;