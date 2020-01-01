import React from "react";
import PropTypes from "prop-types";

import { FooterContainer, ParagraphFooter, TitleFooter } from "./style";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../static/log va wite.png";
import email from "../../static/FooterIcon/envelope.svg";
import ig from "../../static/FooterIcon/instagram-logo.svg";
import telephone from "../../static/FooterIcon/telephone.svg";
import place from "../../static/FooterIcon/place.svg";
import ChangeAnimation from "../ChangeAnimation";

class Footer extends React.PureComponent {
  render() {
    const {indonesia} = this.props;
    return (
      <footer>
        <FooterContainer className="mb-3">
          <Container fluid>
            <Row className="justify-content-center align-content-center">
              <Col xs={10} sm={3} md={3} lg={3} xl={2} className="align-self-center">
                <img src={logo} className="img-fluid" alt="" />
              </Col>
              <Col xs={10} sm={3} md={3} lg={3} xl={2}>
                <ChangeAnimation>
                  {indonesia ?
                      <TitleFooter key={4}>ALAMAT</TitleFooter>
                      :
                      <TitleFooter key={12}>ADDRESS</TitleFooter>
                  }
                </ChangeAnimation>
                <Row>
                  <Col xs sm md>
                    <img src={place} className="img-fluid" alt="" />
                  </Col>
                  <Col className="p-0" sm xs={10} md={9} xl={9}>
                    <ParagraphFooter>
                      Sukagalih, Megamendung, 16770 Bogor, Indonesia
                    </ParagraphFooter>
                  </Col>
                </Row>
              </Col>
              <Col xs={10} sm={3} md={3} lg={3} xl={2}>
                <ChangeAnimation>
                  {indonesia ?
                      <TitleFooter key={12}>KONTAK</TitleFooter>
                      :
                      <TitleFooter key={14}>CONTACT</TitleFooter>
                  }
                </ChangeAnimation>
                <Row className={this.props.max500 || this.props.min1024 ? "mb-2" : ""}>
                  <Col xs sm={1} md>
                    <img src={telephone} className="img-fluid" alt="" />
                  </Col>
                  <Col className="p-0 align-self-center" xs={10} md={9} xl={9}>
                    <ParagraphFooter>+62812 548 0468</ParagraphFooter>
                  </Col>
                </Row>
                <Row>
                  <Col xs sm md>
                    <img src={email} className="img-fluid" alt="" />
                  </Col>
                  <Col className="p-0 align-self-center" xs={10} md={9} xl={9}>
                    <ParagraphFooter>info.villaakira@gmail.com</ParagraphFooter>
                  </Col>
                </Row>
              </Col>
              <Col xs={10} sm={3} md={3} lg={3} xl={2} className={this.props.max500 ? "mt-2" : ""}>
                <ChangeAnimation>
                  {indonesia ?
                      <TitleFooter key={12}>SOSIAL MEDIA</TitleFooter>
                      :
                      <TitleFooter key={3}>SOCIAL MEDIA</TitleFooter>
                  }
                </ChangeAnimation>
                <Row>
                  <Col xs sm={1} md>
                    <img src={ig} className="img-fluid" alt="" />
                  </Col>
                  <Col className="p-0" xs={10} md={9} xl={9}>
                    <ParagraphFooter>villa.akira</ParagraphFooter>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </FooterContainer>
      </footer>
    );
  }
}

Footer.propTypes = {};

export default Footer;
