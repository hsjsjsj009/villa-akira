import React from "react";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { MobileView, BrowserView } from "react-device-detect";
import { Fade } from "react-reveal";
import logoWhite from "../../static/logo va white smaller.png";
import logoGreen from "../../static/log va grin.png";
import {Hamburger, Menu, MenuWrapper, MobileMenu, NavbarContainer, NoStyleA} from "./style";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu:false,
      alreadyOpen:false,
    }
  }

  openMenuFunc = () => {
    if(!this.state.alreadyOpen){
      document.body.style.height = "100vh";
      document.body.style.overflow = "hidden";
      this.setState({openMenu:true,alreadyOpen:true})
    }else{
      document.body.style.height = "";
      document.body.style.overflow = "";
      this.setState({openMenu:false,alreadyOpen:false})
    }
  };

  closeMenuFunc = () => {
    document.body.style.height = "";
    document.body.style.overflow = "";
    setTimeout(() => {
      document.getElementById("menuInput").checked = false;
      this.setState({openMenu:false,alreadyOpen:false})
    },10);
  };

  render() {
    return (
      <NavbarContainer id="navbar" ready={this.props.ready} changeBar={this.props.changeBar}>
        <Fade top when={this.props.ready}>
            <Container fluid>
              <Row className="mt-1">
                <a href="#landing-page" className="text-center" style={{zIndex:105}} onClick={this.closeMenuFunc}>
                  <img
                    src={this.props.changeColor ? logoGreen : logoWhite}
                    alt=""
                    className="img-fluid my-1 ml-3"
                    style={{ height: "3.3rem", cursor: "pointer"}}
                  />
                </a>
                {this.props.max500 ?
                    <div>
                      <MenuWrapper >
                        <input type="checkbox" id="menuInput" onClick={this.openMenuFunc}/>
                        <Hamburger>
                          <div></div>
                        </Hamburger>
                        <MobileMenu hide={this.state.openMenu}>
                          <div>
                            <div>
                              <ul>
                                <li><a href="#about" onClick={this.closeMenuFunc}>ABOUT</a></li>
                                <li><a href="#facilities" onClick={this.closeMenuFunc}>FACILITIES</a></li>
                                <li><a href="#night-rates" onClick={this.closeMenuFunc}>NIGHTLY RATES</a></li>
                                <li><a href="#testimoni" onClick={this.closeMenuFunc}>TESTIMONIALS</a></li>
                              </ul>
                            </div>
                          </div>
                        </MobileMenu>
                      </MenuWrapper>
                    </div>
                    : <div className="align-content-center row ml-auto mr-1">
                  <Menu changeColor={this.props.changeColor}><NoStyleA href="#about">ABOUT</NoStyleA></Menu>
                  <Menu changeColor={this.props.changeColor}><NoStyleA href="#facilities">FACILITIES</NoStyleA></Menu>
                  <Menu changeColor={this.props.changeColor}><NoStyleA href="#night-rates">NIGHTLY RATES</NoStyleA></Menu>
                  <Menu changeColor={this.props.changeColor}><NoStyleA href="#testimoni">TESTIMONIALS</NoStyleA></Menu>
                </div>}
              </Row>
            </Container>
        </Fade>
      </NavbarContainer>
    );
  }
}

Navbar.propTypes = {};

export default Navbar;
