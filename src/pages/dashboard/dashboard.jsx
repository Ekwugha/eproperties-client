import React, { useContext, useState } from "react";
import { Col, Container, Row, Button, Nav, Tab } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./dashboard.css";
import CustomNavbar from "../../components/navbar/navbar";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { AuthContext } from "../../context/authContext";

const Dashboard = () => {

    // const [content, setContent] = useState("");
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser.image);



     const [buildingType, setBuildingType] = useState("");
     const [propertyName, setPropertyName] = useState("");
     const [rentOrSale, setRentOrSale] = useState("");
     const [numOfHall, setNumOfHall] = useState();
     const [numOfKitchen, setNumOfKitchen] = useState();
     const [numOfBedroom, setNumOfBedroom] = useState();
     const [numOfStore, setNumOfStore] = useState();
     const [numOfCarsOfGarage, setNumOfCarsOfGarage] = useState();
     const [numOfBeds, setNumOfBeds] = useState();
     const [numOfCushions, setNumOfCushions] = useState();
     const [numOfCupboards, setNumOfCupboards] = useState();
     const [numOfDining, setNumOfDining] = useState();
     const [numOfLivingRoom, setNumOfLivingRoom] = useState();
     const [numOfPalorReception, setNumOfPalorReception] = useState();
     const [numOfBathroom, setNumOfBathroom] = useState();
     const [street, setStreet] = useState("");
     const [condition, setCondition] = useState("");
     const [electricity, setElectricity] = useState(0);
     const [seller, setSeller] = useState("");
     const [city, setCity] = useState("");
     const [inspection, setInspection] = useState("");
     const [aunctionRegistered, setAunctionRegistered] = useState();
     const [state, setState] = useState("");
     const [propertyPrice, setPropertyPrice] = useState("");
     const [featuredImage, setFeaturedImage] = useState(null);
     const [carouselImages, setCarouselImages] = useState(null);
     const [facebookLink, setFacebookLink] = useState("");
     const [instagramLink, setInstagramLink] = useState("");
     const [twitterLink, setTwitterLink] = useState("");
     const [websiteLink, setWebsiteLink] = useState("");
     const [propertyDesc, setPropertyDesc] = useState("");
     const [fullName, setFullName] = useState("");
     const [phoneNumber, setPhoneNumber] = useState("");
     const [email, setEmail] = useState("");
     const [accountNumber, setAccountNumber] = useState("");


  

  const states = [
    "Abia",
    "Abuja",
    "Adamawa",
    "Akwa Ibom",
    "Anambra",
    "Bauchi",
    "Bayelsa",
    "Benue",
    "Borno",
    "Cross River",
    "Delta",
    "Ebonyi",
    "Edo",
    "Ekiti",
    "Enugu",
    "Gombe",
    "Imo",
    "Jigawa",
    "Kaduna",
    "Kano",
    "Katsina",
    "Kebbi",
    "Kogi",
    "Kwara",
    "Lagos",
    "Nasarawa",
    "Niger",
    "Ogun",
    "Ondo",
    "Osun",
    "Oyo",
    "Plateau",
    "Rivers",
    "Sokoto",
    "Taraba",
    "Yobe",
    "Zamfara",
  ];
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("buildingType", buildingType);
      formData.append("propertyName", propertyName);
      formData.append("rentOrSale", rentOrSale);
      formData.append("numOfHall", numOfHall);
      formData.append("numOfKitchen", numOfKitchen);
      formData.append("numOfBedroom", numOfBedroom);
      formData.append("numOfStore", numOfStore);
      formData.append("numOfCarsInGarage", numOfCarsOfGarage);
      formData.append("numOfBeds", numOfBeds);
      formData.append("numOfCushions", numOfCushions);
      formData.append("numOfCupboards", numOfCupboards);
      formData.append("numOfDining", numOfDining);
      formData.append("numOfLivingRoom", numOfLivingRoom);
      formData.append("numOfPalorReception", numOfPalorReception);
      formData.append("numOfBathroom", numOfBathroom);
      formData.append("street", street);
      formData.append("condition_", condition);
      formData.append("electricity", electricity);
      formData.append("seller", seller);
      formData.append("city", city);
      formData.append("inspection", inspection);
      formData.append("aunctionRegistered", aunctionRegistered);
      formData.append("state", state);
      formData.append("propertyPrice", propertyPrice);
      formData.append("featuredImage", featuredImage);
      formData.append("carouselImages", carouselImages);
      formData.append("facebookLink", facebookLink);
      formData.append("instagramLink", instagramLink);
      formData.append("twitterLink", twitterLink);
      formData.append("websiteLink", websiteLink);
      formData.append("propertyDesc", propertyDesc);
      formData.append("fullName", fullName);
      formData.append("phoneNumber", phoneNumber);
      formData.append("email", email);
      formData.append("accountNumber", accountNumber);

      await axios.post(
        "http://localhost:8800/dashboard/property-information",
        formData
      );

      toast.success("Property information saved successfully.");
    } catch (error) {
      console.error("Error saving property information:", error);
      toast.error("An error occurred while saving property information.");
    }
  };


    

  return (
    <div className="container-fluid profile-container dashboard-mt mb-5">
      <CustomNavbar />
      <Row>
        <Col>
          <h1>Dashboard</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Tab.Container defaultActiveKey="new-properties">
            <Nav variant="tabs" className="mb-4">
              <Nav.Item>
                <Nav.Link eventKey="new-properties">
                  Add New Properties
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="properties">Properties</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="new-properties">
                <div className="profile-content mt-5">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title font-bold">
                        Property Informations
                      </h4>
                      <form onSubmit={handleSubmit} className="mb-4">
                        {/* FIRST ROW */}
                        <Row>
                          <Col md={3} className="form-group pb-3">
                            <label className="font-weight-bold">
                              Building Type
                            </label>
                            <select
                              className="form-select form-select-sm"
                              aria-label=".form-select-sm example"
                              value={buildingType}
                              onChange={(e) => setBuildingType(e.target.value)}
                            >
                              <option selected>Please select Type</option>
                              <option value="Auditorium">Auditorium</option>
                              <option value="Church">Church</option>
                              <option value="Farm Land">Farm Land</option>
                              <option value="Car Park">Car Park</option>
                              <option value="Hotel Properties">
                                Hotel Properties
                              </option>
                              <option value="Petrol Station">
                                Petrol Station
                              </option>
                              <option value="Office Complex">
                                Office Complex
                              </option>
                              <option value="Guest House Land">
                                Guest House Land
                              </option>
                              <option value="Hostel">Hostel</option>
                              <option value="Village Home">Village Home</option>
                              <option value="Town House">Town House</option>
                              <option value="Mansion House">
                                Mansion House
                              </option>
                              <option value="Furnished Duplex Apartment">
                                Furnished Duplex Apartment
                              </option>
                              <option value="14">
                                Duplex With Swimming Pool
                              </option>
                              <option value="Furnished Apartment">
                                Furnished Apartment
                              </option>
                              <option value="Warehouse">Warehouse</option>
                            </select>
                          </Col>
                          <Col md={3} className="form-group pb-3">
                            <label className="font-weight-bold">
                              Property Name
                            </label>
                            <input
                              type="text"
                              name="propertyName"
                              className="form-control"
                              placeholder="example: 4 bedroom flat"
                              value={propertyName}
                              onChange={(e) => setPropertyName(e.target.value)}
                              required
                            />
                          </Col>
                          <Col md={3} className="form-group pb-3">
                            <label className="font-weight-bold">
                              Rent/Sale
                            </label>
                            <select
                              className="form-select form-select-sm"
                              aria-label=".form-select-sm example"
                              value={rentOrSale}
                              onChange={(e) => setRentOrSale(e.target.value)}
                            >
                              <option selected>Please Select</option>
                              <option value="Rent">Rent</option>
                              <option value="Sale">Sale</option>
                              <option value="Let">Let</option>
                            </select>
                          </Col>
                          <Col md={3} className="form-group pb-3">
                            <label className="font-weight-bold">
                              Number Of Hall/Foyer
                            </label>
                            <input
                              type="number"
                              name="numFfhall"
                              className="form-control"
                              value={numOfHall}
                              onChange={(e) =>
                                setNumOfHall(parseInt(e.target.value))
                              }
                              required
                            />
                          </Col>
                        </Row>

                        {/* SECOND ROW */}
                        <Row>
                          <Col md={3} className="form-group pb-3">
                            <label className="font-weight-bold">
                              Number Of Kitchen
                            </label>
                            <input
                              type="number"
                              name="numOfKitchen"
                              className="form-control"
                              value={numOfKitchen}
                              onChange={(e) =>
                                setNumOfKitchen(parseInt(e.target.value))
                              }
                              required
                            />
                          </Col>
                          <Col md={3} className="form-group pb-3">
                            <label className="font-weight-bold">
                              Number Of Bed Room
                            </label>
                            <input
                              type="number"
                              name="numOfBedroom"
                              className="form-control"
                              value={numOfBedroom}
                              onChange={(e) =>
                                setNumOfBedroom(parseInt(e.target.value))
                              }
                              required
                            />
                          </Col>
                          <Col md={3} className="form-group pb-3">
                            <label className="font-weight-bold">
                              Number Of Store
                            </label>
                            <input
                              type="number"
                              name="numOfStore"
                              className="form-control"
                              value={numOfStore}
                              onChange={(e) =>
                                setNumOfStore(parseInt(e.target.value))
                              }
                              required
                            />
                          </Col>
                          <Col md={3} className="form-group pb-3">
                            <label className="font-weight-bold">
                              Number Of Cars of Garage
                            </label>
                            <input
                              type="number"
                              name="numOfCarsOfGarage"
                              className="form-control"
                              value={numOfCarsOfGarage}
                              onChange={(e) =>
                                setNumOfCarsOfGarage(parseInt(e.target.value))
                              }
                              required
                            />
                          </Col>
                        </Row>

                        {/* THIRD ROW */}
                        <Row>
                          <Col md={3} className="form-group pb-3">
                            <label className="font-weight-bold">
                              Number Of Beds
                            </label>
                            <input
                              type="number"
                              name="numOfBeds"
                              className="form-control"
                              value={numOfBeds}
                              onChange={(e) =>
                                setNumOfBeds(parseInt(e.target.value))
                              }
                              required
                            />
                          </Col>
                          <Col md={3} className="form-group pb-3">
                            <label className="font-weight-bold">
                              Number Of Cushions
                            </label>
                            <input
                              type="number"
                              name="numOfCushions"
                              className="form-control"
                              value={numOfCushions}
                              onChange={(e) =>
                                setNumOfCushions(parseInt(e.target.value))
                              }
                              required
                            />
                          </Col>
                          <Col md={3} className="form-group pb-3">
                            <label className="font-weight-bold">
                              Number Of Cupboards
                            </label>
                            <input
                              type="number"
                              name="numOfCupboards"
                              className="form-control"
                              value={numOfCupboards}
                              onChange={(e) =>
                                setNumOfCupboards(parseInt(e.target.value))
                              }
                              required
                            />
                          </Col>
                          <Col md={3} className="form-group pb-3">
                            <label className="font-weight-bold">
                              Number Of Dining
                            </label>
                            <input
                              type="number"
                              name="numOfDining"
                              className="form-control"
                              value={numOfDining}
                              onChange={(e) =>
                                setNumOfDining(parseInt(e.target.value))
                              }
                              required
                            />
                          </Col>
                        </Row>

                        {/* FOURTH ROW */}
                        <Row>
                          <Col md={3} className="form-group pb-3">
                            <label className="font-weight-bold">
                              Number Of Living Room
                            </label>
                            <input
                              type="number"
                              name="num-of-living-room"
                              className="form-control"
                              value={numOfLivingRoom}
                              onChange={(e) =>
                                setNumOfLivingRoom(parseInt(e.target.value))
                              }
                              required
                            />
                          </Col>
                          <Col md={3} className="form-group pb-3">
                            <label className="font-weight-bold">
                              Number Of Palor/Reception
                            </label>
                            <input
                              type="number"
                              name="num-of-palor-reception"
                              className="form-control"
                              value={numOfPalorReception}
                              onChange={(e) =>
                                setNumOfPalorReception(parseInt(e.target.value))
                              }
                              required
                            />
                          </Col>
                          <Col md={3} className="form-group pb-3">
                            <label className="font-weight-bold">
                              Number Of Bathroom
                            </label>
                            <input
                              type="number"
                              name="num-of-bathroom"
                              className="form-control"
                              value={numOfBathroom}
                              onChange={(e) =>
                                setNumOfBathroom(parseInt(e.target.value))
                              }
                              required
                            />
                          </Col>
                          <Col md={3} className="form-group pb-3">
                            <label className="font-weight-bold">Street</label>
                            <input
                              type="text"
                              name="street"
                              className="form-control"
                              value={street}
                              onChange={(e) => setStreet(e.target.value)}
                              required
                            />
                          </Col>
                        </Row>

                        {/* FIFTH ROW */}
                        <Row>
                          <Col md={3} className="form-group pb-3">
                            <label className="font-weight-bold">
                              Condition
                            </label>
                            <select
                              className="form-select form-select-sm"
                              aria-label=".form-select-sm example"
                              value={condition}
                              onChange={(e) => setCondition(e.target.value)}
                            >
                              <option selected>Please select</option>
                              <option value="Old">Old</option>
                              <option value="New">New</option>
                            </select>
                          </Col>
                          <Col md={3} className="form-group pb-3">
                            <label className="font-weight-bold">
                              Electricity
                            </label>
                            <div>
                              <div className="form-check form-check-inline">
                                <input
                                  type="radio"
                                  name="electricity"
                                  id="electricityYes"
                                  className="form-check-input"
                                  value="Yes"
                                  checked={electricity === "Yes"}
                                  onChange={(e) =>
                                    setElectricity(e.target.value)
                                  }
                                  required
                                />
                                <label className="form-check-label">Yes</label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  type="radio"
                                  name="electricity"
                                  id="electricityNo"
                                  className="form-check-input"
                                  value="No"
                                  checked={electricity === "No"}
                                  onChange={(e) =>
                                    setElectricity(e.target.value)
                                  }
                                  required
                                />
                                <label
                                  htmlFor="electricityNo"
                                  className="form-check-label"
                                >
                                  No
                                </label>
                              </div>
                            </div>
                          </Col>

                          <Col md={3} className="form-group pb-3">
                            <label className="font-weight-bold">Seller</label>
                            <select
                              className="form-select form-select-sm"
                              aria-label=".form-select-sm example"
                              value={seller}
                              onChange={(e) => setSeller(e.target.value)}
                            >
                              <option selected>Please Select</option>
                              <option value="Dealer">Dealer</option>
                              <option value="Private">Private</option>
                            </select>
                          </Col>
                          <Col md={3} className="form-group pb-3">
                            <label className="font-weight-bold">City</label>
                            <input
                              type="text"
                              name="city"
                              className="form-control"
                              value={city}
                              onChange={(e) => setCity(e.target.value)}
                              required
                            />
                          </Col>
                        </Row>

                        {/* SIXTH ROW */}
                        <Row>
                          <Col md={3} className="form-group pb-3">
                            <label className="font-weight-bold">
                              Inspection
                            </label>
                            <select
                              className="form-select form-select-sm"
                              aria-label=".form-select-sm example"
                              value={inspection}
                              onChange={(e) => setInspection(e.target.value)}
                            >
                              <option selected>Please select</option>
                              <option value="Inspected">Inspected</option>
                              <option value="Not Inspected">
                                Not Inspected
                              </option>
                            </select>
                          </Col>
                          <Col md={3} className="form-group pb-3">
                            <label className="font-weight-bold">
                              Aunction Registered
                            </label>
                            <div>
                              <div className="form-check form-check-inline">
                                <input
                                  type="radio"
                                  name="aunctionRegistered"
                                  className="form-check-input"
                                  value="Yes"
                                  checked={aunctionRegistered === "Yes"}
                                  onChange={(e) =>
                                    setAunctionRegistered(e.target.value)
                                  }
                                  required
                                />
                                <label className="form-check-label">Yes</label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  type="radio"
                                  name="aunctionRegistered"
                                  className="form-check-input"
                                  value="No"
                                  checked={aunctionRegistered === "No"}
                                  onChange={(e) =>
                                    setAunctionRegistered(e.target.value)
                                  }
                                  required
                                />
                                <label className="form-check-label">No</label>
                              </div>
                            </div>
                          </Col>
                          <Col md={3} className="form-group pb-3">
                            <label className="font-weight-bold">State</label>
                            <select
                              className="form-select form-select-sm"
                              aria-label=".form-select-sm example"
                              value={state}
                              onChange={(e) => setState(e.target.value)}
                              required
                            >
                              <option value="" disabled selected>
                                Please select state
                              </option>
                              {states.map((state, index) => (
                                <option key={index} value={state}>
                                  {state}
                                </option>
                              ))}
                            </select>
                          </Col>
                          <Col md={3} className="form-group pb-3">
                            <label className="font-weight-bold">
                              Property Price
                            </label>
                            <input
                              type="text"
                              name="propertyPrice"
                              className="form-control"
                              value={propertyPrice}
                              onChange={(e) => setPropertyPrice(e.target.value)}
                              required
                            />
                          </Col>
                        </Row>

                        {/* SEVENTH ROW */}
                        <div className="dflex align-itemcenter justify-contentstart dashboard-dflex pb-3">
                          <div>
                            <label className="font-weight-bold">
                              Featured Image <br /> <br />
                              <input
                                type="file"
                                id="myfile"
                                name="featuredImage"
                                onChange={(e) =>
                                  setFeaturedImage(e.target.files[0])
                                }
                              />
                            </label>
                          </div>
                          <div>
                            <label className="font-weight-bold">
                              Gallery <br /> <br />
                              <input
                                type="file"
                                name="carouselImages"
                                multiple
                                onChange={(e) =>
                                  setCarouselImages(e.target.files)
                                }
                              />
                            </label>
                          </div>
                        </div>
                      </form>

                      {/* PROPERTY PLATFORMS */}
                      <div>
                        <h4 className="mt-5">Property Platforms</h4>
                        <Row>
                          <Col md={3} className="form-group pb-3">
                            <label className="font-weight-bold">
                              Facebook Link
                            </label>
                            <input
                              type="text"
                              name="facebookLink"
                              className="form-control"
                              placeholder="https://www.facebook.com/profile"
                              value={facebookLink}
                              onChange={(e) => setFacebookLink(e.target.value)}
                              required
                            />
                          </Col>
                          <Col md={3} className="form-group pb-3">
                            <label className="font-weight-bold">
                              Instagram Link
                            </label>
                            <input
                              type="text"
                              name="instagramLink"
                              className="form-control"
                              placeholder="https://www.instagram.com/profile"
                              value={instagramLink}
                              onChange={(e) => setInstagramLink(e.target.value)}
                              required
                            />
                          </Col>
                          <Col md={3} className="form-group pb-3">
                            <label className="font-weight-bold">
                              Twitter Link
                            </label>
                            <input
                              type="text"
                              name="twitterLink"
                              className="form-control"
                              placeholder="https://www.twitter.com/profile"
                              value={twitterLink}
                              onChange={(e) => setTwitterLink(e.target.value)}
                              required
                            />
                          </Col>
                          <Col md={3} className="form-group pb-3">
                            <label className="font-weight-bold">
                              Website Link
                            </label>
                            <input
                              type="text"
                              name="websiteLink"
                              className="form-control"
                              placeholder="https://www.website.com/profile"
                              value={websiteLink}
                              onChange={(e) => setWebsiteLink(e.target.value)}
                              required
                            />
                          </Col>
                        </Row>
                      </div>

                      {/* PROPERTY DESCRIPTION */}
                      <div className="mb-5">
                        <h5 className="mt-5">Property Description</h5>
                        <ReactQuill
                          className="editor-container"
                          value={propertyDesc}
                          onChange={(value) => setPropertyDesc(value)}
                        />
                      </div>

                      {/* OWNER INFORMATION */}
                      <div className="pt-4">
                        <h4 className="mt5">Owner Information</h4>
                        {/* <h5>{currentUser.fname}</h5>
                        <img
                          src={`uploads/` + currentUser.image}
                          alt="profileImage"
                          className="img-fluid rounded-circle"
                          style={{ width: "70px", height: "60px" }}
                        /> */}
                        <Row>
                          <Col md={3} className="form-group pb-3">
                            <label className="font-weight-bold">
                              Full Name
                            </label>
                            <input
                              type="name"
                              name="fullName"
                              className="form-control"
                              value={fullName}
                              onChange={(e) => setFullName(e.target.value)}
                              required
                            />
                          </Col>
                          <Col md={3} className="form-group pb-3">
                            <label className="font-weight-bold">Email</label>
                            <input
                              type="email"
                              name="email"
                              className="form-control"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                            />
                          </Col>
                          <Col md={3} className="form-group pb-3">
                            <label className="font-weight-bold">
                              Phone Number
                            </label>
                            <input
                              type="tel"
                              name="phoneNumber"
                              className="form-control"
                              value={phoneNumber}
                              onChange={(e) => setPhoneNumber(e.target.value)}
                              required
                            />
                          </Col>
                          <Col md={3} className="form-group pb-3">
                            <label className="font-weight-bold">
                              Account Number
                            </label>
                            <input
                              type="text"
                              name="accountNumber"
                              className="form-control"
                              value={accountNumber}
                              onChange={(e) => setAccountNumber(e.target.value)}
                              required
                            />
                          </Col>
                        </Row>
                      </div>
                      <div className="d-flex justify-content-end">
                        <Button type="submit" onClick={handleSubmit}>
                          Submit
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Pane>

              {/* SECOND TAB */}
              <Tab.Pane eventKey="properties">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">S/N</th>
                      <th scope="col">Type</th>
                      <th scope="col">Location</th>
                      <th scope="col">Image</th>
                      <th scope="col">Verification</th>
                      <th scope="col">Icon</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>verified</td>
                      <td>good</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                      <td>verified</td>
                      <td>good</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>@twitter</td>
                      <td>not verified</td>
                      <td>bad</td>
                    </tr>
                  </tbody>
                </table>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
