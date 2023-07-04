import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "../../pages/home/home.css";
import Rating from "react-rating-stars-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Offer = () => {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  const handleClick = () => {
    navigate("/propertydetails");
  };
  return (
    <div className="offer mt5">
      <div className="p-5 a">
        {/* cards */}
        <div className="container-fluid">
          <Row>
            <Col
              sm={12}
              md={6}
              lg={4}
              xl={3}
              className="my-3 d-flex justify-content-center align-items-center"
            >
              <Card style={{ width: "17.8rem" }}>
                <Card.Img
                  variant="top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7pGErlppAE20tj8KnzQnMFkd3w4gNq-zqUQ&usqp=CAU"
                  style={{ height: "15rem" }}
                />
                <Card.Body>
                  <Card.Title>
                    Large 4-room apartment with a beautiful terrace
                  </Card.Title>
                  <Card.Text style={{ marginBottom: "0.1rem" }}>
                    <div className="card-text-row">
                      <div>Listed: 28 Dec 2022</div>
                      <div className="area">Visit: 1</div>
                    </div>
                  </Card.Text>
                  <div className="card-text-row">
                    <Card.Text
                      style={{ fontSize: "15px", marginBottom: "0.1rem" }}
                    >
                      <span className="card-text-item">
                        <img src="/images/check.svg" alt="checkmark" />
                        28,oluwaseun
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
                        02834778533
                      </span>
                    </Card.Text>
                  </div>
                  <div className="card-text-row">
                    <Card.Text
                      style={{ fontSize: "15px", marginBottom: "0.1rem" }}
                    >
                      <p className="card-text-item">
                        <img src="/images/check.svg" alt="checkmark" />
                        Identification
                      </p>
                    </Card.Text>
                    <Card.Text
                      style={{ fontSize: "15px", marginBottom: "0.1rem" }}
                    >
                      <p className="card-text-item">
                        <img src="/images/check.svg" alt="checkmark" />
                        Business Regis...
                      </p>
                    </Card.Text>
                  </div>
                  <div className="card-text-row">
                    <Card.Text
                      style={{ fontSize: "15px", marginBottom: "0.1rem" }}
                    >
                      <p className="card-text-item">
                        <img src="/images/check.svg" alt="checkmark" />
                        Bank Details
                      </p>
                    </Card.Text>
                    <Card.Text
                      style={{ fontSize: "15px", marginBottom: "0.1rem" }}
                    >
                      <p className="card-text-item">
                        <img src="/images/check.svg" alt="checkmark" />
                        Well Recognized
                      </p>
                    </Card.Text>
                  </div>
                  <div className="card-text-row">
                    <Card.Text
                      style={{ fontSize: "15px", marginBottom: "0.1rem" }}
                    >
                      <span>₦ 1,300,000</span>
                    </Card.Text>
                    <Card.Text
                      style={{ fontSize: "15px", marginBottom: "0.1rem" }}
                      className="mx-4"
                    >
                      <span className="area">Ibeju Lekki</span>
                    </Card.Text>
                  </div>

                  <div className="d-flex align-items-center justify-content-between">
                    <Rating
                      count={5}
                      onChange={ratingChanged}
                      size={24}
                      activeColor="#ffd700"
                    />
                    <div>
                      <Button
                        variant="danger"
                        style={{ borderRadius: "30px", background: "#F00" }}
                        className="verified"
                      >
                        Not Verified
                      </Button>
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
                    <div>
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
                        onClick={() => {
                          handleClick();
                          scrollToTop();
                        }}
                      >
                        Details
                      </Button>
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
            <Col
              sm={12}
              md={6}
              lg={4}
              xl={3}
              className="my-3 d-flex justify-content-center align-items-center"
            >
              <Card style={{ width: "17.8rem" }}>
                <Card.Img
                  variant="top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7pGErlppAE20tj8KnzQnMFkd3w4gNq-zqUQ&usqp=CAU"
                  style={{ height: "15rem" }}
                />
                <Card.Body>
                  <Card.Title>
                    Large 4-room apartment with a beautiful terrace
                  </Card.Title>
                  <Card.Text style={{ marginBottom: "0.1rem" }}>
                    <div className="card-text-row">
                      <div>Listed: 28 Dec 2022</div>
                      <div className="area">Visit: 1</div>
                    </div>
                  </Card.Text>
                  <div className="card-text-row">
                    <Card.Text
                      style={{ fontSize: "15px", marginBottom: "0.1rem" }}
                    >
                      <span className="card-text-item">
                        <img src="/images/check.svg" alt="checkmark" />
                        28,oluwaseun
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
                        02834778533
                      </span>
                    </Card.Text>
                  </div>
                  <div className="card-text-row">
                    <Card.Text
                      style={{ fontSize: "15px", marginBottom: "0.1rem" }}
                    >
                      <p className="card-text-item">
                        <img src="/images/check.svg" alt="checkmark" />
                        Identification
                      </p>
                    </Card.Text>
                    <Card.Text
                      style={{ fontSize: "15px", marginBottom: "0.1rem" }}
                    >
                      <p className="card-text-item">
                        <img src="/images/check.svg" alt="checkmark" />
                        Business Regis...
                      </p>
                    </Card.Text>
                  </div>
                  <div className="card-text-row">
                    <Card.Text
                      style={{ fontSize: "15px", marginBottom: "0.1rem" }}
                    >
                      <p className="card-text-item">
                        <img src="/images/check.svg" alt="checkmark" />
                        Bank Details
                      </p>
                    </Card.Text>
                    <Card.Text
                      style={{ fontSize: "15px", marginBottom: "0.1rem" }}
                    >
                      <p className="card-text-item">
                        <img src="/images/check.svg" alt="checkmark" />
                        Well Recognized
                      </p>
                    </Card.Text>
                  </div>
                  <div className="card-text-row">
                    <Card.Text
                      style={{ fontSize: "15px", marginBottom: "0.1rem" }}
                    >
                      <span>₦ 1,300,000</span>
                    </Card.Text>
                    <Card.Text
                      style={{ fontSize: "15px", marginBottom: "0.1rem" }}
                      className="mx-4"
                    >
                      <span className="area">Ibeju Lekki</span>
                    </Card.Text>
                  </div>

                  <div className="d-flex align-items-center justify-content-between">
                    <Rating
                      count={5}
                      onChange={ratingChanged}
                      size={24}
                      activeColor="#ffd700"
                    />
                    <div>
                      <Button
                        variant="danger"
                        style={{ borderRadius: "30px", background: "#F00" }}
                        className="verified"
                      >
                        Not Verified
                      </Button>
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
                    <div>
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
                        onClick={() => {
                          handleClick();
                          scrollToTop();
                        }}
                      >
                        Details
                      </Button>
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
            <Col
              sm={12}
              md={6}
              lg={4}
              xl={3}
              className="my-3 d-flex justify-content-center align-items-center"
            >
              <Card style={{ width: "17.8rem" }}>
                <Card.Img
                  variant="top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7pGErlppAE20tj8KnzQnMFkd3w4gNq-zqUQ&usqp=CAU"
                  style={{ height: "15rem" }}
                />
                <Card.Body>
                  <Card.Title>
                    Large 4-room apartment with a beautiful terrace
                  </Card.Title>
                  <Card.Text style={{ marginBottom: "0.1rem" }}>
                    <div className="card-text-row">
                      <div>Listed: 28 Dec 2022</div>
                      <div className="area">Visit: 1</div>
                    </div>
                  </Card.Text>
                  <div className="card-text-row">
                    <Card.Text
                      style={{ fontSize: "15px", marginBottom: "0.1rem" }}
                    >
                      <span className="card-text-item">
                        <img src="/images/check.svg" alt="checkmark" />
                        28,oluwaseun
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
                        02834778533
                      </span>
                    </Card.Text>
                  </div>
                  <div className="card-text-row">
                    <Card.Text
                      style={{ fontSize: "15px", marginBottom: "0.1rem" }}
                    >
                      <p className="card-text-item">
                        <img src="/images/check.svg" alt="checkmark" />
                        Identification
                      </p>
                    </Card.Text>
                    <Card.Text
                      style={{ fontSize: "15px", marginBottom: "0.1rem" }}
                    >
                      <p className="card-text-item">
                        <img src="/images/check.svg" alt="checkmark" />
                        Business Regis...
                      </p>
                    </Card.Text>
                  </div>
                  <div className="card-text-row">
                    <Card.Text
                      style={{ fontSize: "15px", marginBottom: "0.1rem" }}
                    >
                      <p className="card-text-item">
                        <img src="/images/check.svg" alt="checkmark" />
                        Bank Details
                      </p>
                    </Card.Text>
                    <Card.Text
                      style={{ fontSize: "15px", marginBottom: "0.1rem" }}
                    >
                      <p className="card-text-item">
                        <img src="/images/check.svg" alt="checkmark" />
                        Well Recognized
                      </p>
                    </Card.Text>
                  </div>
                  <div className="card-text-row">
                    <Card.Text
                      style={{ fontSize: "15px", marginBottom: "0.1rem" }}
                    >
                      <span>₦ 1,300,000</span>
                    </Card.Text>
                    <Card.Text
                      style={{ fontSize: "15px", marginBottom: "0.1rem" }}
                      className="mx-4"
                    >
                      <span className="area">Ibeju Lekki</span>
                    </Card.Text>
                  </div>

                  <div className="d-flex align-items-center justify-content-between">
                    <Rating
                      count={5}
                      onChange={ratingChanged}
                      size={24}
                      activeColor="#ffd700"
                    />
                    <div>
                      <Button
                        variant="danger"
                        style={{ borderRadius: "30px", background: "#F00" }}
                        className="verified"
                      >
                        Not Verified
                      </Button>
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
                    <div>
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
                        onClick={() => {
                          handleClick();
                          scrollToTop();
                        }}
                      >
                        Details
                      </Button>
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
            <Col
              sm={12}
              md={6}
              lg={4}
              xl={3}
              className="my-3 d-flex justify-content-center align-items-center"
            >
              <Card style={{ width: "17.8rem" }}>
                <Card.Img
                  variant="top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7pGErlppAE20tj8KnzQnMFkd3w4gNq-zqUQ&usqp=CAU"
                  style={{ height: "15rem" }}
                />
                <Card.Body>
                  <Card.Title>
                    Large 4-room apartment with a beautiful terrace
                  </Card.Title>
                  <Card.Text style={{ marginBottom: "0.1rem" }}>
                    <div className="card-text-row">
                      <div>Listed: 28 Dec 2022</div>
                      <div className="area">Visit: 1</div>
                    </div>
                  </Card.Text>
                  <div className="card-text-row">
                    <Card.Text
                      style={{ fontSize: "15px", marginBottom: "0.1rem" }}
                    >
                      <span className="card-text-item">
                        <img src="/images/check.svg" alt="checkmark" />
                        28,oluwaseun
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
                        02834778533
                      </span>
                    </Card.Text>
                  </div>
                  <div className="card-text-row">
                    <Card.Text
                      style={{ fontSize: "15px", marginBottom: "0.1rem" }}
                    >
                      <p className="card-text-item">
                        <img src="/images/check.svg" alt="checkmark" />
                        Identification
                      </p>
                    </Card.Text>
                    <Card.Text
                      style={{ fontSize: "15px", marginBottom: "0.1rem" }}
                    >
                      <p className="card-text-item">
                        <img src="/images/check.svg" alt="checkmark" />
                        Business Regis...
                      </p>
                    </Card.Text>
                  </div>
                  <div className="card-text-row">
                    <Card.Text
                      style={{ fontSize: "15px", marginBottom: "0.1rem" }}
                    >
                      <p className="card-text-item">
                        <img src="/images/check.svg" alt="checkmark" />
                        Bank Details
                      </p>
                    </Card.Text>
                    <Card.Text
                      style={{ fontSize: "15px", marginBottom: "0.1rem" }}
                    >
                      <p className="card-text-item">
                        <img src="/images/check.svg" alt="checkmark" />
                        Well Recognized
                      </p>
                    </Card.Text>
                  </div>
                  <div className="card-text-row">
                    <Card.Text
                      style={{ fontSize: "15px", marginBottom: "0.1rem" }}
                    >
                      <span>₦ 1,300,000</span>
                    </Card.Text>
                    <Card.Text
                      style={{ fontSize: "15px", marginBottom: "0.1rem" }}
                      className="mx-4"
                    >
                      <span className="area">Ibeju Lekki</span>
                    </Card.Text>
                  </div>

                  <div className="d-flex align-items-center justify-content-between">
                    <Rating
                      count={5}
                      onChange={ratingChanged}
                      size={24}
                      activeColor="#ffd700"
                    />
                    <div>
                      <Button
                        variant="danger"
                        style={{ borderRadius: "30px", background: "#F00" }}
                        className="verified"
                      >
                        Not Verified
                      </Button>
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
                    <div>
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
                        onClick={() => {
                          handleClick();
                          scrollToTop();
                        }}
                      >
                        Details
                      </Button>
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
            <Col
              sm={12}
              md={6}
              lg={4}
              xl={3}
              className="my-3 d-flex justify-content-center align-items-center"
            >
              <Card style={{ width: "17.8rem" }}>
                <Card.Img
                  variant="top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7pGErlppAE20tj8KnzQnMFkd3w4gNq-zqUQ&usqp=CAU"
                  style={{ height: "15rem" }}
                />
                <Card.Body>
                  <Card.Title>
                    Large 4-room apartment with a beautiful terrace
                  </Card.Title>
                  <Card.Text style={{ marginBottom: "0.1rem" }}>
                    <div className="card-text-row">
                      <div>Listed: 28 Dec 2022</div>
                      <div className="area">Visit: 1</div>
                    </div>
                  </Card.Text>
                  <div className="card-text-row">
                    <Card.Text
                      style={{ fontSize: "15px", marginBottom: "0.1rem" }}
                    >
                      <span className="card-text-item">
                        <img src="/images/check.svg" alt="checkmark" />
                        28,oluwaseun
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
                        02834778533
                      </span>
                    </Card.Text>
                  </div>
                  <div className="card-text-row">
                    <Card.Text
                      style={{ fontSize: "15px", marginBottom: "0.1rem" }}
                    >
                      <p className="card-text-item">
                        <img src="/images/check.svg" alt="checkmark" />
                        Identification
                      </p>
                    </Card.Text>
                    <Card.Text
                      style={{ fontSize: "15px", marginBottom: "0.1rem" }}
                    >
                      <p className="card-text-item">
                        <img src="/images/check.svg" alt="checkmark" />
                        Business Regis...
                      </p>
                    </Card.Text>
                  </div>
                  <div className="card-text-row">
                    <Card.Text
                      style={{ fontSize: "15px", marginBottom: "0.1rem" }}
                    >
                      <p className="card-text-item">
                        <img src="/images/check.svg" alt="checkmark" />
                        Bank Details
                      </p>
                    </Card.Text>
                    <Card.Text
                      style={{ fontSize: "15px", marginBottom: "0.1rem" }}
                    >
                      <p className="card-text-item">
                        <img src="/images/check.svg" alt="checkmark" />
                        Well Recognized
                      </p>
                    </Card.Text>
                  </div>
                  <div className="card-text-row">
                    <Card.Text
                      style={{ fontSize: "15px", marginBottom: "0.1rem" }}
                    >
                      <span>₦ 1,300,000</span>
                    </Card.Text>
                    <Card.Text
                      style={{ fontSize: "15px", marginBottom: "0.1rem" }}
                      className="mx-4"
                    >
                      <span className="area">Ibeju Lekki</span>
                    </Card.Text>
                  </div>

                  <div className="d-flex align-items-center justify-content-between">
                    <Rating
                      count={5}
                      onChange={ratingChanged}
                      size={24}
                      activeColor="#ffd700"
                    />
                    <div>
                      <Button
                        variant="danger"
                        style={{ borderRadius: "30px", background: "#F00" }}
                        className="verified"
                      >
                        Not Verified
                      </Button>
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
                    <div>
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
                        onClick={() => {
                          handleClick();
                          scrollToTop();
                        }}
                      >
                        Details
                      </Button>
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
            <Col
              sm={12}
              md={6}
              lg={4}
              xl={3}
              className="my-3 d-flex justify-content-center align-items-center"
            >
              <Card style={{ width: "17.8rem" }}>
                <Card.Img
                  variant="top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7pGErlppAE20tj8KnzQnMFkd3w4gNq-zqUQ&usqp=CAU"
                  style={{ height: "15rem" }}
                />
                <Card.Body>
                  <Card.Title>
                    Large 4-room apartment with a beautiful terrace
                  </Card.Title>
                  <Card.Text style={{ marginBottom: "0.1rem" }}>
                    <div className="card-text-row">
                      <div>Listed: 28 Dec 2022</div>
                      <div className="area">Visit: 1</div>
                    </div>
                  </Card.Text>
                  <div className="card-text-row">
                    <Card.Text
                      style={{ fontSize: "15px", marginBottom: "0.1rem" }}
                    >
                      <span className="card-text-item">
                        <img src="/images/check.svg" alt="checkmark" />
                        28,oluwaseun
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
                        02834778533
                      </span>
                    </Card.Text>
                  </div>
                  <div className="card-text-row">
                    <Card.Text
                      style={{ fontSize: "15px", marginBottom: "0.1rem" }}
                    >
                      <p className="card-text-item">
                        <img src="/images/check.svg" alt="checkmark" />
                        Identification
                      </p>
                    </Card.Text>
                    <Card.Text
                      style={{ fontSize: "15px", marginBottom: "0.1rem" }}
                    >
                      <p className="card-text-item">
                        <img src="/images/check.svg" alt="checkmark" />
                        Business Regis...
                      </p>
                    </Card.Text>
                  </div>
                  <div className="card-text-row">
                    <Card.Text
                      style={{ fontSize: "15px", marginBottom: "0.1rem" }}
                    >
                      <p className="card-text-item">
                        <img src="/images/check.svg" alt="checkmark" />
                        Bank Details
                      </p>
                    </Card.Text>
                    <Card.Text
                      style={{ fontSize: "15px", marginBottom: "0.1rem" }}
                    >
                      <p className="card-text-item">
                        <img src="/images/check.svg" alt="checkmark" />
                        Well Recognized
                      </p>
                    </Card.Text>
                  </div>
                  <div className="card-text-row">
                    <Card.Text
                      style={{ fontSize: "15px", marginBottom: "0.1rem" }}
                    >
                      <span>₦ 1,300,000</span>
                    </Card.Text>
                    <Card.Text
                      style={{ fontSize: "15px", marginBottom: "0.1rem" }}
                      className="mx-4"
                    >
                      <span className="area">Ibeju Lekki</span>
                    </Card.Text>
                  </div>

                  <div className="d-flex align-items-center justify-content-between">
                    <Rating
                      count={5}
                      onChange={ratingChanged}
                      size={24}
                      activeColor="#ffd700"
                    />
                    <div>
                      <Button
                        variant="danger"
                        style={{ borderRadius: "30px", background: "#F00" }}
                        className="verified"
                      >
                        Not Verified
                      </Button>
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
                    <div>
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
                        onClick={() => {
                          handleClick();
                          scrollToTop();
                        }}
                      >
                        Details
                      </Button>
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
            <Col
              sm={12}
              md={6}
              lg={4}
              xl={3}
              className="my-3 d-flex justify-content-center align-items-center"
            >
              <Card style={{ width: "17.8rem" }}>
                <Card.Img
                  variant="top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7pGErlppAE20tj8KnzQnMFkd3w4gNq-zqUQ&usqp=CAU"
                  style={{ height: "15rem" }}
                />
                <Card.Body>
                  <Card.Title>
                    Large 4-room apartment with a beautiful terrace
                  </Card.Title>
                  <Card.Text style={{ marginBottom: "0.1rem" }}>
                    <div className="card-text-row">
                      <div>Listed: 28 Dec 2022</div>
                      <div className="area">Visit: 1</div>
                    </div>
                  </Card.Text>
                  <div className="card-text-row">
                    <Card.Text
                      style={{ fontSize: "15px", marginBottom: "0.1rem" }}
                    >
                      <span className="card-text-item">
                        <img src="/images/check.svg" alt="checkmark" />
                        28,oluwaseun
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
                        02834778533
                      </span>
                    </Card.Text>
                  </div>
                  <div className="card-text-row">
                    <Card.Text
                      style={{ fontSize: "15px", marginBottom: "0.1rem" }}
                    >
                      <p className="card-text-item">
                        <img src="/images/check.svg" alt="checkmark" />
                        Identification
                      </p>
                    </Card.Text>
                    <Card.Text
                      style={{ fontSize: "15px", marginBottom: "0.1rem" }}
                    >
                      <p className="card-text-item">
                        <img src="/images/check.svg" alt="checkmark" />
                        Business Regis...
                      </p>
                    </Card.Text>
                  </div>
                  <div className="card-text-row">
                    <Card.Text
                      style={{ fontSize: "15px", marginBottom: "0.1rem" }}
                    >
                      <p className="card-text-item">
                        <img src="/images/check.svg" alt="checkmark" />
                        Bank Details
                      </p>
                    </Card.Text>
                    <Card.Text
                      style={{ fontSize: "15px", marginBottom: "0.1rem" }}
                    >
                      <p className="card-text-item">
                        <img src="/images/check.svg" alt="checkmark" />
                        Well Recognized
                      </p>
                    </Card.Text>
                  </div>
                  <div className="card-text-row">
                    <Card.Text
                      style={{ fontSize: "15px", marginBottom: "0.1rem" }}
                    >
                      <span>₦ 1,300,000</span>
                    </Card.Text>
                    <Card.Text
                      style={{ fontSize: "15px", marginBottom: "0.1rem" }}
                      className="mx-4"
                    >
                      <span className="area">Ibeju Lekki</span>
                    </Card.Text>
                  </div>

                  <div className="d-flex align-items-center justify-content-between">
                    <Rating
                      count={5}
                      onChange={ratingChanged}
                      size={24}
                      activeColor="#ffd700"
                    />
                    <div>
                      <Button
                        variant="danger"
                        style={{ borderRadius: "30px", background: "#F00" }}
                        className="verified"
                      >
                        Not Verified
                      </Button>
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
                    <div>
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
                        onClick={() => {
                          handleClick();
                          scrollToTop();
                        }}
                      >
                        Details
                      </Button>
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
            <Col
              sm={12}
              md={6}
              lg={4}
              xl={3}
              className="my-3 d-flex justify-content-center align-items-center"
            >
              <Card style={{ width: "17.8rem" }}>
                <Card.Img
                  variant="top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7pGErlppAE20tj8KnzQnMFkd3w4gNq-zqUQ&usqp=CAU"
                  style={{ height: "15rem" }}
                />
                <Card.Body>
                  <Card.Title>
                    Large 4-room apartment with a beautiful terrace
                  </Card.Title>
                  <Card.Text style={{ marginBottom: "0.1rem" }}>
                    <div className="card-text-row">
                      <div>Listed: 28 Dec 2022</div>
                      <div className="area">Visit: 1</div>
                    </div>
                  </Card.Text>
                  <div className="card-text-row">
                    <Card.Text
                      style={{ fontSize: "15px", marginBottom: "0.1rem" }}
                    >
                      <span className="card-text-item">
                        <img src="/images/check.svg" alt="checkmark" />
                        28,oluwaseun
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
                        02834778533
                      </span>
                    </Card.Text>
                  </div>
                  <div className="card-text-row">
                    <Card.Text
                      style={{ fontSize: "15px", marginBottom: "0.1rem" }}
                    >
                      <p className="card-text-item">
                        <img src="/images/check.svg" alt="checkmark" />
                        Identification
                      </p>
                    </Card.Text>
                    <Card.Text
                      style={{ fontSize: "15px", marginBottom: "0.1rem" }}
                    >
                      <p className="card-text-item">
                        <img src="/images/check.svg" alt="checkmark" />
                        Business Regis...
                      </p>
                    </Card.Text>
                  </div>
                  <div className="card-text-row">
                    <Card.Text
                      style={{ fontSize: "15px", marginBottom: "0.1rem" }}
                    >
                      <p className="card-text-item">
                        <img src="/images/check.svg" alt="checkmark" />
                        Bank Details
                      </p>
                    </Card.Text>
                    <Card.Text
                      style={{ fontSize: "15px", marginBottom: "0.1rem" }}
                    >
                      <p className="card-text-item">
                        <img src="/images/check.svg" alt="checkmark" />
                        Well Recognized
                      </p>
                    </Card.Text>
                  </div>
                  <div className="card-text-row">
                    <Card.Text
                      style={{ fontSize: "15px", marginBottom: "0.1rem" }}
                    >
                      <span>₦ 1,300,000</span>
                    </Card.Text>
                    <Card.Text
                      style={{ fontSize: "15px", marginBottom: "0.1rem" }}
                      className="mx-4"
                    >
                      <span className="area">Ibeju Lekki</span>
                    </Card.Text>
                  </div>

                  <div className="d-flex align-items-center justify-content-between">
                    <Rating
                      count={5}
                      onChange={ratingChanged}
                      size={24}
                      activeColor="#ffd700"
                    />
                    <div>
                      <Button
                        variant="danger"
                        style={{ borderRadius: "30px", background: "#F00" }}
                        className="verified"
                      >
                        Not Verified
                      </Button>
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
                    <div>
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
                        onClick={() => {
                          handleClick();
                          scrollToTop();
                        }}
                      >
                        Details
                      </Button>
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
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Offer;
