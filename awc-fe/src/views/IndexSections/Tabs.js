import React from "react";
import classnames from "classnames";
// reactstrap components
import {
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

export default function Tabs() {
  const [iconTabs, setIconsTabs] = React.useState(1);
  const [textTabs, setTextTabs] = React.useState(4);
  return (
    <div className="section section-tabs">
      <Container>
        <div className="title">
          <h3 className="mb-3"></h3>
        </div>
        <Row>
          {/* Step-1  */}
          <Col className="ml-auto mr-auto" md="10" xl="6">
            <Card>
              <CardHeader>
                <Nav className="nav-tabs-info" role="tablist" tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: textTabs === 4
                      })}
                      onClick={(e) => setTextTabs(4)}
                      href="#pablo"
                    >
                      Step-1
                    </NavLink>
                  </NavItem>
                </Nav>
              </CardHeader>
              <CardBody>
                <TabContent className="tab-space" activeTab={"link" + textTabs}>
                  <TabPane tabId="link4">
                  <p>
                  <span style={{ fontWeight: 'bold' }}>Shortlist Colleges & Fill CAF</span>  <br />
                    Take the intuitive technology-based Career Compass test to assess the right career choice for you.
                  </p>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>



          <Col className="ml-auto mr-auto" md="10" xl="6">
            <Card>
              <CardHeader>
                <Nav className="nav-tabs-info" role="tablist" tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: textTabs === 4
                      })}
                      onClick={(e) => setTextTabs(4)}
                      href="#pablo"
                    >
                      Step-2
                    </NavLink>
                  </NavItem>
                </Nav>
              </CardHeader>
              <CardBody>
                <TabContent className="tab-space" activeTab={"link" + textTabs}>
                  <TabPane tabId="link4">
                    <p>
                    <span style={{ fontWeight: 'bold' }}>Complete Profile to Get AI Powered College Recommendations</span>  <br />
                    Build your profile with your education history and preferences so that our AI tool can recommend the best colleges for you.
                    </p>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>

          <Col className="ml-auto mr-auto" md="10" xl="6">
            <Card>
              <CardHeader>
                <Nav className="nav-tabs-info" role="tablist" tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: textTabs === 4
                      })}
                      onClick={(e) => setTextTabs(4)}
                      href="#pablo"
                    >
                      Step-3
                    </NavLink>
                  </NavItem>
                </Nav>
              </CardHeader>
              <CardBody>
                <TabContent className="tab-space" activeTab={"link" + textTabs}>
                  <TabPane tabId="link4">
                    <p>
                   <span style={{ fontWeight: 'bold' }}>Shortlist Colleges & Fill CAF</span>  <br />
                    Shortlist your dream colleges and apply with a single application to multiple colleges.
                    </p>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>

          <Col className="ml-auto mr-auto" md="10" xl="6">
            <Card>
              <CardHeader>
                <Nav className="nav-tabs-info" role="tablist" tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: textTabs === 4
                      })}
                      onClick={(e) => setTextTabs(4)}
                      href="#pablo"
                    >
                      Step-4
                    </NavLink>
                  </NavItem>
                </Nav>
              </CardHeader>
              <CardBody>
                <TabContent className="tab-space" activeTab={"link" + textTabs}>
                  <TabPane tabId="link4">
                    <p>
                    <span style={{ fontWeight: 'bold' }}>Get Expert Help</span>  <br />
                    Take the intuitive technology-based Career Compass test to assess the right career choice for you.
                    </p>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>

          <Col className="ml-auto mr-auto" md="10" xl="6">
            <Card>
              <CardHeader>
                <Nav className="nav-tabs-info" role="tablist" tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: textTabs === 4
                      })}
                      onClick={(e) => setTextTabs(4)}
                      href="#pablo"
                    >
                      Step-5
                    </NavLink>
                  </NavItem>
                </Nav>
              </CardHeader>
              <CardBody>
                <TabContent className="tab-space" activeTab={"link" + textTabs}>
                  <TabPane tabId="link4">
                    <p>
                    <span style={{ fontWeight: 'bold' }}>Upload Documents & Pay Fee</span>  <br />
                    Take the intuitive technology-based Career Compass test to assess the right career choice for you.
                    </p>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>

          <Col className="ml-auto mr-auto" md="10" xl="6">
            <Card>
              <CardHeader>
                <Nav className="nav-tabs-info" role="tablist" tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: textTabs === 4
                      })}
                      onClick={(e) => setTextTabs(4)}
                      href="#pablo"
                    >
                      Step-6
                    </NavLink>
                  </NavItem>
                </Nav>
              </CardHeader>
              <CardBody>
                <TabContent className="tab-space" activeTab={"link" + textTabs}>
                  <TabPane tabId="link4">
                    <p>
                    <span style={{ fontWeight: 'bold' }}>Confirm Admission & Claim Gift</span>  <br />
                    Take the intuitive technology-based Career Compass test to assess the right career choice for you.
                    </p>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
