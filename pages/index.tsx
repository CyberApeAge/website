import React, { useContext, useEffect } from "react";
import Router , {useRouter}  from 'next/router';
import type { GetServerSidePropsContext, NextPage } from "next";
import Head from "next/head";
import GlobalHeader from "../components/GlobalHeader";
import ComingSoon from "../components/ComingSoon";
//@ts-ignore
import cookieCutter from "cookie-cutter";
import HeroTroop from "../components/HeroTroop";
import {
  HomeContainer,
  LandingHeroButtonsWrapper,
  LandingHeroSection,
  LandingHeroUpperContent,
  PlayToEarchCTA,
  ResumeItems,
  ResumeItemSection,
  RoadmapSection,
  TeamCardsWrapper,
  TeamSection,
  TestimonialsSection,
} from "../styles/Home";
import ResumeItem from "../components/ResumeItem";
import SolanaIcon from "../components/ResumeItem/SolanaIcon";
import SectionHeader from "../components/SectionHeader";
import MagicEdenIcon from "../components/MagicEdenIcon";
import SignatureButton from "../components/SignatureButton";
import CyberApeRenderer from "../components/CyberApeRenderer";
import useSWR from "swr";
import { fetcher } from "../utils";
import CyberApeSearch from "../components/CyberApeSearch";
import SuperModalContext from "../contexts/SuperModal";
import DerivativeSection from "../components/DerivativeSection";
import TestimonialsItems from "../components/TestimonialsItems";
import GlobalFAQ from "../components/GlobalFAQ";
import GlobalFooter from "../components/GlobalFooter";
import Twitter from "twitter";
import HorizontalSlider from "../components/HorizontalSlider";
import ApeIcon from "../components/ResumeItem/ApeIcon";
import KeyIcon from "../components/ResumeItem/KeyIcon";
import CommunityIcon from "../components/ResumeItem/CommunityIcon";
import Roadmap from "../components/Roadmap";
import DiscordIcon from "../components/DiscordIcon";
import TeamCard from "../components/TeamCard";
import HeadMetadata from "../components/HeadMetadata";
import { DerivativeSectionContextProvider } from "../contexts/DerivativeSection";
import PageTopSpacer from "../components/PageTopSpacer";
import MobileMenuContext from "../contexts/MobileMenu";

import HubComingSoon from "../components/GlobalHeader/HubComingSoon"
interface HomeProps {
  twitterData: any;
}

