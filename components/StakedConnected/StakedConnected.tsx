import React, { useEffect, useState, useRef } from "react";
import { NextPage } from "next";

import Slider, { CustomArrowProps, Settings } from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import ApeItem from "./ApeItem";
import WalletApeItem from "./WalletApeItem";
import { getRandomApeIndex } from '../../utils'
import { APE_DATA, SingleApeData } from '../../constants/cyberapeage-data'
import { WALLECT_APES_LIST } from "./data"; 
import ArrowDown from "./ArrowDown";
import EmptyApe from './EmptyApe'
import LockdownApeBG from "./LockdownApeBG";
import {
    StakedHeader,
    LockdownApeContainer,
    LockdownApeWrapper,
    WalletLockdownApeContainer,
    NoApesFoundContainer,
    AllLockdownContainer,
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

    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }:CustomArrowProps) => (
        <button
          {...props}
          className={
            "slick-prev slick-arrow" +
            (currentSlide === 0 ? " slick-disabled" : "")
          }
          aria-hidden="true"
          type="button"
        >
          Previous
        </button>
      );
      
      const SlickArrowRight = ({ currentSlide, slideCount, ...props }:CustomArrowProps) => (
        <button
          {...props}
          className={"slick-next slick-arrow"}
          aria-hidden="true"
          type="button"
        >
          Next
        </button>
      );

    const slickSetting:Settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    }

    return (
        <>
            <StakedHeader>
                <p>lockdown a cyber ape to mine $cyber</p>
                <p>click here to choose one or multiple cyber apes to stake</p>
            </StakedHeader>
            <LockdownApeContainer 
              customStyles={{
                padding: isAllLockdown ?  "0" : "20px",
                background: 'url(./dotBg.png) no-repeat',
                backgroundSize: `100% 380px`,
                minHeight: '380px',
              }}
              ref={lockApeRef}>
              {
                  !isAllLockdown ?
                    <LockdownApeWrapper>
                    {stakedApes.map((item: SingleApeData, index) => (
                          <ApeItem
                              key={index}
                              token={item.token}
                              rank={item.rank}
                              traits={item.traits} />
                      ))}
                    </LockdownApeWrapper>
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