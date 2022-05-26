import { NextPage } from "next/types";
import GlobalFooter from "../components/GlobalFooter";
import GlobalHeader from "../components/GlobalHeader";
import { HomeContainer, NotFoundContainer } from "../styles/Home";

const CyberLockdownPage: NextPage = () => {
  return (
    <HomeContainer>
      <GlobalHeader />
      <NotFoundContainer>Cyber Lockdown Page Goes Here</NotFoundContainer>
      <GlobalFooter />
    </HomeContainer>
  );
};

export default CyberLockdownPage;
