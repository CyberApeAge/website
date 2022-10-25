import { NextPage } from "next/types";
import DiscordIcon from "../components/DiscordIcon";
import SectionHeader from "../components/SectionHeader";
import SignatureButton from "../components/SignatureButton";
import LeftWires from "../components/GlobalFAQ/LeftWires";
import RightWires from "../components/GlobalFAQ/RightWires";
import {
  DiscordCTAContainer,
  DiscordCTAWrapper,
  FaqItem,
  GlobalFAQContainer,
  GlobalFAQContentWrapper,
} from "../components/GlobalFAQ/styles";
import { FaqData } from "../components/GlobalFAQ/types";

const GlobalFAQ1: NextPage = () => {
  const FAQ_DATA: FaqData[] = [
    {
      question: "Where can I play CAA's games?",
      answer:
        "Our games are located in the SANDBOX Game Maker. Please down the Game Maker and search for Cyber Ape Age. More information in our discord channels.",
    },
    {
      question: "How many games are there?",
      answer:
        "Currently, we have 5 fully playables games available.",
    },
    {
      question: "What can I earn for holding a Cyber Ape?",
      answer:
        "SOL through DAO games: 0.2 SOL, 0.3 SOL, 0.5 SOL depending on the amount of apes you own. Alpha on airdrops within crypto, bullish tokens, 1-on-1 project analysis for any project you ask, high hit-rate SOL calls from BR (NFA, however with 1000s of hours of experience).",
    },
    {
      question: "Where can I purchase Cyber Apes?",
      answer:
        "https://magiceden.io/marketplace/cyber_ape_age",
    },
    {
      question: "After I fuse two or more apes, how this will affect my role in CAA? Will fused apes count for more than one?",
      answer:
        "Yes there will be special roles based on how many animated apes you have, with subroles for 2-3 apes fused in the chamber. You will earn a multiplied rewards for all pieces with monetary value based on how many apes you have.",
    },
    {
      question: "Will a fused ape make more $APE/day? and if so, do different traits or rarities will also play a factor?",
      answer:
        "Yes, a fused ape with make more $APE daily - specics can be read within our whitepaper.",
    },
    {
      question: "After fusion, can I revert my ape/apes back?",
      answer:
        "No, the ape you select as your main ape will be used as the main host, other apes will be burned permenantly.",
    },
    {
      question: "After fusion, can I change any traits again?",
      answer:
        "If you buy new apes with new traits and have earned the required ingredients, you can fuse to new traits and burn the ape that is not your main pick.",
    },
    {
      question: "Can I speed up the fusion timer spending SOL or $APE?",
      answer:
        "Unfortunately, you cannot speed up the process.",
    },
    {
      question: "Will there be special roles for fused apes and maybe special rewards for those roles?",
      answer:
        "Yes there will be special roles based on how many animated apes you have, with subroles for 2-3 apes fused in the chamber.",
    },
    {
      question: "During fusion time, will my apes continue to generate / be stacked for $APE (while they are inside the fusion chamber)?",
      answer:
        "No, your apes will not generate $APE, instead you will be rewarded with a premium multiplier on your staking based on how many apes you burnt.",
    },
  ];

  return (
    <GlobalFAQContainer>
      <LeftWires />
      <RightWires />
      <SectionHeader title="QUESTIONS? LOOK HERE." />
      <GlobalFAQContentWrapper>
        {FAQ_DATA.map((item, index) => (
          <FaqItem key={index}>
            <h1>{item.question}</h1>
             <p>{item.answer}</p>
           
          </FaqItem>
        ))}
      </GlobalFAQContentWrapper>
      <DiscordCTAContainer>
        <DiscordCTAWrapper>
          <main>
            <h1>STILL WONDERING AROUND?</h1>
            <p>check out our discord server and let us know whats boggling your mind</p>
          </main>
          <main>
            <SignatureButton isContrast onClick={() => {window.location.href = "https://discord.gg/cyberapeage";}} accent="#5865F2">
              <DiscordIcon />
              JOIN DISCORD
            </SignatureButton>
          </main>
        </DiscordCTAWrapper>
      </DiscordCTAContainer>
    </GlobalFAQContainer>
  );
};

export default GlobalFAQ1;
