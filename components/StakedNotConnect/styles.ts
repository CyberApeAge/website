import styled, { css } from 'styled-components'
import { PAGE_MAX_WIDTH } from '../../constants'
import { 
    CustomStylesProps
} from "../StakedConnected/types";

export const Container = styled.div<CustomStylesProps>`
    /* width: 100%;
    max-width: ${PAGE_MAX_WIDTH};
    border: 2px dashed rgba(255, 255, 255, 0.28);
    height: 400px;
    text-align: center;
    margin: auto;
    clip-path: 
        polygon(0 5%, 0.5% 0, 99.5% 0, 100% 5%, 
            100% 95%, 99.5% 100%, 0.5% 100%, 0% 95%); */

    max-width: ${PAGE_MAX_WIDTH};
    height: fit-content;
    text-align: center;
    margin: auto;

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
    top: 42%;
`

export const Summary = styled.p`
    font-size: 32px;
    line-height: 32px;
    text-align: center;
    text-transform: uppercase;
    color: #404040;
    position: relative;
    top: 46%;
`