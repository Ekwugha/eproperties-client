import React from "react";
import { Container } from "react-bootstrap";
import Rent from "../../components/rent/rentComponent";
import CustomNavbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";

const RentPage = () => {
  return (
    <div className="space-top">
      <CustomNavbar />
      <Container>
        <div className="rent-div1">Find properties for Rent in Nigeria</div>
        <p className="header-p1 text-center">
          Choose from the most advantageous offers
        </p>
      </Container>
      {/* RENT COMPONENT */}
      <Rent />
      <Footer />
    </div>
  );
};

export default RentPage;
