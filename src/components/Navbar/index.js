import React from "react";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { MobileView, BrowserView } from "react-device-detect";
import { Fade } from "react-reveal";
import Image from "react-bootstrap/Image";
import logoWhite from "../../static/log va wite.png";
import logoGreen from "../../static/log va grin.png";
import {Menu, NavBar, NavbarContainer, NoStyleA} from "./style";

class Navbar extends React.Component {
  render() {
    return (
      <NavbarContainer id="navbar" ready={this.props.ready} changeBar={this.props.changeBar}>
        <Fade top when={this.props.ready}>
            <Container fluid>
              <Row className="mt-1">
                <a href="#landing-page">
                  <img
                    src={this.props.changeColor ? logoGreen : logoWhite}
                    alt=""
                    className="img-fluid"
                    style={{ height: "4.2rem", cursor: "pointer" }}
                  />
                </a>
                <div className="align-content-center row ml-auto mr-1">
                  <Menu changeColor={this.props.changeColor}><NoStyleA href="#about">About</NoStyleA></Menu>
                  <Menu changeColor={this.props.changeColor}>Facilities</Menu>
                  <Menu changeColor={this.props.changeColor}>Nightly Rates</Menu>
                  <Menu changeColor={this.props.changeColor}>Testimonials</Menu>
                </div>
              </Row>
            </Container>
        </Fade>
      </NavbarContainer>
    );
  }
}

Navbar.propTypes = {};

export default Navbar;
