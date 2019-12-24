import React from "react";
import PropTypes from "prop-types";

import { AboutContainer } from "./style";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Line, Title } from "../../containers/Home/style";

class About extends React.Component {
  render() {
    return (
      <AboutContainer>
        <Container style={{ height: "inherit" }} fluid>
          <Row style={{ height: "100%" }} className="justify-content-center">
            <Col md={5} className="align-self-center">
              <Title color={"#707070"} className="mb-3">
                ABOUT VILLA AKIRA
              </Title>
              <Line color={"#707070"} size={"15.4rem"} className="float-left" />
              <br />
              <p>{`Villa Akira is located in Megamendung, Bogor, 870m above sea level, on top
              of a hill surrounded by three mountains, namely Mount Salak, Mount Pangrango and Mount Gede.
              It`}</p>
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
