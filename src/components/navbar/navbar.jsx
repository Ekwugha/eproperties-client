import React, { useContext, useState, useRef, useEffect } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../context/authContext";
import "./navbar.css";

export default function CustomNavbar() {
  const { currentUser } = useContext(AuthContext);
  const [navbar, setNavbar] = useState(false);
  const [navbarbrand, setColor] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  const navbarRef = useRef(null);

  // to make the outside click close the navbar
  const handleOutsideClick = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setExpanded(false);
    }
  };

  // to make the outside click close the navbar
  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location = "/";
  };

  const handleNavLinkClick = () => {
    setExpanded(false);
    window.scrollTo(0, 0);
  };

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const changeColor = () => {
    if (window.scrollY >= 80) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  window.addEventListener("scroll", changeColor);

  return (
    <>
      <Navbar
        ref={navbarRef}
        expanded={expanded}
        scrolling="true"
        light="true"
        expand="lg"
        fixed="top"
        variant="dark"
        bg="white"
        className={navbar ? "navbar active" : "navbar"}
      >
        <div className="container-fluid">
          <Navbar.Brand
            as={Link}
            to="/"
            onClick={() => setExpanded(false)}
            className={
              navbarbrand ? "color text-bold py-3" : "color text-bold py-3"
            }
          >
            <img
              src="/images/logo (2).png"
              alt="Logo"
              className="logo-img"
              onClick={() => navigate("/")}
            />
          </Navbar.Brand>

          <Navbar.Toggle
            onClick={() => setExpanded((prevExpanded) => !prevExpanded)}
            className={navbarbrand ? "color" : "color text"}
          >
            <FontAwesomeIcon icon={faBars} size="lg" />
          </Navbar.Toggle>

          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="mx-auto nav-link-text" onClick={handleNavLinkClick}>
              <Nav.Link
                as={Link}
                to="/"
                onClick={() => setExpanded(false)}
                className={
                  navbarbrand
                    ? "color text nav-link-text"
                    : "color text nav-link-text"
                }
              >
                Home
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/rent"
                onClick={() => setExpanded(false)}
                className={
                  navbarbrand
                    ? "color text nav-link-text"
                    : "color text nav-link-text"
                }
              >
                For Rent
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/sale"
                onClick={() => setExpanded(false)}
                className={
                  navbarbrand
                    ? "color text nav-link-text"
                    : "color text nav-link-text"
                }
              >
                For Sale
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/short-let"
                onClick={() => setExpanded(false)}
                className={navbarbrand ? "color text" : "color text"}
              >
                Short Let
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/estate-agents"
                onClick={() => setExpanded(false)}
                className={navbarbrand ? "color text" : "color text"}
              >
                Estate Agents
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/tenants"
                onClick={() => setExpanded(false)}
                className={navbarbrand ? "color text" : "color text"}
              >
                Tenants
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => setExpanded(false)}
                className={navbarbrand ? "color text" : "color text"}
              >
                About us
              </Nav.Link>
            </Nav>

            <Nav className="sm">
              {currentUser && currentUser.accountType === "Buyer" && (
                <Button className="btn mx-4 sm">Request a property</Button>
              )}
              {currentUser && currentUser.accountType === "Seller" && (
                <Button className="btn mx-4 sm">Post a property</Button>
              )}
              {currentUser && (
                <Button className="btn mx-4" onClick={handleLogout}>
                  Logout
                </Button>
              )}
              {!currentUser && (
                <>
                  <Button className="bt1 sm" as={Link} to="/login">
                    Login
                  </Button>
                  <Button className="btn mx-4" as={Link} to="/register">
                    Sign Up
                  </Button>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
}
