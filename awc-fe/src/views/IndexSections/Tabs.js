import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

function Tabs() {
  const [iconPills, setIconPills] = React.useState("1");
  const [pills, setPills] = React.useState("1");
  return (
    <>
      <div className="section section-tabs">
      
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="10" xl="6">

            </Col>
            <Col className="ml-auto mr-auto" md="10" xl="10">
              <p className="category"></p>
              <Card>
                <CardHeader>
                  <Nav
                    className="nav-tabs-neutral justify-content-center"
                    data-background-color="blue"
                    role="tablist"
                    tabs
                  >
                    <NavItem>
                      <NavLink
                        className={pills === "1" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("1");
                        }}
                      >
                        Step 1 
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("2");
                        }}
                      >
                        Step 2 
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "3" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("3");
                        }}
                      >
                        Step 3 
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "4" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("4");
                        }}
                      >
                        Step 4 
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "5" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("5");
                        }}
                      >
                        Step 5
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "6" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("6");
                        }}
                      >
                        Step 6
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="text-center"
                    activeTab={"pills" + pills}
                  >
                    <TabPane tabId="pills1">
                      <p>
                      <span style={{ fontWeight: 'bold' }}>Shortlist Colleges & Fill CAF</span> <br />
                      Take the intuitive technology-based Career Compass test to assess the right career choice for you.
                      </p>
                    </TabPane>
                    <TabPane tabId="pills2">
                      <p>
                      <span style={{ fontWeight: 'bold' }}> Complete Profile to Get AI Powered College Recommendations</span> <br />
                      Build your profile with your education history and preferences so that our AI tool can recommend the best colleges for you. 
                      </p>
                    </TabPane>
                    <TabPane tabId="pills3">
                      <p>
                      <span style={{ fontWeight: 'bold' }}>Shortlist Colleges & Fill CAF</span> <br />
                      Shortlist your dream colleges and apply with a single application to multiple colleges.
                      </p>
                    </TabPane>
                    <TabPane tabId="pills4">
                      <p>
                      <span style={{ fontWeight: 'bold' }}>Get Expert Help</span> <br />
                      Take the intuitive technology-based Career Compass test to assess the right career choice for you.
                      </p>
                    </TabPane>
                    <TabPane tabId="pills5">
                      <p>
                      <span style={{ fontWeight: 'bold' }}> Upload Documents & Pay Fee </span><br />
                      Take the intuitive technology-based Career Compass test to assess the right career choice for you.
                      </p>
                    </TabPane>
                    <TabPane tabId="pills6">
                      <p>
                      <span style={{ fontWeight: 'bold' }}> Confirm Admission & Claim Gift </span> <br />
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
    </>
  );
}

export default Tabs;
