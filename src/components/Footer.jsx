import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={4} className="text-center text-md-start mb-3 mb-md-0">
            <h5>Sahin Restaurants</h5>
            <p>The best place for delicious food. Always at your service!</p>
          </Col>
          <Col md={4} className="text-center mb-3 mb-md-0">
            <h5>Contact Us</h5>
            <p>Email: info@sahinrestaurants.com</p>
            <p>Phone: +90 555 555 55 55</p>
          </Col>
          <Col md={4} className="text-center text-md-end">
            <h5>Social Media</h5>
            <div className="d-flex justify-content-center justify-content-md-end m-4">
              <a href="#" className="text-light me-3">
                <FaFacebookF />
              </a>
              <a href="#" className="text-light me-3">
                <FaTwitter />
              </a>
              <a href="#" className="text-light">
                <FaInstagram />
              </a>
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="text-center">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Sahin Restaurants. All Rights
              Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
