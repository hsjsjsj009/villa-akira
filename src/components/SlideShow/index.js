import React from 'react';
import PropTypes from 'prop-types';

import { SlideShowContainer } from './style';
import {Images} from "./images";
import {Fade} from "react-reveal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class SlideShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images:Images,
      nowIndex:0,
      nowImage:Images[0],
      prevIndex:2,
      prevImage:Images[2],
      nextIndex:1,
      nextImage:Images[1],
      change:false,
      prev:false,
    }
  }

  prevImage = () =>{
      this.setState({
        change:true,
        prev:true,
        nowIndex:(this.state.nowIndex + this.state.images.length - 1)%this.state.images.length,
        nowImage:Images[(this.state.nowIndex + this.state.images.length - 1)%this.state.images.length],
        nextIndex:this.state.nowIndex,
        nextImage:Images[this.state.nowIndex],
        prevIndex:(this.state.nowIndex + this.state.images.length - 2)%this.state.images.length,
        prevImage:Images[(this.state.nowIndex + this.state.images.length - 2)%this.state.images.length],
      });
      setTimeout(() => this.setState({change:false}),2);
  };
  nextImage = () => {
    this.setState({
      prev:false,
      change:true,
      nowIndex:(this.state.nowIndex + 1)%this.state.images.length,
      nowImage:Images[(this.state.nowIndex + 1)%this.state.images.length],
      nextIndex:(this.state.nowIndex + 2)%this.state.images.length,
      nextImage:Images[(this.state.nowIndex + 2)%this.state.images.length],
      prevIndex:this.state.nowIndex,
      prevImage:Images[this.state.nowIndex],
    });
    setTimeout(() => this.setState({change:false}),2);
  };
  render() {
    return (
      <SlideShowContainer>
        <button onClick={this.nextImage}>Next</button>
        <button onClick={this.prevImage}>Prev</button>
        <Row>
          <Col style={{height:"10rem",overflow:"hidden"}}>
            {!this.state.prev && (<Fade left opposite when={!this.state.change}>
              <img src={this.state.nextImage} className="img-fluid" alt=""/>
            </Fade>)}
            {this.state.prev && (<Fade right opposite when={!this.state.change}>
              <img src={this.state.nextImage} className="img-fluid" alt=""/>
            </Fade>)}
          </Col>
          <Col style={{height:"10rem",overflow:"hidden"}}>
            {!this.state.prev && (<Fade left opposite when={!this.state.change}>
              <img src={this.state.nowImage} className="img-fluid" alt=""/>
            </Fade>)}
            {this.state.prev && (<Fade right opposite when={!this.state.change}>
              <img src={this.state.nowImage} className="img-fluid" alt=""/>
            </Fade>)}
          </Col>
          <Col style={{height:"10rem",overflow:"hidden"}}>
            {!this.state.prev && (<Fade left opposite when={!this.state.change}>
              <img src={this.state.prevImage} className="img-fluid" alt=""/>
            </Fade>)}
            {this.state.prev && (<Fade right opposite when={!this.state.change}>
              <img src={this.state.prevImage} className="img-fluid" alt=""/>
            </Fade>)}
          </Col>
        </Row>
      </SlideShowContainer>
    );
  }
}

SlideShow.propTypes = {

};

export default SlideShow;
