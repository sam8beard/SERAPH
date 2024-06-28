import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import "/Users/paul/Desktop/robins-afb/SERAPH/frontend/src/pages/PDFOverview.css";

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff",
    color: "black",
  },
  section: {
    margin: 10,
    padding: 10,
  },
  viewer: {
    width: "100%", // Full width
    height: "100vh", // Full height of the viewport
  },
});

// Create Document Component
function BasicDocument() {
  return (
    <Document>
      {/* Start of the document */}
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Hello</Text>
        </View>
        <View style={styles.section}>
          <Text>World</Text>
        </View>
      </Page>
    </Document>
  );
}

const PDFOverview = () => {
  return (
    <div className="export-PDF-page">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="rectangle" />
          <div className="div" />
          <img className="image" alt="Image" src="image-5.png" />
          <p className="text-wrapper">S E R A P H</p>
          <div className="text-wrapper-2">Your Project PDF</div>
          <div className="text-wrapper-3">Welcome User</div>
        
          <img src="../assets/SERAPH_ICON.png" />

          <div className="group">
            <div className="overlap-group">
              <div className="buttons">
                <PDFDownloadLink
                  document={<BasicDocument />}
                  fileName="document.pdf"
                  className="save-button"
                >
                  {({ blob, url, loading, error }) =>
                    loading ? "Loading document..." : "Save PDF"
                  }
                </PDFDownloadLink>
                <button className="cancel-button" onClick={() => window.close()}>
                  Cancel
                </button>
              </div>
            </div>
          </div>

          <div className="text-wrapper-10">Medusa.pdf</div>
        </div>

        <PDFViewer style={styles.viewer}>
          <BasicDocument />
        </PDFViewer>
      </div>
    </div>
  );
};

export default PDFOverview;






/* import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    PDFViewer,
  } from "@react-pdf/renderer";
  // Create styles
  const styles = StyleSheet.create({
    page: {
      backgroundColor: "#ffffff",
      color: "black",
    },
    section: {
      margin: 10,
      padding: 10,
    },
    viewer: {
      width: window.innerWidth, //the pdf viewer will take up all of the width and height
      height: window.innerHeight,
    },
  });
  
  // Create Document Component
  function BasicDocument() {
    return (
      <PDFViewer style={styles.viewer}>
        {}
        <Document>
        
          <Page size="A4" style={styles.page}>
            <View style={styles.section}>
              <Text>Hello</Text>
            </View>
            <View style={styles.section}>
              <Text>World</Text>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    );
  }
  export default BasicDocument; */