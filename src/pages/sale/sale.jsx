import React from "react";
import { Container } from "react-bootstrap";
import Rent from "../../components/rent/rentComponent";

const SalePage = () => {
  return (
    <div className="space-top">
      <Container>
        <div className="rent-div1">Find properties for Sell in Nigeria</div>
        <p className="header-p1 text-center">
          Choose from the most advantageous offers
        </p>
      </Container>
      {/* RENT COMPONENT */}
      <Rent />
    </div>
  );
};

export default SalePage;
