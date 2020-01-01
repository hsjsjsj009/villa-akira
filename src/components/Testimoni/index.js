import React, {Fragment} from "react";
import PropTypes from "prop-types";

import { SlideContainer, TestimoniCard, TestimoniContainer } from "./style";
import {
  LeftArrowButton,
  Line,
  Paragraph,
  RightArrowButton,
  Title
} from "../../containers/Home/style";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick/dist/react-slick";
import { TestimoniData } from "./testimoni";
import ChangeAnimation from "../ChangeAnimation";

class Testimoni extends React.PureComponent {
  next = () => {
    this.slider.slickNext();
  };

  prev = () => {
    this.slider.slickPrev();
  };

  render() {
    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: false,
      autoplaySpeed: 10000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    };
    const {indonesia} = this.props;
    return (
      <TestimoniContainer className="my-5" id="testimoni">
        <Container fluid>
          <div className="col text-center">
            <ChangeAnimation>
              {indonesia ?
                  <Fragment key={2}>
                    <Title>TESTIMONI</Title>
                    <Row className="justify-content-center">
                      <Line color="#707070" size="8rem" />
                    </Row>
                  </Fragment>
                  :
                  <Fragment key={5}>
                    <Title>TESTIMONIALS</Title>
                    <Row className="justify-content-center">
                      <Line color="#707070" size="11rem" />
                    </Row>
                  </Fragment>
              }
            </ChangeAnimation>
          </div>
          <Row className="justify-content-center mt-3 align-content-center">
            {!this.props.max500 && (
              <LeftArrowButton
                onClick={this.prev}
                className="align-self-center"
              />
            )}
            <Col md={9} className="align-self-center mx-4">
              <Slider ref={slide => (this.slider = slide)} {...sliderSettings}>
                {TestimoniData.map(obj => {
                  const masterKey = Math.random();
                  return (
                    <div key={masterKey} style={{ height: "inherit" }}>
                      <TestimoniCard
                        max500={this.props.max500}
                        style={{ height: "inherit" }}
                      >
                        <h5 style={{color:"#707070"}} className="text-center">{obj.name}</h5>
                        <ChangeAnimation>
                          {indonesia ?
                              <Fragment key={2+masterKey}>
                                <Paragraph>{obj.messageIndo}</Paragraph>
                                <h6 style={{color:"#707070"}} className="text-center">{obj.dateIndo}</h6>
                              </Fragment>
                              :
                              <Fragment key={5+masterKey}>
                                <Paragraph>{obj.message}</Paragraph>
                                <h6 style={{color:"#707070"}} className="text-center">{obj.date}</h6>
                              </Fragment>
                          }
                        </ChangeAnimation>
                      </TestimoniCard>
                    </div>
                  );
                })}
              </Slider>
            </Col>
            {!this.props.max500 && (
              <RightArrowButton
                onClick={this.next}
                className="align-self-center"
              />
            )}
          </Row>
        </Container>
      </TestimoniContainer>
    );
  }
}

Testimoni.propTypes = {};

export default Testimoni;
