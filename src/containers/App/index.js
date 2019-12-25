import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { ThemeProvider } from "styled-components";

import SmoothScroll from "smooth-scroll/dist/smooth-scroll";
import { theme } from "./theme";
import { routes } from "./routes";
import { AppContainer } from "./style";
import Navbar from "../../components/Navbar";
import { changeBarColor, changeInnerColor } from "../../globalActions";

class App extends React.Component {
  componentDidMount() {
    const scroll = new SmoothScroll('a[href*="#"]', {
      speed: 700,
      speedAsDuration: true
    });
    window.onscroll = () => {
      if (document.documentElement.scrollTop > 50) {
        this.props.changeBarColor(true);
      } else {
        this.props.changeBarColor(false);
      }
    };
  }

  render() {
    console.log();
    const pages = routes.map(route => (
      <Route
        component={route.component}
        exact={route.exact}
        path={route.path}
      />
    ));
    return (
      <ThemeProvider theme={theme}>
        <Navbar
          changeColor={this.props.changeColor}
          changeBar={this.props.changeBar}
        />
        <AppContainer>
          <Switch>{pages}</Switch>
        </AppContainer>
      </ThemeProvider>
    );
  }
}

function mapStateToProps(state) {
  return {
    changeColor: state.global.changeInnerColor,
    changeBar: state.global.changeBarColor
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeBarColor: bool => {
      dispatch(changeBarColor(bool));
    },
    changeInnerColor: bool => {
      dispatch(changeInnerColor(bool));
    }
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
