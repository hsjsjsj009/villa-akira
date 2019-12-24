import React from "react";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import { Menu, NavbarContainer } from "./style";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { MobileView, BrowserView } from "react-device-detect";
import { Fade } from "react-reveal";
import logoWhite from "../../static/log va wite.png";
import logoGreen from "../../static/log va grin.png";
import Image from "react-bootstrap/Image";

class Navbar extends React.Component {
  render() {
    console.log(this.props);
    return (
      <NavbarContainer id="navbar" changeBar={this.props.changeBar}>
        <Fade top>
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
                <Menu changeColor={this.props.changeColor}>About</Menu>
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
