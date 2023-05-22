import React, { useState, useRef } from "react";
import { Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
// import Button from "react-bootstrap";
// import Image from "react-bootstrap/Image";
import axios from "axios";
import { useSelector } from "react-redux";

function SummaryPage() {
  const [imageUrl, setImageUrl] = useState("UploadImage.png");
  const fileInputRef = useRef(null);
  const uploadedImage = useSelector((state) => state.image.image);
  console.log(uploadedImage);
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

  const handleProcessClick = async () => {
    const files = fileInputRef.current.files;
    if (files && files.length > 0) {
      const fileDataArray = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        reader.onload = (event) => {
          const fileContent = event.target.result;
          fileDataArray.push({ filename: file.name, content: fileContent });
          console.log(fileDataArray);
          // check if all files have been processed
          if (fileDataArray.length === files.length) {
            axios({
              method: "post",
              url: "http://127.0.0.1:5000/",
              data: fileDataArray,
            })
              .then((res) => {
                console.log(res);
              })
              .catch((err) => {
                // alert(err.response.data.error);
                console.log(err);
              });
          }
        };
        reader.readAsDataURL(file);
      }
    } else {
      // handle error when no files are uploaded
      console.log("No files selected");
    }

    // window.location.href = "/summary";
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  // const handleProcessClick = async () => {
  //   // await sendReq()
  //   window.location.href = "/summary";
  // };

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
          {uploadedImage && (
            <img
              src={URL.createObjectURL(uploadedImage)}
              alt="Uploaded image"
            />
          )}
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
            onClick={() => handleProcessClick(imageUrl)}
            variant="secondary"
            className="p-2 px-5 rounded-pill ml-2"
            style={{
              backgroundColor: "transparent",
              color: "grey",
              width: "294px",
              height: "94px",
              fontSize: "24px",
            }}
          >
            Process
          </Button>
        </div>
      </div>
      <div style={{ minWidth: "800px" }}>
        <h1 style={{ fontSize: "60px", color: "#183780" }}>Classification:</h1>
        <div
          style={{
            maxWidth: "800px",
            marginTop: "20px",
            padding: "0",
            fontSize: "24px",
          }}
        >
          {/* <p>
            <b>Conclusion: </b>The non-contrast CT scan of the chest reveals
            mild to moderate bilateral bronchitis and/or atypical pneumonia.
            Clinical correlation is recommended for further management.
          </p> */}
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
                No Finding
              </label>
              <br />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <input type="checkbox" id="step3" name="step3" value="step3" />
              <label htmlFor="step3" style={{ marginLeft: "10px" }}>
                Enlarged Cardiomediastinum{" "}
              </label>
              <br />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <input type="checkbox" id="step1" name="step1" value="step1" />
              <label style={{ marginLeft: "10px" }} htmlFor="step1">
                Cardiomegaly
              </label>
              <br />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <input type="checkbox" id="step3" name="step3" value="step3" />
              <label style={{ marginLeft: "10px" }} htmlFor="step3">
                Lung Opacity
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
                Lung Lesion{" "}
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
                Edema{" "}
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
                Consolidation
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
                Pneumonia
              </label>
              <br />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <input type="checkbox" id="step4" name="step4" value="step4" />
              <label htmlFor="step4" style={{ marginLeft: "10px" }}>
                Atelectasis
              </label>
              <br />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <input type="checkbox" id="step2" name="step2" value="step2" />
              <label style={{ marginLeft: "10px" }} htmlFor="step2">
                Pneumothorax
              </label>
              <br />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <input type="checkbox" id="step4" name="step4" value="step4" />
              <label style={{ marginLeft: "10px" }} htmlFor="step4">
                Pleural Effusion
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
                Pleural Other
              </label>
              <br />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <input type="checkbox" id="step4" name="step4" value="step4" />
              <label style={{ marginLeft: "10px" }} htmlFor="step4">
                Fracture
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
                Support Devices
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
