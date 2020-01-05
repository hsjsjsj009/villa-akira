import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { connect } from "react-redux";
import bg from "../../static/Bird's eye view1.jpg";
import { LandingPageContainer, LandingText } from "./style";
import { ready } from "../../globalActions";
import ChangeAnimation from "../ChangeAnimation";

class LandingPage extends React.Component {
  render() {
    const { indonesia } = this.props;
    return (
      <LandingPageContainer id="landing-page" className="mb-3">
        <div id="landing-image-container">
          <img
            src={bg}
            alt=""
            className="img-fluid"
            onLoad={() => {
              this.props.readyFunc();
            }}
            id="landing-image"
          />
        </div>
        <Row className="m-0 mr-2" style={{ height: "100%" }}>
          <Col md={8} lg={8} className="ml-auto align-self-center">
              <ChangeAnimation>
                  {indonesia ?
                    <LandingText key={10} indonesia={indonesia} className="text-right">
                        TEMPAT BERSEMBUNYI DENGAN PEMANDANGAN PEGUNUNGAN.
                    </LandingText>
                      :
                      <LandingText key={11} className="text-right">
                          A HIDING PLACE WITH MOUNTAINS VIEW.
                      </LandingText>
                  }
              </ChangeAnimation>
            <h5 id="book-now" className="text-right mt-5">
                <ChangeAnimation>
                    {indonesia ?
                        <a key={10} href="https://www.airbnb.com/rooms/31393955">
                            PESAN SEKARANG
                        </a>:
                        <a key={11} href="https://www.airbnb.com/rooms/31393955">
                            BOOK NOW
                        </a>
                        }
                </ChangeAnimation>
            </h5>
          </Col>
        </Row>
      </LandingPageContainer>
    );
  }
}

LandingPage.propTypes = {};

function mapDispatchToProps(dispatch) {
  return {
    readyFunc: () => dispatch(ready())
  };
}

export default connect(null, mapDispatchToProps)(LandingPage);
