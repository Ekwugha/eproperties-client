import React from "react";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./estateAgent.css";

const EstateAgent = () => {
  const navigate = useNavigate();

  const saleClick = () => {
    navigate("/sale")
  }

   const rentClick = () => {
     navigate("/rent");
  };
  
   const letClick = () => {
     navigate("/short-let");
  };
  
  const agent = () => {
    navigate("/agent")
  }

  return (
    <div className="top">
      <Container className="my-5">
        <h3 className="estate-header">Estate Agents in Nigeria</h3>
        
        <Row className="justify-content-center">
          <Col className="mb-4">
            <Card>
              <div className="bgdanger d-flex flex-md-row flex-column">
                <div className="img-background">
                  <img
                    src="/images/estate-img.png"
                    className="img-fluid"
                    alt="estate-pic"
                  />
                </div>
                <Card.Body>
                  <h3
                    className="estate-name"
                    onClick={agent}
                    style={{ cursor: "pointer" }}
                  >
                    Rosemond Hills Limited
                  </h3>
                  <p className="estate-p">
                    <img
                      src="/images/location.svg"
                      alt="location"
                      style={{ width: "14px", height: "22px" }}
                    />
                    C193 Ikota Shopping Complex VGC Lekki Lago
                    <br />
                    <span className="estate-p">Registered on Nov 24, 2015</span>
                  </p>
                  <div>
                    <span className="contact-info">
                      <FontAwesomeIcon icon={faPhone} className="blue-icon" />
                      <span>08090876670</span>
                    </span>
                    <span className="contact-info">
                      <FontAwesomeIcon
                        icon={faWhatsapp}
                        className="green-icon"
                      />
                      <span>08090876670</span>
                    </span>
                  </div>
                  <div className="d-flex mt-5">
                    <Button className="mx-1" onClick={saleClick}>
                      For Sales
                    </Button>
                    <Button className="mx-1" onClick={rentClick}>
                      For Rent
                    </Button>
                    <Button className="mx-1" onClick={letClick}>
                      For Short LET
                    </Button>
                  </div>
                </Card.Body>
              </div>
            </Card>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col className="mb-4">
            <Card>
              <div className="bgdanger d-flex flex-md-row flex-column">
                <div className="img-background">
                  <img
                    src="/images/realestate1.png"
                    className="img-fluid"
                    alt="estate-pic"
                  />
                </div>
                <Card.Body>
                  <h3
                    className="estate-name"
                    onClick={agent}
                    style={{ cursor: "pointer" }}
                  >
                    Rosemond Hills Limited
                  </h3>
                  <p className="estate-p">
                    <img
                      src="/images/location.svg"
                      alt="location"
                      style={{ width: "14px", height: "22px" }}
                    />
                    C193 Ikota Shopping Complex VGC Lekki Lago
                    <br />
                    <span className="estate-p">Registered on Nov 24, 2015</span>
                  </p>
                  <div>
                    <span className="contact-info">
                      <FontAwesomeIcon icon={faPhone} className="blue-icon" />
                      <span>08090876670</span>
                    </span>
                    <span className="contact-info">
                      <FontAwesomeIcon
                        icon={faWhatsapp}
                        className="green-icon"
                      />
                      <span>08090876670</span>
                    </span>
                  </div>
                  <div className="d-flex mt-5">
                    <Button className="mx-1" onClick={saleClick}>
                      For Sales
                    </Button>
                    <Button className="mx-1" onClick={rentClick}>
                      For Rent
                    </Button>
                    <Button className="mx-1" onClick={letClick}>
                      For Short LET
                    </Button>
                  </div>
                </Card.Body>
              </div>
            </Card>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col className="mb-4">
            <Card>
              <div className="bgdanger d-flex flex-md-row flex-column">
                <div className="img-background">
                  <img
                    src="/images/estate-img.png"
                    className="img-fluid"
                    alt="estate-pic"
                  />
                </div>
                <Card.Body>
                  <h3
                    className="estate-name"
                    onClick={agent}
                    style={{ cursor: "pointer" }}
                  >
                    Rosemond Hills Limited
                  </h3>
                  <p className="estate-p">
                    <img
                      src="/images/location.svg"
                      alt="location"
                      style={{ width: "14px", height: "22px" }}
                    />
                    C193 Ikota Shopping Complex VGC Lekki Lago
                    <br />
                    <span className="estate-p">Registered on Nov 24, 2015</span>
                  </p>
                  <div>
                    <span className="contact-info">
                      <FontAwesomeIcon icon={faPhone} className="blue-icon" />
                      <span>08090876670</span>
                    </span>
                    <span className="contact-info">
                      <FontAwesomeIcon
                        icon={faWhatsapp}
                        className="green-icon"
                      />
                      <span>08090876670</span>
                    </span>
                  </div>
                  <div className="d-flex mt-5">
                    <Button className="mx-1" onClick={saleClick}>
                      For Sales
                    </Button>
                    <Button className="mx-1" onClick={rentClick}>
                      For Rent
                    </Button>
                    <Button className="mx-1" onClick={letClick}>
                      For Short LET
                    </Button>
                  </div>
                </Card.Body>
              </div>
            </Card>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col className="mb-4">
            <Card>
              <div className="bgdanger d-flex flex-md-row flex-column">
                <div className="img-background">
                  <img
                    src="/images/realestate1.png"
                    className="img-fluid"
                    alt="estate-pic"
                  />
                </div>
                <Card.Body>
                  <h3
                    className="estate-name"
                    onClick={agent}
                    style={{ cursor: "pointer" }}
                  >
                    Rosemond Hills Limited
                  </h3>
                  <p className="estate-p">
                    <img
                      src="/images/location.svg"
                      alt="location"
                      style={{ width: "14px", height: "22px" }}
                    />
                    C193 Ikota Shopping Complex VGC Lekki Lago
                    <br />
                    <span className="estate-p">Registered on Nov 24, 2015</span>
                  </p>
                  <div>
                    <span className="contact-info">
                      <FontAwesomeIcon icon={faPhone} className="blue-icon" />
                      <span>08090876670</span>
                    </span>
                    <span className="contact-info">
                      <FontAwesomeIcon
                        icon={faWhatsapp}
                        className="green-icon"
                      />
                      <span>08090876670</span>
                    </span>
                  </div>
                  <div className="d-flex mt-5">
                    <Button className="mx-1" onClick={saleClick}>
                      For Sales
                    </Button>
                    <Button className="mx-1" onClick={rentClick}>
                      For Rent
                    </Button>
                    <Button className="mx-1" onClick={letClick}>
                      For Short LET
                    </Button>
                  </div>
                </Card.Body>
              </div>
            </Card>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col className="mb-4">
            <Card>
              <div className="bgdanger d-flex flex-md-row flex-column">
                <div className="img-background">
                  <img
                    src="/images/estate-img.png"
                    className="img-fluid"
                    alt="estate-pic"
                  />
                </div>
                <Card.Body>
                  <h3
                    className="estate-name"
                    onClick={agent}
                    style={{ cursor: "pointer" }}
                  >
                    Rosemond Hills Limited
                  </h3>
                  <p className="estate-p">
                    <img
                      src="/images/location.svg"
                      alt="location"
                      style={{ width: "14px", height: "22px" }}
                    />
                    C193 Ikota Shopping Complex VGC Lekki Lago
                    <br />
                    <span className="estate-p">Registered on Nov 24, 2015</span>
                  </p>
                  <div>
                    <span className="contact-info">
                      <FontAwesomeIcon icon={faPhone} className="blue-icon" />
                      <span>08090876670</span>
                    </span>
                    <span className="contact-info">
                      <FontAwesomeIcon
                        icon={faWhatsapp}
                        className="green-icon"
                      />
                      <span>08090876670</span>
                    </span>
                  </div>
                  <div className="d-flex mt-5">
                    <Button className="mx-1" onClick={saleClick}>
                      For Sales
                    </Button>
                    <Button className="mx-1" onClick={rentClick}>
                      For Rent
                    </Button>
                    <Button className="mx-1" onClick={letClick}>
                      For Short LET
                    </Button>
                  </div>
                </Card.Body>
              </div>
            </Card>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col className="mb-4">
            <Card>
              <div className="bgdanger d-flex flex-md-row flex-column">
                <div className="img-background">
                  <img
                    src="/images/realestate1.png"
                    className="img-fluid"
                    alt="estate-pic"
                  />
                </div>
                <Card.Body>
                  <h3
                    className="estate-name"
                    onClick={agent}
                    style={{ cursor: "pointer" }}
                  >
                    Rosemond Hills Limited
                  </h3>
                  <p className="estate-p">
                    <img
                      src="/images/location.svg"
                      alt="location"
                      style={{ width: "14px", height: "22px" }}
                    />
                    C193 Ikota Shopping Complex VGC Lekki Lago
                    <br />
                    <span className="estate-p">Registered on Nov 24, 2015</span>
                  </p>
                  <div>
                    <span className="contact-info">
                      <FontAwesomeIcon icon={faPhone} className="blue-icon" />
                      <span>08090876670</span>
                    </span>
                    <span className="contact-info">
                      <FontAwesomeIcon
                        icon={faWhatsapp}
                        className="green-icon"
                      />
                      <span>08090876670</span>
                    </span>
                  </div>
                  <div className="d-flex mt-5">
                    <Button className="mx-1" onClick={saleClick}>
                      For Sales
                    </Button>
                    <Button className="mx-1" onClick={rentClick}>
                      For Rent
                    </Button>
                    <Button className="mx-1" onClick={letClick}>
                      For Short LET
                    </Button>
                  </div>
                </Card.Body>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EstateAgent;
