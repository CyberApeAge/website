import { NextPage } from "next/types";
import styled from "styled-components";
import { CyberApe } from "../../types/ape-traits";
import CyberApeRenderer from "../CyberApeRenderer";

interface ApeExplainerProps {
  traits: CyberApe;
}

const EyesTraitContainer = styled.div`
  position: relative;
  left: 60px;
  top: -300px;
  width: 125px;
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  background-image: url("/eyes.png");
  background-size: cover;
`;

const EyesLine = styled.div`
  position: absolute;
  left: 790px;
  top: 277px;
  width: 125px;
  height: 25px;
  display: flex;
  border-left: 1px solid white;
  border-bottom: 1px solid white;
`;

const TraitTitle = styled.div``;

const ApeExplainer: NextPage<ApeExplainerProps> = ({ traits }) => {
  let eyesTrait = traits.eyes;

  return (
    <>
      <EyesTraitContainer>{eyesTrait}</EyesTraitContainer>
      <EyesLine />
      <CyberApeRenderer size="500px" traits={traits} />
    </>
  );
};

export default ApeExplainer;
