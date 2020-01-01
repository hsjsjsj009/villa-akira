import React, {Fragment} from "react";
import PropTypes from "prop-types";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { NeighbourHoodContainer } from "./style";
import {
  Arrow,
  Circle,
  LeftArrowButton,
  Line,
  Paragraph,
  RightArrowButton,
  SlideHover,
  Title
} from "../../containers/Home/style";
import SlideShow from "../SlideShow";
import { Images } from "./images";
import { isMobile } from "react-device-detect";
import ChangeAnimation from "../ChangeAnimation";

class NeighbourHood extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: Images,
      nowIndex: 0,
      nowImage: Images[0].src,
      nowStyle: Images[0].styleNow,
      prevIndex: 2,
      prevImage: Images[2].src,
      prevStyle: Images[2].style,
      nextIndex: 1,
      nextImage: Images[1].src,
      nextStyle: Images[1].style,
      change: false,
      prev: false
    };
  }

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
            Images[
              (this.state.nowIndex + this.state.images.length - 1) %
                this.state.images.length
            ].src,
          nowStyle:
            Images[
              (this.state.nowIndex + this.state.images.length - 1) %
                this.state.images.length
            ].styleNow,
          nextIndex: this.state.nowIndex,
          nextImage: Images[this.state.nowIndex].src,
          nextStyle: Images[this.state.nowIndex].style,
          prevIndex:
            (this.state.nowIndex + this.state.images.length - 2) %
            this.state.images.length,
          prevImage:
            Images[
              (this.state.nowIndex + this.state.images.length - 2) %
                this.state.images.length
            ].src,
          prevStyle:
            Images[
              (this.state.nowIndex + this.state.images.length - 2) %
                this.state.images.length
            ].style
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
            Images[(this.state.nowIndex + 1) % this.state.images.length].src,
          nowStyle:
            Images[(this.state.nowIndex + 1) % this.state.images.length]
              .styleNow,
          nextIndex: (this.state.nowIndex + 2) % this.state.images.length,
          nextImage:
            Images[(this.state.nowIndex + 2) % this.state.images.length].src,
          nextStyle:
            Images[(this.state.nowIndex + 2) % this.state.images.length].style,
          prevIndex: this.state.nowIndex,
          prevImage: Images[this.state.nowIndex].src,
          prevStyle: Images[this.state.nowIndex].style
        }),
      2
    );
    setTimeout(() => this.setState({ change: false }), 600);
  };

  render() {
    const {indonesia} = this.props;
    return (
      <NeighbourHoodContainer className="my-5">
        <Container fluid style={{ height: "inherit" }}>
          <Row className="justify-content-center" style={{ height: "inherit" }}>
            <Col
              xs
              md={10}
              lg={10}
              xl={5}
              className={
                (this.props.max500 ? "my-4 " : "") + "align-self-center"
              }
            >
              <ChangeAnimation>
                {indonesia ?
                    <Title key={4} className="mb-3">LINGKUNGAN</Title>
                :
                    <Title key={8} className="mb-3">THE NEIGHBORHOOD</Title>}
              </ChangeAnimation>
              <Line color="#707070" size="16.5rem" />
              <br />
                {this.props.max1024 ?
                    <div className="my-2">
                        <SlideShow
                            {...this.state}
                            sideHeight="10rem"
                            sideWidth="6rem"
                            mainHeight="15rem"
                            mainWidth="9rem"
                        />
                        <Row className="justify-content-center my-4">
                            <LeftArrowButton className="mx-5" onClick={this.prevImage} />
                            <RightArrowButton className="mx-5" onClick={this.nextImage} />
                        </Row>
                    </div>
                    :
                    null
                }
              <ChangeAnimation>
                {indonesia ?
                  <Fragment key={98}>
                    <Paragraph>
                        Daerah Megamendung di mana tempat Villa Akira berada merupakan daerah perbukitan dengan ketinggian rata-rata 850 m di atas permukaan laut. Kata "Megamendung" berasal dari "mega" yang berarti alam semesta, awan, besar, kuat; dan "mendung" yang berarti mendung, tertutup awan dan terletak di pegunungan.
                    </Paragraph>
                      <Paragraph>
                          Megamendung adalah bagian dari Puncak, sebuah jalur gunung di Jawa Barat yang merupakan tujuan akhir pekan yang umum bagi penduduk Jakarta termasuk bagi mereka yang rindu akan pemandangan alam yang bersih. Megamendung menghubungkan kota Bogor dan Bandung, tersebar di kabupaten Bogor, Cianjur dan Sukabumi.
                      </Paragraph>
                      <Paragraph>
                          Megamendung adalah bagian dari Puncak, sebuah jalur gunung di Jawa Barat yang merupakan tujuan akhir pekan yang umum bagi penduduk Jakarta termasuk bagi mereka yang rindu akan pemandangan alam yang bersih. Megamendung menghubungkan kota Bogor dan Bandung, tersebar di kabupaten Bogor, Cianjur dan Sukabumi.
                      </Paragraph>
                      <Paragraph>
                          Villa Akira hanya 15 menit dari daerah Puncak diakses dari jalan utama. Vila memiliki akses sendiri yang menjadikan vila ini sangat istimewa, aman, dan pribadi.
                      </Paragraph>
                  </Fragment>
                :
                <Fragment key={90}>
                  <Paragraph>
                    Megamendung District where Villa Akira is located, is a hilly
                    area with average height of 850 m above sea level. The word
                    "Megamendung" come from "mega" means universe, cloud, large,
                    strong, and "mendung" means cloudy which explains the area
                    covered with cloud and located on the mountains.
                  </Paragraph>
                  <Paragraph>
                    Megamendung is a part of Puncak, a mountain pass in West Java
                    which is a common weekend destination for residents of Jakarta
                    including for those who are longing for clean are and natural
                    scenery. The pass connects the city of Bogor and Bandung and is
                    spread within the regencies of Bogor, Cianjur and Sukabumi.
                  </Paragraph>
                  <Paragraph>
                    In Puncak area, we can find hundreds of accommodations from
                    low-income homestays, guest houses, apartments to motels and
                    five-star hotels, with different price ranges and socio-economic
                    guests from all parts of Indonesia. Puncak is a melting pot of
                    diversity where you can find a Javanese and Padang restaurant
                    across from a Turkish kebab and Italian pizza on the same
                    street.
                  </Paragraph>
                  <Paragraph>
                    In Puncak area, we can find hundreds of accommodations from
                    low-income homestays, guest houses, apartments to motels and
                    five-star hotels, with different price ranges and socio-economic
                    guests from all parts of Indonesia. Puncak is a melting pot of
                    diversity where you can find a Javanese and Padang restaurant
                    across from a Turkish kebab and Italian pizza on the same
                    street.
                  </Paragraph>
                </Fragment>}
              </ChangeAnimation>
                {this.props.max1024 ?
                    null
                    :
                    <Row className="justify-content-center mt-2">
                        <LeftArrowButton className="mx-5" onClick={this.prevImage} />
                        <RightArrowButton className="mx-5" onClick={this.nextImage} />
                    </Row>
                }
            </Col>
              {this.props.max1024 ?
                null
                :
                  <Col
                      xs={12}
                      md={8}
                      lg={8}
                      xl={5}
                      className={
                          this.props.max1024
                              ? "my-4 align-self-center"
                              : "align-self-center"
                      }
                  >
                      <SlideShow
                          {...this.state}
                          sideHeight="10rem"
                          sideWidth="6rem"
                          mainHeight="15rem"
                          mainWidth="9rem"
                      />
                  </Col>
              }
          </Row>
        </Container>
      </NeighbourHoodContainer>
    );
  }
}
NeighbourHood.propTypes = {};

export default NeighbourHood;
