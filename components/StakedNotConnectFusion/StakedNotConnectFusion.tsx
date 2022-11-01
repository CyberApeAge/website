import React from "react";
import { NextPage } from "next";
import { Container, Title, Summary } from "./styles";
// import EmptyApe from "../StakedConnected/EmptyApe";

const StakedNotConnectFusion = () => {
  return (
    <Container
      customStyles={{
        background: "url(./fusionchamber/subtract.png) no-repeat",
        // border: "2px dashed #333",
        backgroundSize: `600px 735px`,
        minHeight: "735px",
      }}
    >
      <Summary>
        connect your wallet to
        <br />
        initiate fusion
      </Summary>
      {/* <EmptyApe heightSize={290} widthSize={300} /> */}
    </Container>
  );
};

export default StakedNotConnectFusion;
