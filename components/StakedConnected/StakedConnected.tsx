import React, { useEffect, useState, useRef } from "react";
import { NextPage } from "next";

import Slider, { CustomArrowProps, Settings, ResponsiveObject } from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css"; 


import ApeItem from "./ApeItem";
import WalletApeItem from "./WalletApeItem";
import { getRandomApeIndex } from '../../utils'
import { APE_DATA, SingleApeData } from '../../constants/cyberapeage-data'
import { WALLECT_APES_LIST } from "./data"; 
import ArrowDown from "./Arrows/ArrowDown";
import ArrowLeft from "./Arrows/ArrowLeft";
import EmptyApe from './EmptyApe'
import LockdownApeBG from "./LockdownApeBG";
import {
    StakedHeader,
    LockdownApeContainer,
    LockdownApeWrapper,
    WalletLockdownApeContainer,
    NoApesFoundContainer,
    AllLockdownContainer,

    TestDiv
} from './styles';
import HorizontalSlider from "../HorizontalSlider";

const StakedConnected: NextPage = () => {
    const [stakedApes, setStatedApes] = useState<SingleApeData[]>([]);
    const [nothing, setNothing] = useState<boolean>(false);
    const [isAllLockdown, setIsAllLockdown] = useState<boolean>(false);
    const [lockApeBgHeight, setLockApeBgHeight] = useState<number>(0);
    const [lockApeBgWidth, setLockApeBgWidth] = useState<number>(0);
    const lockApeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const mockData: SingleApeData[] = [];
        for (let i:number = 0; i < 10; i ++) {
            const randomApeIndex = getRandomApeIndex();
            const randomApe: SingleApeData = APE_DATA[randomApeIndex];
            mockData.push(randomApe);
        }
        setStatedApes(mockData);
    }, []);

    useEffect(() => {
      console.log(typeof lockApeRef.current?.clientHeight)
      setLockApeBgWidth(lockApeRef.current ? lockApeRef.current?.clientWidth : 0)
      setLockApeBgHeight(lockApeRef.current ? lockApeRef.current?.clientHeight : 0)
    }, []);

    const SlickArrowLeft = ({...props }:CustomArrowProps) => (
        <button
          {...props}
          className="slick-prev slick-arrow"
          aria-hidden="true"
          type="button"
        >
          <ArrowLeft />
        </button>
    );
      
    const SlickArrowRight = ({...props }:CustomArrowProps) => (
        <button
          {...props}
          className="slick-next slick-arrow"
          aria-hidden="true"
          type="button"
        >
          <ArrowLeft />
        </button>
    );

    const AppendDots = (dots: React.ReactNode) => (
      <div className="slick-dots">
        <ul>
          {dots}
        </ul>
      </div>
    );
    
    const CustomPaging = (index: number) => (
        <div></div>
    )

    const responsives: ResponsiveObject[] = [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        }
      }
    ]

    const slickSetting:Settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <SlickArrowRight />,
        prevArrow: <SlickArrowLeft />,
        appendDots: AppendDots,
        initialSlide: 0,
        responsive: responsives,
        customPaging: CustomPaging
    };

    return (
        <>
            {!isAllLockdown &&
              <StakedHeader>
                <p>lockdown a cyber ape to mine $cyber</p>
                <p>click here to choose one or multiple cyber apes to stake</p>
              </StakedHeader>
            }
            
            <LockdownApeContainer 
              customStyles={{
                padding: isAllLockdown ?  "0" : "40px",
                background: 'url(./dotBg.png) no-repeat',
                backgroundSize: `100% ${isAllLockdown ? '200px' : '410px'} `,
                minHeight: `${isAllLockdown ? '200px' : '410px'}`,
              }}
              ref={lockApeRef}>
              {
                  !isAllLockdown ?
                    <Slider {...slickSetting}>
                    {stakedApes.map((item: SingleApeData, index) => (
                      <ApeItem
                          key={index}
                          token={item.token}
                          rank={item.rank}
                          traits={item.traits} />
                    ))}
                    </Slider>
                  :
                    <AllLockdownContainer>
                      <p className="title">all cyber apes underlockdown</p>
                      <p className="description">$cyber minting initiated...</p>
                      <div className="shadow-ape">
                        <EmptyApe />
                      </div>
                      
                    </AllLockdownContainer>
              }
            </LockdownApeContainer>

            {<WalletLockdownApeContainer>
              <div className="section-caption">
                  <p>your wallet&apos;s lockdown</p>
                  <ArrowDown />
              </div>
              <div className="staked-ape-container">
                {nothing ? 
                  <NoApesFoundContainer>
                    oops you have nothing staked...
                  </NoApesFoundContainer>
                :
                  WALLECT_APES_LIST.map((ApeData, index) => (
                    <WalletApeItem
                      key={index}
                      traits={ApeData.traits}
                      timeInLockdown={ApeData.timeInLockdown}
                      totalDays={ApeData.totalDays}
                      cyberProgress={ApeData.cyberProgress}
                      rewardedSecond={ApeData.rewardedSecond}
                      totalSecond={ApeData.totalSecond}
                    />
                  ))
                }
              </div>
            </WalletLockdownApeContainer>}
        </>
    )
}



export default StakedConnected;