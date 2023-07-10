import React, { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Pagination from "react-js-pagination";
import "./properties.css";

const Properties = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleClick = () => {
    navigate("/propertycat");
  };

  const items = [
    {
      image: "/images/warehouse.jpg",
      title: "Warehouse",
      count: 0,
    },
    {
      image: "/images/village-home.jpg",
      title: "Village Home",
      count: 0,
    },
    {
      image: "/images/office-complex.jpg",
      title: "Office Space",
      count: 0,
    },

    {
      image: "/images/town-house.jpg",
      title: "House For Rent",
      count: 5,
    },
    {
      image: "/images/school.webp",
      title: "School",
      count: 2,
    },
    {
      image: "/images/petrol.jpg",
      title: "Petrol Station",
      count: 2,
    },
    {
      image: "/images/village-home.jpg",
      title: "Village Home",
      count: 2,
    },
    {
      image: "/images/mansion-house.jpg",
      title: "Mansion House",
      count: 2,
    },
    {
      image: "/images/hotel-properties.jpg",
      title: "Hotel Properties",
      count: 2,
    },
    {
      image: "/images/guest-house.jpg",
      title: "Guest House",
      count: 2,
    },
    {
      image: "/images/hostel.jpg",
      title: "Hostel ",
      count: 3,
    },
    {
      image: "/images/furnished-duplex.jpg",
      title: "Furnished Duplex Apartment",
      count: 2,
    },
    {
      image: "/images/furnished-apartment.jpg",
      title: "Furnished Apartment",
      count: 2,
    },
    {
      image: "/images/farm-land.jpg",
      title: "Farm Land",
      count: 2,
    },
    {
      image: "/images/church.jpg",
      title: "Church",
      count: 2,
    },
    {
      image: "/images/duplex-swimmingpool.jpg",
      title: "Duplex With Swimming Pool",
      count: 2,
    },
  ];

  const itemsPerPage = 8; // Number of items to display per page
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // const propertyCategory = () => {
  //   window.location("/")
  // }


  return (
    <div className="offer my-5">
      <Container>
        <div className="text-center">
          <h1 className="properties-h1">How Essential can help you</h1>
          <span className="properties-span">
            We offer a comprehensive service with thousands of local property
            experts.
          </span>
        </div>
        <div className="my-5">
          <Row>
            {currentItems.map((item, index) => (
              <Col
                key={index}
                md={6}
                lg={3}
                className="mb-5 img-fluid"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  handleClick();
                  scrollToTop();
                }}
              >
                <Card className="mbr">
                  <Card.Img
                    variant="top"
                    src={item.image}
                    style={{ height: "10.7em" }}
                  />
                  <Card.Body>
                    <Card.Text className="text-center">{item.title}</Card.Text>
                    <Card.Text className="text-center">
                      Count: {item.count}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
        <div className="text-center d-flex justify-content-center mxauto mt-0 mb-5">
          <Pagination
            activePage={currentPage}
            itemsCountPerPage={itemsPerPage}
            totalItemsCount={items.length}
            pageRangeDisplayed={5}
            onChange={handlePageChange}
            itemClass="page-item"
            linkClass="page-link"
            prevPageText="Prev"
            nextPageText="Next"
            firstPageText="First"
            lastPageText="Last"
          />
        </div>
      </Container>
    </div>
  );
};

export default Properties;
