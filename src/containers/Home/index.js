import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { HomeContainer } from "./style";
import LandingPage from "../../components/LandingPage";
import About from "../../components/About";
import Host from "../../components/Host";
import NeighbourHood from "../../components/NeighbourHood";
import Facilities from "../../components/Facilities";
import NightRates from "../../components/NightRates";
import Testimoni from "../../components/Testimoni";
import Footer from "../../components/Footer";
import {max500} from "./actions";

class Home extends React.Component {
    componentDidMount() {
      const max500 = window.matchMedia("(max-width:550px)");
      this.props.max500Func(max500);
      max500.addListener(this.props.max500Func);
    };

    render() {
    return (
      <HomeContainer id="home">
        <LandingPage />
          {this.props.ready && <React.Fragment>
              <About max500={this.props.max500Query} />
              <Host max500={this.props.max500Query} />
              <NeighbourHood max500={this.props.max500Query} />
              <Facilities max500={this.props.max500Query} />
              <NightRates max500={this.props.max500Query} />
              <Testimoni/>
          </React.Fragment> }
        <Footer/>
      </HomeContainer>
    );
  }
}

Home.propTypes = {
  ready: PropTypes.bool
};

function mapStateToProps(state) {
  return {
    ready: state.global.ready,
    bg: state.global.image[0],
      max500Query:state.home.max500
  };
}

function mapDispatchToProps(dispatch) {
  return {
    max500Func:(query) => dispatch(max500(query))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
