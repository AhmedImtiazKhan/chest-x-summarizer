import React from "react";
import { Routes, Route } from "react-router-dom";
// import MenuBar from "./MenuBar";
import Body from "./Body";
import UploadPage from "./pages/Upload Image/UploadPage";
import SummaryPage from "./pages/Summary Page/summaryPage";
import FinalReport from "./pages/FinalReport/FinalReport";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/summary" element={<SummaryPage />} />
        <Route path="/FinalReport" element={<FinalReport />} />
      </Routes>
    </>
  );
}

export default App;
