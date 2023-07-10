import React from "react";
import "./agent.css";
import { Link } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faGlobe, faPhoneSquare } from "@fortawesome/free-solid-svg-icons";
import { faWhatsappSquare } from "@fortawesome/free-brands-svg-icons";
import Offer from "../../components/offer/offer";
import CustomNavbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";

const Agent = () => {
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
              <div className="text-center homelink position-absolute top-50 start-50 translate-middle text-light mt-5">
                <div className="property-name">Jaytee Properties</div>
                <p className="property-email">
                  Jaytee-properties.realtornigeria.com <br />
                  <span className="property-location">
                    C193 Ikota Shopping Complex VGC Lekki Lagos
                  </span>
                </p>
                <Button className="bg">Report Agent</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* <div className="position-relative">
        <img
          src="/images/banner.jpg"
          alt="LandingImage"
          className="landingimage img-fluid mt-5 img-height"
        />
        <div className="headerimg-text dflex">
          <img
            src="/images/img-agent.png"
            alt="brand-logo"
            className="brand-logo img-fluid"
          />
          <div></div>
          <div>
            <div className="property-name">Jaytee Properties</div>
            <p className="property-email">
              Jaytee-properties.realtornigeria.com <br />
              <span className="property-location">
                C193 Ikota Shopping Complex VGC Lekki Lagos
              </span>
            </p>
            <Button className="bg">Report Agent</Button>
          </div>
        </div>
      </div> */}

      {/* SOCIAL LINKS */}
      {/* <div className="my-5 d-flex justify-content-center flex-wrap">
        <span className="display-info">
          <FontAwesomeIcon
            icon={faPhoneSquare}
            className="orange-icon fa-2x me-3"
          />
          <a href="/#" className="agent-info">
            011000*** CALL AGENT
          </a>
        </span>
        <span className="display-info">
          <FontAwesomeIcon
            icon={faWhatsappSquare}
            className="green-icon fa-2x me-3"
          />
          <a href="/#" className="agent-info">
            234110*** WHATSAPP
          </a>
        </span>
        <span className="display-info">
          <FontAwesomeIcon icon={faGlobe} className="blue-icon fa-2x me-3" />
          <a href="/#" className="agent-info">
            test.propertyagentsng.com
          </a>
        </span>
      </div> */}
      <Container>
        <Row className="text-center mx-5 my-3">
          <Col sm={4} className="about-us-p">
            <FontAwesomeIcon
              icon={faPhoneSquare}
              className="orange-icon fa-2x me-3"
            />
            <a href="/#" className="agent-info">
              011000*** CALL AGENT
            </a>
          </Col>
          <Col sm={4} className="about-us-p">
            <FontAwesomeIcon
              icon={faWhatsappSquare}
              className="icon-green fa-2x me-3"
            />
            <a href="/#" className="agent-info">
              011000*** CALL AGENT
            </a>
          </Col>
          <Col sm={4} className="about-us-p">
            <FontAwesomeIcon icon={faGlobe} className="blue-icon fa-2x me-3" />
            <a href="/#" className="agent-info">
              test.propertyagentsng.com
            </a>
          </Col>
        </Row>
      </Container>

      {/* ABOUT AGENT */}
      <Container>
        <h3 className="about-agent-h3">About the Agent</h3>
        <p className="about-agent-p">
          Jaytee Properties and Investment Limited is one of the largest and
          most respected real estate companies in Nigeria. We are registered
          company, incorporated with cooperate affairs commission of federal
          republic of Nigeria to carry out the business of real estate.
        </p>
        <p className="about-agent-p">
          We aspire to provide the ultimate real estate experience for today’s
          modern consumer. We are not confined by traditional real estate
          boundaries when it comes to buying, selling, and renting or asset
          management, instead we are always finding new and innovative ways to
          satisfy our clients’ needs.
        </p>
        <h3 className="mt-5 about-agent-h3">
          Available Property By Jaytee Properties
        </h3>
      </Container>
      <Offer />

      {/* CONTACT AGENT */}
      <Container>
        <div className="my-5">
          <h3 className="about-agent-h3 ">Contact - Jaytee Properties</h3>
          <form
            name="contact"
            className=" border-0"
            data-netlify="true"
            id="my-form"
          >
            <Row>
              <Col md={4} className="form-group py-2">
                <input
                  type="name"
                  name="name"
                  className="form-control p"
                  placeholder="Enter your name"
                  required
                />
              </Col>
              <Col md={4} className="form-group py-2">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter your email"
                  required
                />
              </Col>
              <Col md={4} className="form-group py-2">
                <input
                  type="tel"
                  name="tel"
                  className="form-control"
                  placeholder="Enter your phone number"
                  required
                />
              </Col>
              <div className="form-group py-2">
                <textarea
                  type="message"
                  name="message"
                  id="message"
                  cols="120"
                  rows="5"
                  className="form-control"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>
            </Row>
            <div class="d-flex justify-content-end">
              <Button>Send Message</Button>
            </div>
          </form>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Agent;
