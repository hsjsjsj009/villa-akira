import React, {Fragment} from "react";
import PropTypes from "prop-types";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { NeighbourHoodContainer } from "./style";
import {
  Arrow,
  Circle,
  LeftArrowButton,
  Line,
  Paragraph,
  RightArrowButton,
  SlideHover,
  Title
} from "../../containers/Home/style";
import SlideShow from "../SlideShow";
import {ImageLeft, ImageRight, Images, ImagesBig} from "./images";
import { isMobile } from "react-device-detect";
import ChangeAnimation from "../ChangeAnimation";
import {Fade} from "react-reveal";

class NeighbourHood extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: Images,
      nowIndex: 0,
      nowImage: Images[0].src,
      nowStyle: (this.props.max768 ? Images[0].styleNow : Images[0].styleBig),
      prevImage: ImageLeft[0].src,
      prevStyle: (this.props.max768 ? ImageLeft[0].style : ImageLeft[0].styleBig),
      nextImage: ImageRight[0].src,
      nextStyle: (this.props.max768 ? ImageRight[0].style : ImageRight[0].styleBig),
      change: false,
      prev: false
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
              (this.props.max768 ? Images[
                (this.state.nowIndex + this.state.images.length - 1) %
                    this.state.images.length
                  ].styleNow :
                  Images[
                  (this.state.nowIndex + this.state.images.length - 1) %
                    this.state.images.length
                         ].styleBig),
          nextImage: ImageRight[
              (this.state.nowIndex + this.state.images.length - 1) %
                this.state.images.length].src,
          nextStyle:
              (this.props.max768 ? ImageRight[
                  (this.state.nowIndex + this.state.images.length - 1) %
                  this.state.images.length].style :
                  ImageRight[
                  (this.state.nowIndex + this.state.images.length - 1) %
                  this.state.images.length].styleBig),
          prevImage:
              ImageLeft[
              (this.state.nowIndex + this.state.images.length - 1) %
              this.state.images.length].src,
          prevStyle:
              (this.props.max768 ? ImageLeft[
                  (this.state.nowIndex + this.state.images.length - 1) %
                  this.state.images.length].style :
                  ImageLeft[
                  (this.state.nowIndex + this.state.images.length - 1) %
                  this.state.images.length].styleBig)
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
              (this.props.max768 ? Images[
                  (this.state.nowIndex + 1) % this.state.images.length
                      ].styleNow :
                  Images[
                  (this.state.nowIndex + 1) % this.state.images.length
                      ].styleBig),
          nextImage:
            ImageRight[(this.state.nowIndex + 1) % this.state.images.length].src,
          nextStyle:
              (this.props.max768 ? ImageRight[(this.state.nowIndex + 1) % this.state.images.length].style :
                  ImageRight[(this.state.nowIndex + 1) % this.state.images.length].styleBig),
          prevImage: ImageLeft[(this.state.nowIndex + 1) % this.state.images.length].src,
          prevStyle: (this.props.max768 ? ImageLeft[(this.state.nowIndex + 1) % this.state.images.length].style :
              ImageLeft[(this.state.nowIndex + 1) % this.state.images.length].styleBig)
        }),
      2
    );
    setTimeout(() => this.setState({ change: false }), 600);
  };

  render() {
    const {indonesia} = this.props;
    return (
      <NeighbourHoodContainer className="my-5">
        <Container fluid style={{ height: "inherit" }}>
          <Row className="justify-content-center" style={{ height: "inherit" }}>
            <Col
              xs
              md={10}
              lg={10}
              xl={5}
              className={
                (this.props.max500 ? "my-4 " : "") + "align-self-center"
              }
            >
              <ChangeAnimation>
                {indonesia ?
                    <Fragment key={4}>
                        <Title className="mb-3">LINGKUNGAN</Title>
                        <Line color="#707070" size="10rem" />
                    </Fragment>
                :
                    <Fragment key={8}>
                        <Title className="mb-3">THE NEIGHBORHOOD</Title>
                        <Line color="#707070" size="16.5rem" />
                    </Fragment>}
              </ChangeAnimation>
              <br />
                {this.props.max1024 && this.props.min768 ?
                    <div className="my-2">
                        <SlideShow
                            {...this.state}
                            sideHeight="12rem"
                            sideWidth="7.2rem"
                            mainHeight="18rem"
                            mainWidth="10.8rem"
                        />
                        <Row className="justify-content-center my-4">
                            <LeftArrowButton className="mx-5" onClick={this.prevImage} />
                            <RightArrowButton className="mx-5" onClick={this.nextImage} />
                        </Row>
                    </div>
                    :
                    null
                }
                {this.props.max768 ?
                    <div className="my-2">
                        <SlideShow
                            {...this.state}
                            sideHeight="10rem"
                            sideWidth="6rem"
                            mainHeight="15rem"
                            mainWidth="9rem"
                        />
                        <Row className="justify-content-center my-4">
                            <LeftArrowButton className="mx-5" onClick={this.prevImage} />
                            <RightArrowButton className="mx-5" onClick={this.nextImage} />
                        </Row>
                    </div>
                    :
                    null
                }
                <Fade when={!this.state.change}>
                    <ChangeAnimation>
                        {indonesia ?
                            <Paragraph key={1234}>
                                {Images[this.state.nowIndex].textIndo}
                            </Paragraph>
                            :

                            <Paragraph key={123}>
                                {Images[this.state.nowIndex].text}
                            </Paragraph>
                        }
                    </ChangeAnimation>
                </Fade>
                {this.props.max1024 ?
                    null
                    :
                    <Row className="justify-content-center mt-2">
                        <LeftArrowButton className="mx-5" onClick={this.prevImage} />
                        <RightArrowButton className="mx-5" onClick={this.nextImage} />
                    </Row>
                }
            </Col>
              {this.props.max1024 ?
                null
                :
                  <Col
                      xs={12}
                      md={8}
                      lg={8}
                      xl={5}
                      className={
                          this.props.max1024
                              ? "my-4 align-self-center"
                              : "align-self-center"
                      }
                  >
                      <SlideShow
                          {...this.state}
                          sideHeight="12rem"
                          sideWidth="7.2rem"
                          mainHeight="18rem"
                          mainWidth="10.8rem"
                      />
                  </Col>
              }
          </Row>
        </Container>
      </NeighbourHoodContainer>
    );
  }
}
NeighbourHood.propTypes = {};

export default NeighbourHood;
