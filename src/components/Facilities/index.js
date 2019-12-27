import React from "react";
import PropTypes from "prop-types";

import { FacilitiesContainer } from "./style";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Facilities extends React.PureComponent {
  render() {
    return (
      <FacilitiesContainer className="part-container my-5">
        <Container fluid>
          <Row>
            <Col md={5}></Col>
            <Col md={5}></Col>
          </Row>
        </Container>
      </FacilitiesContainer>
    );
  }
}

Facilities.propTypes = {};

export default Facilities;
