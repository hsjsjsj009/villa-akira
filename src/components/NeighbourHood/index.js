import React from "react";
import PropTypes from "prop-types";

import { NeighbourHoodContainer } from "./style";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  Arrow,
  Circle,
  Line,
  Paragraph,
  SlideHover,
  Title
} from "../../containers/Home/style";
import SlideShow from "../SlideShow";
import { Images } from "./images";

class NeighbourHood extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: Images,
      nowIndex: 0,
      nowImage: Images[0].src,
      nowStyle: Images[0].styleNow,
      prevIndex: 2,
      prevImage: Images[2].src,
      prevStyle: Images[2].style,
      nextIndex: 1,
      nextImage: Images[1].src,
      nextStyle: Images[1].style,
      change: false,
      prev: false
    };
  }
  prevImage = () => {
    this.setState({
      change: true,
      prev: true,
      nowIndex:
        (this.state.nowIndex + this.state.images.length - 1) %
        this.state.images.length,
      nowImage:
        Images[
          (this.state.nowIndex + this.state.images.length - 1) %
            this.state.images.length
        ].src,
      nowStyle:
        Images[
          (this.state.nowIndex + this.state.images.length - 1) %
            this.state.images.length
        ].styleNow,
      nextIndex: this.state.nowIndex,
      nextImage: Images[this.state.nowIndex].src,
      nextStyle: Images[this.state.nowIndex].style,
      prevIndex:
        (this.state.nowIndex + this.state.images.length - 2) %
        this.state.images.length,
      prevImage:
        Images[
          (this.state.nowIndex + this.state.images.length - 2) %
            this.state.images.length
        ].src,
      prevStyle:
        Images[
          (this.state.nowIndex + this.state.images.length - 2) %
            this.state.images.length
        ].style
    });
    setTimeout(() => this.setState({ change: false }), 700);
  };
  nextImage = () => {
    this.setState({
      prev: false,
      change: true,
      nowIndex: (this.state.nowIndex + 1) % this.state.images.length,
      nowImage:
        Images[(this.state.nowIndex + 1) % this.state.images.length].src,
      nowStyle:
        Images[(this.state.nowIndex + 1) % this.state.images.length].styleNow,
      nextIndex: (this.state.nowIndex + 2) % this.state.images.length,
      nextImage:
        Images[(this.state.nowIndex + 2) % this.state.images.length].src,
      nextStyle:
        Images[(this.state.nowIndex + 2) % this.state.images.length].style,
      prevIndex: this.state.nowIndex,
      prevImage: Images[this.state.nowIndex].src,
      prevStyle: Images[this.state.nowIndex].style
    });
    setTimeout(() => this.setState({ change: false }), 700);
  };
  render() {
    return (
      <NeighbourHoodContainer className="my-5">
        <Container fluid style={{ height: "inherit" }}>
          <Row className="justify-content-center" style={{ height: "inherit" }}>
            <Col md={5} className="align-self-center">
              <Title className="mb-3">THE NEIGHBORHOOD</Title>
              <Line color={"#707070"} size={"16.5rem"} />
              <br />
              <Paragraph>
                Megamendung District where Villa Akira is located, is a hilly
                area with average height of 850 m above sea level. The word
                "Megamendung" come from "mega" means universe, cloud, large,
                strong, and "mendung" means cloudy which explains the area
                covered with cloud and located on the mountains.
              </Paragraph>
              <Row className="justify-content-center mt-5">
                <SlideHover left className="mx-5" onClick={this.prevImage}>
                  <Circle
                    size={"2.5rem"}
                    className="row align-content-center"
                    style={{ position: "relative", cursor: "pointer" }}
                  >
                    <Arrow
                      left
                      width={0.2}
                      size={0.5}
                      color={"#707070"}
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
                    size={"2.5rem"}
                    className="row align-content-center"
                    style={{ position: "relative", cursor: "pointer" }}
                  >
                    <Arrow
                      width={0.2}
                      size={0.5}
                      color={"#707070"}
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
            <Col md={5}>
              <SlideShow
                {...this.state}
                sideHeight={"10rem"}
                sideWidth={"6rem"}
                mainHeight={"15rem"}
                mainWidth={"9rem"}
              />
            </Col>
          </Row>
        </Container>
      </NeighbourHoodContainer>
    );
  }
}
NeighbourHood.propTypes = {};

export default NeighbourHood;
