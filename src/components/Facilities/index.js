import React from "react";
import PropTypes from "prop-types";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FacilitiesContainer } from "./style";
import {Images} from "./images";
import SlideShow from "../SlideShow";
import {Arrow, Circle, Line, SlideHover, Title} from "../../containers/Home/style";
import {Fade} from "react-reveal";

class Facilities extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      images:Images,
      change:false,
      prev:false,
      nowIndex:0,
      nowImage:Images[0].src,
      nowStyle:Images[0].styleNow
    }
  }

  prevImage = () => {
    this.setState({
      prev:true
    });
    setTimeout(() => this.setState({
      change:true,
      nowIndex: (this.state.nowIndex +  this.state.images.length - 1) % this.state.images.length,
      nowImage:
        Images[(this.state.nowIndex + this.state.images.length - 1) % this.state.images.length].src,
      nowStyle:
        Images[(this.state.nowIndex + this.state.images.length - 1) % this.state.images.length].styleNow,
    }),2);
    setTimeout(() => this.setState({change:false}),600);
  };

  nextImage = () => {
    this.setState({
      prev:false
    });
    setTimeout(() => this.setState({
      change:true,
      nowIndex: (this.state.nowIndex + 1) % this.state.images.length,
      nowImage:
      Images[(this.state.nowIndex + 1) % this.state.images.length].src,
      nowStyle:
      Images[(this.state.nowIndex + 1) % this.state.images.length].styleNow,
    }),2);
    setTimeout(() => this.setState({change:false}),600);
  };

  render() {
    return (
      <FacilitiesContainer className="part-container my-5">
        <Container fluid>
          <Row className="justify-content-center">
            <Col md={5} className="align-self-center">
              <SlideShow {...this.state} mainHeight={"15rem"} mainWidth={"15rem"} zoom zoomFunc={() => {console.log(this.state.nowIndex)}}/>
            </Col>
            <Col md={5} className="align-self-center">
              <Title className="mb-3">FACILITIES</Title>
              <Line color="#707070" size="9rem"/>
              <br/>
              <Fade when={!this.state.change}>
                <h5>{Images[this.state.nowIndex].text}</h5>
              </Fade>
              <Row className="justify-content-center mt-5">
                <SlideHover left className="mx-5" onClick={this.prevImage}>
                  <Circle
                      size="2.5rem"
                      className="row align-content-center"
                      style={{ position: "relative", cursor: "pointer" }}
                  >
                    <Arrow
                        left
                        width={0.2}
                        size={0.5}
                        color="#707070"
                        style={{
                          position: "absolute",
                          left: "0.8rem",
                          top: "0.65rem"
                        }}
                    />
                  </Circle>
                </SlideHover>
                <SlideHover className="mx-5" onClick={this.nextImage}>
                  <Circle
                      size="2.5rem"
                      className="row align-content-center"
                      style={{ position: "relative", cursor: "pointer" }}
                  >
                    <Arrow
                        width={0.2}
                        size={0.5}
                        color="#707070"
                        style={{
                          position: "absolute",
                          left: "0.5rem",
                          top: "0.65rem"
                        }}
                    />
                  </Circle>
                </SlideHover>
              </Row>
            </Col>
          </Row>
        </Container>
      </FacilitiesContainer>
    );
  }
}

Facilities.propTypes = {};

export default Facilities;
