import React from 'react';
import PropTypes from 'prop-types';

import { HostContainer } from './style';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Line, Paragraph, Title} from "../../containers/Home/style";

class Host extends React.Component {
  render() {
    return (
      <HostContainer className="my-5">
          <Container fluid style={{height:"inherit"}}>
            <Row style={{height:"inherit"}} className="justify-content-center align-content-center">
              <Col md={5} className="align-self-center">

              </Col>
              <Col md={5} className="align-self-center">
                <Title className="mb-3">THE HOST</Title>
                <Line color={"#707070"} size={"7rem"}/>
                <br/>
                <Paragraph>
                    My name is Maya a mother with three children and one granddaughter.
                   I was born n a village called Baros, Serang, about two hours drive from Jakarta.
                   I am the oldest child of four in my family. I went to a Scretary College in Jakarta, then studied English in Atma Jaya University in the same city.
                </Paragraph>
                <Paragraph>
                  I love cooking all kind aof food. I always enjoy nature because it gives me a sense of closeness
                  to God and happiness. I also enjoy meeting people because it allows me to learn culture and understand about life.
                </Paragraph>
                <Paragraph>
                  Being the Host of Villa Akira has taught me how to build a sustainable relationship with people from different social
                  background. As a host, my goal is to make my guests happy during their stay in Villa Akira and have the experience that will always remember.
                </Paragraph>
              </Col>
            </Row>
          </Container>
      </HostContainer>
    );
  }
}

Host.propTypes = {

};

export default Host;
