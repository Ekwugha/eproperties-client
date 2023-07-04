import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./about.css";

const About = () => {
  return (
    <Container>
      <Row>
        <Col md={8}>
          <img src="/images/about.png" alt="about-us" className="img-fluid" />
        </Col>
        <Col md={4}>
          <p className="about-title">About us</p>
          <p className="about-p">
            We are a company that connects the world of real estate and finance.
            We provide a complete service for the sale, purchase or rental of
            real estate. Our advantage is more than 15 years of experience and
            soil in attractive locations in Slovakia with branches in Bratislava
            and Košice.
          </p>
          <p className="about-p">
            We have a connection to all banks on the Slovak market, so we can
            solve everything under one roof. By constantly innovating our
            business activities, we move forward and we are able to offer truly
            above-standard services that set us apart from the competition.
          </p>
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <p className="countries-p">
        We are available in many <br />
        <span>well-known countries</span>
      </p>
      <Row>
        <Col
          sm={12}
          md={6}
          lg={3}
          className="my-3 d-flex justify-content-center align-items-center img-fluid position-relative"
        >
          <img src="/images/america.png" alt="america" />
          <span className="image-text">America</span>
        </Col>
        <Col
          sm={12}
          md={6}
          lg={3}
          className="my-3 d-flex justify-content-center align-items-center img-fluid position-relative"
        >
          <img src="/images/spain.png" alt="spain" />
          <span className="image-text">Spain</span>
        </Col>
        <Col
          sm={12}
          md={6}
          lg={3}
          className="my-3 d-flex justify-content-center align-items-center img-fluid position-relative"
        >
          <img src="/images/london.png" alt="london" />
          <span className="image-text">London</span>
        </Col>
        <Col
          sm={12}
          md={6}
          lg={3}
          className="my-3 d-flex justify-content-center align-items-center img-fluid position-relative"
        >
          <img src="/images/france.png" alt="france" />
          <span className="image-text">France</span>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
