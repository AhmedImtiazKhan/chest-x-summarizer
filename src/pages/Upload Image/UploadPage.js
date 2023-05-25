import React, { useState, useRef } from "react";
import { Container, Button, Row, Col, Spinner } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { processFiles } from "../../helpers/Api";
import { generateReport } from "../../helpers/Api";
import { useDispatch } from "react-redux";
import { setImage } from "../../store/slices/imageState";
import MenuBar from "../../MenuBar/index";

function UploadPage() {
  const [imageUrl, setImageUrl] = useState("UploadImage.png");
  const [probabilities, setProbabilities] = useState([]);
  const [report, setReport] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isGeneratingReport, setIsGeneratingReport] = useState(false);
  const dispatch = useDispatch();
  const fileInputRef = useRef(null);

  const handleFileUpload = async (e) => {
    const files = fileInputRef.current.files;
    dispatch(setImage(files));
    setIsProcessing(true);
    try {
      const probabilities = await processFiles(files);
      setProbabilities(probabilities);
      console.log(probabilities);
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleGenerateReport = async (e) => {
    const files = fileInputRef.current.files;
    dispatch(setImage(files));
    setIsGeneratingReport(true);
    try {
      const report = await generateReport(files);
      setReport(report);
      // console.log(report);
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setIsGeneratingReport(false);
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
        fontSize: "1rem",
        color:
          probability >= 0.6 ? "red" : probability >= 0.4 ? "orange" : "black",
      };
      const listItemStyle = {
        margin: "1rem 0",
        fontWeight: "bold",
        fontSize: "1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      };

      return (
        <li key={index} style={listItemStyle}>
          <span style={{ color: "black", marginRight: "0.625rem" }}>{label}:</span>
          <span style={percentageStyle}>{percentage}%</span>
        </li>
      );
    });
  };

  return (
    <Container
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: "100%", width: "100%" }}
    >
      <MenuBar />
      <Image
        src={imageUrl}
        alt="Uploaded image preview"
        fluid
        className="mb-3"
        style={{
          aspectRatio: 1,
          width: "100%",
          maxWidth: "27.5rem",
          borderRadius: "4.1875rem",
        }}
      />
      <Row>
        <Col md={6} className="d-flex justify-content-center">
          <Button
            variant="primary"
            className="p-2 px-5 rounded-pill mr-2"
            style={{
              maxWidth: "15.625rem",
              width: "100%",
              height: "4.4375rem",
              fontSize: "1rem",
              marginTop: "0.5rem",
              marginBottom: "0.5rem",
            }}
            onClick={handleUploadClick}
          >
            Upload Image
          </Button>
        </Col>
        <Col md={6} className="d-flex justify-content-center">
          <Button
            onClick={handleFileUpload}
            variant="primary"
            className="p-2 px-5 rounded-pill ml-2"
            style={{
              // backgroundColor: "grey",
              color: "white",
              maxWidth: "15.625rem",
              width: "15.625rem",
              height: "4.4375rem",
              fontSize: "1rem",
              marginTop: "0.5rem",
              marginBottom: "0.5rem",
            }}
            disabled={isProcessing}
          >
            {isProcessing ? (
              <>
                <Spinner animation="border" size="sm" className="mr-2" />
                Loading...
              </>
            ) : (
              "Process"
            )}
          </Button>
        </Col>
      </Row>

      <input
        type="file"
        style={{ display: "none" }}
        ref={fileInputRef}
        onChange={handleFileInputChange}
      />
      {probabilities.length > 0 && (
        <Container>
          <h3
            style={{ fontSize: "2.5rem", color: "#183780", textAlign: "center" }}
          >
            Classification:
          </h3>
          <ul
            className="list-unstyled"
            style={{
              display: "inline",
              fontSize: "1rem",
              marginTop: "1.25rem",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {mapProbabilitiesToLabels()}
          </ul>
          <Button
            variant="primary"
            className="p-2 px-5 rounded-pill mr-2"
            style={{
              maxWidth: "15.625rem",
              width: "100%",
              height: "4.4375rem",
              fontSize: "1rem",
              display: "block",
              margin: "auto",
              marginTop: "1rem",
              marginBottom: "0.5rem",
              padding: "auto",
            }}
            onClick={handleGenerateReport}
            disabled={isGeneratingReport}
          >
            {isGeneratingReport ? (
              <>
                <Spinner animation="border" size="sm" className="mr-2" />
                Loading...
              </>
            ) : (
              "Generate Report"
            )}
          </Button>

          {report.length > 0 && (
            <h3
              style={{
                fontSize: "2.5rem",
                color: "#183780",
                textAlign: "center",
                // marginTop: "2rem",
              }}
            >
              Report:
            </h3>
          )}
          <p
            style={{
              display: "flex",
              fontSize: "1rem",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            {report}
          </p>
        </Container>
      )}
    </Container>
  );
}

export default UploadPage;
