import React from "react";
import { Col, Container, Row } from "react-bootstrap";
// import { Link } from "react-router-dom";
import "./home.css";
import PropertyTab from "../../components/propertytab";
// import Offer from "../../components/offer/offer";
import About from "../../components/about/about";
import Client from "../../components/client/client";
import Properties from "../../components/properties/properties";
import CustomNavbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import PropertyList from "../../components/propertyList";

const Home = () => {
  return (
    <div className="textcenter py-5">
      <br />
      <br />
      <br />
      <CustomNavbar />
      {/* LANDINGPAGE SLIDER */}
      <Container data-aos="fade-up">
        <Row>
          <Col className="justify-content-center">
            <div>
              <Row className="box">
                <Col md={6} className="m-auto">
                  <h1 className="modern-living display-1">
                    Modern living
                    <span>
                      <br />
                      for everyone
                    </span>
                  </h1>
                  <h5 className="home-h5 mt-4">
                    We provide a complete service for the sale, purchase or
                    rental of real estate. We have been operating in Lekki and
                    Ikeja more than 15 years.{" "}
                  </h5>
                </Col>
                <Col md={6} className="mauto">
                  <div>
                    <img
                      src="/images/home1.png"
                      alt="home"
                      style={{ width: "90%", height: "auto" }}
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <PropertyTab />
      </Container>

      {/* OFFER HEADER */}
      <div className="offer offer-pad">
        <Container className="p5 a">
          <h1 className="display-5">Top Offers</h1>
          <Row>
            <Col className="d-flex justify-content-end">
              <p className="offer-p">
                Fulfill your career dreams, enjoy all the achievements of the
                city center and luxury housing to the fullest.
              </p>
            </Col>
            <Col className="d-flex justify-content-end">
              <button className="offer-btn">Show all offers</button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* OFFER COMPONENT */}
      {/* <Offer /> */}
      
      <PropertyList />

      {/* PROPERTIES COMPONENT */}
      <Properties />

      {/* ABOUT COMPONENT */}
      <About />

      {/* CLIENT COMPONENT */}
      <Client />
      <Footer />
    </div>
  );
};

export default Home;
