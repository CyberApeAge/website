import { NextPage } from "next/types";
import DiscordIcon from "../DiscordIcon";
import SectionHeader from "../SectionHeader";
import SignatureButton from "../SignatureButton";
import LeftWires from "./LeftWires";
import RightWires from "./RightWires";
import {
  DiscordCTAContainer,
  DiscordCTAWrapper,
  FaqItem,
  GlobalFAQContainer,
  GlobalFAQContentWrapper,
} from "./styles";
import { FaqData } from "./types";

const GlobalFAQ: NextPage = () => {
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
      question: "Where can we purchase Cyber Apes?",
      answer:
        "Magic Eden, Solanart + aggregators.",
    },
    {
      question: "After I fuse two or more apes, how this will affect my role in CAA? Will fused apes count for more than one?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra.",
    },
    {
      question: "Will a fused ape make more $APE/day? and if so, do different traits or rarities will also play a factor?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra.",
    },
    {
      question: "After fusion, can I revert my ape / apes back?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra.",
    },
    {
      question: "After fusion, can I change any traits again?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra.",
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
            <div >
            <h1>{item.question}</h1>
             <p>{item.answer}</p>
           </div>
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

export default GlobalFAQ;
