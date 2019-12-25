import styled from "styled-components";

export const HomeContainer = styled.div``;

export const Line = styled.hr`
  background: ${props => props.color};
  height: 4px;
  width: ${props => props.size};
  margin: 0;
`;

export const Title = styled.h4`
  color: #707070;
`;

export const Paragraph = styled.p`
    color: #707070;
    font-size: 0.8rem;
`;