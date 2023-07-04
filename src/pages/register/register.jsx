import React, { useState } from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";



const Register = () => {
  const [formData, setFormData] = useState({
    fname: "",
    sname: "",
    email: "",
    tel: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleFormSubmit = async (event) => {
    
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8800/api/auth/register",
        formData
      );
      console.log(response.data);
      // Reset the form
      setFormData({
        fname: "",
        sname: "",
        email: "",
        tel: "",
        accountType: "",
        password: "",
      });
      toast.success("Registration successful! ✅"); // Display success message
    } catch (error) {
      if (error.response) {
        const { message } = error.response.data;
        toast.error(`${message} ❌`); // Display error message from the backend
      } else {
        toast.error("Registration failed. Please try again ❌"); // Display generic error message
      }
    }
  };

  return (
    <Container className="mt-5 height d-flex align-items-center justify-content-center">
      <Row className="justify-contentcenter">
        <Col md={6}>
          <form
            name="contact"
            className="py-3"
            onSubmit={handleFormSubmit}
            noValidate
          >
            {/* First Name */}
            <div className="form-group py-2">
              <input
                type="text"
                name="fname"
                id="fname"
                className="form-control login-form"
                placeholder="Enter Your First Name"
                style={{ width: "600px" }}
                value={formData.fname}
                onChange={handleInputChange}
                required
              />
            </div>
            {/* Surname */}
            <div className="form-group py-2">
              <input
                type="text"
                name="sname"
                id="sname"
                className="form-control login-form"
                placeholder="Enter Your Surname"
                style={{ width: "600px" }}
                value={formData.sname}
                onChange={handleInputChange}
                required
              />
            </div>
            {/* Email */}
            <div className="form-group py-2">
              <input
                type="email"
                name="email"
                id="email"
                className="form-control login-form"
                placeholder="Enter Your Email"
                style={{ width: "600px" }}
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            {/* Account Type */}
            <div className="form-group py-2">
              <select
                name="accountType"
                id="accountType"
                className="form-control login-form"
                style={{ width: "600px", cursor: "pointer" }}
                value={formData.accountType}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Account Type</option>
                <option value="Buyer">Buyer</option>
                <option value="Seller">Seller</option>
              </select>
            </div>
            {/* Phone Number */}
            <div className="form-group py-2">
              <input
                type="tel"
                name="tel"
                id="tel"
                className="form-control login-form"
                placeholder="Enter Your Phone Number"
                style={{ width: "600px" }}
                value={formData.tel}
                onChange={handleInputChange}
                required
              />
            </div>
            {/* Password */}
            <div className="form-group py-2">
              <input
                type="password"
                name="password"
                id="password"
                className="form-control login-form mb-2"
                placeholder="Enter Your Password"
                style={{ width: "600px" }}
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            {/* Register button */}
            <button
              type="submit"
              name="Submit"
              className="btn btn-primary py-2 px-4 rounded-pill"
            >
              Register
            </button>
            <br /> <br />
            <p>
              Already have an account?{" "}
              <Link to="/login" className="text-primary">
                Click Login
              </Link>
            </p>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
