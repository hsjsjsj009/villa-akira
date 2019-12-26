import styled from "styled-components";

export const HomeContainer = styled.div`
    
`;

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

export const Circle = styled.div`
    background-color: white;
    width:${props => props.size};
    height: ${props => props.size};
    padding: 0;
    border-radius: 50%;
    box-shadow: 0px 0px 15px black;
`;

export const Arrow = styled.i`
  border: solid ${props => props.color};
  border-width: ${props => `0 ${props.width}rem ${props.width}rem 0`};
  display: inline-block;
  padding: ${props => `${props.size}rem`};
  transform: rotate(${props => {
      if(props.left){
          return "135deg";
      }
      return "-45deg"
      
}});
  -webkit-transform: rotate(${props => {
    if(props.left){
        return "135deg";
    }
    return "-45deg"
}});;
`;

export const SlideHover = styled.div`
    transition:0.5s;
    :hover{
      transform: translateX(${props => props.left ? "-":""}0.5rem);
    }
`;