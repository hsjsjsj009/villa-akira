import React from 'react';
import PropTypes from 'prop-types';

import { ChangeAnimationContainer } from './style';
import {Fade} from "react-reveal";

class ChangeAnimation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      change: false,
    };
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if(nextProps.children.key !== this.props.children.key){
      this.setState({change:true});
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(prevProps.children.key !== this.props.children.key){
      setTimeout(() => {this.setState({change:false})},500);
    }
  }


  render() {
    return (
        <Fade when={!this.state.change}>
          {this.props.children}
        </Fade>
    );
  }
}

ChangeAnimation.propTypes = {

};

export default ChangeAnimation;
