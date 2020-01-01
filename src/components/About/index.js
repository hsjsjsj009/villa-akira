import React, {Fragment} from "react";
import PropTypes from "prop-types";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Lightbox from "react-image-lightbox";
import { AboutContainer, ImageBorder } from "./style";
import {
  Arrow,
  Circle,
  Line,
  Paragraph,
  SlideHover,
  Title
} from "../../containers/Home/style";
import { Images, ImagesSlideShow } from "./photos";
import "react-image-lightbox/style.css";
import SlideShow from "../SlideShow";
import ChangeAnimation from "../ChangeAnimation";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: ImagesSlideShow,
      showViewer: false,
      indexPhoto: 0,
      change: false,
      prev: false,
      nowIndex: 0,
      nowImage: ImagesSlideShow[0].src,
      nowStyle: ImagesSlideShow[0].styleNow,
      indexViewer: 0
    };
  }

  openViewer = index => {
    this.setState({
      showViewer: true,
      indexPhoto: index
    });
  };

  prevImage = () => {
    this.setState({
      prev: true
    });
    setTimeout(
      () =>
        this.setState({
          change: true,
          nowIndex:
            (this.state.nowIndex + this.state.images.length - 1) %
            this.state.images.length,
          nowImage:
            ImagesSlideShow[
              (this.state.nowIndex + this.state.images.length - 1) %
                this.state.images.length
            ].src,
          nowStyle:
            ImagesSlideShow[
              (this.state.nowIndex + this.state.images.length - 1) %
                this.state.images.length
            ].styleNow,
          indexViewer:
            (this.state.nowIndex + this.state.images.length - 1) %
            this.state.images.length
        }),
      2
    );
    setTimeout(() => this.setState({ change: false }), 600);
  };

  nextImage = () => {
    this.setState({
      prev: false
    });
    setTimeout(
      () =>
        this.setState({
          change: true,
          nowIndex: (this.state.nowIndex + 1) % this.state.images.length,
          nowImage:
            ImagesSlideShow[
              (this.state.nowIndex + 1) % this.state.images.length
            ].src,
          nowStyle:
            ImagesSlideShow[
              (this.state.nowIndex + 1) % this.state.images.length
            ].styleNow,
          indexViewer: (this.state.nowIndex + 1) % this.state.images.length
        }),
      2
    );
    setTimeout(() => this.setState({ change: false }), 600);
  };

  render() {
    const {indonesia} = this.props;
    return (
      <AboutContainer id="about" className="part-container mb-5">
        <Container style={{ height: "100%" }} fluid>
          <Row
            style={{ height: "inherit" }}
            className="justify-content-center"
            style={{ flexWrap: "wrap-reverse" }}
          >
            <Col md={10} lg={4} xl={4} className="align-self-end mx-2">
              <ChangeAnimation>
                {!indonesia ?
                    <Fragment key={1}>
                      <Title className="mb-3">ABOUT VILLA AKIRA</Title>
                      <Line color="#707070" size="15.4rem" className="float-left" />
                    </Fragment>
                    :
                    <Fragment key={2}>
                      <Title className="mb-3">TENTANG VILLA AKIRA</Title>
                      <Line color="#707070" size="17.5rem" className="float-left" />
                    </Fragment>
                }
              </ChangeAnimation>
              <br />
              {this.props.max1024 ? (
                <Row className="justify-content-center my-4">
                  <SlideHover left className="mx-5 align-self-center">
                    <Circle
                      size="2.5rem"
                      className="row align-content-center"
                      style={{ position: "relative", cursor: "pointer" }}
                      onClick={this.prevImage}
                    >
                      <Arrow
                        left
                        width={0.2}
                        size={0.5}
                        color="#707070"
                        style={{
                          position: "absolute",
                          left: "0.8rem",
                          top: "0.65rem"
                        }}
                      />
                    </Circle>
                  </SlideHover>
                  <SlideShow
                    {...this.state}
                    mainHeight={"12rem"}
                    mainWidth={"10rem"}
                    zoom
                    zoomFunc={() => this.setState({ showViewer: true })}
                  />
                  <SlideHover className="mx-5 align-self-center">
                    <Circle
                      size="2.5rem"
                      className="row align-content-center"
                      style={{ position: "relative", cursor: "pointer" }}
                      onClick={this.nextImage}
                    >
                      <Arrow
                        width={0.2}
                        size={0.5}
                        color="#707070"
                        style={{
                          position: "absolute",
                          left: "0.5rem",
                          top: "0.65rem"
                        }}
                      />
                    </Circle>
                  </SlideHover>
                  {this.state.showViewer && (
                    <Lightbox
                      mainSrc={Images[this.state.indexViewer]}
                      nextSrc={
                        Images[(this.state.indexViewer + 1) % Images.length]
                      }
                      prevSrc={
                        Images[
                          (this.state.indexViewer + Images.length - 1) %
                            Images.length
                        ]
                      }
                      onMovePrevRequest={() =>
                        this.setState({
                          indexViewer:
                            (this.state.indexViewer + Images.length - 1) %
                            Images.length
                        })
                      }
                      onMoveNextRequest={() =>
                        this.setState({
                          indexViewer:
                            (this.state.indexViewer + 1) % Images.length
                        })
                      }
                      onCloseRequest={() =>
                        this.setState({
                          showViewer: false
                        })
                      }
                    />
                  )}
                </Row>
              ) : null}
              <ChangeAnimation>
                {indonesia ?
                    <Fragment key={2}>
                      <Paragraph>
                        Villa Akira terletak di Megamendung, Bogor, 870 m di atas permukaan laut, di atas bukit yang dikelilingi oleh tiga gunung, yaitu Gunung Salak, Gunung Pangrango dan Gunung Gede. Villa Akira hanya 15 menit dari Taman Safari dan banyak tempat wisata lainnya di Puncak.
                      </Paragraph>
                      <Paragraph>
                        Luas tanah Villa Akira berkisar 7.000 m<sup>2</sup> dengan cakupan bangunan hanya 5% sehingga meninggalkan banyak pohon seperti jagung, singkong, alpukat, pisang, nangka, cengkeh, mangga dan banyak pohon tropis lainnya. Tanah Villa Akira sangat hijau dengan udara segar dan angin sejuk, sehingga tidak perlu memiliki pendingin udara di dalam.
                      </Paragraph>
                      <Paragraph>
                        Desain Villa Akira merupakan kombinasi arsitektur modern dan vernakular dengan banyak jendela kaca dan bukaan sehingga menciptakan sirkulasi udara. Genteng dan bentuk atap aspal memberikan ekspresi rumah tropis. Bentuk-L dari villa memaksimalkan penggunaan dari pemandangan pegunungan.
                      </Paragraph>
                      <Paragraph>
                        Villa Akira adalah tempat berakhir pekan yang menyenangkan untuk menjauh dari lalu lintas dan polusi, sebuah ketenangan nyata dengan semua fasilitas yang diperlukan sehingga merasa seperti di rumah. Daerah topografi Villa Akira adalah tempat terbaik untuk kegiatan hiking dan outdoor.
                      </Paragraph>
                      <Paragraph>
                        Villa Akira adalah tempat yang paling cocok untuk orang-orang yang mencintai alam dan mencari ketenangan.
                      </Paragraph>
                    </Fragment>
                :
                <Fragment key={1}>
                  <Paragraph>
                    Villa Akira is located in Megamendung, Bogor, 870m above sea
                    level, on top of a hill surrounded by three mountains, namely
                    Mount Salak, Mount Pangrango and Mount Gede. It is only 15
                    minutes away from Taman Safari (an animal theme park) and many
                    other tourist attractions in Puncak.
                  </Paragraph>
                  <Paragraph>
                    The land area is approx. 7,000 m<sup>2</sup> and the building
                    coverage is only 5 % which leaves the land with lots of trees
                    such as corns, cassavas, avocados, bananas, jack fruits, cloves,
                    mango and many other tropical trees. It is very green with cool
                    fresh air and breeze, so it is not necessary to have air
                    conditioning inside.
                  </Paragraph>
                  <Paragraph>
                    The design is a combination of modern and vernacular
                    architecture with lots of glass windows and openings which allow
                    air circulations. The asphalt roof tile and shape provide an
                    expression of a tropical house. The L-shape of the villa gives
                    the maximum use of the mountainous views.
                  </Paragraph>
                  <Paragraph>
                    It is a nice weekend get away from traffic and pollution, a real
                    serenity place with all required amenities and feel like home.
                    The topographic area is the best venue for hiking and outdoor
                    activities.
                  </Paragraph>
                  <Paragraph>
                    This is the most suitable place for people who love nature and look for tranquility.
                  </Paragraph>
                </Fragment>}
              </ChangeAnimation>
            </Col>
            {this.props.max1024 ? null : (
              <Col lg={5} xl={5} className="align-self-center mx-2">
                <Row className="my-2 justify-content-center">
                  <Col md={6} className="align-self-center">
                    <ImageBorder onClick={() => this.openViewer(0)}>
                      <img
                        src={require("../../static/AboutCropped/0.png")}
                        alt=""
                        className="img-fluid"
                      />
                    </ImageBorder>
                  </Col>
                  <Col md={3} className="align-self-center">
                    <ImageBorder
                      className="my-2"
                      onClick={() => this.openViewer(1)}
                    >
                      <img
                        src={require("../../static/AboutCropped/1.png")}
                        className="img-fluid"
                        alt=""
                      />
                    </ImageBorder>
                    <ImageBorder
                      className="my-2"
                      onClick={() => this.openViewer(2)}
                    >
                      <img
                        src={require("../../static/AboutCropped/2.png")}
                        className="img-fluid"
                        alt=""
                      />
                    </ImageBorder>
                  </Col>
                </Row>
                <Row className="my-2">
                  <Row className="justify-content-center">
                    <Col md={3} className="align-self-center">
                      <ImageBorder
                        className="my-2"
                        onClick={() => this.openViewer(3)}
                      >
                        <img
                          src={require("../../static/AboutCropped/3.png")}
                          className="img-fluid"
                          alt=""
                        />
                      </ImageBorder>
                      <ImageBorder
                        style={{ height: "min-content" }}
                        className="my-2"
                        onClick={() => this.openViewer(4)}
                      >
                        <img
                          src={require("../../static/AboutCropped/4.png")}
                          className="img-fluid"
                          alt=""
                        />
                      </ImageBorder>
                    </Col>
                    <Col md={6} className="align-self-center">
                      <ImageBorder onClick={() => this.openViewer(5)}>
                        <img
                          src={require("../../static/AboutCropped/5.png")}
                          alt=""
                          className="img-fluid"
                        />
                      </ImageBorder>
                    </Col>
                  </Row>
                </Row>
                {this.state.showViewer && (
                  <Lightbox
                    mainSrc={Images[this.state.indexPhoto]}
                    nextSrc={
                      Images[(this.state.indexPhoto + 1) % Images.length]
                    }
                    prevSrc={
                      Images[
                        (this.state.indexPhoto + Images.length - 1) %
                          Images.length
                      ]
                    }
                    onMovePrevRequest={() =>
                      this.setState({
                        indexPhoto:
                          (this.state.indexPhoto + Images.length - 1) %
                          Images.length
                      })
                    }
                    onMoveNextRequest={() =>
                      this.setState({
                        indexPhoto: (this.state.indexPhoto + 1) % Images.length
                      })
                    }
                    onCloseRequest={() =>
                      this.setState({
                        showViewer: false
                      })
                    }
                  />
                )}
              </Col>
            )}
          </Row>
        </Container>
      </AboutContainer>
    );
  }
}

About.propTypes = {};

export default About;
