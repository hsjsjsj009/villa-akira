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
import { max1024, max500, max768, min1024, min768 } from "./actions";

class Home extends React.Component {
  componentDidMount() {
    const max500 = window.matchMedia("(max-width:550px)");
    this.props.max500Func(max500);
    max500.addListener(this.props.max500Func);

    const max1024 = window.matchMedia("(max-width:1024px)");
    this.props.max1024Func(max1024);
    max1024.addListener(this.props.max1024Func);

    const max768 = window.matchMedia("(max-width:768px)");
    this.props.max768Func(max768);
    max768.addListener(this.props.max768Func);

    const min1024 = window.matchMedia("(min-width:1024px)");
    this.props.min1024Func(min1024);
    min1024.addListener(this.props.min1024Func);

    const min768 = window.matchMedia("(min-width:768px)");
    this.props.min768Func(min768);
    min768.addListener(this.props.min768Func);
  }

  render() {
    const queryProps = {
      max500: this.props.max500Query,
      min1024: this.props.min1024Query,
      min768: this.props.min768Query,
      max768: this.props.max768Query,
      max1024: this.props.max1024Query
    };
    return (
      <HomeContainer id="home">
        <LandingPage indonesia={this.props.indonesia} />
        {this.props.ready && (
          <React.Fragment>
            <About {...queryProps} indonesia={this.props.indonesia} />
            <Host {...queryProps} indonesia={this.props.indonesia} />
            <NeighbourHood {...queryProps} indonesia={this.props.indonesia} />
            <Facilities {...queryProps} indonesia={this.props.indonesia} />
            <NightRates {...queryProps} indonesia={this.props.indonesia} />
            <Testimoni {...queryProps} indonesia={this.props.indonesia} />
          </React.Fragment>
        )}
        <Footer />
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
    max500Query: state.home.max500,
    max1024Query: state.home.max1024,
    max768Query: state.home.max768,
    min1024Query: state.home.min1024,
    min768Query: state.home.min768,
    indonesia: state.global.indonesia
  };
}

function mapDispatchToProps(dispatch) {
  return {
    max500Func: query => dispatch(max500(query)),
    max768Func: query => dispatch(max768(query)),
    max1024Func: query => dispatch(max1024(query)),
    min768Func: query => dispatch(min768(query)),
    min1024Func: query => dispatch(min1024(query))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
