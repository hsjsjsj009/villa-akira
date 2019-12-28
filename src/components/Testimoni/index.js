import React from 'react';
import PropTypes from 'prop-types';

import {SlideContainer, TestimoniCard, TestimoniContainer} from './style';
import {Line, Paragraph, Title} from "../../containers/Home/style";
import {Container, Row} from "react-bootstrap";
import {TestimoniData} from "./testimoni";

class Testimoni extends React.PureComponent {
  render() {
    return (
      <TestimoniContainer className="my-5" id="testimoni">
        <Container fluid>
          <div className="col text-center">
            <Title>TESTIMONIALS</Title>
            <Row className="justify-content-center">
              <Line color="#707070" size="11rem"/>
            </Row>
          </div>
            <SlideContainer className="my-3">
              {TestimoniData.map((obj) => {
                return <TestimoniCard key={Math.random()}>
                  <h5>{obj.name}</h5>
                  <Paragraph>{obj.message}</Paragraph>
                  <h6>({obj.date})</h6>
                </TestimoniCard>
              })}
            </SlideContainer>
        </Container>
      </TestimoniContainer>
    );
  }
}

Testimoni.propTypes = {

};

export default Testimoni;
