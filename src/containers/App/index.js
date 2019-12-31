import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { ThemeProvider } from "styled-components";

import SmoothScroll from "smooth-scroll/dist/smooth-scroll";
import Fade from "react-reveal/Fade";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import $ from "jquery";
import { BeatLoader } from "react-spinners";
import { css } from "@emotion/core";
import {
  changeBarColor,
  changeInnerColor,
  indonesiaLanguage,
  ready
} from "../../globalActions";
import Navbar from "../../components/Navbar";
import { AppContainer } from "./style";
import { routes } from "./routes";
import { theme } from "./theme";

class App extends React.Component {
  componentDidMount() {
    const scroll = new SmoothScroll('a[href*="#"]', {
      speed: 700,
      speedAsDuration: true,
      offset: 120
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
    const pages = routes.map(route => (
      <Route
        component={route.component}
        exact={route.exact}
        path={route.path}
      />
    ));
    return (
      <ThemeProvider theme={theme}>
        <div>
          <Fade when={!this.props.ready}>
            <Container
              style={{
                height: "100vh",
                zIndex: this.props.ready ? -1000 : 1000,
                position: "fixed",
                width: "100vw"
              }}
            >
              <Row
                className="justify-content-center align-content-center"
                style={{ height: "inherit", width: "inherit" }}
              >
                <BeatLoader
                  css={css`
                    display: flex;
                    justify-content: center;
                  `}
                  size="3rem"
                  color="#46564A"
                  loading={!this.props.ready}
                />
              </Row>
            </Container>
          </Fade>
          <Navbar
            ready={this.props.ready}
            changeColor={this.props.changeColor}
            changeBar={this.props.changeBar}
            max500={this.props.max500Query}
            max1024={this.props.max1024Query}
            changeLanguage={this.props.changeLanguage}
            indonesia={this.props.indonesia}
          />
          <Fade when={this.props.ready}>
            <AppContainer>
              <Switch>{pages}</Switch>
            </AppContainer>
          </Fade>
        </div>
      </ThemeProvider>
    );
  }
}

function mapStateToProps(state) {
  return {
    changeColor: state.global.changeInnerColor,
    changeBar: state.global.changeBarColor,
    ready: state.global.ready,
    max500Query: state.home.max500,
    max1024Query: state.home.max1024,
    indonesia: state.global.indonesia
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeBarColor: bool => {
      dispatch(changeBarColor(bool));
    },
    changeInnerColor: bool => {
      dispatch(changeInnerColor(bool));
    },
    readyFunc: () => {
      dispatch(ready());
    },
    changeLanguage: () => {
      dispatch(indonesiaLanguage());
    }
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
