import React from 'react';
import PropTypes from 'prop-types';

import { NeighbourHoodContainer } from './style';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Arrow, Circle, Line, Paragraph, SlideHover, Title} from "../../containers/Home/style";
import SlideShow from "../SlideShow";

class NeighbourHood extends React.Component {
  render() {
    return (
      <NeighbourHoodContainer className="my-5">
        <Container fluid style={{height:"inherit"}}>
          <Row className="justify-content-center" style={{height:"inherit"}}>
            <Col md={5} className="align-self-center">
              <Title className="mb-3">THE NEIGHBORHOOD</Title>
              <Line color={"#707070"} size={"16.5rem"}/>
              <br/>
              <Paragraph>
                Megamendung District where Villa Akira is located, is a hilly area with average height of 850 m
                above sea level. The word "Megamendung" come from "mega" means universe, cloud, large, strong, and "mendung"
                means cloudy which explains the area covered with cloud and located on the mountains.
              </Paragraph>
              <Row className="justify-content-center mt-5">
                <SlideHover left className="mx-5">
                  <Circle size={"2.5rem"} className="row align-content-center" style={{position:"relative",cursor:"pointer"}}>
                    <Arrow left width={0.2} size={0.5} color={"#707070"} style={{position:"absolute", left:"0.8rem",top:"0.65rem"}}/>
                  </Circle>
                </SlideHover>
                <SlideHover className="mx-5">
                  <Circle size={"2.5rem"} className="row align-content-center" style={{position:"relative",cursor:"pointer"}}>
                    <Arrow width={0.2} size={0.5} color={"#707070"} style={{position:"absolute", left:"0.5rem",top:"0.65rem"}}/>
                  </Circle>
                </SlideHover>
              </Row>
            </Col>
            <Col md={5}>
              <SlideShow/>
            </Col>
          </Row>
        </Container>
      </NeighbourHoodContainer>
    );
  }
}

NeighbourHood.propTypes = {

};

export default NeighbourHood;
