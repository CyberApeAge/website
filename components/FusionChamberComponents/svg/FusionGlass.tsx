import React from "react";
import styled from "styled-components";

interface Props {
    className: string;
}
const FusionGlassContainer = styled.img`
display:flex;
justify-content:center;
block-size:30%;
margin-top:50px;
top:160px;
position:relative;
z-index:2;
`;
export const FusionGlass: React.FC<Props> = ({className,...props}) => {
    return (
        <FusionGlassContainer src={`/fusionchamber/Glass - page 3.png`} className={className}>

        </FusionGlassContainer>
    );
};