const Home: NextPage<HomeProps> = ({ twitterData }) => {
  const { open } = useContext(SuperModalContext);

  function travelToMarketplace() {
    window.open("https://magiceden.io/marketplace/cyber_ape_age", "_blank");
  }
 function openHub(): void {
    open("troop's hub", <HubComingSoon />);
  }
  function checkForApeData() {
    const COOKIE_SEARCH_KEY = "CYBERAPE_SEARCH_IDENTIFIER";
    const CYBERAPE_IDENTIFIER = cookieCutter.get(COOKIE_SEARCH_KEY);

    if (CYBERAPE_IDENTIFIER) {
      open("troop's codex", <CyberApeSearch identifier={CYBERAPE_IDENTIFIER} />);
      cookieCutter.set(COOKIE_SEARCH_KEY, "", { expires: new Date(0) });
      return;
    }
  }

  useEffect(checkForApeData, []);
 
  return (
    <>
      <HeadMetadata />
      {/* <ComingSoon /> */}
      <GlobalHeader />
      <HomeContainer>
        <LandingHeroSection>
          <LandingHeroUpperContent>
            <SectionHeader
              isBigTitle
              title="JOIN the troop"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel lorem est ullamcorper eget twitter facilisi etiam dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis."
            />
            <LandingHeroButtonsWrapper>
              <SignatureButton onClick= {openHub} isContrast accent="#5865F2">
                troop&apos;s hub
              </SignatureButton>
              <SignatureButton onClick={travelToMarketplace} accent="#E42575">
                <MagicEdenIcon fill="#595959" />
                marketplace
              </SignatureButton>
            </LandingHeroButtonsWrapper>
          </LandingHeroUpperContent>
          <HeroTroop />
        </LandingHeroSection>

        <DerivativeSectionContextProvider>
          <DerivativeSection />
        </DerivativeSectionContextProvider>

        <ResumeItemSection>
          <SectionHeader
            title="why jump into cyber ape age?"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel lorem est ullamcorper eget discord facilisi etiam dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis."
          />
          <ResumeItems>
            <ResumeItem
              icon={<SolanaIcon fill="#ACE9BD" stroke="#ACE9BD" />}
              title="huge earnings for holders"
              accent="#ACE9BD"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim."
              pipeOrigin="right"
            />
            <ResumeItem
              icon={<ApeIcon fill="#FF9E9E" stroke="#FF8A8A" />}
              title="cyber lockdown ⬩ ASTRAL BEAKERS"
              accent="#FF9E9E"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim."
              pipeOrigin="left"
            />
            <ResumeItem
              icon={<KeyIcon fill="#FEFFDB" stroke="#FDFFB2" />}
              title="a key to the REAL metaverse"
              accent="#FDFFB2"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim."
              pipeOrigin="right"
            />
            <ResumeItem
              icon={<CommunityIcon fill="#92F2FF" stroke="#5DCFFF" />}
              title="hiGH-OCTANE MOTILE COMMUNITY"
              accent="#5DCFFF"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim."
              pipeOrigin="left"
            />
          </ResumeItems>
        </ResumeItemSection>

        <TestimonialsSection>
          <SectionHeader
            title="look for yourself."
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut twitter, purus sit amet luctus venenatis, lectus magna lorem urna, porttitor purus non enim praesent! Lourus sit amet luctus venenatis, lectus magna lorem urna, porttitor purus non enim praesent. Lourus sit amet luctus venenatis, lectus magna lorem urna, porttitor purus non enim praesent. Lourus sit amet luctus venenatis, lectus magna lorem urna, porttitor purus non enim praesent! Purus sit amet luctus venenatis, lectus magna discord urna, porttitor purus non enim praesent."
          />
          <HorizontalSlider hasControls>
            <TestimonialsItems twitterData={twitterData} />
          </HorizontalSlider>
        </TestimonialsSection>

        <PlayToEarchCTA>
          <main>
            <SectionHeader
              title="play on thesandbox™ metaverse"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim."
            />
            <div>
              <SignatureButton onClick={() => {}} isContrast accent="#5865F2">
                troop&apos;s hub
              </SignatureButton>
              <SignatureButton onClick={() => {window.location.href = "https://discord.gg/cyberapeage";}} accent="#5865F2">
             
                <DiscordIcon fill="rgba(255, 255, 255, 0.35)" />
                discord server
              </SignatureButton>
            </div>
          </main>
        </PlayToEarchCTA>

        <RoadmapSection>
          <SectionHeader title="what does the future behold?" />
          <Roadmap />
        </RoadmapSection>

        <TeamSection>
          <SectionHeader
            title="MEET THE TEAM"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim."
          />
          <HorizontalSlider hasControls>
            <TeamCardsWrapper>
              <TeamCard
                experience={10}
                name="Cyber Ape King"
                role="Co-Founder, Pixel Art Artist"
                traits={{
                  ape: "Brown",
                  head: "Crown",
                  ears: "Nothing",
                  mouth: "Nothing",
                  eyes: "Rainbow Visor",
                }}
              />
              <TeamCard
                experience={10}
                name="Ludic"
                role="Co-Founder, Game Designer/Voxel Artist"
                traits={{
                  ape: "Black",
                  head: "Pilot",
                  ears: "Nothing",
                  mouth: "Blunt",
                  eyes: "Nothing",
                }}
              />
              <TeamCard
                experience={10}
                name="Radical"
                role="Co-Founder, Pixel Art Artist, Game Designer/Voxel Artist"
                traits={{
                  ape: "Cyan",
                  head: "Nothing",
                  ears: "Neon Earring",
                  mouth: "Banana",
                  eyes: "Stoned",
                }}
              />
              <TeamCard
                experience={10}
                name="The Community"
                role="Co-Founder, Pixel Art Artist"
                traits={{
                  ape: "Brown",
                  head: "Crown",
                  ears: "Nothing",
                  mouth: "Nothing",
                  eyes: "Rainbow Visor",
                }}
              />
             
            </TeamCardsWrapper>
          </HorizontalSlider>
        </TeamSection>
      </HomeContainer>
      <GlobalFAQ />
      <GlobalFooter />
    </>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const ORIGIN = context.req.headers.host;

  const twitterData = await fetch(`http://${ORIGIN}/api/tweets`).then((res) =>
    res.ok ? res.json() : null
  );

  return {
    props: { twitterData },
  };
}

export default Home;
