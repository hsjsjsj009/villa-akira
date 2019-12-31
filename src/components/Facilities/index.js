import React from "react";
import PropTypes from "prop-types";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FacilitiesContainer } from "./style";
import { Images, ImagesView } from "./images";
import SlideShow from "../SlideShow";
import {
  Arrow,
  Circle,
  LeftArrowButton,
  Line,
  RightArrowButton,
  SlideHover,
  Title
} from "../../containers/Home/style";
import { Fade } from "react-reveal";
import Lightbox from "react-image-lightbox";

class Facilities extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      images: Images,
      change: false,
      prev: false,
      nowIndex: 0,
      nowImage: Images[0].src,
      nowStyle: Images[0].styleNow,
      viewer: false,
      indexViewer: 0
    };
  }

  prevImage = () => {
    this.setState({
      prev: true
    });
    setTimeout(
      () =>
        this.setState({
          change: true,
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
          indexViewer:
            (this.state.nowIndex + this.state.images.length - 1) %
            this.state.images.length
        }),
      2
    );
    setTimeout(() => this.setState({ change: false }), 600);
  };

  nextImage = () => {
    this.setState({
      prev: false
    });
    setTimeout(
      () =>
        this.setState({
          change: true,
          nowIndex: (this.state.nowIndex + 1) % this.state.images.length,
          nowImage:
            Images[(this.state.nowIndex + 1) % this.state.images.length].src,
          nowStyle:
            Images[(this.state.nowIndex + 1) % this.state.images.length]
              .styleNow,
          indexViewer: (this.state.nowIndex + 1) % this.state.images.length
        }),
      2
    );
    setTimeout(() => this.setState({ change: false }), 600);
  };

  render() {
    return (
      <FacilitiesContainer className="part-container my-5" id="facilities">
        <Container fluid>
          <Row
            className="justify-content-center"
            style={{ flexWrap: "wrap-reverse" }}
          >
            <Col
              md={5}
              className={
                this.props.max500
                  ? "align-self-center my-4"
                  : "align-self-center"
              }
            >
              <SlideShow
                {...this.state}
                mainHeight={"15rem"}
                mainWidth={"15rem"}
                zoom
                zoomFunc={() => {
                  this.setState({ viewer: true });
                }}
              />
              {this.state.viewer && (
                <Lightbox
                  mainSrc={ImagesView[this.state.indexViewer]}
                  nextSrc={
                    ImagesView[(this.state.indexViewer + 1) % ImagesView.length]
                  }
                  prevSrc={
                    ImagesView[
                      (this.state.indexViewer + ImagesView.length - 1) %
                        ImagesView.length
                    ]
                  }
                  onMovePrevRequest={() =>
                    this.setState({
                      indexViewer:
                        (this.state.indexViewer + ImagesView.length - 1) %
                        ImagesView.length
                    })
                  }
                  onMoveNextRequest={() =>
                    this.setState({
                      indexViewer:
                        (this.state.indexViewer + 1) % ImagesView.length
                    })
                  }
                  onCloseRequest={() =>
                    this.setState({
                      viewer: false
                    })
                  }
                />
              )}
            </Col>
            <Col
              md={5}
              className={
                this.props.max500
                  ? "align-self-center my-4"
                  : "align-self-center"
              }
            >
              <Title className="mb-3">FACILITIES</Title>
              <Line color="#707070" size="9rem" />
              <br />
              <Fade when={!this.state.change}>
                <h5>{Images[this.state.nowIndex].text}</h5>
              </Fade>
              <Row className="justify-content-center mt-5">
                <LeftArrowButton className="mx-5" onClick={this.prevImage} />
                <RightArrowButton className="mx-5" onClick={this.nextImage} />
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
