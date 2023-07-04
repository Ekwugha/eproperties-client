import React from 'react'
import { Button } from 'react-bootstrap';
import './saleProperty.css'

const SaleProperty = () => {
  return (
    <div>
      <div className="property-sale">
        <div className="property-sale-p">
          Currently Available Property For Sale
        </div>
        {/* <div className="dflex ">
          <div className="property-type">
            Types <span className="type">1 bed 2 bed 3 bed 4 bed 5 bed </span>
          </div>
          <div className="property-type">
            Flats <span className="type"> 644 122 322 111 52 </span>
          </div>
          <div className="property-type">
            Houses <span className="type">122 203 311 400 101 </span>
          </div>
        </div> */}
        <div className="rows mx-2">
          Types <span className="type">1 bed 2 bed 3 bed 4 bed 5 bed </span>
        </div>
        <div className="rows mx-2 ">
          Flats <span className="type d-flex align-item-content justify-content-between"> 644 122 322 111 52 </span>
        </div>
        <div className="rows mx-2">
          Houses <span className="type">122 203 311 400 101 </span>
        </div>
      </div>

      <div className="available-property">
        <p className="available-property-p">
          Currently Available Property For Sale
        </p>
        <Button className="available-property-btn">Request a property</Button>
      </div>
    </div>
  );
}

export default SaleProperty