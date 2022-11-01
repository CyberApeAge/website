import React, { useState, useContext, useEffect } from "react";
import {
  BackButton,
  AssetSelectArea,
  AssetBoxArea,
  AssetSelectBox,
  AssetDescription,
  AssetSelectionArea,
  AssetSelectContainer,
  AssetBox,
  AssetSymbol,
  SteperBox,
  AssetLayer,
  AssetLayerActive,
} from "../../styles/FusionChamber";
import styled from "styled-components";
import { ChamberAssetBox, AssetPower, SwitchBox } from "./svg";
import { ArrowButton, Dot, DotsSlider, ArrowButtonImage, DotsSliderContainer } from "../AnnouncementBox/styles";
import FusionChamberAssetLayer from "./FusionChamberAssetLayer";
import {
  AccessariesConst,
  AccessariesType,
  BeakerConst,
} from "./FusionChamberAccessaryMetadata";
import { ChamberProvider } from "./FusionChamberContext";
import { ChamberCtx } from "./FusionChamberContext";
import { SelectObjectDimensions } from "@styled-icons/fluentui-system-filled/SelectObject";
interface Props {
  toNext: () => void;
  toBack: () => void;
}

const AccessaryContainer = styled.div`
  padding-left: 40px;
  display: flex;
  flex-wrap: nowrap;
  @media screen and (max-width:800px){
    margin-left:20px;
    margin-right:20px;
  }
`;

const AnimImage1 = styled.img`
  width: 160px;
  height: 160px;
  position: absolute;
  top: 25%;
  left: 10%;
  opacity:0.1;
  animation-name: breath-animation;
  animation-duration: 3s;
  animation-iteration-count: infinite;

  @keyframes breath-animation {
    0% {
      top: 300px;
      opacity: 0.1;
    }
    50% {
      top: 100px;
      opacity: 0.1;
    }
    100% {
      top: 300px;
      opacity: 0.1;
    }
  }
`;

const AnimImage2 = styled.img`
  width: 160px;
  height: 160px;
  position: absolute;
  top: 20%;
  left: 30%;

  animation-name: breath-animation;
  animation-duration: 4s;
  animation-iteration-count: infinite;

  @keyframes breath-animation {
    0% {
      top: 300px;
      opacity: 0.1;
    }
    40% {
      top: 100px;
      opacity: 0.1;
    }
    100% {
      top: 300px;
      opacity: 0.1;
    }
  }
`;

const AnimImage3 = styled.img`
  width: 160px;
  height: 160px;
  position: absolute;
  top: 25%;
  left: 50%;

  animation-name: breath-animation;
  animation-duration: 5s;
  animation-iteration-count: infinite;

  @keyframes breath-animation {
    0% {
      top: 300px;
      opacity: 0.6;
    }
    50% {
      top: 100px;
      opacity: 0.8;
    }
    100% {
      top: 300px;
      opacity: 0.1;
    }
  }
`;

const AssetContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const AssetHeader = styled.div`
  margin-bottom: 10px;
`;

const AssetBody = styled.div`
  display: flex;
  flex-direction: column;
`;
const SlotContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
`;
const ImageContainer = styled.div`
  display: flex;
  flex-wrap: nowarp;
  width: inherit;
  justify-content: space-between;
`;
const ItemImage = styled.img`
  width: 20%;
`;
const BeakerImage = styled.img`
  width: 20px;
  margin-left: 60px;
  margin-right: 30px;
  padding-top: 5px;
  padding-bottom: 5px;
  height: 90px;
`;
const EmptyImage = styled.div`
  width: 20px;
  margin-left: 60px;
  margin-right: 30px;
  height: 90px;
`;
const AccessarySlotContainer = styled.div`
  width: 100%;
`;
// const AccessaryBeakerContainer=styled.div`
//   display:flex;
//   justify-content:start;
//   align-items:center;
//   flex-direction:column;

// `

