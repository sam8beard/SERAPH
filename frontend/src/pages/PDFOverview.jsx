import React, { useState, useEffect } from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import "./PDFOverview.css";
import CardGrid from '../components/dashboard_components/CardGrid' 

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#FFFFFF",
    color: "black",
  },
  section: {
    margin: 10,
    padding: 10,
    textAlign: 'center',
    fontWeight: 900,
    
  },
  viewer: {
    width: window.innerWidth - 1000,
    height: window.innerHeight,
  },
  info: {
    margin: 10,
    padding: 10,
    fontWeight: 10,
    
  },
});

// Create Document Component
function PDFOverview() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const response = await fetch("http://127.0.0.1:5000/get_projects");
    const data = await response.json();
    setProjects(data.projects);
    console.log(data.projects);
  };



  return (
    <div className="export-PDF-page">
      <div className="title">Your Project PDF</div>

      <PDFViewer style={styles.viewer}>
        <Document>
          <Page size="Letter" style={styles.page}>
            <View style={styles.section}>
              <Text>Project Overview</Text>
            </View>
            {projects.map((project, index) => (
              <View key={index} style={styles.info}>
                <Text>Project Name: {project.projectName}</Text>
                <Text>Customer Name: {project.customerName}</Text>
                <Text>Tech Used: {project.techUsed}</Text>
                <Text>Project ID: {project.projecturl}</Text>
                
              </View>
            ))}
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

export default PDFOverview;









/* import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import "./PDFOverview.css";

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




function PDFOverview() {
  const [projects, setProjects] = useState([])

    useEffect(() => {
        fetchProjects()
    }, [])
    const fetchProjects = async () => { 
        const response = await fetch("http://127.0.0.1:5000/get_projects")
        const data = await response.json()
        setProjects(data.projects)
        console.log(data.projects)
    }


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
export default PDFOverview;
 */
