import styled from "styled-components";

export const HomeContainer = styled.div``;

export const Line = styled.hr`
  background: ${props => props.color};
  height: 4px;
  width: ${props => props.size};
  margin: 0;
`;

export const Title = styled.h4`
  color: ${props => props.color};
`;
