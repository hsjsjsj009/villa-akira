import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Fade } from "react-reveal";
import logoWhite from "../../static/logo va white smaller.png";
import logoGreen from "../../static/log va grin.png";
import {
  Hamburger,
  Menu,
  MenuWrapper,
  MobileMenu,
  NavbarContainer,
  NoStyleA
} from "./style";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: false,
      alreadyOpen: false
    };
  }

  openMenuFunc = () => {
    if (!this.state.alreadyOpen) {
      document.body.style.height = "100vh";
      document.body.style.overflow = "hidden";
      this.setState({ openMenu: true, alreadyOpen: true });
    } else {
      document.body.style.height = "";
      document.body.style.overflow = "";
      this.setState({ openMenu: false, alreadyOpen: false });
    }
  };

  closeMenuFunc = () => {
    document.body.style.height = "";
    document.body.style.overflow = "";
    setTimeout(() => {
      document.getElementById("menuInput").checked = false;
      this.setState({ openMenu: false, alreadyOpen: false });
    }, 10);
  };

  render() {
    return (
      <NavbarContainer
        id="navbar"
        ready={this.props.ready}
        changeBar={this.props.changeBar}
      >
        <Fade top when={this.props.ready}>
          <Container fluid>
            <Row className="mt-1">
              <a
                href="#landing-page"
                className="text-center"
                style={{ zIndex: 105 }}
                onClick={this.closeMenuFunc}
              >
                <img
                  src={this.props.changeColor ? logoGreen : logoWhite}
                  alt=""
                  className="img-fluid my-1 ml-3"
                  style={{ height: "3rem", cursor: "pointer" }}
                />
              </a>
              {this.props.max1024 ? (
                <MenuWrapper className="align-content-center">
                  <input
                    type="checkbox"
                    id="menuInput"
                    onClick={this.openMenuFunc}
                  />
                  <Hamburger>
                    <div></div>
                  </Hamburger>
                  <MobileMenu hide={this.state.openMenu}>
                    <div>
                      <div>
                        <ul>
                          <li>
                            <a href="#about" onClick={this.closeMenuFunc}>
                              {this.props.indonesia ? "TENTANG" : "ABOUT"}
                            </a>
                          </li>
                          <li>
                            <a href="#facilities" onClick={this.closeMenuFunc}>
                              {this.props.indonesia ? "FASILITAS" : "FACILITIES"}
                            </a>
                          </li>
                          <li>
                            <a href="#night-rates" onClick={this.closeMenuFunc}>
                              {this.props.indonesia ? "TARIF" : "NIGHTLY RATES"}
                            </a>
                          </li>
                          <li>
                            <a href="#testimoni" onClick={this.closeMenuFunc}>
                              {this.props.indonesia ? "TESTIMONI" : "TESTIMONIALS"}
                            </a>
                          </li>
                          <li>
                            <a
                              onClick={() => {
                                this.props.changeLanguage();
                                this.closeMenuFunc();
                              }}
                              style={{
                                cursor:"pointer"
                              }}
                            >
                              {this.props.indonesia ? <u>ID</u> : "ID"}/
                              {this.props.indonesia ? "EN" : <u>EN</u>}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </MobileMenu>
                </MenuWrapper>
              ) : (
                <div className="align-content-center row ml-auto mr-1">
                  <Menu changeColor={this.props.changeColor}>
                    <NoStyleA href="#about">
                      {this.props.indonesia ? "TENTANG" : "ABOUT"}
                    </NoStyleA>
                  </Menu>
                  <Menu changeColor={this.props.changeColor}>
                    <NoStyleA href="#facilities">
                      {this.props.indonesia ? "FASILITAS" : "FACILITIES"}
                    </NoStyleA>
                  </Menu>
                  <Menu changeColor={this.props.changeColor}>
                    <NoStyleA href="#night-rates">
                      {this.props.indonesia ? "TARIF" : "NIGHTLY RATES"}
                    </NoStyleA>
                  </Menu>
                  <Menu changeColor={this.props.changeColor}>
                    <NoStyleA href="#testimoni">
                      {this.props.indonesia ? "TESTIMONI" : "TESTIMONIALS"}
                    </NoStyleA>
                  </Menu>
                  <Menu changeColor={this.props.changeColor}>
                    <NoStyleA onClick={this.props.changeLanguage}>
                      {this.props.indonesia ? <u>ID</u> : "ID"}/
                      {this.props.indonesia ? "EN" : <u>EN</u>}
                    </NoStyleA>
                  </Menu>
                </div>
              )}
            </Row>
          </Container>
        </Fade>
      </NavbarContainer>
    );
  }
}

Navbar.propTypes = {};

export default Navbar;
