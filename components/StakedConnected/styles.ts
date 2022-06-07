import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import Color from 'color';
import { PAGE_MAX_WIDTH } from "../../constants";


import { 
    RarityBtnElemProps,
    ClipStepSizeProps,
    CustomStylesProps
} from "./types";


export const StakedHeader = styled.div`
    display: block;
    text-align: center;

    > p:first-of-type {
        font-size: 32px;
        line-height: 32px;
        text-transform: uppercase;
        color: #FFFFFF;
    }
    > p:last-of-type {
        font-size: 14px;
        line-height: 14px;
        text-transform: uppercase;
        color: #404040;
        margin-top: 10px;
    }
`

export const LockdownApeContainer = styled.div<CustomStylesProps>`
    width: 100%;
    max-width: ${PAGE_MAX_WIDTH};
    height: fit-content;
    text-align: center;
    margin: 20px auto;
    display: flex;

    ${({customStyles}) => 
        customStyles && 
        css`
            ${customStyles}
        `
    }
`
export const LockdownApeWrapper = styled(motion.div)`
    display: flex;
    flex-direction: row;
    justify-content:center;
    align-items: stretch;
    gap: 4rem;
    overflow: hidden; // TODO: fix the carousel
`
export const ApeItemContainer = styled.div`
    width: auto;
    display: block;
    margin: 10px 20px;
`
export const HeroRenderWrapper = styled.div`
    width: 100%;
    position: relative;
    clip-path: polygon(0% 5%, 2.5% 5%, 2.5% 2.5%, 5% 2.5%, 5% 0%,
        95% 0%, 95% 2.5%, 97.5% 2.5%, 97.5% 5%, 100% 5%,
        100% 95%, 97.5% 95%, 97.5% 97.5%, 95% 97.5%, 95% 100%,
        5% 100%, 5% 97.5%, 2.5% 97.5%, 2.5% 95%, 0% 95%);
`

export const RankSectionDiv = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    font-size: 28px;
    line-height: 28px;
    margin-top: 10px;
`
export const RarityBtnContainer = styled.div<RarityBtnElemProps>`
    position: relative;
    background: ${({color}) => color};
    width: 100%;
    margin-top: 10px;
    padding: 0 2px 2px 0;
    clip-path: ${({size}) => `
        polygon(0% ${size}px, ${size/2}px ${size}px, 
        ${size/2}px ${size/2}px,
        ${size}px ${size/2}px,
        ${size}px 0%,
        calc(100% - ${size}px) 0%,
        calc(100% - ${size}px) ${size/2}px,
        calc(100% - ${size/2}px) ${size/2}px,
        calc(100% - ${size/2}px) ${size}px,
        100% ${size}px,
        100% calc(100% - ${size}px),
        calc(100% - ${size/2}px) calc(100% - ${size}px),
        calc(100% - ${size/2}px) calc(100% - ${size/2}px),
        calc(100% - ${size}px) calc(100% - ${size/2}px),
        calc(100% - ${size}px) 100%,
        ${size}px 100%, ${size}px calc(100% - ${size/2}px),
        ${size/2}px calc(100% - ${size/2}px),
        ${size/2}px calc(100% - ${size}px),
        0% calc(100% - ${size}px));`};
`
export const RarityBtnInnerContainer = styled.div<RarityBtnElemProps>`
    display: flex;
    position: relative;
    top: 1px;
    left: 1px;
    right: 1px;
    bottom: 1px;
    background: ${({color}) => color};
    padding: 7px;
    justify-content: center;
    clip-path: ${({size}) => `
        polygon(0% ${size}px, ${size/2}px ${size}px, 
        ${size/2}px ${size/2}px,
        ${size}px ${size/2}px,
        ${size}px 0%,
        calc(100% - ${size}px) 0%,
        calc(100% - ${size}px) ${size/2}px,
        calc(100% - ${size/2}px) ${size/2}px,
        calc(100% - ${size/2}px) ${size}px,
        100% ${size}px,
        100% calc(100% - ${size}px),
        calc(100% - ${size/2}px) calc(100% - ${size}px),
        calc(100% - ${size/2}px) calc(100% - ${size/2}px),
        calc(100% - ${size}px) calc(100% - ${size/2}px),
        calc(100% - ${size}px) 100%,
        ${size}px 100%, ${size}px calc(100% - ${size/2}px),
        ${size/2}px calc(100% - ${size/2}px),
        ${size/2}px calc(100% - ${size}px),
        0% calc(100% - ${size}px));`};

    & > svg {
        margin-right: 10px;
    };
