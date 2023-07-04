import React from "react";
import { Button, Container } from "react-bootstrap";
import "./contact.css";

const Contact = () => {
  return (
    <div>
      <Container className="contact-box mb-5">
        <div>
          <h5 className="contact-us pt-3">Contact us</h5>
          <form className="form-text">
            <label>Full name</label>
            <br />
            <input
              type="name"
              name="name"
              placeholder="Your full name"
              className="form-input"
            />{" "}
            <br />
            <label>Phone number</label>
            <br />
            <input
              type="email"
              name="email"
              placeholder="Phone number"
              className="form-input"
            />{" "}
            <br />
            <label>E-mail</label>
            <br />
            <input
              type="email"
              name="email"
              placeholder="Your E-mail"
              className="form-input"
            />{" "}
            <br />
            <label>Your Message</label>
            <br />
            <textarea
              type="message"
              name="message"
              id="message"
              className="form-message"
              placeholder="Your Message"
              required
            ></textarea>
          </form>
          <p className="checkbox-text my-3">
            <input type="checkbox" name="check" id="check" /> I agree to the
            processing of personal data.
          </p>
          <button className="contact-btn">Send Message</button>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
