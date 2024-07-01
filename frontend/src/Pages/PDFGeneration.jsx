import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    PDFViewer,
} from "@react-pdf/renderer";

import "./PDFGeneration.css";

// Create styles
const styles = StyleSheet.create({
    page: {
        backgroundColor: "#FFFFFF",
        color: "black",
    },
    section: {
        margin: 10,
        padding: 10,
    },
    viewer: {
        width: window.innerWidth / 3,
        height: window.innerHeight,
    },
});

// Create Document Component
function PDFGeneration() {
    return (
        <div className="export-PDF-page">     
            <div className="title">Your Project PDF</div>

            <PDFViewer style={styles.viewer}>
                <Document>            
                    <Page size="A4" style={styles.page}>
                        <View style={styles.section}>
                            <Text>SERAPH</Text>
                        </View>
                        <View style={styles.section}>
                            <Text>World</Text>
                        </View>
                    </Page>
                </Document>
            </PDFViewer>

            <div className="buttons">
                <button className="save-button">Save PDF</button>
                <button className="cancel-button">Cancel</button>
            </div>                
        </div>
    );
}
export default PDFGeneration;







/* import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    PDFViewer,
  } from "@react-pdf/renderer";

import "./PDFGeneration.css";


  // Create styles
  const styles = StyleSheet.create({
    page: {
      backgroundColor: "#FFFFFF",
      color: "black",
    },
    section: {
      margin: 10,
      padding: 10,
    },
    viewer: {
        width: window.innerWidth / 3,
        height: window.innerHeight / 2,
    },
  });
  
  // Create Document Component
  function PDFGeneration() {
    return (
     <div className="export-PDF-page">
        <div className="overlap-wrapper">
            <div className="overlap">
                <div className="text-wrapper-2">Your Project PDF</div>
                
                <PDFViewer style={styles.viewer}>
                   
                    <Document>
                
                    <Page size="A4" style={styles.page}>
                        <View style={styles.section}>
                        <Text>SERAPH</Text>
                        </View>
                        <View style={styles.section}>
                        <Text>World</Text>
                        </View>
                    </Page>
                    </Document>
                </PDFViewer>

                <div className="group">
                    <div className="overlap-group">
                        <div className="buttons">
                            <button className="save-button">Save PDF</button>
                            <button className="cancel-button">Cancel</button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
      </div>
    );
  }
  export default PDFGeneration; */