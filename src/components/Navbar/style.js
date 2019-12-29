import styled from "styled-components";

export const NavbarContainer = styled.div`
  transition: 0.5s;
  position: fixed;
  width: 100%;
  z-index: 100;
  background: ${props => (props.changeBar ? "#46564A" : "none")};
  display: ${props => props.ready ? "block" : "none"};
`;

export const NavBar = styled.div`
`;

export const Menu = styled.h6`
  color: ${props => (props.changeColor ? "#46564A" : "white")};
  margin: 1rem;
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

export const MobileMenu = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    visibility: ${props => props.hide ? "visible" : "hidden"};
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    &>div{
      background: #46564A;
      border-radius: 50%;
      width: 250vw;
      height: 250vw;
      display: flex;
      flex: none;
      align-items: center;
      justify-content: center;
      transform: scale(0);
      transition: all 0.4s ease;
      &>div{
        text-align: center;
        max-width: 90vw;
        max-height: 100vh;
        opacity: 0;
        transition: opacity 0.4s ease;
        &>ul{
        padding: 0;
          &>li{
            list-style: none;
            color: #fff;
            font-size: 1rem;
            padding: 1rem;
            &>a{
              color: inherit;
              text-decoration: none;
              transition: color 0.4s ease;
            }
          }
        }
      }
      
    }
`;

export const Hamburger = styled.div`
  position: absolute;
  right: 0;
  z-index: 101;
  width: 60px;
  height: 60px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  &>div{
    position: relative;
    flex: none;
    width: 100%;
    height: 2px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.4s ease;
    &::after,&::before{
      content: "";
      position: absolute;
      z-index: 101;
      top:-10px;
      width: 100%;
      height: 2px;
      background: inherit;
    }
    &::after{
      top:10px;
    }
  }
`;

export const MenuWrapper = styled.div`
  position: fixed;
  right: 0;
  z-index: 101;
  &>input{
    position: absolute;
    top: 0;
    right: 0;
    z-index: 102;
    cursor:pointer;
    width: 50px;
    height: 50px;
    opacity: 0;
    &:checked{
      & ~ ${MobileMenu}{
        &>div{
          transform: scale(1);
          transition-duration: 0.5s;
          &>div{
            opacity: 1;
            transition: opacity 0.4s ease 0.4s;
          }
        }
      }
      &+${Hamburger} > div{
          transform: rotate(135deg);
          &:before,&:after{
              top:0;
              transform: rotate(90deg);
          }
      }
      &:hover+${Hamburger} > div{
        transform: rotate(225deg);
      }
    }
  }
`;
