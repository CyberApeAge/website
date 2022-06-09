import React from "react";
import { NextPage } from "next";
import { 
    Container,
    Title,
    Summary 
} from './styles'

const StakedNotConnect = () => {
    return (
        <Container
            customStyles={{
                background: 'url(./dotBg.png) no-repeat',
                backgroundSize: `100% 380px`,
                minHeight: '380px',
                padding: '13vmin 0',
            }}
        >
            <Title>lockdown a cyber ape to mine $cyber</Title>
            <Summary>connect your wallet to prepare for lockdown</Summary>
        </Container>
    )
}

export default StakedNotConnect;
