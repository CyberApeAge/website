import styled from "styled-components";
import {SectionHeaderProps, TitleProps} from "./types";

export const SectionHeaderContainer = styled.header<SectionHeaderProps>`
  width:100%;
  max-width:1280px;
  margin: 0 auto;
  ${(p:SectionHeaderProps)=> !!p.append ? `
    display: flex;
    flex-direction: row;
    align-items: space-between;
    gap: 0.5rem;
  ` : `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  `}
`;

export const Title = styled.h1`
  ${(p:TitleProps)=>p.ltr ? `text-align: left;` : `text-align: center;`}
  text-transform: uppercase;
  color: white;
  font-size: ${(props) => (props.isBigTitle ? "5rem" : "3.5rem")};
  font-weight: normal;
  width: 50%;
`;

export const Description = styled.p`
  text-align: center;
  color: #595959;
  font-size: 1.25rem;

  max-width: 1100px;

  > a {
    color: white;
  }
`;
