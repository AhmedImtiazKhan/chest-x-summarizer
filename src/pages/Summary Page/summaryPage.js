import React, { useState, useRef } from "react";
import { Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";

function SummaryPage() {
  const [imageUrl, setImageUrl] = useState("UploadImage.png");
  const fileInputRef = useRef(null);

  // const sendReq = async () => {
  //   const apiName = "fypREST";
  //   const path = "/upload";

  //   const myInit = {
  //     headers: {}, // OPTIONAL
  //     response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
  //     body: {},
  //   };

  //   API.post(apiName, path, myInit)
  //     .then((response) => {
  //       console.log({ response });
  //     })
  //     .catch((error) => {
  //       console.log(error.response);
  //     });
  // };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleProcessClick = async () => {
    // await sendReq();
    window.location.href = "/summary";
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    const fileUrl = URL.createObjectURL(file);
    setImageUrl(fileUrl);
  };

  return (
    <div
      className="d-flex flex-row align-items-flex-start"
      style={{
        height: "100%",
        width: "100%",
        justifyContent: "space-around",
        marginTop: "30px",
      }}
    >
      <div>
        <div className="mb-5">
          <Image
            src={imageUrl}
            alt="Upload image"
            fluid
            style={{ width: "659px", height: "659px", borderRadius: "25px" }}
          />
        </div>
        <div
          className="d-flex mb-4"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Button
            variant="primary"
            className="p-3 px-5 rounded-pill mr-2"
            style={{ fontSize: "24px", width: "307px", height: "87px" }}
            onClick={handleUploadClick}
          >
            <b>New Image</b>
          </Button>
          <input
            type="file"
            style={{ display: "none" }}
            ref={fileInputRef}
            onChange={handleFileInputChange}
          />
          <Button
            variant="secondary"
            className="p-2 px-5 rounded-pill ml-2"
            style={{
              backgroundColor: "transparent",
              color: "grey",
              fontSize: "24px",
              width: "307px",
              height: "87px",
            }}
            onClick={handleProcessClick}
          >
            <b>Process</b>
          </Button>
        </div>
      </div>
      <div style={{ minWidth: "800px" }}>
        <h1 style={{ fontSize: "60px", color: "#183780" }}>Summary</h1>
        <div
          style={{
            maxWidth: "800px",
            marginTop: "20px",
            padding: "0",
            fontSize: "24px",
          }}
        >
          <p>
            <b>Conclusion: </b>The non-contrast CT scan of the chest reveals
            mild to moderate bilateral bronchitis and/or atypical pneumonia.
            Clinical correlation is recommended for further management.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            marginTop: "50px",
            fontSize: "20px",
          }}
        >
          <div
            className="d-flex "
            style={{
              justifyContent: "space-between",
              flexDirection: "column",
              marginRight: "100px",
            }}
          >
            <div style={{ marginBottom: "10px" }}>
              <input type="checkbox" id="step1" name="step1" value="step1" />
              <label
                htmlFor="
step1"
                style={{ marginLeft: "10px" }}
              >
                Consolidation
              </label>
              <br />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <input type="checkbox" id="step3" name="step3" value="step3" />
              <label htmlFor="step3" style={{ marginLeft: "10px" }}>
                Fracture
              </label>
              <br />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <input type="checkbox" id="step1" name="step1" value="step1" />
              <label style={{ marginLeft: "10px" }} htmlFor="step1">
                Pneumothorax
              </label>
              <br />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <input type="checkbox" id="step3" name="step3" value="step3" />
              <label style={{ marginLeft: "10px" }} htmlFor="step3">
           Pneumonia
              </label>
              <br />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <input type="checkbox" id="step1" name="step1" value="step1" />
              <label
                style={{ marginLeft: "10px" }}
                htmlFor="step1"
                className="ml-2"
              >
                Plueral Effusion
              </label>
              <br />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <input type="checkbox" id="step3" name="step3" value="step3" />
              <label
                style={{ marginLeft: "10px" }}
                htmlFor="step3"
                className="ml-2"
              >
                Plueral Other
              </label>
              <br />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <input type="checkbox" id="step1" name="step1" value="step1" />
              <label
                style={{ marginLeft: "10px" }}
                htmlFor="step1"
                className="ml-2"
              >
                Cardiomegaly
              </label>
              <br />
            </div>
          </div>
          <div
            className="d-flex "
            style={{ justifyContent: "space-between", flexDirection: "column" }}
          >
            <div style={{ marginBottom: "10px" }}>
              <input type="checkbox" id="step2" name="step2" value="step2" />
              <label htmlFor="step2" style={{ marginLeft: "10px" }}>
              Atelectasis
              </label>
              <br />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <input type="checkbox" id="step4" name="step4" value="step4" />
              <label htmlFor="step4" style={{ marginLeft: "10px" }}>
             Lung Opacity
              </label>
              <br />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <input type="checkbox" id="step2" name="step2" value="step2" />
              <label style={{ marginLeft: "10px" }} htmlFor="step2">
                Lung Lesion
              </label>
              <br />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <input type="checkbox" id="step4" name="step4" value="step4" />
              <label style={{ marginLeft: "10px" }} htmlFor="step4">
       Enlarged Cardiomestanium
              </label>
              <br />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <input type="checkbox" id="step2" name="step2" value="step2" />
              <label
                style={{ marginLeft: "10px" }}
                htmlFor="step2"
                className="ml-2"
              >
                Edema
              </label>
              <br />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <input type="checkbox" id="step4" name="step4" value="step4" />
              <label style={{ marginLeft: "10px" }} htmlFor="step4">
                X
              </label>
              <br />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <input type="checkbox" id="step2" name="step2" value="step2" />
              <label
                style={{ marginLeft: "10px" }}
                htmlFor="step2"
                className="ml-2"
              >
                Y
              </label>
              <br />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-flex-start mt-4" style={{}}>
          <Button
            variant="primary"
            className="p-3 rounded-pill"
            style={{
              marginTop: "20px",
              width: "373px",
              height: "80px",
              fontSize: "24px",
            }}
            onClick={() => (window.location.href = "/FinalReport")}
          >
            <b>OPEN COMPLETE REPORT</b>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SummaryPage;
