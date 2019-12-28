import React from "react";
import PropTypes from "prop-types";

import { Fade } from "react-reveal";
import { ImageSlideContainer } from "./style";

class ImageSlide extends React.Component {
  render() {
    return (
      <ImageSlideContainer>
        {this.props.right && (
          <Fade left opposite when={!this.props.change}>
            <div style={{ height: "inherit", width: "inherit" }}>
              <div
                style={{
                  height: "inherit",
                  width: "inherit",
                  position: "relative",
                  overflow: "hidden"
                }}
              >
                <img
                  src={this.props.src}
                  alt=""
                  style={{
                    height: "inherit",
                    position: "absolute",
                    ...this.props.style
                  }}
                />
              </div>
            </div>
          </Fade>
        )}
        {this.props.left && (
          <Fade right opposite when={!this.props.change}>
            <div style={{ height: "inherit", width: "inherit" }}>
              <div
                style={{
                  height: "inherit",
                  width: "inherit",
                  position: "relative",
                  overflow: "hidden"
                }}
              >
                <img
                  src={this.props.src}
                  alt=""
                  style={{
                    height: "inherit",
                    position: "absolute",
                    ...this.props.style
                  }}
                />
              </div>
            </div>
          </Fade>
        )}
      </ImageSlideContainer>
    );
  }
}

ImageSlide.propTypes = {};

export default ImageSlide;
