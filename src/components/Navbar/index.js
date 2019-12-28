import React from "react";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { MobileView, BrowserView } from "react-device-detect";
import { Fade } from "react-reveal";
import logoWhite from "../../static/logo va white smaller.png";
import logoGreen from "../../static/log va grin.png";
import {Menu, NavbarContainer, NoStyleA} from "./style";

class Navbar extends React.Component {
  render() {
    return (
      <NavbarContainer id="navbar" ready={this.props.ready} changeBar={this.props.changeBar}>
        <Fade top when={this.props.ready}>
            <Container fluid>
              <Row className="mt-1">
                <a href="#landing-page" className="text-center">
                  <img
                    src={this.props.changeColor ? logoGreen : logoWhite}
                    alt=""
                    className="img-fluid my-1 ml-3"
                    style={{ height: "3.3rem", cursor: "pointer" }}
                  />
                </a>
                <div className="align-content-center row ml-auto mr-1">
                  <Menu changeColor={this.props.changeColor}><NoStyleA href="#about">ABOUT</NoStyleA></Menu>
                  <Menu changeColor={this.props.changeColor}><NoStyleA href="#facilities">FACILITIES</NoStyleA></Menu>
                  <Menu changeColor={this.props.changeColor}><NoStyleA href="#night-rates">NIGHTLY RATES</NoStyleA></Menu>
                  <Menu changeColor={this.props.changeColor}><NoStyleA href="#testimoni">TESTIMONIALS</NoStyleA></Menu>
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
