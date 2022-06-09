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
    
    .slick-next,
    .slick-prev {
        top: 108.5%;
    }
    .slick-next {
        right: 0;
        text-align: left;
        width: 49.3%;
    }
    .slick-prev {
        left: 0;
        text-align: right;
        margin-right: 1.4%;
        width: 49.3%;
    }
    .slick-prev:before,
    .slick-next:before {
        font-family: "Font Awesome\ 5 Free";
        font-size: 19px;
        color: #2a8631;
        line-height: 1;
        opacity: 0.75;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-weight: 900;
    }
    .slick-prev:before {
        content: "\f053";
    }
    [dir="rtl"] .slick-prev:before {
        content: "\f054";
    }
    [dir="rtl"] .slick-next {
        left: -10px;
        top: 70px;
        right: auto;
    }
    .slick-next:before {
        content: "\f054";
    }
    [dir="rtl"] .slick-next:before {
        content: "\f053";
    }
    .slick-slider .slick-dots ul li {
        width: auto;
        height: auto;
    }
    .slick-slider .slick-dots li.slick-active div {
        background: #C4C4C4
    }
`

export const LockdownApeContainer = styled.div<CustomStylesProps>`
    width: 100%;
    max-width: ${PAGE_MAX_WIDTH};
    text-align: center;
    margin: 20px auto;
    gap: 4rem;
    ${({customStyles}) => 
        customStyles && 
        css`
            ${customStyles}
        `
    }

    .slick-next,
    .slick-prev {
        top: 110%;
    }
    .slick-next {
        right: 0;
        text-align: left;
        width: 49.3%;
    }
    .slick-prev {
        left: 0;
        text-align: right;
        margin-right: 1.4%;
        width: 49.3%;
    }
    .slick-next svg {
        transform: rotateY(180deg);
    }
    .slick-prev.slick-arrow:before,
    .slick-next.slick-arrow:before
     {
        content: '';
    }
    .slick-arrow:hover {
        svg path {
            opacity: 0.8;
            transition: ease-in-out 0.2s;
        }
    }

    .slick-dots {
        bottom: -70px;
    }
    .slick-dots ul li {
        width: auto;
        height: auto;
    }
    .slick-dots li div {
        width: 11px;
        height: 11px;
        background: rgba(196, 196, 196, 0.25);
    }
    .slick-dots li.slick-active div {
        background: #C4C4C4;
    }
`
export const LockdownApeWrapper = styled.div`
    display: flex;
    flex-direction: row;
    // justify-content:center;
    align-items: stretch;
    gap: 4rem;
    overflow: hidden; // TODO: fix the carousel
    padding: 10px 20px;
    overflow-x: scroll;
`
export const ApeItemContainer = styled.div`
    width: max-content;
    display: block;
    margin: auto;
    // margin: 10px 20px;
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
        position: absolute;
    }
    
    .description {
        font-size: 14px;
        line-height: 14px;
        text-align: center;
        text-transform: uppercase;
        color: #404040;
        z-index: 100;
        position: absolute;
        margin-top: 50px;
    }

    .shadow-ape {
        z-index: 1;
        margin-top: 18px;
    }
`

export const TestDiv = styled.div`
    width: 100%;
    max-width: ${PAGE_MAX_WIDTH};
    margin: auto;


`