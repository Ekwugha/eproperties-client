import React, { useEffect, useState } from "react";
import axios from "axios";
// import Offer from "../Offer";
import Offer from "./offer/offer";
import { Row } from "react-bootstrap";

const PropertyList = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8800/properties/propertyInformation"
      );
      const { properties } = response.data;
      setProperties(properties);
    } catch (error) {
      console.error("Error fetching property information:", error);
    }
  };

  return (
      <div className="container-fluid">
          <Row>
              
      {properties.map((property) => (
        <Offer key={property.id} property={property} properties={properties} />
      ))}
          </Row>
    </div>
  );
};

export default PropertyList;
