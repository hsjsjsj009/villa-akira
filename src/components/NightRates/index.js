import React, {Fragment} from "react";
import PropTypes from "prop-types";

import { CardRates, NightRatesContainer } from "./style";
import { Line, Paragraph, Title } from "../../containers/Home/style";
import { Container, Row } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import ChangeAnimation from "../ChangeAnimation";

class NightRates extends React.Component {
  render() {
    const {indonesia} = this.props;
    return (
      <NightRatesContainer className="part-container my-5" id="night-rates">
        <Container fluid>
          <div className="col text-center">
            <ChangeAnimation>
              {indonesia ?
                  <Fragment key={5}>
                    <Title>TARIF PER MALAM</Title>
                    <Row className="justify-content-center">
                      <Line color="#707070" size="12.5rem" />
                    </Row>
                  </Fragment>
              :
                  <Fragment>
                    <Title key={1}>NIGHTLY RATES</Title>
                    <Row className="justify-content-center">
                      <Line color="#707070" size="11rem" />
                    </Row>
                  </Fragment>
              }
            </ChangeAnimation>
          </div>
          <Row className="my-5 justify-content-center">
            <CardRates className={this.props.max1024 ? "mx-3 my-3" : "mx-3"}>
              <h4 style={{ color: "#707070" }} className="m-0 text-center">
                IDR 3,500,000
              </h4>
                <ChangeAnimation>
                  {indonesia ?
                      <Paragraph key={6} className="text-center m-0 p-2">
                        (Hari Kerja, Minggu hingga Kamis)
                      </Paragraph>
                    :
                      <Paragraph key={10} className="text-center m-0 p-2">
                        (Weekdays, Sunday to Thursday)
                      </Paragraph>
                  }
                </ChangeAnimation>
            </CardRates>
            <CardRates className={this.props.max1024 ? "mx-3 my-3" : "mx-3"}>
              <h4 style={{ color: "#707070" }} className="m-0 text-center">
                IDR 4,500,000
              </h4>
              <ChangeAnimation>
                {indonesia ?
                    <Paragraph key={6} className="text-center m-0 p-2">
                      (Akhir Pekan, Jumat dan Sabtu)
                    </Paragraph>
                    :
                    <Paragraph key={9} className="text-center m-0 p-2">
                      (Weekends, Friday and Saturday)
                    </Paragraph>
                }
              </ChangeAnimation>
            </CardRates>
          </Row>
          <ChangeAnimation>
            {indonesia ?
                <Fragment key={122}>
                  <h4 className="text-center" style={{ color: "#707070" }}>
                    CHECK-IN PADA PUKUL 1:00 PM
                  </h4>
                  <h4 className="text-center" style={{ color: "#707070" }}>
                    CHECK-OUT PADA PUKUL 11:00 AM
                  </h4>
                </Fragment>
              :
                <Fragment key={299}>
                  <h4 className="text-center" style={{ color: "#707070" }}>
                    CHECK-IN AT 1:00 PM
                  </h4>
                  <h4 className="text-center" style={{ color: "#707070" }}>
                    CHECK-OUT AT 11:00 AM
                  </h4>
                </Fragment>
            }
          </ChangeAnimation>
        </Container>
      </NightRatesContainer>
    );
  }
}

NightRates.propTypes = {};

export default NightRates;
