import { NextPage } from "next/types";
import { PAGE_MAX_WIDTH } from "../../constants";
import BloomingContainer from "../BloomingContainer";
import CyberApeRenderer from "../CyberApeRenderer";
import DiscordIcon from "../DiscordIcon";
import TwitterIcon from "../TwitterIcon";
import HubComingSoon from "../GlobalHeader/HubComingSoon";
import GlobalFAQ from "../GlobalFAQ/GlobalFAQ";
import { useContext } from "react";
import SuperModalContext from "../../contexts/SuperModal";
import CyberApeSearch from "../CyberApeSearch";
import Link from "next/link";
import {
  ComingSoonTitle,
  CyberApeRendererWrapper,
  Discord,
  GlobalFooterContainer,
  LinksColumn,
  LinksRowContainer,
  SocialsRow,
  Twitter,
} from "./styles";
import License1 from "../GlobalFAQ/License";
import styled from "styled-components";

const FooterContainer = styled.div`
  transform: matrix(1, 0, 0, 1, 0, 0);
  border: 20px solid;
  border-image: url("stair-border-grey.svg");
  border-image-slice: 16;

  margin: 5rem auto;
  width: 100%;
  max-width: 1280px;
  position: relative;
  zindex: 1;
  padding: 3rem;
`;

const BackgroundDiv = styled.div`
  background: #1c1b1c80;
  z-index: -10;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
`;

const GlobalFooter: NextPage = () => {
  const { open } = useContext(SuperModalContext);

  function openHub(): void {
    open("troop's hub", <HubComingSoon />);
  }

  function openShop(): void {
    open("troop's shop", <ComingSoonTitle>Coming Soon</ComingSoonTitle>);
  }

  function globalfaq(): void {
    open("troop's explorer", <GlobalFAQ />);
  }

  function openExplorer(): void {
    open("troop's explorer", <CyberApeSearch />);
  }

  function license(): void {
    open("License Of Agreement", <License1 />);
  }
  return (
    <GlobalFooterContainer>
      <FooterContainer>
        <BackgroundDiv />
        <LinksRowContainer>
          <LinksColumn>
            <h1>TRAVEL AROUND</h1>
            <a onClick={openHub}>TROOP&apos;S HUB</a>

            <Link href={"/shop"}>
              <a>SHOP</a>
            </Link>
            <Link href={"/GlobalFAQ1"}>FAQ</Link>
            <a onClick={openExplorer}>EXPLORER</a>
          </LinksColumn>
          <LinksColumn>
            <h1>DOCUMENTATION</h1>
            <a href="#">WHITEPAPER</a>
            <a onClick={license}>LICENSE OF AGREEMENT</a>
          </LinksColumn>
          <LinksColumn>
            <h1>SOCIALS</h1>
            <SocialsRow>
              <Twitter
                href="https://twitter.com/CyberApeAge"
                target="_blank"
                rel="noreferrer"
              >
                <TwitterIcon />
                CYBERAPEAGE
              </Twitter>

              <Discord
                href="https://discord.gg/cyberapeage"
                target="_blank"
                rel="noreferrer"
              >
                <DiscordIcon />
                discord
              </Discord>
            </SocialsRow>
          </LinksColumn>
        </LinksRowContainer>

        <CyberApeRendererWrapper>
          <CyberApeRenderer
            size="325px"
            traits={{
              ape: "Black",
              head: "Bunny",
              eyes: "Angry Visor",
              ears: "Neon Earring",
              mouth: "Green NT Mask",
            }}
          />
        </CyberApeRendererWrapper>
      </FooterContainer>
    </GlobalFooterContainer>
  );
};

export default GlobalFooter;
