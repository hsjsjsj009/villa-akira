import React from "react";
import PropTypes, {func} from "prop-types";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {connect} from "react-redux";
import bg from "../../static/Bird's eye view1.jpg";
import { LandingPageContainer, LandingText } from "./style";
import {ready} from "../../globalActions";


class LandingPage extends React.Component {
    render() {
    return (
      <LandingPageContainer height={window.innerHeight} id="landing-page">
        <div id="landing-image-container">
            <img src={bg} alt="" className="img-fluid" onLoad={() => {
                this.props.readyFunc()}} id="landing-image"/>
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

function mapDispatchToProps(dispatch){
    return {
        readyFunc: () => dispatch(ready())
    }
}

export default connect(null,mapDispatchToProps)(LandingPage);
