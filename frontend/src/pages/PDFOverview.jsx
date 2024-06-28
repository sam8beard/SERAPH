import React from "react";
import seraph_logo from '../assets/seraph_logo.png'; // Import your Seraph logo image
import metrics from '../assets/Metrics.png'; // Import your Metrics image
import lines from '../assets/Lines.png'; // Import your Lines image

const PDFOverview = () => {
  const styles = {
    exportPDFPage: {
      backgroundColor: "#ffffff",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      width: "100%",
    },
    overlapWrapper: {
      backgroundColor: "#ffffff",
      height: "1080px",
      width: "1920px",
    },
    overlap: {
      height: "1080px",
      position: "absolute",
    },
    rectangle: {
      backgroundColor: "#20375d",
      height: "1077px",
      left: "0",
      position: "absolute",
      top: "50px",
      width: "1920px",
    },
    rectangle2: {
      backgroundColor: "#ffffff",
      border: "1px solid",
      borderColor: "#000000",
      borderRadius: "10px",
      height: "837px",
      left: "632px",
      position: "absolute",
      top: "238px",
      width: "655px",
    },
    rectangle3: {
      backgroundColor: "#000000",
      borderRadius: "10px",
      height: "72px",
      left: "633px",
      opacity: "0.6",
      position: "absolute",
      top: "239px",
      width: "654px",
    },
    textWrapper2: {
      color: "#ffffff",
      fontFamily: "Lexend-Regular, Helvetica",
      fontSize: "35px",
      fontWeight: "400",
      height: "90px",
      left: "809px",
      letterSpacing: "0",
      lineHeight: "normal",
      position: "absolute",
      top: "125px",
      width: "302px",
    },
    textWrapper4: {
      color: "#000000",
      fontFamily: "Lexend-Regular, Helvetica",
      fontSize: "35px",
      fontWeight: "700",
      height: "48px",
      left: "845px",
      letterSpacing: "0",
      lineHeight: "normal",
      position: "absolute",
      textAlign: "center",
      top: "328px",
      width: "230px",
    },
    textWrapper5: {
      WebkitTextStroke: "1px #000000",
      color: "#000000",
      fontFamily: "Lexend-Regular, Helvetica",
      fontSize: "35px",
      fontWeight: "400",
      height: "70px",
      left: "837px",
      letterSpacing: "0",
      lineHeight: "normal",
      position: "absolute",
      textAlign: "center",
      top: "519px",
      width: "244px",
    },
    textWrapper6: {
      color: "#000000",
      fontFamily: "Lexend-Regular, Helvetica",
      fontSize: "33px",
      fontWeight: "400",
      height: "58px",
      left: "695px",
      letterSpacing: "0",
      lineHeight: "normal",
      position: "absolute",
      top: "852px",
      width: "131px",
    },
    textWrapper7: {
      color: "#000000",
      fontFamily: "Lexend-Regular, Helvetica",
      fontSize: "33px",
      fontWeight: "400",
      height: "58px",
      left: "892px",
      letterSpacing: "0",
      lineHeight: "normal",
      position: "absolute",
      top: "852px",
      width: "131px",
    },
    textWrapper8: {
      color: "#000000",
      fontFamily: "Lexend-Regular, Helvetica",
      fontSize: "33px",
      fontWeight: "400",
      height: "58px",
      left: "1087px",
      letterSpacing: "0",
      lineHeight: "normal",
      position: "absolute",
      top: "852px",
      width: "131px",
    },
    metricsIcon: {
      width: "493px",
      height: "216px",
      position: "absolute",
      bottom: "236px",
      left: "709px",
    },
    linesIcon: {
      position: "absolute",
      top: "397px",
      left: "709px",
    },
    group: {
      height: "169px",
      left: "1350px",
      position: "absolute",
      top: "441px",
      width: "262px",
    },
    saveButton: {
      backgroundColor: "#d9d9d9",
      border: "none",
      borderRadius: "10px",
      color: "#000000",
      fontFamily: "Inter-Light, Helvetica",
      fontSize: "20px",
      fontWeight: "300",
      height: "68px",
      left: "115px",
      position: "absolute",
      textAlign: "center",
      top: "0",
      width: "259px",
      boxShadow: "4px 4px 4px #00000040",
    },
    cancelButton: {
      backgroundColor: "#d9d9d9",
      border: "none",
      borderRadius: "10px",
      color: "#000000",
      fontFamily: "Inter-Light, Helvetica",
      fontSize: "20px",
      fontWeight: "300",
      height: "68px",
      left: "115px",
      position: "absolute",
      textAlign: "center",
      top: "115px",
      width: "259px",
      boxShadow: "4px 4px 4px #00000040",
    },
    textWrapper10: {
      color: "#ffffff",
      fontFamily: "Inter-Light, Helvetica",
      fontSize: "30px",
      fontWeight: "300",
      height: "50px",
      left: "872px",
      letterSpacing: "0",
      lineHeight: "normal",
      position: "absolute",
      textAlign: "center",
      top: "260px",
      width: "165px",
    },
    seraphIcon: {
      left: "-500px",
      top: "40px",
      position: "absolute",
      width: "1100px",
      height: "1100px",
      opacity: "0.1",
    },
  };

  return (
    <div style={styles.exportPDFPage}>
      <div style={styles.overlapWrapper}>
        <div style={styles.overlap}>
          <div style={styles.rectangle} />
          <div style={styles.textWrapper2}>Your Project PDF</div>
          <div style={styles.rectangle2} />
          <div style={styles.rectangle3} />
          <div style={styles.textWrapper4}>MEDUSA</div>
          <div style={styles.textWrapper5}>Metrics</div>
          <div style={styles.textWrapper6}>Sprint 1</div>
          <div style={styles.textWrapper7}>Sprint 2</div>
          <div style={styles.textWrapper8}>Sprint 3</div>
          
          {/* Inline style for Seraph Icon */}
          <img src={seraph_logo} alt="Seraph Icon" style={styles.seraphIcon}/>
          <img src={metrics} alt="Metrics" style={styles.metricsIcon}/>
          <img src={lines} alt="Lines" style={styles.linesIcon}/>
          
          <div style={styles.group}>
            <button style={styles.saveButton}>Save PDF</button>
            <button style={styles.cancelButton}>Cancel</button>
          </div>
          
          <div style={styles.textWrapper10}>Medusa.pdf</div>
        </div>
      </div>
    </div>
  );
};

export default PDFOverview;
