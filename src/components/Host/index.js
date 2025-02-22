import React, {Fragment} from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { HostContainer } from "./style";
import { Line, Paragraph, Title } from "../../containers/Home/style";
import ChangeAnimation from "../ChangeAnimation";

class Host extends React.Component {
  render() {
    const {indonesia} = this.props;
    return (
      <HostContainer className="mb-5">
        <Container fluid style={{ height: "inherit" }}>
          <Row
            style={{ height: "inherit" }}
            className="justify-content-center align-content-center"
          >
            {this.props.max1024 ?
            null :
                <Col
                    xs={9}
                    md={5}
                    xl={3}
                    className={
                      this.props.max1024
                          ? "align-self-center mx-auto mb-3"
                          : "align-self-center mx-4"
                    }
                >
                  <img
                      src={require("../../static/host.jpg")}
                      style={{ borderRadius: "50%" }}
                      className="img-fluid"
                      alt=""
                  />
                </Col>}
            <Col
              md={10}
              xl={6}
              className={
                this.props.max1024
                  ? "align-self-center mx-auto my-3"
                  : "align-self-center mx-4"
              }
            >
              <ChangeAnimation>
                {indonesia ?
                    <Fragment key={50}>
                      <Title className="mb-3">
                        TUAN RUMAH
                      </Title>
                      <Line color="#707070" size="10.5rem"/>
                    </Fragment>
                :
                    <Fragment key={12}>
                      <Title className="mb-3">
                        THE HOST
                      </Title>
                      <Line color="#707070" size="7rem" />
                    </Fragment>}
              </ChangeAnimation>
              <br />
              {this.props.max1024 ?
                  <Col
                      xs={9}
                      md={6}
                      xl={3}
                      className={
                        this.props.max1024
                            ? "align-self-center mx-auto my-4"
                            : "align-self-center mx-4"
                      }
                  >
                    <img
                        src={require("../../static/host.jpg")}
                        style={{ borderRadius: "50%" }}
                        className="img-fluid"
                        alt=""
                    />
                  </Col>
                  :
                  null}
              <ChangeAnimation>
                {indonesia ?
                  <Fragment key={3}>
                    <Paragraph>
                      Nama saya Maya, seorang ibu dengan tiga anak dan satu cucu. Saya lahir di sebuah desa bernama Baros, Serang, sekitar dua jam perjalanan dari Jakarta. Saya adalah anak tertua dari empat bersaudara di keluarga saya. Saya kuliah di Sekolah Sekretaris di Jakarta, lalu belajar bahasa Inggris di Universitas Atma Jaya di kota yang sama.
                    </Paragraph>
                    <Paragraph>
                      Saya suka memasak semua jenis makanan. Saya selalu menikmati alam karena saya mendapatkan kedekatan dengan Tuhan dan kebahagiaan. Saya juga senang bertemu dengan orang lain karena memungkinkan saya untuk belajar budaya dan memahami tentang kehidupan.
                    </Paragraph>
                    <Paragraph>
                      Menjadi tuan rumah Villa Akira telah mengajari saya bagaimana membangun hubungan yang berkelanjutan dengan orang-orang dari latar belakang sosial yang berbeda. Sebagai tuan rumah, tujuan saya adalah membuat tamu saya bahagia selama mereka tinggal di Villa Akira dan memiliki pengalaman yang akan selalu mereka ingat.
                    </Paragraph>
                  </Fragment>
                :
                <Fragment key={11}>
                  <Paragraph>
                    My name is Maya a mother with three children and one
                    granddaughter. I was born n a village called Baros, Serang,
                    about two hours drive from Jakarta. I am the oldest child of
                    four in my family. I went to a Scretary College in Jakarta, then
                    studied English in Atma Jaya University in the same city.
                  </Paragraph>
                  <Paragraph>
                    I love cooking all kind of food. I always enjoy nature because
                    it gives me a sense of closeness to God and happiness. I also
                    enjoy meeting people because it allows me to learn culture and
                    understand about life.
                  </Paragraph>
                  <Paragraph>
                    Being the Host of Villa Akira has taught me how to build a
                    sustainable relationship with people from different social
                    background. As a host, my goal is to make my guests happy during
                    their stay in Villa Akira and have the experience that will
                    always remember.
                  </Paragraph>
                </Fragment>}
              </ChangeAnimation>
            </Col>
          </Row>
        </Container>
      </HostContainer>
    );
  }
}

Host.propTypes = {};

export default Host;
