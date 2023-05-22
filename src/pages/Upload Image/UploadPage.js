import React, { useState, useRef } from "react";
import { Container, Button, Row, Col, Spinner } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { processFiles } from "../../helpers/Api";
import { useDispatch } from "react-redux";
import { setImage } from "../../store/slices/imageState";

function UploadPage() {
  const [imageUrl, setImageUrl] = useState("UploadImage.png");
  const [probabilities, setProbabilities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const fileInputRef = useRef(null);

  const handleFileUpload = async (e) => {
    const files = fileInputRef.current.files;
    dispatch(setImage(files));
    setIsLoading(true);
    try {
      const probabilities = await processFiles(files);
      setProbabilities(probabilities);
      console.log(probabilities);
      // window.location.href = "/summary";
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    const fileUrl = URL.createObjectURL(file);
    setImageUrl(fileUrl);
  };

  const labels = [
    "No Finding",
    "Enlarged Cardiomediastinum",
    "Cardiomegaly",
    "Lung Opacity",
    "Lung Lesion",
    "Edema",
    "Consolidation",
    "Pneumonia",
    "Atelectasis",
    "Pneumothorax",
    "Pleural Effusion",
    "Pleural Other",
    "Fracture",
    "Support Devices",
  ];

  const mapProbabilitiesToLabels = () => {
    const sortedLabels = labels
      .filter((label, index) => probabilities[index] >= 0.4)
      .sort((a, b) => {
        const probabilityA = probabilities[labels.indexOf(a)];
        const probabilityB = probabilities[labels.indexOf(b)];
        return probabilityB - probabilityA;
      });

    return sortedLabels.map((label, index) => {
      const probability = probabilities[labels.indexOf(label)];
      const percentage = (probability * 100).toFixed(2);
      const percentageStyle = {
        fontWeight: "bold",
        fontSize: "24px",
        color:
          probability >= 0.6 ? "red" : probability >= 0.4 ? "orange" : "black",
        marginLeft: "5px",
      };
      const listItemStyle = {
        margin: "10px 0",
        fontWeight: "bold",
        fontSize: "24px",
        display: "flex",
        alignItems: "center",
      };

      return (
        <li key={index} style={listItemStyle}>
          <span style={{ color: "black", marginRight: "10px" }}>{label}:</span>
          <span style={percentageStyle}>{percentage}%</span>
        </li>
      );
    });
  };

  return (
    <Container
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: "100%" }}
    >
      <Row>
        <Col>
          <Image
            src={imageUrl}
            alt="Uploaded image preview"
            fluid
            className="mb-3"
            style={{ width: "659px", height: "659px", borderRadius: "67px" }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "659px",
            }}
          >
            <Button
              variant="primary"
              className="p-2 px-5 rounded-pill mr-2"
              style={{ width: "307px", height: "87px", fontSize: "24px" }}
              onClick={handleUploadClick}
            >
              Upload Image
            </Button>

            <input
              type="file"
              style={{ display: "none" }}
              ref={fileInputRef}
              onChange={handleFileInputChange}
            />
            <Button
              onClick={() => handleFileUpload(imageUrl)}
              variant="secondary"
              className="p-2 px-5 rounded-pill ml-2"
              style={{
                backgroundColor: "transparent",
                color: "grey",
                width: "294px",
                height: "94px",
                fontSize: "24px",
              }}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Spinner animation="border" size="sm" className="mr-2" />
                  Loading...
                </>
              ) : (
                "Process"
              )}
            </Button>
          </div>
        </Col>
        {probabilities.length > 0 && (
          <Col>
            <Container>
              <h1 style={{ fontSize: "60px", color: "#183780" }}>
                Classification:
              </h1>

              <ul
                className="list-unstyled"
                style={{
                  fontSize: "24px",
                  marginTop: "20px",
                  marginLeft: "20px",
                }}
              >
                {mapProbabilitiesToLabels()}
              </ul>
            </Container>
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default UploadPage;
