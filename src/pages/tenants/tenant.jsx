import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./tenant.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import CustomNavbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";

const Tenants = () => {
  return (
    <div>
      <CustomNavbar />
      {/* HEADER */}
      <div
        className="img position-relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.7)) ,url('/images/banner.jpg')`,
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Container>
          <Row className="vheight">
            <Col>
              <span className="text-center homelink position-absolute top-50 start-50 translate-middle text-light">
                <Link to="/" className="nounderline text-light">
                  Home
                </Link>
                <FontAwesomeIcon
                  className="mx-3"
                  icon={faArrowRight}
                  size="sm"
                />
                Tenants
              </span>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <div className="tenant-h3 my-5">
          Finding the right tenant is much more than being on Rightmove
          <br />
          <span className="tenant-p">
            We carry out thorough tenant reference checks, confirm the tenants
            Right to Rent as well as secure a guarantor where necessary.
          </span>
          <div className="text-center">
            {" "}
            {/* Add text-center class */}
            <Button className="tenant-btn1 mx-auto text-light">
              Book a rental valuation
            </Button>
            <Button className="available-property-btn">
              Request a property
            </Button>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Tenants;
