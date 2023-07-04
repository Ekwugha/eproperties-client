import React, { useContext, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import './login.css'
// import { AuthContext } from "../../context/authContext";


const Login = () => {
    // const { setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = formData;

    if (!email || !password) {
      toast.error("Please provide all required fields");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8800/api/auth/login",
        { email, password }
      );
      // console.log(response.data);
      localStorage.setItem("token", response.data)
      // Reset the form
      setFormData({ email: "", password: "" });
      toast.success("Login successful! ✅");
      // navigate("/")
      window.location = "/"
      // Redirect to the dashboard or another page
    } catch (error) {
      if (error.response) {
        const { message } = error.response.data;
        toast.error(`Login failed. ${message} ❌`);
      } else {
        toast.error("Login failed. Please try again. ❌");
      }
    }
  };


  return (
    <Container className="height d-flex align-items-center justify-content-center">
      <Row className="justify-contentcenter">
        <Col>
          <form name="contact" className="py3" onSubmit={handleSubmit} noValidate>
            <div className="form-group py-2">
              <input
                type="email"
                name="email"
                id="email"
                className="form-control login-form"
                placeholder="Enter Your Email"
                style={{ width: "600px" }}
                required
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group py-2">
              <input
                type="password"
                name="password"
                id="password"
                className="form-control login-form mb-2"
                placeholder="Enter Your Password"
                style={{ width: "600px" }}
                required
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <button
              type="submit"
              name="Submit"
              className="btn btn-primary py-2 px-4 rounded-pill"
            >
              Login
            </button>
            <br /> <br />
            <p>
              Don't have an account?{" "}
              <Link to="/register" className="text-primary">
                Click Register
              </Link>
            </p>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
