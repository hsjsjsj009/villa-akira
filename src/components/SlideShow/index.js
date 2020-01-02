import React from "react";
import PropTypes from "prop-types";

import { Fade } from "react-reveal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Images } from "../NeighbourHood/images";
import { SlideShowContainer } from "./style";
import ImageSlide from "../ImageSlide";
import {Container} from "react-bootstrap";
import {ClipLoader} from "react-spinners";
import {css} from "@emotion/core";

class SlideShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            readyLeft:false,
            readyMain:false,
            readyRight:false,
            loadedLeft:[],
            loadedMain:[],
            loadedRight:[]
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if(nextProps.prevImage){
            if(!this.state.loadedLeft.includes(nextProps.prevImage)){
                this.setState({
                    readyLeft:false,
                    loadedLeft:[...this.state.loadedLeft]
                })
            }else{
                this.setState({
                    readyLeft:true,
                    loadedLeft:[...this.state.loadedLeft]
                })
            }
        }
        if(!this.state.loadedMain.includes(nextProps.nowImage)){
            this.setState({
                readyMain:false,
                loadedMain:[...this.state.loadedMain]
            })
        }else{
            this.setState({
                readyMain:true,
                loadedMain:[...this.state.loadedMain]
            })
        }
        if(nextProps.nextImage){
            if(!this.state.loadedRight.includes(nextProps.nextImage)){
                this.setState({
                    readyRight:false,
                    loadedRight:[...this.state.loadedRight]
                })
            }else{
                this.setState({
                    readyRight:true,
                    loadedRight:[...this.state.loadedRight]
                })
            }
        }

    }

  render() {
    return (
      <SlideShowContainer>
        <Row>
            {this.props.prevImage && (
                <div
                    style={{
                        height: this.props.sideHeight,
                        width: this.props.sideWidth,
                        overflow: "hidden",
                        position:"relative"
                    }}
                    className="align-self-center mx-auto"
                >
                    {!this.props.prev && (
                        <ImageSlide
                            height={this.props.sideHeight}
                            width={this.props.sideWidth}
                            ready={this.state.readyLeft}
                            change={this.props.change}
                            src={this.props.prevImage}
                            style={this.props.prevStyle}
                            onLoad={() => {
                                this.setState({
                                    readyLeft: true,
                                    loadedLeft:[...this.state.loadedLeft,this.props.prevImage]
                                })
                            }}
                            left
                        />
                    )}
                    {this.props.prev && (
                        <ImageSlide
                            height={this.props.sideHeight}
                            width={this.props.sideWidth}
                            ready={this.state.readyLeft}
                            change={this.props.change}
                            src={this.props.prevImage}
                            style={this.props.prevStyle}
                            onLoad={() => {
                                this.setState({
                                    readyLeft: true,
                                    loadedLeft:[...this.state.loadedLeft,this.props.prevImage]
                                })
                            }}
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
                position:"relative",
                cursor:(this.props.zoom ? "pointer" : "")
            }}
            className="align-self-center mx-auto"
            onClick={this.props.zoomFunc && this.state.readyMain ? this.props.zoomFunc : null}
          >
                      {!this.props.prev && (
                          <ImageSlide
                              height={this.props.mainHeight}
                              width={this.props.mainWidth}
                              ready={this.state.readyMain}
                              change={this.props.change}
                              src={this.props.nowImage}
                              style={this.props.nowStyle}
                              left
                              onLoad={() => {
                                  this.setState({
                                      readyMain:true,
                                      loadedMain:[...this.state.loadedMain,this.props.nowImage]
                                  })
                              }}
                          />
                      )}
                      {this.props.prev && (
                          <ImageSlide
                              height={this.props.mainHeight}
                              width={this.props.mainWidth}
                              ready={this.state.readyMain}
                              change={this.props.change}
                              src={this.props.nowImage}
                              style={this.props.nowStyle}
                              onLoad={() => {
                                  this.setState({
                                      readyMain:true,
                                      loadedMain:[...this.state.loadedMain,this.props.nowImage]
                                  })
                              }}
                              right
                          />
                      )}
          </div>
            {this.props.nextImage && (
                <div
                    style={{
                        height: this.props.sideHeight,
                        overflow: "hidden",
                        width: this.props.sideWidth,
                        position:"relative"
                    }}
                    className="align-self-center mx-auto"
                >
                    {!this.props.prev && (
                        <ImageSlide
                            height={this.props.sideHeight}
                            width={this.props.sideWidth}
                            ready={this.state.readyRight}
                            change={this.props.change}
                            src={this.props.nextImage}
                            style={this.props.nextStyle}
                            onLoad={() => {
                                this.setState({
                                    readyRight: true,
                                    loadedRight:[...this.state.loadedRight,this.props.nextImage]
                                })
                            }}
                            left
                        />
                    )}
                    {this.props.prev && (
                        <ImageSlide
                            height={this.props.sideHeight}
                            width={this.props.sideWidth}
                            ready={this.state.readyRight}
                            change={this.props.change}
                            src={this.props.nextImage}
                            style={this.props.nextStyle}
                            onLoad={() => {
                                this.setState({
                                    readyRight: true,
                                    loadedRight:[...this.state.loadedRight,this.props.nextImage]
                                })
                            }}
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
