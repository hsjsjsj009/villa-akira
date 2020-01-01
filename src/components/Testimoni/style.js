import styled from "styled-components";
import { Paragraph } from "../../containers/Home/style";

export const TestimoniContainer = styled.div`
  margin-top: 6rem;
`;

export const TestimoniCard = styled.div`
  border-radius: 10px;
  box-shadow: 0px 0px 15px lightgray;
  height: 100%;
  width: auto;
  padding: 20px;
  margin: 1rem 1rem;
  align-self: center;
  & > .react-reveal > ${Paragraph} {
    @media screen and (min-width: 600px) {
      height: 15rem;
    }
    @media screen and (min-width: 800px) {
      height: 13rem;
    }
    @media screen and (min-width: 1024px) {
      height: 11rem;
    }
    @media screen and (max-width: 550px) {
      height: 9rem;
    }
    @media screen and (min-width: 1440px) {
      height: 15rem;
    }
    @media screen and (min-width: 1920px) {
      height:9rem;
    }
  }
`;

export const SlideContainer = styled.div`
  overflow-y: auto;
  flex-direction: row;
  flex-wrap: nowrap;
  flex-shrink: unset;
  display: flex;
  height: 21rem;
  width: 100%;
`;
