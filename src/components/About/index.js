import React from "react";
import PropTypes from "prop-types";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AboutContainer } from "./style";
import {Line, Paragraph, Title} from "../../containers/Home/style";

class About extends React.Component {
  render() {
    return (
      <AboutContainer id="about">
        <Container style={{ height: "inherit" }} fluid>
          <Row style={{ height: "100%" }} className="justify-content-center">
            <Col md={5} className="align-self-center">
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
            <Col md={5}></Col>
          </Row>
        </Container>
      </AboutContainer>
    );
  }
}

About.propTypes = {};

export default About;
