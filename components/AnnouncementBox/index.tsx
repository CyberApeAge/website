import { useState } from "react";
import {
  AnnouncementContainer,
  AnnouncementSubTitle,
  AnnouncementTitle,
  ArrowButton,
  Dot,
  DotsSlider,
  SlideOutContainer,
} from "./styles";

const TAB_COUNT = 5;

const announcementData = [
  {
    title: "DAO VOTE ON PRIZE POOL",
    subTitle: "FEATURED ANNOUNCEMENT",
    body: "A vote as taken place on the DAO to find the next move on the...",
  },
  {
    title: "DAO VOTE ON PRIZE POOL",
    subTitle: "ANNOUNCEMENT 2",
    body: "A vote as taken place on the DAO to find the next move on the...",
  },
  {
    title: "DAO VOTE ON PRIZE POOL",
    subTitle: "ANNOUNCEMENT 3",
    body: "A vote as taken place on the DAO to find the next move on the...",
  },
  {
    title: "DAO VOTE ON PRIZE POOL",
    subTitle: "ANNOUNCEMENT 4",
    body: "A vote as taken place on the DAO to find the next move on the...",
  },
  {
    title: "DAO VOTE ON PRIZE POOL",
    subTitle: "ANNOUNCEMENT 5",
    body: "A vote as taken place on the DAO to find the next move on the...",
  },
];

const AnnouncementBox = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [slideElements, setSlideElements] = useState<JSX.Element[]>([]);

  const dots: JSX.Element[] = [];
  for (let i = 0; i < TAB_COUNT; i++) {
    dots.push(<Dot selected={i == tabIndex} key={i} />);
  }

  const addSlideElement = (index: number) => {
    let newElement = (
      <SlideOutContainer key={slideElements.length}>
        <AnnouncementSubTitle>
          {announcementData[index].subTitle}
        </AnnouncementSubTitle>
        <AnnouncementTitle>{announcementData[index].title}</AnnouncementTitle>
        <AnnouncementSubTitle>
          {announcementData[index].body}
        </AnnouncementSubTitle>
      </SlideOutContainer>
    );
    setSlideElements(slideElements.concat(newElement));
  };

  const onLeftClick = () => {
    if (tabIndex == 0) {
      addSlideElement(tabIndex);
      setTabIndex(TAB_COUNT - 1);
    } else {
      addSlideElement(tabIndex);
      setTabIndex(tabIndex - 1);
    }
  };

  const onRightClick = () => {
    if (tabIndex == TAB_COUNT - 1) {
      addSlideElement(tabIndex);
      setTabIndex(0);
    } else {
      addSlideElement(tabIndex);
      setTabIndex(tabIndex + 1);
    }
  };

  return (
    <div className="cut-div black">
      <div className="slider-cut">
        <DotsSlider>{dots}</DotsSlider>

        <div className="arrow-slider">
          <p>
            <ArrowButton onClick={onLeftClick}>&lt;</ArrowButton>{" "}
            <ArrowButton onClick={onRightClick}>&gt;</ArrowButton>
          </p>
        </div>
      </div>
      <AnnouncementContainer>
        <AnnouncementSubTitle>
          {announcementData[tabIndex].subTitle}
        </AnnouncementSubTitle>
        <AnnouncementTitle>
          {announcementData[tabIndex].title}
        </AnnouncementTitle>
        <AnnouncementSubTitle>
          {announcementData[tabIndex].body}
        </AnnouncementSubTitle>
      </AnnouncementContainer>
      {slideElements}
    </div>
  );
};

export default AnnouncementBox;
