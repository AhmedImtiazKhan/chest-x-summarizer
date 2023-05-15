import React from "react";
import { Container, Button } from "react-bootstrap";
import styles from './report.module.css'

function FinalReport() {
  return (
    <Container>
      <h1 className={styles.mainHeading}>Complete Report</h1>
      <div className={styles.text}><b>REPORT</b>: CT XRAY OF THE CHEST</div>
      <div className={styles.text}><b>INDICATION</b>: The patient presented with persistent cough and chest pain.</div>
      <div className={styles.text}><b>TECHNIQUE</b>: Non-contrast CT scan of the chest was performed using a 64-slice multidetector CT scanner.</div>
      <div className={styles.text}><b>FINDINGS</b>: The CT scan of the chest reveals mild to moderate bilateral bronchial wall thickening and patchy ground-glass opacities scattered throughout both lungs, consistent with bronchitis and/or atypical pneumonia. No evidence of pulmonary embolism or pneumothorax is noted. The heart and mediastinum appear unremarkable. The osseous structures of the chest appear intact.</div>
      <div className={styles.text}><b>IMPRESSION</b>: Findings are consistent with mild to moderate bilateral bronchitis and/or atypical pneumonia. Correlation with clinical symptoms is recommended.</div>
      <div className={styles.text}><b>DISCUSSION</b>: The CT scan of the chest shows bronchial wall thickening and ground-glass opacities, which are commonly seen in cases of bronchitis and/or atypical pneumonia. No evidence of pulmonary embolism or pneumothorax is noted. It is important to correlate these findings with the patient's clinical symptoms for an accurate diagnosis and appropriate treatment. The osseous structures of the chest appear intact.</div>
      <div className={styles.text}><b>CONCLUSION</b>: The non-contrast CT scan of the chest reveals mild to moderate bilateral bronchitis and/or atypical pneumonia. Clinical correlation is recommended for further management.</div>
      <Button style={{ width: '373px', height: '80px', borderRadius: '56px', fontSize: '24px', marginTop: '50px' }}>Generate Report's Summary</Button>
      <Button style={{ width: '273px', height: '80px', borderRadius: '56px', fontSize: '24px', marginTop: '50px', marginLeft:"20px" }}  onClick={() => window.location.href = '/upload'}><b>NEW CXRAY</b></Button>
    </Container>
  );
}

export default FinalReport;
