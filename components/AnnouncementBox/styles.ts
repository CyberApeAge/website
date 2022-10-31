import styled, { keyframes } from "styled-components";

export const DotsSlider = styled.div`
  display: flex;
  align-items: center;
`;

export const Dot = styled.div<{ selected: boolean, width?:string, height?:string }>`
  width: ${p=>(p.width?p.width:'6px')};
  height: ${p=>(p.height?p.height:'6px')};

  background-color: ${(p) => (p.selected ? "white" : "#272727")};
  margin-right: 5px;
  &:hover{
    opacity:0.5;
  }
`;

export const ArrowButton = styled.span`
  user-select: none;
  font-size:40px ;

`;
export const DotsSliderContainer = styled.div`
  margin-top:10px;
  display:flex;
  justify-content:center;
`
export const ArrowButtonImage = styled.img`
  width:18px;
  height:20px;
  margin:5px;  
  &:hover{
    opacity:0.3;
  }
`

const SlideOutKeyFrames = keyframes`
  0% { transform: translateX(0); opacity: 1; }
  100% { transform: translateX(200px); opacity: 0; }
`;

export const AnnouncementContainer = styled.div`
  padding: 0 20px 20px 20px;
`;

export const SlideOutContainer = styled.div`
  margin: 0 20px 20px 20px;
  opacity: 0;
  position: absolute;
  top: 60px;
  left: 0px;
  animation: ${SlideOutKeyFrames} 1s 1;
`;

export const AnnouncementTitle = styled.div`
  padding-bottom: 10px;
  font-size: 22px;
  color: #fff;
`;

export const AnnouncementSubTitle = styled.div`
  padding-bottom: 15px;
  color: rgba(164, 164, 164, 0.5);
  font-size: 16px;
`;
