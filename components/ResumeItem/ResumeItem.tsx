import { NextPage } from "next/types";
import PipeBody from "./PipeBody";
import PipeHead from "./PipeHead";
import { ResumeItemContainer } from "./styles";
import { ResumeItemProps } from "./types";
import BloomingContainer from "../BloomingContainer";

const ResumeItem: NextPage<ResumeItemProps> = ({
  accent,
  icon,
  title,
  description,
  pipeOrigin,
}) => {
  return (
    <ResumeItemContainer pipeOrigin={pipeOrigin}>
      <BloomingContainer
        accent={accent}
        customStyles={{
          height: "auto",
          aspectRatio: "1",
          padding: "0 2.5rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {icon}
      </BloomingContainer>
      <PipeBody accent={accent} />
      <BloomingContainer
        accent={accent}
        customStyles={{
          height: "auto",
          padding: "2.5rem",
        }}
      >
        <h1>{title}</h1>
        <p>{description}</p>
      </BloomingContainer>
      <PipeHead accent={accent} pipeOrigin={pipeOrigin} />
    </ResumeItemContainer>
  );
};

export default ResumeItem;
