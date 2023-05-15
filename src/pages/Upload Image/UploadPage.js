import React from "react";
import { useState, useRef } from "react";
import { Container, Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import axios from "axios";

function UploadPage() {
  const [imageUrl, setImageUrl] = useState("UploadImage.png");
  const fileInputRef = useRef(null);

  // const sendReq = async () => {
  //   const apiName = 'fypREST';
  //   const path = '/upload';

  //   const myInit = {
  //     headers: {}, // OPTIONAL
  //     response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
  //     body: {},
  //   };

  //   API.post(apiName, path, myInit)
  //     .then((response) => {
  //       console.log({response})
  //     })
  //     .catch((error) => {
  //       console.log(error.response);
  //     });
  // }
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
          console.log(fileDataArray)
        // check if all files have been processed
        if (fileDataArray.length === files.length) {
        
             axios({
      method: 'post',
      url: 'http://localhost:5000/abc',
      data: fileDataArray
   
    })
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        // alert(err.response.data.error);
      });;
      }
    };
    reader.readAsDataURL(file);
  }

  
} else {
  // handle error when no files are uploaded
  console.log("No files selected");
}


      
    // window.location.href = "/summary";
    }


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
    <Container
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: "100%" }}
    >
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
          onClick={()=>handleProcessClick(imageUrl)}
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
    </Container>
  );
}

export default UploadPage;
