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
        <FooterContainer>
          <Container fluid>
            <Row className="justify-content-center align-content-center">
              <Col md={8} lg={10} xl={3}>
                <img src={logo} className="img-fluid" alt="" />
              </Col>
              <Col md={5} lg={4} xl={3}>
                <ChangeAnimation>
                  {indonesia ?
                      <TitleFooter key={4}>ALAMAT</TitleFooter>
                      :
                      <TitleFooter key={12}>ADDRESS</TitleFooter>
                  }
                </ChangeAnimation>
                <Row>
                  <Col xs={2} sm={1} md={3} xl={2}>
                    <img src={place} className="img-fluid" alt="" />
                  </Col>
                  <Col className="p-0">
                    <ParagraphFooter>
                      Sukagalih, Megamendung, 16770 Bogor, Indonesia
                    </ParagraphFooter>
                  </Col>
                </Row>
              </Col>
              <Col md={5} lg={4} xl={3}>
                <ChangeAnimation>
                  {indonesia ?
                      <TitleFooter key={12}>KONTAK</TitleFooter>
                      :
                      <TitleFooter key={14}>CONTACT</TitleFooter>
                  }
                </ChangeAnimation>
                <Row>
                  <Col xs={2} sm={1} md={3} xl={2}>
                    <img src={telephone} className="img-fluid" alt="" />
                  </Col>
                  <Col className="p-0">
                    <ParagraphFooter>+62812 548 0468</ParagraphFooter>
                  </Col>
                </Row>
                <Row>
                  <Col xs={2} sm={1} md={3} xl={2}>
                    <img src={email} className="img-fluid" alt="" />
                  </Col>
                  <Col className="p-0" xs={6} md={6}>
                    <ParagraphFooter>info.villaakira@gmail.com</ParagraphFooter>
                  </Col>
                </Row>
              </Col>
              <Col md={5} lg={4} xl={3}>
                <ChangeAnimation>
                  {indonesia ?
                      <TitleFooter key={12}>SOSIAL MEDIA</TitleFooter>
                      :
                      <TitleFooter key={3}>SOCIAL MEDIA</TitleFooter>
                  }
                </ChangeAnimation>
                <Row>
                  <Col xs={2} sm={1} md={3} xl={2}>
                    <img src={ig} className="img-fluid" alt="" />
                  </Col>
                  <Col className="p-0">
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
