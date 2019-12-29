import styled from 'styled-components';

export const TestimoniContainer = styled.div`
  height: 100%;
  overflow-y: auto;
`;

export const TestimoniCard = styled.div`
   border-radius: 10px;
   box-shadow: 0px 0px 15px lightgray;
   min-height: 20rem;
   max-height: 20rem;
   min-width: 15rem;
   max-width: 15rem;
   padding: 20px;
   margin: 0 1rem;
   align-self: center;
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