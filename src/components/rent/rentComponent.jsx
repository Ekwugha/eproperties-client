import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Offer from "../offer/offer";
import PropertyTab from "../propertytab";
import SaleProperty from "../saleProperty/saleProperty";
import "./rentComponent.css";

const Rent = () => {
  return (
    <div>
      <div className="rent-tab">
        <Container className="tab-text mb-5">
          <p className="my-5">
            We have a total of 41,148 Houses For Sale in Nigeria as seen on 23
            Mar 2023. Every property posted on this site is verified by real
            estate agents . Refine your property search by price, number of beds
            and type of property. Content from Private Property Nigeria
          </p>
          <PropertyTab />
        </Container>
      </div>

      <div>
        <Container>
          <Row>
            <Col md={9}>
              <span className="available-room">Available Bedroom</span>
              <p className="room-list">
                1 Bedroom | 2 Bedroom | 3 Bedroom | 4 Bedroom | 5 Bedroom | 6
                Bedroom |
              </p>
              <sapn className="available-room">Available Listing</sapn>
              <p className="room-list">
                Commercial Property | Flats Apartments | Houses | Rooms | Short
                Stay | Auction | Land
              </p>
              <span className="available-room">
                Available Residential Properties
              </span>
              <p className="room-list">
                Bungalows | Duplexes | Terraces | Townhouses
              </p>
              <span className="available-room">Available Areas</span>
              <p className="room-list">
                Abeokuta Express | Abia | Abuja Phase 1 | Abuja Phase 2 | Abuja
                Phase 3 | Abuja Phase 4 | Agege | Ajah | Anambra Area | Apapa |
                Asaba | Badagry Express | Bauchi | Bayelsa Area | Benin | Benue
                Area | Borno Area | Calabar | Ebonyi Area | Ebute Metta | Ekiti
                Area | Enugu Area | Festac | Gbagada | Ibadan | Ikeja | Ikorodu
                Road | Ikoyi | Ilorin | Isolo | Kaduna Area | Kano Area | Kebbi
                Area | Ketu | Lafia | Lagos Extension | Lagos Island | Lekki |
                Lokoja | Mushin | Niger Area | Ogun Area | Ondo Area | Oshodi |
                Osun Area | Owerri | Plateau Area | Port Harcourt | Sokoto Area
                | Surulere | Taraba Area | Uyo | Victoria Island | Yaba | Yobe
                Area | Yola | Zamfara Area
              </p>
              <span className="available-room">Available States</span>
              <p className="room-list">
                Abia | Abuja | Adamawa | Akwa Ibom | Anambra | Bayelsa | Cross
                River | Delta | Ebonyi | Edo | Ekiti | Enugu | Imo | Kaduna |
                Kano | Kebbi | Kogi | Kwara | Lagos | Nassarawa | Niger | Ogun |
                Ondo | Osun | Oyo | Plateau | Rivers | Zamfara
              </p>
            </Col>
            <Col md={3}>
              <SaleProperty />
            </Col>
          </Row>
        </Container>
      </div>
      <Offer style={{ backgroundColor: "white" }} />
    </div>
  );
};

export default Rent;
