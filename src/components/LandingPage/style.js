import styled from "styled-components";

export const LandingPageContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 100vh;
`;

export const LandingText = styled.h1`
  font-size: ${props => (props.indonesia ? 3.2 : 4)}rem;
  z-index: 1;
  color: white;
  text-shadow: 0px 0px 3rem black;
  @media screen and (max-width: 550px) {
    font-size: ${props => (props.indonesia ? 2.1 : 2.7)}rem;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    font-size: ${props => (props.indonesia ? 2.6 : 3.5)}rem;
  }
`;
