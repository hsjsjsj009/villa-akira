import React from "react";
import PropTypes from "prop-types";

import { Fade } from "react-reveal";
import {ImageSlideContainer, LoadingWrapper} from "./style";
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import {BeatLoader, ClipLoader} from "react-spinners";
import {css} from "@emotion/core";

class ImageSlide extends React.Component {
  render() {
    return (
      <ImageSlideContainer>
          {this.props.right && (
              <Fade left opposite when={!this.props.change}>
                <div style={{ height: "inherit", width: "inherit",
                  overflow: "hidden" }}>
                  <LoadingWrapper>
                    <Fade when={!this.props.ready}>
                      <Container
                          style={{
                            position:"absolute",
                            height:this.props.height,
                            width:this.props.width,
                            zIndex:this.props.ready ? -1000:80}}
                      >
                        <Row
                            className="justify-content-center align-content-center"
                            style={{height:"inherit",width:"inherit"}}>
                          <ClipLoader
                              css={css`
                                        display: flex;
                                        justify-content: center;
                                        align-self: center;
                                        align-content: center;
                                    `}
                              size="3rem"
                              color="#46564A"
                              loading={!this.props.ready}/>
                        </Row>
                      </Container>
                    </Fade>
                    <div style={{width:"inherit",height:"inherit",display:this.props.ready ? null:"none"}}>
                      <Fade when={this.props.ready}>
                        <div style={{height:"inherit",width:"inherit"}}>
                          <img
                              onLoad={this.props.onLoad}
                              src={this.props.src}
                              style={{
                                height: "inherit",
                                position: "absolute",
                                ...this.props.style
                              }}
                          />
                        </div>
                      </Fade>
                    </div>
                  </LoadingWrapper>
                </div>
              </Fade>
          )}
          {this.props.left && (
              <Fade right opposite when={!this.props.change}>
                <div style={{ height: "inherit", width: "inherit",
                  overflow: "hidden" }}>
                  <LoadingWrapper>
                    <Fade when={!this.props.ready}>
                      <Container
                          style={{
                            position:"absolute",
                            height:this.props.height,
                            width:this.props.width,
                            zIndex:this.props.ready ? -1000:80}}
                      >
                        <Row
                            className="justify-content-center align-content-center"
                            style={{height:"inherit",width:"inherit"}}>
                          <BeatLoader
                              css={css`
                                        display: flex;
                                        justify-content: center;
                                        align-self: center;
                                    `}
                              size="1rem"
                              color="#46564A"
                              loading={!this.props.ready}/>
                        </Row>
                      </Container>
                    </Fade>
                    <div style={{width:"inherit",height:"inherit",display:this.props.ready ? null:"none"}}>
                      <Fade when={this.props.ready}>
                        <div style={{height:"inherit",width:"inherit"}}>
                          <img
                              onLoad={this.props.onLoad}
                              src={this.props.src}
                              style={{
                                height: "inherit",
                                position: "absolute",
                                ...this.props.style
                              }}
                          />
                        </div>
                      </Fade>
                    </div>
                  </LoadingWrapper>
                </div>
              </Fade>
          )}
      </ImageSlideContainer>
    );
  }
}

ImageSlide.propTypes = {};

export default ImageSlide;
