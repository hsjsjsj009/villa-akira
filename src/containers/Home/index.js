import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { HomeContainer } from "./style";
import LandingPage from "../../components/LandingPage";
import About from "../../components/About";
import Host from "../../components/Host";
import NeighbourHood from "../../components/NeighbourHood";

class Home extends React.Component {

    render() {
    return (
      <HomeContainer id="home">
          <LandingPage />
          <About />
          <Host />
          <NeighbourHood />
      </HomeContainer>
    );
  }
}

Home.propTypes = {
  ready: PropTypes.bool
};

function mapStateToProps(state) {
    let test = {
        ready: state.global.ready,
        bg:state.global.image[0]
    };
  return test;
}

function mapDispatchToProps(dispatch) {
    return{
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
