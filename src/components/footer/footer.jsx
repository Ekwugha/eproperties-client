import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./footer.css";

const Footer = () => {
  return (
    <div className="mb-5">
      <div className="background mt-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={6}>
              <div className="rec1"></div>
              <div className="rec2"></div>
            </Col>
            <Col md={6} className="m-auto">
              <h1 className="footer-h1">Don’t miss a thing!</h1>
              <span className="footer-subtext">
                Subscribe with Email and loads of interesting news will be sent
                to you on a daily basis.
              </span>
              <Form className="d-flex form-footer my-3">
                <Form.Control
                  type="email"
                  placeholder="Your email here"
                  className="email"
                />
                <Button className="footer-btn">Subscribe</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="base">
        <Row>
          <Col md={7} className="mb5">
            {/* <img src="/images/star-1.png" alt="Logo" className="logo-img" /> */}
            <img src="/images/logo (2).png" alt="Logo" className="logo-img" />

            <div className="mt-5">
              <p className="footer-p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </Col>
          <Col md={5}>
            <h3 className="footer-p2">Our Company</h3>
            <div className="d-flex justify-content-between company">
              <div className="v">
                <p>About Us</p>
              </div>
              <div className="right">
                <p>Agents</p>
              </div>
            </div>
            <div className="d-flex justify-content-between company">
              <div>
                <p>Blog</p>
              </div>
              <div className="right">
                <p>Media</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
