import React from 'react';
import PropTypes from 'prop-types';

import {SlideContainer, TestimoniCard, TestimoniContainer} from './style';
import {Line, Paragraph, Title} from "../../containers/Home/style";
import {Container, Row} from "react-bootstrap";
import Slider from "react-slick";
import {TestimoniData} from "./testimoni";

class Testimoni extends React.PureComponent {
  render() {
    const sliderSettings = {

    };
    return (
      <TestimoniContainer className="my-5" id="testimoni">
        <Container fluid>
          <div className="col text-center">
            <Title>TESTIMONIALS</Title>
            <Row className="justify-content-center">
              <Line color="#707070" size="11rem"/>
            </Row>
          </div>
            <Slider>

            </Slider>
        </Container>
      </TestimoniContainer>
    );
  }
}

Testimoni.propTypes = {

};

export default Testimoni;
