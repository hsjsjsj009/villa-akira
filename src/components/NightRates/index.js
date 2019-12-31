import React from "react";
import PropTypes from "prop-types";

import { CardRates, NightRatesContainer } from "./style";
import { Line, Paragraph, Title } from "../../containers/Home/style";
import { Container, Row } from "react-bootstrap";
import { isMobile } from "react-device-detect";

class NightRates extends React.Component {
  render() {
    return (
      <NightRatesContainer className="part-container my-5" id="night-rates">
        <Container fluid>
          <div className="col text-center">
            <Title>NIGHTLY RATES</Title>
            <Row className="justify-content-center">
              <Line color="#707070" size="11rem" />
            </Row>
          </div>
          <Row className="my-5 justify-content-center">
            <CardRates className={this.props.max1024 ? "mx-3 my-3" : "mx-3"}>
              <h4 style={{ color: "#707070" }} className="m-0 text-center">
                IDR 3,500,000
              </h4>
              <Paragraph className="text-center m-0 p-2">
                (Weekdays, Sunday to Thursday)
              </Paragraph>
            </CardRates>
            <CardRates className={this.props.max1024 ? "mx-3 my-3" : "mx-3"}>
              <h4 style={{ color: "#707070" }} className="m-0 text-center">
                IDR 4,500,000
              </h4>
              <Paragraph className="text-center m-0 p-2">
                (Weekends, Friday and Saturday)
              </Paragraph>
            </CardRates>
          </Row>
          <h4 className="text-center" style={{ color: "#707070" }}>
            CHECK-IN AT 1:00 PM
          </h4>
          <h4 className="text-center" style={{ color: "#707070" }}>
            CHECK-OUT AT 11:00 AM
          </h4>
        </Container>
      </NightRatesContainer>
    );
  }
}

NightRates.propTypes = {};

export default NightRates;
