import { NextPage } from 'next'
import React from 'react'
import { WalletApesDataProps } from './types'
import CyberApeRenderer from '../CyberApeRenderer'
import BloomingContainer from '../BloomingContainer'
import ApeItemDetailPart from './ApeItemDetailPart'
import SignatureButton from '../SignatureButton'
import {
    WalletApeItemContainer
} from './styles'

// mainTitle: string,
// mainText: string,
// sumary: string,
// totalAmount: number,
// progress: number

const WalletApeItem: NextPage<WalletApesDataProps> = ({
        traits, timeInLockdown, totalDays, cyberProgress, rewardedSecond, totalSecond}) => {
    return (
        <WalletApeItemContainer size={10}>
            <BloomingContainer
                accent="#444"
                customStyles={{
                    width: "100%",
                    border: "none",
                    padding: "16px 15px",
                    display: "grid",
                    gap: "1rem",
                    gridTemplateColumns: "repeat(auto-fill, 120px 32% 32% 16%)",
                    justifyContent: "space-between"
                  }}
            >
                <CyberApeRenderer 
                    isLookingRight={false}
                    size="120px"
                    traits={traits}/>
                <ApeItemDetailPart 
                    mainTitle="time in lockdown"
                    mainText={timeInLockdown}
                    summary="days $cyber bonus progress"
                    totalAmount={totalDays}
                    progress={cyberProgress}
                />
                <ApeItemDetailPart 
                    mainTitle="cyber rewarded per second"
                    mainText={rewardedSecond.toString()}
                    summary="days $cyber bonus progress"
                    totalAmount={totalSecond}
                    progress={rewardedSecond}
                />
                <div className="action-container">
                    <SignatureButton 
                        onClick= {()=>{}}
                        accent="#E42575"
                        customStyle={{
                            width: "100%"
                        }}>
                        release
                    </SignatureButton>
                    <SignatureButton 
                        onClick={()=>{}}
                        isContrast 
                        accent="#5865F2"
                        customStyle={{
                            width: "100%"
                        }}
                        >
                        claim rewards
                    </SignatureButton>
                </div>

            </BloomingContainer>
            
        </WalletApeItemContainer>
    )
}

export default WalletApeItem;