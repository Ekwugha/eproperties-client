import React from "react";
import { Card, Col, Container, Row, Carousel } from "react-bootstrap";
import "./client.css";

const Client = () => {
  return (
    <Container>
      <h1 className="text-center my-5 client-header">
        Our Clients Speak <br />
        <span className="client-header-p">
          We have been working with clients around the world
        </span>
      </h1>
      <Carousel slide controls={true} pause={true}>
        <Carousel.Item>
          <Row>
            <Col lg={4}>
              <div className="d-flex justify-content-center align-items-center ">
                <Card
                  style={{ width: "350px", height: "192px" }}
                  className="client-card"
                >
                  <Card.Body>
                    <img src="/images/quote.png" alt="quote" />
                    <Card.Title className="client-title">
                      Professional Partner
                    </Card.Title>
                    <Card.Text className="client-p">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Numquam mollitia officia quam nostrum libero voluptas
                      earum commodi fuga.
                    </Card.Text>
                    <div className="arrow-down"></div>
                  </Card.Body>
                  <img src="/images/vector.png" alt="vector" />
                </Card>
              </div>
              <div className="img-profile d-flex justify-content-center align-items-center mt-3">
                <img src="/images/profile1.png" alt="profile1" />
              </div>
              <p className="client-name">
                Lorri Warf <br />{" "}
                <span className="client-job">UX Designer</span>
              </p>
            </Col>

            <Col lg={4}>
              <div className="d-flex justify-content-center align-items-center ">
                <Card
                  style={{ width: "350px", height: "192px" }}
                  className="client-card"
                >
                  <Card.Body>
                    <img src="/images/quote.png" alt="quote" />
                    <Card.Title className="client-title">
                      Incredible Experience
                    </Card.Title>
                    <Card.Text className="client-p">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Numquam mollitia officia quam nostrum libero voluptas
                      earum commodi fuga.
                    </Card.Text>
                    <div className="arrow-down"></div>
                  </Card.Body>
                  <img src="/images/vector.png" alt="vector" />
                </Card>
              </div>
              <div className="img-profile d-flex justify-content-center mt-3">
                <img src="/images/profile2.png" alt="profile1" />
              </div>
              <p className="client-name">
                David Elson <br /> <span className="client-job">Developer</span>
              </p>
            </Col>

            <Col lg={4}>
              <div className="d-flex justify-content-center align-items-center ">
                <Card
                  style={{ width: "350px", height: "192px" }}
                  className="client-card"
                >
                  <Card.Body>
                    <img src="/images/quote.png" alt="quote" />
                    <Card.Title className="client-title">
                      Dependable & Responsive
                    </Card.Title>
                    <Card.Text className="client-p">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Numquam mollitia officia quam nostrum libero voluptas
                      earum commodi fuga.
                    </Card.Text>
                    <div className="arrow-down"></div>
                  </Card.Body>
                  <img src="/images/vector.png" alt="vector" />
                </Card>
              </div>
              <div className="img-profile d-flex justify-content-center mt-3">
                <img src="/images/profile3.png" alt="profile1" />
              </div>
              <p className="client-name">
                Ricky Smith <br /> <span className="client-job">Developer</span>
              </p>
            </Col>
          </Row>
        </Carousel.Item>

        <Carousel.Item>
          <Row>
            <Col lg={4}>
              <div className="d-flex justify-content-center align-items-center ">
                <Card
                  style={{ width: "350px", height: "192px" }}
                  className="client-card"
                >
                  <Card.Body>
                    <img src="/images/quote.png" alt="quote" />
                    <Card.Title className="client-title">
                      Professional Partner
                    </Card.Title>
                    <Card.Text className="client-p">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Numquam mollitia officia quam nostrum libero voluptas
                      earum commodi fuga.
                    </Card.Text>
                    <div className="arrow-down"></div>
                  </Card.Body>
                  <img src="/images/vector.png" alt="vector" />
                </Card>
              </div>
              <div className="img-profile d-flex justify-content-center mt-3">
                <img
                  src="https://elorestaurantapp.netlify.app/assest/pic-1.jpg"
                  alt="profile1"
                  className="img-slide2"
                />
              </div>
              <p className="client-name">
                Adam Smirt <br /> <span className="client-job">Designer</span>
              </p>
            </Col>

            <Col lg={4}>
              <div className="d-flex justify-content-center align-items-center ">
                <Card
                  style={{ width: "350px", height: "192px" }}
                  className="client-card"
                >
                  <Card.Body>
                    <img src="/images/quote.png" alt="quote" />
                    <Card.Title className="client-title">
                      Incredible Experience
                    </Card.Title>
                    <Card.Text className="client-p">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Numquam mollitia officia quam nostrum libero voluptas
                      earum commodi fuga.
                    </Card.Text>
                    <div className="arrow-down"></div>
                  </Card.Body>
                  <img src="/images/vector.png" alt="vector" />
                </Card>
              </div>
              <div className="img-profile d-flex justify-content-center mt-3">
                <img
                  src="https://elorestaurantapp.netlify.app/assest/pic-2.jpg"
                  alt="profile1"
                  className="img-slide2"
                />
              </div>
              <p className="client-name">
                John Doe <br /> <span className="client-job">Data Anaylst</span>
              </p>
            </Col>

            <Col lg={4}>
              <div className="d-flex justify-content-center align-items-center ">
                <Card
                  style={{ width: "350px", height: "192px" }}
                  className="client-card"
                >
                  <Card.Body>
                    <img src="/images/quote.png" alt="quote" />
                    <Card.Title className="client-title">
                      Dependable & Responsive
                    </Card.Title>
                    <Card.Text className="client-p">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Numquam mollitia officia quam nostrum libero voluptas
                      earum commodi fuga.
                    </Card.Text>
                    <div className="arrow-down"></div>
                  </Card.Body>
                  <img src="/images/vector.png" alt="vector" />
                </Card>
              </div>
              <div className="img-profile d-flex justify-content-center mt-3">
                <img
                  src="https://elorestaurantapp.netlify.app/assest/pic-3.jpg"
                  alt="profile1"
                  className="img-slide2"
                />
              </div>
              <p className="client-name">
                Micky Micheals <br />{" "}
                <span className="client-job">Mobile Dev</span>
              </p>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
      <style jsx>{`
        /* Custom styles for controls */
        .client-testimonials .carousel-control-prev,
        .client-testimonials .carousel-control-next {
          color: blue;
          margin-top: 20px;
        }
      `}</style>
    </Container>
  );
};

export default Client;
