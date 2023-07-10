import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import Rating from "react-rating-stars-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, Link } from "react-router-dom";

const Offer = ({ property }) => {
  const navigate = useNavigate();
  const visitCount = localStorage.getItem("visitCount") || 0;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

const handlePropertyClick = () => {
  const visitCount = localStorage.getItem(property.id) || 0;
  localStorage.setItem(property.id, parseInt(visitCount) + 1);

  navigate(`/property/${property.id}`);
  scrollToTop();
};
  
  const getVisitCount = () => {
    const visitCount = localStorage.getItem(property.id) || 0;
    return parseInt(visitCount);
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <Col
      sm={12}
      md={6}
      lg={4}
      xl={3}
      className="my-3 d-flex justify-content-center align-items-center"
    >
      <Card style={{ width: "19rem" }}>
        <Card.Img
          variant="top"
          src={
            property.featuredImage
              ? `/uploads/${property.featuredImage}`
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7pGErlppAE20tj8KnzQnMFkd3w4gNq-zqUQ&usqp=CAU"
          }
          style={{ height: "15rem" }}
        />

        <Card.Body>
          <Card.Title>{property.propertyName || "Property Name"}</Card.Title>
          <Card.Text style={{ marginBottom: "0.1rem" }}>
            <div className="card-text-row">
              <div> Listed: {formatDate(property.listedDate) || "N/A"}</div>
              <div className="area">Visit: {getVisitCount()}</div>{" "}
            </div>
          </Card.Text>
          <div className="card-text-row">
            <Card.Text style={{ fontSize: "15px", marginBottom: "0.1rem" }}>
              <span className="card-text-item">
                <img src="/images/check.svg" alt="checkmark" />
                {property.address || "Address loca..."}
              </span>
            </Card.Text>
            <Card.Text
              style={{
                fontSize: "15px",
                marginRight: "1.5em",
                marginBottom: "0.1rem",
              }}
            >
              <span className="card-text-item">
                <img src="/images/check.svg" alt="checkmark" />
                {property.phoneNumbe || "Phone number"}
              </span>
            </Card.Text>
          </div>
          <div className="card-text-row">
            <Card.Text style={{ fontSize: "15px", marginBottom: "0.1rem" }}>
              <p className="card-text-item">
                <img src="/images/check.svg" alt="checkmark" />
                Identification
              </p>
            </Card.Text>
            <Card.Text style={{ fontSize: "15px", marginBottom: "0.1rem" }}>
              <p className="card-text-item">
                <img src="/images/check.svg" alt="checkmark" />
                {property.businessRegistration || "Property Registe..."}
              </p>
            </Card.Text>
          </div>
          <div className="card-text-row">
            <Card.Text style={{ fontSize: "15px", marginBottom: "0.1rem" }}>
              <p className="card-text-item">
                <img src="/images/check.svg" alt="checkmark" />
                {property.bankDetails || "Bank Details"}
              </p>
            </Card.Text>
            <Card.Text style={{ fontSize: "15px", marginBottom: "0.1rem" }}>
              <p className="card-text-item">
                <img src="/images/check.svg" alt="checkmark" />
                {property.recognition || "Well Recognized"}
              </p>
            </Card.Text>
          </div>
          <div className="card-text-row">
            <Card.Text style={{ fontSize: "15px", marginBottom: "0.1rem" }}>
              <p className="card-text-item">
                <img src="/images/check.svg" alt="checkmark" />
                {property.bankDetails || "C.OF.C"}
              </p>
            </Card.Text>
            <Card.Text style={{ fontSize: "15px", marginBottom: "0.1rem" }}>
              <p className="card-text-item">
                <img src="/images/check.svg" alt="checkmark" />
                {property.recognition || "Deed of Assign..."}
              </p>
            </Card.Text>
          </div>

          <div className="card-text-row">
            <Card.Text style={{ fontSize: "15px", marginBottom: "0.1rem" }}>
              <span>{`₦${property.propertyPrice}` || "₦ 1,300,000"}</span>
            </Card.Text>
            <Card.Text
              style={{ fontSize: "15px", marginBottom: "0.1rem" }}
              className="mx-4"
            >
              <span className="area">
                {property.city ? `${property.city}, ` : ""}
                {property.state || "Ibeju Lekki"}
              </span>
            </Card.Text>
          </div>

          <div className="d-flex align-items-center justify-content-between mb-3">
            <Rating
              count={5}
              onChange={ratingChanged}
              size={24}
              activeColor="#ffd700"
            />
            <div>
              <div
                variant="danger"
                style={{
                  borderRadius: "30px",
                  background: "#F00",
                  width: "10em",
                  height: "3em",
                  display: "flex",
                  alignItems: "center", // Center the text vertically
                  justifyContent: "center", // Center the text horizontally
                }}
                className="verified"
              >
                <p style={{ fontSize: "16px", margin: 0 }}>Not Verified</p>
              </div>
            </div>
          </div>

          <div className="d-flex align-items-center justify-content-between">
            <div>
              <Button
                variant="danger"
                style={{
                  borderRadius: "30px",
                  background: "green",
                  fontSize: "12px",
                  padding: "5px 15px",
                  border: "none",
                }}
                className="verified"
              >
                1.5&nbsp;
                <FontAwesomeIcon icon={faStar} />
                &nbsp;(6 reviews)
              </Button>
            </div>
            <div className="mx-1">
              <Link to={`/property/${property.id}`}>
                <Button
                  variant="danger"
                  style={{
                    borderRadius: "30px",
                    background: "blue",
                    fontSize: "12px",
                    padding: "5px 15px",
                    border: "none",
                  }}
                  className="verified"
                  onClick={handlePropertyClick}
                >
                  Details
                </Button>
              </Link>
            </div>
            <div>
              <Button
                variant="danger"
                style={{
                  borderRadius: "30px",
                  background: "orange",
                  fontSize: "12px",
                  padding: "5px 15px",
                  border: "none",
                }}
                className="verified"
              >
                Report
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Offer;
