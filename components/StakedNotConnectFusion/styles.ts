import styled, { css } from 'styled-components'
import { PAGE_MAX_WIDTH } from '../../constants'
import { 
    CustomStylesProps
} from "../StakedConnected/types";

export const Container = styled.div<CustomStylesProps>`
    width: 100%;
    max-width: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* margin: 65px 300px 150px 80px; */
    /* border-radius: 3%; */
    margin-top: 60px;
    margin-right: 330px;
    @media screen and (max-width:1600px){
        margin-right: 100px;
    }
    ${({customStyles}) => 
        customStyles && 
        css`
            ${customStyles}
        `
    }
`

export const Title = styled.p`
    font-size: 48px;
    line-height: 48px;
    text-transform: uppercase;
    color: #fff;
    position: relative;
    position: absolute;
    z-index: 100;
`

export const Summary = styled.p`
    font-size: 32px;
    line-height: 32px;
    text-align: center;
    text-transform: uppercase;
    color: #404040;
    position: absolute;
    margin-top: -70px;
    margin-right: 70px;
    z-index: 100;
    padding-left: 0px;
`