import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import BannerImage from "./MainImage.png";
import "./Body.css";

function Body() {
  return (
    <Container className="p-3 h-10vh position-relative">
      <Row className="h-100">
        <Col
          sm={12}
          md={5}
          className="h-md-90 d-flex flex-column justify-content-center align-items-center text-center mb-3 mb-md-0 mt-100"
        >
          <h1 className="heading-small">Diagnose Your Chest X-Rays</h1>
          <p className="text-small">
            Our app uses machine learning to provide fast, reliable X-ray
            reports for lung disease diagnosis. Join us in revolutionizing
            radiology with our powerful, efficient technology that benefits both
            medical professionals and patients.
          </p>
          <Button
            variant="primary"
            className="p-1 px-4 rounded-pill button-small"
            onClick={() => (window.location.href = "/upload")}
          >
            Try For Free
          </Button>
        </Col>
        <Col sm={12} md={7} className="p-0">
          <img src={BannerImage} alt="Banner" className="w-100 img-small" />
        </Col>
      </Row>
    </Container>
  );
}

export default Body;
