import React from 'react';
import PropTypes from 'prop-types';

import {FooterContainer, ParagraphFooter, TitleFooter} from './style';
import {Col, Container, Row} from "react-bootstrap";
import logo from "../../static/log va wite.png";
import email from "../../static/FooterIcon/envelope.svg";
import ig from "../../static/FooterIcon/instagram-logo.svg";
import telephone from "../../static/FooterIcon/telephone.svg";
import place from "../../static/FooterIcon/place.svg";

class Footer extends React.PureComponent {
  render() {
    return (
        <footer>
          <FooterContainer>
            <Container fluid>
              <Row className="justify-content-center align-content-center">
                <Col md={3} className="justify-self-center">
                  <img src={logo} className="img-fluid" alt=""/>
                </Col>
                <Col md={3}>
                  <TitleFooter>ADDRESS</TitleFooter>
                  <Row>
                    <Col xs={2} sm={1} md={2}>
                      <img src={place} className="img-fluid" alt=""/>
                    </Col>
                    <Col className="p-0">
                      <ParagraphFooter>
                        Sukagalih, Megamendung, 16770 Bogor, Indonesia
                      </ParagraphFooter>
                    </Col>
                  </Row>
                </Col>
                <Col md={3}>
                  <TitleFooter>CONTACT</TitleFooter>
                  <Row>
                    <Col xs={2} sm={1} md={2}>
                      <img src={telephone} className="img-fluid" alt=""/>
                    </Col>
                    <Col className="p-0">
                      <ParagraphFooter>
                        +62812 548 0468
                      </ParagraphFooter>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={2} sm={1} md={2}>
                      <img src={email} className="img-fluid" alt=""/>
                    </Col>
                    <Col className="p-0" xs={6} md={6}>
                      <ParagraphFooter>
                        info.villaakira@gmail.com
                      </ParagraphFooter>
                    </Col>
                  </Row>
                </Col>
                <Col md={3}>
                  <TitleFooter>SOCIAL MEDIA</TitleFooter>
                  <Row>
                    <Col xs={2} sm={1}  md={2}>
                      <img src={ig} className="img-fluid" alt=""/>
                    </Col>
                    <Col className="p-0">
                      <ParagraphFooter>
                        villa.akira
                      </ParagraphFooter>
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

Footer.propTypes = {

};

export default Footer;