// background-color: ${p => p.selected ? '#fff' : '#000'}
const FusionChamberAssetsComponent: React.FC<Props> = ({ toNext, toBack }) => {
  const [tabIndex, setTabIndex] = useState<number>(0);
  const [cnt, setCnt] = useState<number>(0);
  const [anim, setAnim] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  // const [slotSelection, setSlotSelection] = useState<number>(1);
  // const [leftDotBtnClick, setLeftDotBtn] = useState<boolean>(false);
  // const [rightDotBtnClick, setRightDotBtn] = useState<boolean>(false);
  const dots: JSX.Element[] = [];
  for (let i = 0; i < AccessariesConst.length; i++) {
    dots.push(<Dot selected={page == i + 1} key={i} />);
  }
  const setCount = (val: number) => {
    setCnt(cnt + val);
  };
  const nextPage = () => {
    if (page >= 1 && page <= AccessariesConst.length - 1) {
      setPage(page + 1);
      // setRightDotBtn(true)
      // setLeftDotBtn(false)
      setSlots(
        Object.assign(slotSelection, {
          animate: {
            page: page,
            selected: [],
          },
          nonanimate: {
            page: page,
            selected: [],
          },
        })
      );
    }
  };
  const prevPage = () => {
    if (page > 1 && page <= AccessariesConst.length) {
      // setLeftDotBtn(true)
      // setRightDotBtn(false)
      setPage(page - 1);
      setSlots(
        Object.assign(slotSelection, {
          animate: {
            page: page,
            selected: [],
          },
          nonanimate: {
            page: page,
            selected: [],
          },
        })
      );
    }
  };
  interface PageSelectionType {
    page: number;
    selected: number[];
  }

  interface SelectType {
    animate: PageSelectionType;
    nonanimate: PageSelectionType;
  }
  const [slotSelection, setSlots] = useState<SelectType>({
    animate: {
      page: 1,
      selected: [],
    },
    nonanimate: {
      page: 1,
      selected: [],
    },
  });

  const onSlotClick = (slot: number, isAnim: boolean) => {
    var data = {};
    if (isAnim) {
      data = {
        animate: {
          page: page,
          selected: slotSelection.animate.selected.includes(slot)
            ? slotSelection.animate.selected.filter((item) => item != slot)
            : [...slotSelection.animate.selected, slot],
        },
      };
    } else {
      data = {
        nonanimate: {
          page: page,
          selected: slotSelection.nonanimate.selected.includes(slot)
            ? slotSelection.nonanimate.selected.filter((item) => item != slot)
            : [...slotSelection.nonanimate.selected, slot],
        },
      };
    }

    setSlots((oldSlot) => ({ ...oldSlot, ...data }));
    console.log(slotSelection);
  };
  return (
    <ChamberProvider>
      <AssetSelectArea>
        <AssetSelectContainer>
          <AssetBoxArea>
            <ChamberAssetBox className="back">
              {slotSelection.animate.selected.length > 0 ? (
                <>
                  {slotSelection.animate.selected.includes(1) && (
                    <AnimImage1
                      src={
                        AccessariesConst[page - 1].eyewear[
                        Math.round(Math.random() * 3)
                        ]
                      }
                    />
                  )}
                  {slotSelection.animate.selected.includes(2) && (
                    <AnimImage2
                      src={
                        AccessariesConst[page - 1].mouthpiece[
                        Math.round(Math.random() * 3)
                        ]
                      }
                    />
                  )}
                  {slotSelection.animate.selected.includes(3) && (
                    <AnimImage3
                      src={
                        AccessariesConst[page - 1].head[
                        Math.round(Math.random() * 3)
                        ]
                      }
                    />
                  )}
                </>
              ) : null}
            </ChamberAssetBox>
            <SwitchBox className="switch first" calcTotal={setCount} />
            <SwitchBox className="switch second" calcTotal={setCount} />
            <SwitchBox className="switch third" calcTotal={setCount} />
            <SwitchBox className="switch fourth" calcTotal={setCount} />
            <AssetPower
              className="start"
              onClick={() => {
                cnt === 4 ? toNext() : console.log("Failure");
              }}
            />
          </AssetBoxArea>
          <AssetSelectBox>
            <AssetDescription>
              Choose the traits you want to fuse from
            </AssetDescription>
            <AssetDescription>#2456. #23 and #3542</AssetDescription>
            <AccessaryContainer>
              <AccessarySlotContainer>
                {["ANIMATION", "NON-ANIMATION"].map((title, index) => {
                  let accessary = AccessariesConst[page - 1];
                  return (
                    <AssetContainer key={index}>
                      <AssetHeader>{title}</AssetHeader>
                      <AssetBody>
                        <SlotContainer>
                          <AssetLayerActive
                            onClick={() => onSlotClick(1, title == "ANIMATION")}
                            selected={
                              ![
                                ...slotSelection.animate.selected,
                                ...slotSelection.nonanimate.selected,
                              ].includes(1)
                            }
                            disabled1={
                              title !== "ANIMATION" &&
                              slotSelection.animate.selected.includes(1) &&
                              !slotSelection.nonanimate.selected.includes(1)
                            }
                            disabled2={
                              title == "ANIMATION" &&
                              !slotSelection.animate.selected.includes(1) &&
                              slotSelection.nonanimate.selected.includes(1)
                            }
                          >
                            {accessary.eyewear.map((ew, eIndex) => {
                              return <ItemImage key={eIndex} src={ew} />;
                            })}
                          </AssetLayerActive>
                          {title == "ANIMATION" &&
                            (slotSelection.animate.selected.includes(1) ? (
                              !slotSelection.nonanimate.selected.includes(1) ? (
                                <BeakerImage src={BeakerConst.eyewear[1]} />
                              ) : (
                                <EmptyImage />
                              )
                            ) : (
                              <EmptyImage />
                            ))}
                          {title !== "ANIMATION" &&
                            (slotSelection.nonanimate.selected.includes(1) ? (
                              !slotSelection.animate.selected.includes(1) ? (
                                <BeakerImage src={BeakerConst.eyewear[0]} />
                              ) : (
                                <EmptyImage />
                              )
                            ) : (
                              <EmptyImage />
                            ))}
                        </SlotContainer>
                        <SlotContainer>
                          <AssetLayerActive
                            onClick={() => onSlotClick(2, title == "ANIMATION")}
                            selected={
                              ![
                                ...slotSelection.animate.selected,
                                ...slotSelection.nonanimate.selected,
                              ].includes(2)
                            }
                            disabled1={
                              title !== "ANIMATION" &&
                              slotSelection.animate.selected.includes(2) &&
                              !slotSelection.nonanimate.selected.includes(2)
                            }
                            disabled2={
                              title == "ANIMATION" &&
                              !slotSelection.animate.selected.includes(2) &&
                              slotSelection.nonanimate.selected.includes(2)
                            }
                          >
                            {accessary.mouthpiece.map((mp, mIndex) => {
                              return <ItemImage key={mIndex} src={mp} />;
                            })}
                          </AssetLayerActive>
                          {title == "ANIMATION" &&
                            (slotSelection.animate.selected.includes(2) ? (
                              !slotSelection.nonanimate.selected.includes(2) ? (
                                <BeakerImage src={BeakerConst.mouthpiece[0]} />
                              ) : (
                                <EmptyImage />
                              )
                            ) : (
                              <EmptyImage />
                            ))}
                          {title !== "ANIMATION" &&
                            (slotSelection.nonanimate.selected.includes(2) ? (
                              !slotSelection.animate.selected.includes(2) ? (
                                <BeakerImage src={BeakerConst.mouthpiece[1]} />
                              ) : (
                                <EmptyImage />
                              )
                            ) : (
                              <EmptyImage />
                            ))}
                        </SlotContainer>
                        <SlotContainer>
                          <AssetLayerActive
                            onClick={() => onSlotClick(3, title == "ANIMATION")}
                            selected={
                              ![
                                ...slotSelection.animate.selected,
                                ...slotSelection.nonanimate.selected,
                              ].includes(3)
                            }
                            disabled1={
                              title !== "ANIMATION" &&
                              slotSelection.animate.selected.includes(3) &&
                              !slotSelection.nonanimate.selected.includes(3)
                            }
                            disabled2={
                              title == "ANIMATION" &&
                              !slotSelection.animate.selected.includes(3) &&
                              slotSelection.nonanimate.selected.includes(3)
                            }
                          >
                            {accessary.head.map((hd, hIndex) => {
                              return <ItemImage key={hIndex} src={hd} />;
                            })}
                          </AssetLayerActive>
                          {title == "ANIMATION" &&
                            (slotSelection.animate.selected.includes(3) ? (
                              !slotSelection.nonanimate.selected.includes(3) ? (
                                <BeakerImage src={BeakerConst.head[0]} />
                              ) : (
                                <EmptyImage />
                              )
                            ) : (
                              <EmptyImage />
                            ))}
                          {title !== "ANIMATION" &&
                            (slotSelection.nonanimate.selected.includes(3) ? (
                              !slotSelection.animate.selected.includes(3) ? (
                                <BeakerImage src={BeakerConst.head[1]} />
                              ) : (
                                <EmptyImage />
                              )
                            ) : (
                              <EmptyImage />
                            ))}
                        </SlotContainer>
                        <SteperBox>
                          <div onClick={prevPage}>
                            <ArrowButtonImage src="/fusionchamber/left_2.png"></ArrowButtonImage>
                          </div>
                          <div onClick={nextPage}>
                            <ArrowButtonImage src="/fusionchamber/right_2.png"></ArrowButtonImage>
                          </div>
                        </SteperBox>
                        <DotsSliderContainer>
                          <DotsSlider>{dots}</DotsSlider>
                        </DotsSliderContainer>
                      </AssetBody>
                    </AssetContainer>
                  );
                })}
              </AccessarySlotContainer>
            </AccessaryContainer>
          </AssetSelectBox>
        </AssetSelectContainer>
        <BackButton onClick={() => toBack()}>&lt; back</BackButton>
      </AssetSelectArea>
    </ChamberProvider>
  );
};

export default FusionChamberAssetsComponent;
