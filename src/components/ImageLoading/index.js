import React, {Fragment} from 'react';
import PropTypes, {func} from 'prop-types';

import { ImageLoadingContainer } from './style';
import {ClipLoader} from "react-spinners";
import {Container, Row} from "react-bootstrap";
import {Fade} from "react-reveal";
import { css } from "@emotion/core";
import {connect} from "react-redux";
import {loaded} from "../../containers/Home/actions";

class ImageLoading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ready:false,
    }
  }

  componentWillReceiveProps(nextProps, nextContext) {
      if(!nextProps.loaded.includes(nextProps.src)){
        this.setState({
          ready:false,
        })
      }else{
        this.setState({
          ready:true,
        })
      }
  }


  render() {
    return (
      <div style={{position:"relative"}}>
        <Fade when={!this.state.ready}>
          <Container style={{
            height:this.props.height,
            width:this.props.width,
            zIndex:this.state.ready ? -100 : 50,
            position:"absolute",
            left:0,
            top:0
          }}>
            <Row className="justify-content-center align-content-center" style={{height:"inherit",width:"inherit"}}>
              <ClipLoader
              css={css`
                display: flex;
                justify-content: center;
            `}
              size="3rem"
              color="#46564A"
              loading={!this.state.ready}/>
            </Row>
          </Container>
        </Fade>
        <div style={{display:this.state.ready ? "block" : "none"}}>
          <Fade when={this.state.ready}>
            <img src={this.props.src}
                 onLoad={() => setTimeout(() => {
                   this.setState({
                     ready:true,
                   });
                   this.props.loadedFunc(this.props.src)
                 },2)}
                 style={{
                   ...this.props.style
                 }}
                 alt=""/>
          </Fade>
        </div>
      </div>
    );
  }
}

ImageLoading.propTypes = {

};

function mapStateToProps(state){
    return {
        loaded:state.home.loaded
    }
}

function mapDispatchToProps(dispatch) {
    return{
        loadedFunc:(src) => dispatch(loaded(src))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ImageLoading);
