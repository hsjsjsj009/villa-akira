import styled from "styled-components";
import React from "react";

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

export const Circle = styled.button`
  background-color: white;
  width: ${props => props.size};
  height: ${props => props.size};
  padding: 0;
  border-radius: 50%;
  border: none;
  box-shadow: 0px 0px 18px lightgray;
  transition: 0.5s;
  &:hover {
    box-shadow: 0px 0px 30px lightgray;
    transform: scale(1.1);
  }
  &:focus {
    outline: none;
  }
`;

export const Arrow = styled.i`
  border: solid ${props => props.color};
  border-width: ${props => `0 ${props.width}rem ${props.width}rem 0`};
  display: inline-block;
  padding: ${props => `${props.size}rem`};
  transform: rotate(
    ${props => {
      if (props.left) {
        return "135deg";
      }
      return "-45deg";
    }}
  );
  -webkit-transform: rotate(
    ${props => {
      if (props.left) {
        return "135deg";
      }
      return "-45deg";
    }}
  );
`;

export const SlideHover = styled.div`
  transition: 0.5s;
  :hover {
    transform: translateX(${props => (props.left ? "-" : "")}0.5rem);
  }
`;

export const RightArrowButton = ({ onClick, style, className }) => {
  return (
    <SlideHover className={className}>
      <Circle
        size="2.5rem"
        className="row align-content-center"
        style={{ position: "relative", cursor: "pointer" }}
        onClick={onClick}
      >
        <Arrow
          width={0.2}
          size={0.5}
          color="#707070"
          style={{
            position: "absolute",
            left: "0.5rem",
            top: "0.65rem"
          }}
        />
      </Circle>
    </SlideHover>
  );
};
export const LeftArrowButton = ({ onClick, style, className }) => {
  return (
    <SlideHover left className={className}>
      <Circle
        size="2.5rem"
        className="row align-content-center"
        style={{ position: "relative", cursor: "pointer" }}
        onClick={onClick}
      >
        <Arrow
          left
          width={0.2}
          size={0.5}
          color="#707070"
          style={{
            position: "absolute",
            left: "0.8rem",
            top: "0.65rem"
          }}
        />
      </Circle>
    </SlideHover>
  );
};