`
export const RarityBtnElem = styled.span<RarityBtnElemProps>`
    text-align: center;
    text-transform: uppercase;
    font-size: 16px;
    line-height: 16px;
`;

export const WalletLockdownApeContainer = styled.div`
    width: 100%;
    max-width: ${PAGE_MAX_WIDTH};
    margin: auto;
    display: block;

    .section-caption {
        width: 100%;
        text-align: center;
        margin: 4rem 0;
        & > p {
            font-size: 19px;
            line-height: 19px;
            text-align: center;
            text-transform: uppercase;
            color: #494949;
        }
    }
    
    .staked-ape-container {
        width: 100%;
    }
`

export const WalletApeItemContainer = styled.div<ClipStepSizeProps>`
    width: 100%;
    margin-top: 26px;
    clip-path: ${({size}) => `
        polygon(0% ${size}px, ${size/2}px ${size}px, 
        ${size/2}px ${size/2}px,
        ${size}px ${size/2}px,
        ${size}px 0%,
        calc(100% - ${size}px) 0%,
        calc(100% - ${size}px) ${size/2}px,
        calc(100% - ${size/2}px) ${size/2}px,
        calc(100% - ${size/2}px) ${size}px,
        100% ${size}px,
        100% calc(100% - ${size}px),
        calc(100% - ${size/2}px) calc(100% - ${size}px),
        calc(100% - ${size/2}px) calc(100% - ${size/2}px),
        calc(100% - ${size}px) calc(100% - ${size/2}px),
        calc(100% - ${size}px) 100%,
        ${size}px 100%, ${size}px calc(100% - ${size/2}px),
        ${size/2}px calc(100% - ${size/2}px),
        ${size/2}px calc(100% - ${size}px),
        0% calc(100% - ${size}px));`};

        .action-container {
            position: relative;
            display: grid;
            gap: 20px;
        }
`

export const ApeItemDetailPartContainer = styled.div`
    width: auto;
    display: block;

    .main-title {
        font-size: 16px;
        line-height: 16px;
        text-transform: uppercase;
        color: rgba(255, 255, 255, 0.35);
    }
    .main-text {
        font-size: 59px;
        line-height: 59px;
        text-transform: uppercase;
        color: #FFFFFF;
    }
    .progress-container {
        width: 100%;
        display: block;

        .progress-text {
            display: flex;
            justify-content: space-between;
            font-size: 16px;
            text-transform: uppercase;
            color: rgba(255, 255, 255, 0.35);
        }
        .progress-outer {
            clip-path: polygon(
                0 5px, 5px 5px, 5px 0,
                calc(100% - 5px) 0, calc(100% - 5px) 5px, 100% 5px,
                100% calc(100% - 5px), calc(100% - 5px) calc(100% - 5px), calc(100% - 5px) 100%,
                5px 100%, 5px calc(100% - 5px), 0 calc(100% - 5px));
            background: #1B1B1B;
            padding: 5px;
            margin-top: 8px;

            .progress-inner {
                height: 10px;
                width: 100%;
                background: black;

                .progress-done {
                    height: 10px;
                    background: white;
                }
            }
        }
    }
`

export const NoApesFoundContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 64px;
    line-height: 64px;
    text-align: center;
    text-transform: uppercase;
    color: #404040;
    width: 100%;
    height: 50vh;
`

export const AllLockdownContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 200px;

    .title {
        font-size: 32px;
        line-height: 32px;
        text-transform: uppercase;
        color: #FFFFFF;
        z-index: 100;
    }
    
    .description {
        font-size: 14px;
        line-height: 14px;
        text-align: center;
        text-transform: uppercase;
        color: #404040;
        z-index: 100;
    }

    .shadow-ape {
        z-index: 1;
        position: absolute;
        bottom: 93px;
    }
`