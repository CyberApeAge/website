import { NextPage } from "next";
import DiscordIcon from "../DiscordIcon";
import { Container, Title, SocialsWrapper, Twitter, Discord } from "./styles";
import TwitterIcon from "../TwitterIcon";

const CyberApeRenderer: NextPage = () => {
  return (
    <Container>
      <Title>2022</Title>
      <SocialsWrapper>
        <Twitter href="https://twitter.com/CyberApeAge" target="_blank" rel="noreferrer">
          <TwitterIcon />
          CYBER APE AGE
        </Twitter>

        <Discord href="https://discord.gg/ugath9Vw6n" target="_blank" rel="noreferrer">
          <DiscordIcon />
          discord
        </Discord>
      </SocialsWrapper>
    </Container>
  );
};

export default CyberApeRenderer;
