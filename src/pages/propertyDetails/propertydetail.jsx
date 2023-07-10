import React, { useEffect, useState, useRef, useContext } from "react";
import { Button, Card, Carousel, Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Contact from "../../components/contact/contact";
import SaleProperty from "../../components/saleProperty/saleProperty";
import "./propertydetail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import CustomNavbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { htmlToDOM, domToReact } from "html-react-parser";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

const PropertyDetail = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const { currentUser } = useContext(AuthContext);
  const parseHTML = (html) => {
    const dom = htmlToDOM(html);
    return domToReact(dom);
  }
  console.log(currentUser.image);
  const location = useLocation();
  console.log(location);
  console.log(id);

  useEffect(() => {
    // Fetch property details based on property ID
    fetch(`http://localhost:8800/properties/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProperty(data.property);
        console.log(id);
      })
      .catch((error) => {
        console.log("Error fetching property details:", error);
      });
    console.log(id);
  }, [id]);

  const carouselRef = useRef(null);

  const handleNext = () => {
    carouselRef.current.next();
  };

  const handlePrev = () => {
    carouselRef.current.prev();
  };

  if (!property) {
    return <div>Loading...</div>; // Display a loading indicator while fetching property details
  }

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
                Property Details
              </span>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Rest of the component code */}
      {/*  */}
      <div className="mt-5">
        <Container>
          <h1 className="propertydetail-h1">
            {property.propertyName || "Property Name"}
          </h1>
          <Row>
            <Col md={7} lg={8} className="mb-5 img-fluid">
              <img
                src={
                  `/uploads/${property.featuredImage}` ||
                  "/images/propertydetail.png"
                }
                alt="Property-img"
                className="property-image img-fluid mt5"
              />
              {/* <Carousel ref={carouselRef} slide controls={false} pause={true}>
                {property.images.map((image, index) => (
                  <Carousel.Item key={index}>
                    <div className="d-flex align-items-center justify-content-center">
                      <div
                        className="carousel-arrow mx-2 carousel-arrow-prev"
                        onClick={handlePrev}
                      >
                        &#8249;
                      </div>
                      <Row>
                        {image.map((subImage, subIndex) => (
                          <Col key={subIndex}>
                            <img
                              src={subImage}
                              alt={`Property-img-${subIndex}`}
                              className="img-slide img-fluid mx-auto"
                            />
                          </Col>
                        ))}
                      </Row>
                      <div
                        className="carousel-arrow mx-2 carousel-arrow-next"
                        onClick={handleNext}
                      >
                        &#8250;
                      </div>
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel> */}
              {property.images && property.images.length > 0 ? (
                <Carousel ref={carouselRef} slide controls={false} pause={true}>
                  {property.images.map((image, index) => (
                    <Carousel.Item key={index}>
                      <div className="d-flex align-items-center justify-content-center">
                        <div
                          className="carousel-arrow mx-2 carousel-arrow-prev"
                          onClick={handlePrev}
                        >
                          &#8249;
                        </div>
                        <Row>
                          {image.map((subImage, subIndex) => (
                            <Col key={subIndex}>
                              <img
                                src={subImage}
                                alt={`Property-img-${subIndex}`}
                                className="img-slide img-fluid mx-auto"
                              />
                            </Col>
                          ))}
                        </Row>
                        <div
                          className="carousel-arrow mx-2 carousel-arrow-next"
                          onClick={handleNext}
                        >
                          &#8250;
                        </div>
                      </div>
                    </Carousel.Item>
                  ))}
                </Carousel>
              ) : (
                <div>No carousel images available</div>
              )}

              {/* MINI INFO */}
              <div className="container text-center mxauto my-5 d-flex">
                <div className="desc mx-auto">
                  <img src="/images/flat.svg" alt="flat" />{" "}
                  {property.propertyType}
                </div>
                <div className="desc mx-auto">
                  {" "}
                  <img src="/images/dimension.svg" alt="" /> {property.area}
                </div>
                <div className="desc mx-auto">
                  {" "}
                  <img src="/images/location.svg" alt="" /> {property.city}
                </div>
              </div>
              <div className="price d-flex align-item-center justify-content-center container">
                <p className="price-text">
                  Price: <br /> ₦{property.propertyPrice || "No Price Listed"}
                </p>
                {/* <p className="price-text">
                  Price: <br /> ₦ {property.propertyPrice || "1,300,000"}/ year
                </p> */}
                <Button className="callback">Request Callback</Button>
              </div>

              {/* DETAILS */}
              {/* <div className="my-5 about-apartment container">
                <p>{property.propertyDesc}</p>
              </div> */}

              <div className="my-5 container">
                <h3 className="headers">Basic characteristics:</h3>
                {parseHTML(property.propertyDesc)}

                <h3 className="headers">Location:</h3>
                <p className="about-apartment">
                  This apartment is located at {property.street} in{" "}
                  {property.city}, {property.state}.
                </p>
              </div>

              {/* MAP */}
              <div className="map text-center">
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15852.849098571527!2d${property.longitude}!3d${property.latitude}!2m3!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1687778992589!5m2!1sen!2sng`}
                  width="80%"
                  height="375px"
                  className="map-iframe"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="map"
                ></iframe>
              </div>
              {/* SELLER */}
            </Col>
            <Col md={5} lg={4}>
              <Contact />
              <div className="seller mb-3">
                <div className="d-flex align-items-start justify-content-center pt-3">
                  <img src={property.seller.profilePicture} alt="profile1" />
                </div>
                <div>
                  <h6 className="seller-name">{property.seller.name}</h6>
                  <p className="text-center">
                    Name: {property.fullName} <br />{" "}
                    <span>Tel: {property.phoneNumber}</span> <br />{" "}
                    <span>Email: {property.email}</span>
                    <br /> <span>Acct number: {property.accountNumber}</span>
                  </p>
                </div>
                {/* <div className="text-center">
                  <a href="#">view seller profile</a>
                </div> */}
              </div>

              <div className="seller p-3">
                <h3 className="headers">Basic characteristics:</h3>
                <p> City: {property.city}</p>
                <p>Street: {property.street}</p>
                <p> Garages: {property.numOfCarsInGarage} cars</p>
                <p>Type: {property.propertyName}</p>
                <p>Number of rooms: {property.numOfBedroom}</p>
                <p>Usable area: {property.usableArea} m²</p>
                <p>Total area: {property.totalArea} m²</p>
                <p>
                  Insulated object: {property.insulatedObject ? "Yes" : "No"}
                </p>
                <p>Balcony: {property.balcony ? "Yes" : "No"}</p>
                <p>Terrace: {property.terrace ? "Yes" : "No"}</p>
                <p>Number of bathrooms: {property.numOfBathroom}</p>
              </div>

              <SaleProperty />
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default PropertyDetail;
