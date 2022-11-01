import { useEffect, useState, useContext } from "react";
import styled, { keyframes } from "styled-components";
import {
  AnnouncementContainer,
  AnnouncementSubTitle,
  AnnouncementTitle,
  ArrowButtonImage,
  Dot,
  DotsSliderContainer,
  DotsSlider,
  SlideOutContainer,
} from "../../AnnouncementBox/styles";
import {
  CardSelectArea,
  SteperBox,
  CardBox,
} from "../../../styles/FusionChamber";
import NFTCard from "../card/NFTCard";
interface cardProps {
  url: string;
  type: string;
}

const cardData = [
  {
    url: "/legendary-1.png",
    type: "legendary",
  },
  {
    url: "/epic-1.png",
    type: "epic",
  },
  {
    url: "/mythic-1.png",
    type: "mythic",
  },
  {
    url: "/legendary-2.png",
    type: "legendary",
  },
  {
    url: "/epic-2.png",
    type: "epic",
  },
  {
    url: "/mythic-2.png",
    type: "mythic",
  },
  {
    url: "/legendary-3.png",
    type: "legendary",
  },
  {
    url: "/epic-3.png",
    type: "epic",
  },
  {
    url: "/mythic-3.png",
    type: "mythic",
  },
  {
    url: "/legendary-4.png",
    type: "legendary",
  },
  {
    url: "/epic-4.png",
    type: "epic",
  },
  {
    url: "/mythic-4.png",
    type: "mythic",
  },
];

const TAB_COUNT = Math.ceil(cardData.length / 9);

const NFTSelectBox = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [cards, setCards] = useState<cardProps[]>([]);
  // const [leftDotBtnClick, setLeftDotBtn] = useState<boolean>(false);
  // const [rightDotBtnClick, setRightDotBtn] = useState<boolean>(false);

  const dots: JSX.Element[] = [];
  for (let i = 0; i < TAB_COUNT; i++) {
    dots.push(
      <Dot selected={i == tabIndex} key={i} width={"12px"} height={"13px"} />
    );
  }

  const addSlideElement = (index: number) => { };

  const onLeftClick = () => {
    // setLeftDotBtn(true);
    // setRightDotBtn(false)

    if (tabIndex == 0) {
      addSlideElement(tabIndex);
      // setTabIndex(TAB_COUNT - 1);
    } else {
      addSlideElement(tabIndex);
      setTabIndex(tabIndex - 1);
    }
  };

  const onRightClick = () => {

    // setRightDotBtn(true)
    // setLeftDotBtn(false)

    if (tabIndex == TAB_COUNT - 1) {
      addSlideElement(tabIndex);
      // setTabIndex(0);
    } else {
      addSlideElement(tabIndex);
      setTabIndex(tabIndex + 1);
    }
  };

  useEffect(() => {
    var tempcards: cardProps[] = [];
    for (
      var i = tabIndex * 9;
      i <=
      tabIndex * 9 +
      ((cardData.length - tabIndex * 9) / 9 >= 1
        ? 8
        : ((cardData.length - tabIndex * 9) % 9) - 1);
      i++
    ) {
      tempcards.push(cardData[i]);
    }
    setCards(tempcards);
  }, [tabIndex]);

  return (
    <CardSelectArea>
      <CardBox>
        {cards.map((item, index) => {
          return <NFTCard key={index} url={item.url} type={item.type} />;
        })}
      </CardBox>
      <SteperBox>
        <div onClick={onLeftClick}>
          <ArrowButtonImage src="/fusionchamber/left_2.png"></ArrowButtonImage>
        </div>
        <div onClick={onRightClick}>
          <ArrowButtonImage src="/fusionchamber/right_2.png"></ArrowButtonImage>
        </div>
      </SteperBox>
      <DotsSliderContainer>

        <DotsSlider>{dots}</DotsSlider>
      </DotsSliderContainer>
    </CardSelectArea>
  );
};

export default NFTSelectBox;
