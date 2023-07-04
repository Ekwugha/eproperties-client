import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Dropdown, Nav, Row, Tab } from 'react-bootstrap';
import "../pages/home/home.css"

const PropertyTab = () => {

   const [activeTab, setActiveTab] = useState("rent"); // Set the initial active tab to 'rent'

   useEffect(() => {
     // Set the first tab as active on page load
     setActiveTab("rent");
   }, []);

  return (
    <Container>
      <Row>
        <Col>
          <Tab.Container defaultActiveKey={activeTab}>
            <Nav variant="tabs" className="mb-4 item">
              <Nav.Item>
                <Nav.Link eventKey="rent">Rent</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="buy">Buy</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="sell">Sell</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="short-let">Short Let</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="land">Land</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="auction">Auction</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="rent">
                <div className="profile-content mt-5">
                  <Card className="mt-4">
                    <Card.Body>
                      <Row>
                        <Col md={4}>
                          <Card.Text>
                            <strong>Location</strong>
                            <Dropdown className="dropdown-menuu ">
                              <Dropdown.Toggle
                                variant="transparent"
                                id="location-dropdown"
                              >
                                Select Your State
                              </Dropdown.Toggle>
                              <Dropdown.Menu className="dropdown-menuu">
                                <Dropdown.Item>New York</Dropdown.Item>
                                <Dropdown.Item>Los Angeles</Dropdown.Item>
                                <Dropdown.Item>Chicago</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </Card.Text>
                        </Col>
                        <Col md={4}>
                          <Card.Text>
                            <strong>City</strong>
                            <Dropdown>
                              <Dropdown.Toggle
                                variant="transparent"
                                id="city-dropdown"
                              >
                                Select Your City
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                <Dropdown.Item>City 1</Dropdown.Item>
                                <Dropdown.Item>City 2</Dropdown.Item>
                                <Dropdown.Item>City 3</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </Card.Text>
                        </Col>
                        <Col md={4}>
                          <Card.Text>
                            <strong>Property Type</strong>
                            <Dropdown>
                              <Dropdown.Toggle
                                variant="transparent"
                                id="property-type-dropdown"
                              >
                                Choose Property Type
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                <Dropdown.Item>Type 1</Dropdown.Item>
                                <Dropdown.Item>Type 2</Dropdown.Item>
                                <Dropdown.Item>Type 3</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </Card.Text>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={4}>
                          <Card.Text>
                            <strong>Beds</strong>
                            <Dropdown>
                              <Dropdown.Toggle
                                variant="transparent"
                                id="beds-dropdown"
                              >
                                Choose Bed
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                <Dropdown.Item>1</Dropdown.Item>
                                <Dropdown.Item>2</Dropdown.Item>
                                <Dropdown.Item>3</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </Card.Text>
                        </Col>
                        <Col md={4}>
                          <Card.Text>
                            <strong>Min Price</strong>
                            <Dropdown>
                              <Dropdown.Toggle
                                variant="transparent"
                                id="min-price-dropdown"
                              >
                                Choose Min Price
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                <Dropdown.Item>$100,000</Dropdown.Item>
                                <Dropdown.Item>$200,000</Dropdown.Item>
                                <Dropdown.Item>$300,000</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </Card.Text>
                        </Col>
                        <Col md={4}>
                          <Card.Text>
                            <strong>Max Price:</strong>
                            <Dropdown>
                              <Dropdown.Toggle
                                variant="transparent"
                                id="max-price-dropdown"
                              >
                                Choose Max Price
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                <Dropdown.Item>$500,000</Dropdown.Item>
                                <Dropdown.Item>$1,000,000</Dropdown.Item>
                                <Dropdown.Item>$2,000,000</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </Card.Text>
                        </Col>
                      </Row>
                      <div className="d-flex justify-content-end mt-3">
                        <Button variant="primary" className="w-100 btn-home">
                          Search
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="buy">
                <div className="profile-content mt-5">
                  <Card className="mt-4">
                    <Card.Body>
                      <Row>
                        <Col md={4}>
                          <Card.Text>
                            <strong>Location</strong>
                            <Dropdown className="dropdown-menuu ">
                              <Dropdown.Toggle
                                variant="transparent"
                                id="location-dropdown"
                              >
                                Select Your State
                              </Dropdown.Toggle>
                              <Dropdown.Menu className="dropdown-menuu">
                                <Dropdown.Item>New York</Dropdown.Item>
                                <Dropdown.Item>Los Angeles</Dropdown.Item>
                                <Dropdown.Item>Chicago</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </Card.Text>
                        </Col>
                        <Col md={4}>
                          <Card.Text>
                            <strong>City</strong>
                            <Dropdown>
                              <Dropdown.Toggle
                                variant="transparent"
                                id="city-dropdown"
                              >
                                Select Your City
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                <Dropdown.Item>City 1</Dropdown.Item>
                                <Dropdown.Item>City 2</Dropdown.Item>
                                <Dropdown.Item>City 3</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </Card.Text>
                        </Col>
                        <Col md={4}>
                          <Card.Text>
                            <strong>Property Type</strong>
                            <Dropdown>
                              <Dropdown.Toggle
                                variant="transparent"
                                id="property-type-dropdown"
                              >
                                Choose Property Type
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                <Dropdown.Item>Type 1</Dropdown.Item>
                                <Dropdown.Item>Type 2</Dropdown.Item>
                                <Dropdown.Item>Type 3</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </Card.Text>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={4}>
                          <Card.Text>
                            <strong>Beds</strong>
                            <Dropdown>
                              <Dropdown.Toggle
                                variant="transparent"
                                id="beds-dropdown"
                              >
                                Choose Bed
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                <Dropdown.Item>1</Dropdown.Item>
                                <Dropdown.Item>2</Dropdown.Item>
                                <Dropdown.Item>3</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </Card.Text>
                        </Col>
                        <Col md={4}>
                          <Card.Text>
                            <strong>Min Price</strong>
                            <Dropdown>
                              <Dropdown.Toggle
                                variant="transparent"
                                id="min-price-dropdown"
                              >
                                Choose Min Price
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                <Dropdown.Item>$100,000</Dropdown.Item>
                                <Dropdown.Item>$200,000</Dropdown.Item>
                                <Dropdown.Item>$300,000</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </Card.Text>
                        </Col>
                        <Col md={4}>
                          <Card.Text>
                            <strong>Max Price:</strong>
                            <Dropdown>
                              <Dropdown.Toggle
                                variant="transparent"
                                id="max-price-dropdown"
                              >
                                Choose Max Price
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                <Dropdown.Item>$500,000</Dropdown.Item>
                                <Dropdown.Item>$1,000,000</Dropdown.Item>
                                <Dropdown.Item>$2,000,000</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </Card.Text>
                        </Col>
                      </Row>
                      <div className="d-flex justify-content-end mt-3">
                        <Button variant="primary" className="w-100 btn-home">
                          Search
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="sell">
                <div className="profile-content mt-5">
                  <Card className="mt-4">
                    <Card.Body>
                      <Row>
                        <Col md={4}>
                          <Card.Text>
                            <strong>Location</strong>
                            <Dropdown className="dropdown-menuu ">
                              <Dropdown.Toggle
                                variant="transparent"
                                id="location-dropdown"
                              >
                                Select Your State
                              </Dropdown.Toggle>
                              <Dropdown.Menu className="dropdown-menuu">
                                <Dropdown.Item>New York</Dropdown.Item>
                                <Dropdown.Item>Los Angeles</Dropdown.Item>
                                <Dropdown.Item>Chicago</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </Card.Text>
                        </Col>
                        <Col md={4}>
                          <Card.Text>
                            <strong>City</strong>
                            <Dropdown>
                              <Dropdown.Toggle
                                variant="transparent"
                                id="city-dropdown"
                              >
                                Select Your City
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                <Dropdown.Item>City 1</Dropdown.Item>
                                <Dropdown.Item>City 2</Dropdown.Item>
                                <Dropdown.Item>City 3</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </Card.Text>
                        </Col>
                        <Col md={4}>
                          <Card.Text>
                            <strong>Property Type</strong>
                            <Dropdown>
                              <Dropdown.Toggle
                                variant="transparent"
                                id="property-type-dropdown"
                              >
                                Choose Property Type
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                <Dropdown.Item>Type 1</Dropdown.Item>
                                <Dropdown.Item>Type 2</Dropdown.Item>
                                <Dropdown.Item>Type 3</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </Card.Text>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={4}>
                          <Card.Text>
                            <strong>Beds</strong>
                            <Dropdown>
                              <Dropdown.Toggle
                                variant="transparent"
                                id="beds-dropdown"
                              >
                                Choose Bed
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                <Dropdown.Item>1</Dropdown.Item>
                                <Dropdown.Item>2</Dropdown.Item>
                                <Dropdown.Item>3</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </Card.Text>
                        </Col>
                        <Col md={4}>
                          <Card.Text>
                            <strong>Min Price</strong>
                            <Dropdown>
                              <Dropdown.Toggle
                                variant="transparent"
                                id="min-price-dropdown"
                              >
                                Choose Min Price
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                <Dropdown.Item>$100,000</Dropdown.Item>
                                <Dropdown.Item>$200,000</Dropdown.Item>
                                <Dropdown.Item>$300,000</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </Card.Text>
                        </Col>
                        <Col md={4}>
                          <Card.Text>
                            <strong>Max Price:</strong>
                            <Dropdown>
                              <Dropdown.Toggle
                                variant="transparent"
                                id="max-price-dropdown"
                              >
                                Choose Max Price
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                <Dropdown.Item>$500,000</Dropdown.Item>
                                <Dropdown.Item>$1,000,000</Dropdown.Item>
                                <Dropdown.Item>$2,000,000</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </Card.Text>
                        </Col>
                      </Row>
                      <div className="d-flex justify-content-end mt-3">
                        <Button variant="primary" className="w-100 btn-home">
                          Search
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="short-let">
                <div className="profile-content mt-5">
                  <Card className="mt-4">
                    <Card.Body>
                      <Row>
                        <Col md={4}>
                          <Card.Text>
                            <strong>Location</strong>
                            <Dropdown className="dropdown-menuu ">
                              <Dropdown.Toggle
                                variant="transparent"
                                id="location-dropdown"
                              >
                                Select Your State
                              </Dropdown.Toggle>
                              <Dropdown.Menu className="dropdown-menuu">
                                <Dropdown.Item>New York</Dropdown.Item>
                                <Dropdown.Item>Los Angeles</Dropdown.Item>
                                <Dropdown.Item>Chicago</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </Card.Text>
                        </Col>
                        <Col md={4}>
                          <Card.Text>
                            <strong>City</strong>
                            <Dropdown>
                              <Dropdown.Toggle
                                variant="transparent"
                                id="city-dropdown"
                              >
                                Select Your City
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                <Dropdown.Item>City 1</Dropdown.Item>
                                <Dropdown.Item>City 2</Dropdown.Item>
                                <Dropdown.Item>City 3</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </Card.Text>
                        </Col>
                        <Col md={4}>
                          <Card.Text>
                            <strong>Property Type</strong>
                            <Dropdown>
                              <Dropdown.Toggle
                                variant="transparent"
                                id="property-type-dropdown"
                              >
                                Choose Property Type
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                <Dropdown.Item>Type 1</Dropdown.Item>
                                <Dropdown.Item>Type 2</Dropdown.Item>
                                <Dropdown.Item>Type 3</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </Card.Text>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={4}>
                          <Card.Text>
                            <strong>Beds</strong>
                            <Dropdown>
                              <Dropdown.Toggle
                                variant="transparent"
                                id="beds-dropdown"
                              >
                                Choose Bed
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                <Dropdown.Item>1</Dropdown.Item>
                                <Dropdown.Item>2</Dropdown.Item>
                                <Dropdown.Item>3</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </Card.Text>
                        </Col>
                        <Col md={4}>
                          <Card.Text>
                            <strong>Min Price</strong>
                            <Dropdown>
                              <Dropdown.Toggle
                                variant="transparent"
                                id="min-price-dropdown"
                              >
                                Choose Min Price
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                <Dropdown.Item>$100,000</Dropdown.Item>
                                <Dropdown.Item>$200,000</Dropdown.Item>
                                <Dropdown.Item>$300,000</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </Card.Text>
                        </Col>
                        <Col md={4}>
                          <Card.Text>
                            <strong>Max Price:</strong>
                            <Dropdown>
                              <Dropdown.Toggle
                                variant="transparent"
                                id="max-price-dropdown"
                              >
                                Choose Max Price
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                <Dropdown.Item>$500,000</Dropdown.Item>
                                <Dropdown.Item>$1,000,000</Dropdown.Item>
                                <Dropdown.Item>$2,000,000</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </Card.Text>
                        </Col>
                      </Row>
                      <div className="d-flex justify-content-end mt-3">
                        <Button variant="primary" className="w-100 btn-home">
                          Search
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="land">
                <div className="profile-content mt-5">
                  <Card className="mt-4">
                    <Card.Body>
                      <Row>
                        <Col md={4}>
                          <Card.Text>
                            <strong>Location</strong>
                            <Dropdown className="dropdown-menuu ">
                              <Dropdown.Toggle
                                variant="transparent"
                                id="location-dropdown"
                              >
                                Select Your State
                              </Dropdown.Toggle>
                              <Dropdown.Menu className="dropdown-menuu">
                                <Dropdown.Item>New York</Dropdown.Item>
                                <Dropdown.Item>Los Angeles</Dropdown.Item>
                                <Dropdown.Item>Chicago</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </Card.Text>
                        </Col>
                        <Col md={4}>
                          <Card.Text>
                            <strong>City</strong>
                            <Dropdown>
                              <Dropdown.Toggle
                                variant="transparent"
                                id="city-dropdown"
                              >
                                Select Your City
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                <Dropdown.Item>City 1</Dropdown.Item>
                                <Dropdown.Item>City 2</Dropdown.Item>
                                <Dropdown.Item>City 3</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </Card.Text>
                        </Col>
                        <Col md={4}>
                          <Card.Text>
                            <strong>Property Type</strong>
                            <Dropdown>
                              <Dropdown.Toggle
                                variant="transparent"
                                id="property-type-dropdown"
                              >
                                Choose Property Type
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                <Dropdown.Item>Type 1</Dropdown.Item>
                                <Dropdown.Item>Type 2</Dropdown.Item>
                                <Dropdown.Item>Type 3</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </Card.Text>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={4}>
                          <Card.Text>
                            <strong>Beds</strong>
                            <Dropdown>
                              <Dropdown.Toggle
                                variant="transparent"
                                id="beds-dropdown"
                              >
                                Choose Bed
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                <Dropdown.Item>1</Dropdown.Item>
                                <Dropdown.Item>2</Dropdown.Item>
                                <Dropdown.Item>3</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </Card.Text>
                        </Col>
                        <Col md={4}>
                          <Card.Text>
                            <strong>Min Price</strong>
                            <Dropdown>
                              <Dropdown.Toggle
                                variant="transparent"
                                id="min-price-dropdown"
                              >
                                Choose Min Price
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                <Dropdown.Item>$100,000</Dropdown.Item>
                                <Dropdown.Item>$200,000</Dropdown.Item>
                                <Dropdown.Item>$300,000</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </Card.Text>
                        </Col>
                        <Col md={4}>
                          <Card.Text>
                            <strong>Max Price:</strong>
                            <Dropdown>
                              <Dropdown.Toggle
                                variant="transparent"
                                id="max-price-dropdown"
                              >
                                Choose Max Price
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                <Dropdown.Item>$500,000</Dropdown.Item>
                                <Dropdown.Item>$1,000,000</Dropdown.Item>
                                <Dropdown.Item>$2,000,000</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </Card.Text>
                        </Col>
                      </Row>
                      <div className="d-flex justify-content-end mt-3">
                        <Button variant="primary" className="w-100 btn-home">
                          Search
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="auction">
                <div className="profile-content mt-5">
                  <Card className="mt-4">
                    <Card.Body>
                      <Row>
                        <Col md={4}>
                          <Card.Text>
                            <strong>Location</strong>
                            <Dropdown className="dropdown-menuu ">
                              <Dropdown.Toggle
                                variant="transparent"
                                id="location-dropdown"
                              >
                                Select Your State
                              </Dropdown.Toggle>
                              <Dropdown.Menu className="dropdown-menuu">
                                <Dropdown.Item>New York</Dropdown.Item>
                                <Dropdown.Item>Los Angeles</Dropdown.Item>
                                <Dropdown.Item>Chicago</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </Card.Text>
                        </Col>
                        <Col md={4}>
                          <Card.Text>
                            <strong>City</strong>
                            <Dropdown>
                              <Dropdown.Toggle
                                variant="transparent"
                                id="city-dropdown"
                              >
                                Select Your City
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                <Dropdown.Item>City 1</Dropdown.Item>
                                <Dropdown.Item>City 2</Dropdown.Item>
                                <Dropdown.Item>City 3</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </Card.Text>
                        </Col>
                        <Col md={4}>
                          <Card.Text>
                            <strong>Property Type</strong>
                            <Dropdown>
                              <Dropdown.Toggle
                                variant="transparent"
                                id="property-type-dropdown"
                              >
                                Choose Property Type
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                <Dropdown.Item>Type 1</Dropdown.Item>
                                <Dropdown.Item>Type 2</Dropdown.Item>
                                <Dropdown.Item>Type 3</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </Card.Text>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={4}>
                          <Card.Text>
                            <strong>Beds</strong>
                            <Dropdown>
                              <Dropdown.Toggle
                                variant="transparent"
                                id="beds-dropdown"
                              >
                                Choose Bed
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                <Dropdown.Item>1</Dropdown.Item>
                                <Dropdown.Item>2</Dropdown.Item>
                                <Dropdown.Item>3</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </Card.Text>
                        </Col>
                        <Col md={4}>
                          <Card.Text>
                            <strong>Min Price</strong>
                            <Dropdown>
                              <Dropdown.Toggle
                                variant="transparent"
                                id="min-price-dropdown"
                              >
                                Choose Min Price
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                <Dropdown.Item>$100,000</Dropdown.Item>
                                <Dropdown.Item>$200,000</Dropdown.Item>
                                <Dropdown.Item>$300,000</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </Card.Text>
                        </Col>
                        <Col md={4}>
                          <Card.Text>
                            <strong>Max Price:</strong>
                            <Dropdown>
                              <Dropdown.Toggle
                                variant="transparent"
                                id="max-price-dropdown"
                              >
                                Choose Max Price
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                <Dropdown.Item>$500,000</Dropdown.Item>
                                <Dropdown.Item>$1,000,000</Dropdown.Item>
                                <Dropdown.Item>$2,000,000</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </Card.Text>
                        </Col>
                      </Row>
                      <div className="d-flex justify-content-end mt-3">
                        <Button variant="primary" className="w-100 btn-home">
                          Search
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Col>
      </Row>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <input type="range" min="0" max="1300000" style={{ width: "50%" }} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "50%",
            marginTop: "10px",
          }}
        >
          <span>₦0</span>
          <span>₦1,300,000</span>
        </div>
      </div>
    </Container>
  );
}

export default PropertyTab;