import styled from "styled-components";

export const NavbarContainer = styled.div`
  transition: 0.5s;
  position: fixed;
  width: 100%;
  z-index: 100;
  background: ${props => (props.changeBar ? "#46564A" : "none")};
`;
export const Menu = styled.h6`
  color: ${props => (props.changeColor ? "#46564A" : "white")};
  margin: 1.2rem;
  margin-bottom: 0.3rem;
  margin-top: 0.3rem;
  cursor: pointer;
`;

export const NoStyleA = styled.a`
    color: inherit;
    :hover{
      text-decoration: none;
      color: inherit;
    }
`;
