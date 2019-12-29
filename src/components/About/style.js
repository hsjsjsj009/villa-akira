import styled from "styled-components";

export const AboutContainer = styled.div`
   
`;

export const ImageBorder = styled.div`
  overflow: hidden;
  height: inherit;
  width: inherit;
  
  & > img{
  cursor: pointer;
  transition: 0.5s;
  object-fit: cover;
  width: inherit;
    &:hover{
      transform: scale(1.2);
    } 
  }
`;
