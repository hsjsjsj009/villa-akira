import React from "react";
import PropTypes from "prop-types";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Lightbox from "react-image-lightbox";
import {AboutContainer, ImageBorder} from "./style";
import {Line, Paragraph, Title} from "../../containers/Home/style";
import {Images} from "./photos";
import "react-image-lightbox/style.css";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showViewer:false,
      indexPhoto:0
    }
  }

  openViewer = (index) => {
    this.setState({
      showViewer:true,
      indexPhoto:index
    })
  };

  render() {
    return (
      <AboutContainer id="about" className="part-container my-5">
        <Container style={{ height: "100%" }} fluid>
          <Row style={{ height: "inherit" }} className="justify-content-center">
            <Col md={4} className="align-self-end mx-2">
              <Title className="mb-3">
                ABOUT VILLA AKIRA
              </Title>
              <Line color="#707070" size="15.4rem" className="float-left" />
              <br />
              <Paragraph>Villa Akira is located in Megamendung, Bogor, 870m above sea level, on top
              of a hill surrounded by three mountains, namely Mount Salak, Mount Pangrango and Mount Gede.
              It is only 15 minutes away from Taman Safari (an animal theme park) and many other tourist
              attractions in Puncak.</Paragraph>
              <Paragraph>The land area is approx. 7,000 m<sup>2</sup> and the building coverage
               is only 5 % which leaves the land with lots of trees such as corns, cassavas, avocados,
              bananas, jack fruits, cloves, mango and many other tropical trees. It is very green with cool fresh air
              and breeze, so it is not necessary to have air conditioning inside.</Paragraph>
              <Paragraph>The design is a combination of modern and vernacular architecture
               with lots of glass windows and openings which allow air circulations. The asphalt roof
              tile and shape provide an expression of a tropical house. The L-shape of the villa gives the maximum use of the mountainous views.</Paragraph>
              <Paragraph>
                It is a nice weekend get away from traffic and pollution, a real serenity place with all required amenities and feel like home. The topographic area is
                the best venue for hiking and outdoor activities.
              </Paragraph>
              <Paragraph>
                This is the most suitable place for people who love nature and look for tranquility.
              </Paragraph>
            </Col>
            <Col md={5} className="align-self-center mx-2">
                <Row className="my-2 justify-content-center">
                  <Col md={6} className="align-self-center">
                    <ImageBorder onClick={() => this.openViewer(0)}>
                      <img src={require("../../static/AboutCropped/0.png")} alt="" className="img-fluid"/>
                    </ImageBorder>
                  </Col>
                  <Col md={3} className="align-self-center">
                    <ImageBorder className="my-2" onClick={() => this.openViewer(1)}>
                      <img src={require("../../static/AboutCropped/1.png")} className="img-fluid" alt=""/>
                    </ImageBorder>
                    <ImageBorder className="my-2" onClick={() => this.openViewer(2)}>
                      <img src={require("../../static/AboutCropped/2.png")} className="img-fluid" alt=""/>
                    </ImageBorder>
                  </Col>
                </Row>
                <Row className="my-2">
                  <Row className="justify-content-center">
                    <Col md={3} className="align-self-center">
                      <ImageBorder className="my-2" onClick={() => this.openViewer(3)}>
                        <img src={require("../../static/AboutCropped/3.png")} className="img-fluid" alt=""/>
                      </ImageBorder>
                      <ImageBorder className="my-2" onClick={() => this.openViewer(4)}>
                        <img src={require("../../static/AboutCropped/4.png")} className="img-fluid" alt=""/>
                      </ImageBorder>
                    </Col>
                    <Col md={6} className="align-self-center">
                      <ImageBorder onClick={() => this.openViewer(5)}>
                        <img src={require("../../static/AboutCropped/5.png")} alt="" className="img-fluid"/>
                      </ImageBorder>
                    </Col>
                  </Row>
                </Row>
              {this.state.showViewer && (
                  <Lightbox mainSrc={Images[this.state.indexPhoto]}
                            nextSrc={Images[ (this.state.indexPhoto + 1) % Images.length]}
                            prevSrc={Images[ (this.state.indexPhoto + Images.length - 1) % Images.length ]}
                            onMovePrevRequest={() =>
                                this.setState({
                                  indexPhoto: (this.state.indexPhoto + Images.length - 1) % Images.length,
                                })
                            }
                            onMoveNextRequest={() =>
                                this.setState({
                                  indexPhoto: (this.state.indexPhoto + 1) % Images.length,
                                })
                            }
                            onCloseRequest={() => this.setState({
                              showViewer:false
                  })}/>
              )}
            </Col>
          </Row>
        </Container>
      </AboutContainer>
    );
  }
}

About.propTypes = {};

export default About;
