import React, {Fragment} from 'react';
import PropTypes, {func} from 'prop-types';

import { ImageLoadingContainer } from './style';
import {BeatLoader, ClipLoader} from "react-spinners";
import {Container, Row} from "react-bootstrap";
import {Fade} from "react-reveal";
import { css } from "@emotion/core";
import {connect} from "react-redux";
import {loaded} from "../../containers/Home/actions";

class ImageLoading extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ready:false
        }
    }

    render() {
    return (
      <Fragment>
          <Fade when={!this.state.ready}>
              <Container style={{
                  height:this.props.height,
                  width:this.props.width,
                  zIndex:this.state.ready ? -1000 : 80,
                  position:"absolute",
                  top:0,
                  left:0
              }}>
                  <Row className="justify-content-center align-content-center" style={{height:"inherit",width:"inherit"}}>
                      <BeatLoader
                          css={css`
                            display: flex;
                            justify-content: center;
                            align-self: center;
                            align-content: center;
                        `}
                          size={this.props.size}
                          color="#46564A"
                          loading={!this.state.ready}/>
                  </Row>
              </Container>
          </Fade>
          <div style={{width:"inherit",height:"inherit",display:this.state.ready ? null : "none"}}>
              <Fade when={this.state.ready}>
                  <div style={{height:"inherit",width:"inherit"}}>
                      <img style={this.props.style} src={this.props.src} className={this.props.className} onLoad={() => setTimeout(() => this.setState({
                          ready:true
                      }),10000)} alt=""/>
                  </div>
              </Fade>
          </div>
      </Fragment>
    );
  }
}

ImageLoading.propTypes = {

};

export default (ImageLoading);
