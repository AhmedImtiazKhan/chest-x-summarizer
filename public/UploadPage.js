import React from "react";
import { Container,  Button } from "react-bootstrap";
import Image from 'react-bootstrap/Image';

function UploadPage() {
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center" style={{height: '100vh'}}>
      <Image src="./UploadImage.png" alt="Upload image" fluid className="mb-3" style={{width: '500px', height: '500px'}} />
      <div className="d-flex justify-content-center">
        <Button variant="primary" className="p-2 px-5 rounded-pill mr-2">
          Upload Image
        </Button>
        <Button variant="secondary" className="p-2 px-5 rounded-pill ml-2" style={{backgroundColor: 'transparent', color: 'grey'}}>
          Process
        </Button>
      </div>
    </Container>
  );
}

export default UploadPage;
