import styled from "styled-components";

export const LandingPageContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: ${props => props.height}px;
`;

export const LandingText = styled.h1`
  font-size: 4rem;
  z-index: 1;
  color: white;
  text-shadow: 0px 0px 3rem black;
  @media screen and (max-width: 550px){
    font-size: 2.7rem;
  }
`;
