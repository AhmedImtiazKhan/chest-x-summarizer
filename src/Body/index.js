import { Container, Row, Col, Button } from "react-bootstrap";
import BannerImage from "./MainImage.png";

function Body() {
  return (
    <Container className="p-5 h-90 position-absolute top-50 start-50 translate-middle" style={{ top: 'calc(50% + 20px)' }}>
      <Row className="h-100">
        <Col
          sm={5}
          className="h-90 d-flex flex-column justify-content-center align-items-center"
        >
          <h1>Diagnose your Chest Xrays</h1>
          <p>
            Our app uses machine learning to provide fast, reliable x-ray reports for lung disease diagnosis. Join us in revolutionizing radiology with our powerful, efficient technology that benefits both medical professionals and patients.
          </p>
          <Button variant="primary" className="p-2 px-5 rounded-pill" onClick={() => window.location.href = '/upload'}>
            Try For Free
          </Button>

        </Col>
        <Col>
          <img src={BannerImage} alt="Banner" width="100%" />
        </Col>
      </Row>
    </Container>
  );
}

export default Body;
