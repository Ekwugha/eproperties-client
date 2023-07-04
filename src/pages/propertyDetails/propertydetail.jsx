import React, { useRef } from "react";
import { Button, Card, Carousel, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Contact from "../../components/contact/contact";
import SaleProperty from "../../components/saleProperty/saleProperty";
import "./propertydetail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const PropertyDetail = () => {
  const carouselRef = useRef(null);

  const handleNext = () => {
    carouselRef.current.next();
  };

  const handlePrev = () => {
    carouselRef.current.prev();
  };

  return (
    <div>
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
                Property Details
              </span>
            </Col>
          </Row>
        </Container>
      </div>

      {/* <div className="position-relative">
        <img
          src="/images/banner.jpg"
          alt="LandingImage"
          className="landing-image img-fluid mt-5 img-height"
        />
        <span className="mx-5 text-center home-link">
          <Link to="/" className="nounderline text-secondary">
            Home
          </Link>
          <FontAwesomeIcon className="mx-3" icon={faArrowRight} size="sm" />
          Property Details
        </span>
      </div> */}
      <div className="mt-5">
        <Container>
          <h1 className="propertydetail-h1">
            Premium penthouse in central Lekki with panoramic views
          </h1>
          <Row>
            <Col md={7} lg={8} className="mb-5 img-fluid">
              <img
                src="/images/propertydetail.png"
                alt="Property-img"
                className="property-image img-fluid mt5"
              />
              <Carousel ref={carouselRef} slide controls={false} pause={true}>
                <Carousel.Item>
                  <div className="d-flex align-items-center justify-content-center">
                    <div
                      className="carousel-arrow mx-2 carousel-arrow-prev"
                      onClick={handlePrev}
                    >
                      &#8249;
                    </div>
                    <Row>
                      <Col>
                        <img
                          src="/images/residence1.png"
                          alt="Property-img"
                          className="img-slide img-fluid mx-auto"
                        />
                      </Col>
                      <Col>
                        <img
                          src="/images/residence1.png"
                          alt="Property-img"
                          className="img-slide img-fluid mx-auto"
                        />
                      </Col>
                      <Col>
                        <img
                          src="/images/residence1.png"
                          alt="Property-img"
                          className="img-slide img-fluid mx-auto"
                        />
                      </Col>
                    </Row>
                    <div
                      className="carousel-arrow mx-2 carousel-arrow-next"
                      onClick={handleNext}
                    >
                      &#8250;
                    </div>
                  </div>
                </Carousel.Item>

                <Carousel.Item>
                  <div className="d-flex align-items-center justify-content-center">
                    <div
                      className="carousel-arrow mx-2 carousel-arrow-prev"
                      onClick={handlePrev}
                    >
                      &#8249;
                    </div>
                    <Row>
                      <Col>
                        <img
                          src="/images/residence1.png"
                          alt="Property-img"
                          className="img-slide img-fluid mx-auto"
                        />
                      </Col>
                      <Col>
                        <img
                          src="/images/residence1.png"
                          alt="Property-img"
                          className="img-slide img-fluid mx-auto"
                        />
                      </Col>
                      <Col>
                        <img
                          src="/images/residence1.png"
                          alt="Property-img"
                          className="img-slide img-fluid mx-auto"
                        />
                      </Col>
                    </Row>
                    <div
                      className="carousel-arrow mx-2 carousel-arrow-next"
                      onClick={handleNext}
                    >
                      &#8250;
                    </div>
                  </div>
                </Carousel.Item>
              </Carousel>
              <div className="container text-center mxauto my-5 d-flex">
                <div className="desc mx-auto">
                  <img src="/images/flat.svg" alt="flat" /> a Flat
                </div>
                <div className="desc mx-auto">
                  {" "}
                  <img src="/images/dimension.svg" alt="" /> 224m2
                </div>
                <div className="desc mx-auto">
                  {" "}
                  <img src="/images/location.svg" alt="" /> Lekii, Lagos
                </div>
              </div>
              <div className="price d-flex align-item-center justify-content-center container">
                <p className="price-text">
                  Price: <br /> ₦ 1,300,000/ month
                </p>
                <Button className="callback">Request Callback</Button>
              </div>

              <div className="my-5 about-apartment container">
                <p>
                  FEDORS GROUP offers an exclusive FOR SALE elegant large 5-room
                  apartment on Vincent Hložník Street in the Condominium
                  Renaissance residential complex.
                </p>
                <p>
                  Thanks to its unique location, the property has access to a
                  large Japanese garden with an area of 35 m2, which can be
                  accessed directly from the bedroom. The front of the apartment
                  is at the height of the third floor, so the terrace is located
                  just above the treetops, which gives the apartment a unique
                  atmosphere. Overall, the apartment has a direct view of the
                  Danube River and the surrounding forests.
                </p>
                <p>
                  {" "}
                  The apartment offers extraordinary comfort, has a first-class
                  interior from the leading architectural office Cakov Makara
                  and equipment from renowned world furniture manufacturers. The
                  overall atmosphere of the apartment is completed
                </p>
              </div>

              <div className="my-5 container">
                <h3 className="headers">Basic characteristics:</h3>
                <ul className="about-apartment">
                  <li>
                    Number of rooms: <span>5</span>
                  </li>
                  <li>
                    Floor: <span>2nd floor of 5</span>
                  </li>
                  <li>
                    Apartment area: <span>223.92 m2</span>
                  </li>
                  <li>
                    Terrace area: <span>27.09 m2</span>
                  </li>
                  <li>
                    Balcony area: <span>6.63 m2</span>
                  </li>
                  <li>
                    Area of the Japanese garden: <span>35 m2</span>
                  </li>
                </ul>
                <h3 className="headers">Layout solution:</h3>
                <p className="about-apartment">
                  {" "}
                  Kitchen, living room, study, 4 bedrooms, 2 bathrooms,
                  wardrobe, fireplace. Two garage parking spaces in the
                  underground garage.
                </p>
                <p className="about-apartment">
                  The apartment is divided into day and night zone. The living
                  area consists of a large living room, which is connected to
                  the kitchen and dining room. In this part of the apartment
                  there is also a study, which is very subtly separated from the
                  living area by an elegant glass wall and wooden beams. From
                  the living area there is a smooth transition to the night
                  wing, where there are two rooms, a wardrobe, a shared bathroom
                  and a master bedroom with a separate bathroom.
                </p>

                <h3 className="headers">
                  Execution and furnishing of the apartment:
                </h3>
                <p className="about-apartment">
                  The apartment has intelligent control via a mobile
                  application. Premium natural materials - wood, stone tiles,
                  cast concrete - are found in many places in the living space.
                </p>
                <p className="about-apartment">
                  The kitchen of the LEICHT brand with SIEMENS appliances has
                  been made to measure, bathrooms and toilets are equipped with
                  sanitary ware from the manufacturers VILLEROY BOCH and
                  HANSGROHE. In the master bathroom you will find the design
                  edition of the AXOR MASSAUD brand, the master bedroom is
                  dominated by the RUF BETTEN bed. The living room is equipped
                  with ROLF BENZ brand products
                </p>

                <h3 className="headers">Location:</h3>
                <p className="about-apartment">
                  The property is located above Devínská cesta, there is an
                  excellent transport connection. The nearby housing estate
                  provides complete civic amenities, including shops, cafes,
                  restaurants, schools, kindergartens and many other benefits.{" "}
                </p>

                <h3 className="headers">Fedors group opinion:</h3>
                <p className="about-apartment">
                  This beautiful apartment offers an incredible atmosphere. The
                  above-standard area creates the impression of a family house,
                  which is further enhanced by the view of the Danube River and
                  the forests in its basin. The apartment is furnished extremely
                  tastefully and really timelessly. From our point of view, this
                  is one of the most beautiful apartments in the current offer -
                  it is guaranteed to provide its owners with a new and
                  luxurious standard of living.
                </p>
              </div>

              <div className="map text-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15852.849098571527!2d3.3489769!3d6.6205317500000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1687778992589!5m2!1sen!2sng"
                  width="80%"
                  height="375px"
                  className="map-iframe"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </Col>

            <Col md={5} lg={4}>
              <Contact />
              <div className="seller mb-3">
                <div className="d-flex align-items-start justify-content-center pt-3">
                  <img src="/images/profile1.png" alt="profile1" />
                </div>
                <div>
                  <h6 className="seller-name">Haylie Donin</h6>
                  <p className="text-center">
                    +34 555 781 731 haylie.donin@realestate.es
                  </p>
                </div>
                <div className="text-center">
                  <a href="#">view seller profile</a>
                </div>
              </div>

              <div className="seller p-3">
                <h3 className="headers">Basic characteristics:</h3>
                <p> City: Lekki Lagos.</p>
                <p>Street: Vincent ala Carne.</p>
                <p> Garages: 2 cars </p>
                <p>Type: 5 rooms</p>
                <p>Number of rooms: 5 </p>
                <p>Usable area: 224 m2</p>
                <p>Total area: 307 m2 </p>
                <p> Insulated object: Yes</p>
                <p>Balcony: Yes </p>
                <p>Terrace: Yes </p>
                <p>Number of bathrooms: 1</p>
              </div>

              <SaleProperty />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default PropertyDetail;
