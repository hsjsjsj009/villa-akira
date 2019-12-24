import React from "react";
import PropTypes from "prop-types";

import { LandingPageContainer, LandingText } from "./style";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import bg from "../../static/Bird's eye view1.jpg";

class LandingPage extends React.Component {
  render() {
    return (
      <LandingPageContainer id="landing-page">
        <div id="landing-image-container">
          <img src={bg} className="img-fluid" id="landing-image" />
        </div>
        <Row className="m-0 mr-2" style={{ height: "100%" }}>
          <Col md={8} className="ml-auto align-self-center">
            <LandingText className="text-right">
              A HIDING PLACE WITH MOUNTAIN VIEW.
            </LandingText>
            <h5 id="book-now" className="text-right mt-5">
              <a href="https://www.airbnb.com/rooms/31393955">BOOK NOW</a>
            </h5>
          </Col>
        </Row>
      </LandingPageContainer>
    );
  }
}

LandingPage.propTypes = {};

export default LandingPage;
