import React from "react";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

export default function NucleoIcons() {
  return (
    <div className="section section-nucleo-icons">
      <img alt="..." className="path" src={require("assets/img/path3.png")} />
      <Container>
        <Row className="justify-content-center">
          <Col lg="8" md="12">
            <h2 className="title"> Lorem Ipsum</h2>
            <h4 className="description">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </h4>
            <div className="btn-wrapper">
              {/* <Button
                className="btn-round"
                color="primary"
                href="https://demos.creative-tim.com/blk-design-system-react/#/documentation/icons"
                rel="noopener noreferrer"
                target="_blank"
              >
                
              </Button>
              <Button
                className="btn-simple btn-round"
                color="primary"
                href="https://nucleoapp.com/?ref=1712"
                rel="noopener noreferrer"
                size="lg"
                target="_blank"
              >
                View All Icons
              </Button> */}
            </div>
          </Col>
        </Row>
        <div className="blur-hover">
          <a href="https://demos.creative-tim.com/blk-design-system-react/#/documentation/icons">
            <div className="icons-container blur-item on-screen mt-5">
              {/* Center */}
              <i className="icon tim-icons icon-coins" />
              {/* Right 1 */}
              <i className="icon icon-sm tim-icons icon-spaceship" />
              <i className="icon icon-sm tim-icons icon-money-coins" />
              <i className="icon icon-sm tim-icons icon-link-72" />
              {/* Right 2 */}
              <i className="icon tim-icons icon-send" />
              <i className="icon tim-icons icon-mobile" />
              <i className="icon tim-icons icon-wifi" />
              {/* Left 1 */}
              <i className="icon icon-sm tim-icons icon-key-25" />
              <i className="icon icon-sm tim-icons icon-atom" />
              <i className="icon icon-sm tim-icons icon-satisfied" />
              {/* Left 2 */}
              <i className="icon tim-icons icon-gift-2" />
              <i className="icon tim-icons icon-tap-02" />
              <i className="icon tim-icons icon-wallet-43" />
            </div>
            <span className="blur-hidden h5 text-primary">
              Explore all Courses
            </span>
          </a>
        </div>
      </Container>
    </div>
  );
}
