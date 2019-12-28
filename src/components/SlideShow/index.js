import React from "react";
import PropTypes from "prop-types";

import { Fade } from "react-reveal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Images } from "../NeighbourHood/images";
import { SlideShowContainer } from "./style";
import ImageSlide from "../ImageSlide";

class SlideShow extends React.Component {
  render() {
    return (
      <SlideShowContainer>
        <Row>
            {this.props.prevImage && (
                <div
                    style={{
                        height: this.props.sideHeight,
                        width: this.props.sideWidth,
                        overflow: "hidden"
                    }}
                    className="align-self-center mx-auto"
                >
                    {!this.props.prev && (
                        <ImageSlide
                            change={this.props.change}
                            src={this.props.prevImage}
                            style={this.props.prevStyle}
                            left
                        />
                    )}
                    {this.props.prev && (
                        <ImageSlide
                            change={this.props.change}
                            src={this.props.prevImage}
                            style={this.props.prevStyle}
                            right
                        />
                    )}
                </div>
            )}
          <div
            style={{
              height: this.props.mainHeight,
              overflow: "hidden",
              width: this.props.mainWidth,
                cursor:(this.props.zoom ? "pointer" : "")
            }}
            className="align-self-center mx-auto"
            onClick={this.props.zoomFunc ? this.props.zoomFunc : null}
          >
            {!this.props.prev && (
              <ImageSlide
                change={this.props.change}
                src={this.props.nowImage}
                style={this.props.nowStyle}
                left
              />
            )}
            {this.props.prev && (
              <ImageSlide
                change={this.props.change}
                src={this.props.nowImage}
                style={this.props.nowStyle}
                right
              />
            )}
          </div>
            {this.props.nextImage && (
                <div
                    style={{
                        height: this.props.sideHeight,
                        overflow: "hidden",
                        width: this.props.sideWidth
                    }}
                    className="align-self-center mx-auto"
                >
                    {!this.props.prev && (
                        <ImageSlide
                            change={this.props.change}
                            src={this.props.nextImage}
                            style={this.props.nextStyle}
                            left
                        />
                    )}
                    {this.props.prev && (
                        <ImageSlide
                            change={this.props.change}
                            src={this.props.nextImage}
                            style={this.props.nextStyle}
                            right
                        />
                    )}
                </div>
            )}
        </Row>
      </SlideShowContainer>
    );
  }
}

SlideShow.propTypes = {};

export default SlideShow;
