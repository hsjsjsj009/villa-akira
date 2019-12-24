import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { HomeContainer } from "./style";
import { ready } from "./actions";
import LandingPage from "../../components/LandingPage";
import About from "../../components/About";

class Home extends React.Component {
  render() {
    return (
      <HomeContainer>
        <LandingPage />
        <About />
      </HomeContainer>
    );
  }
}

Home.propTypes = {
  ready: PropTypes.bool
};

function mapStateToProps(state) {
  return {
    ready: state.home.ready
  };
}

function mapDispatchToProps(dispatch) {
  return {
    readyFunc: () => {
      dispatch(ready());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
