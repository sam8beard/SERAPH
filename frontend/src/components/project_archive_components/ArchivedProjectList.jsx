import { useEffect, useState } from "react";
import React from "react";


const ArchivedProjectList = ({projects}) => {
    const styles = {
        container: {
            backgroundColor: '#f8f8f8',
            width: '1219px',
            height: '689px',
            left: '93px',
            top: '201px',
            right: '607px',
            position: 'absolute',
            zIndex: 2,
            border: '2px solid #000',
            fontFamily: 'Lexend, Helvetica-light'
        },
        title: {
            fontSize: "24px",
            fontWeight: "bold",
            marginBottom: "20px",
            color: "#333"
        },
        table: {
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "10px",
            border: "1px solid #ddd"
        },
        th: {
            backgroundColor: "#f4f4f4",
            padding: "10px",
            textAlign: "center",
        },
        td: {
            padding: "12px",
            backgroundColor:"#5E7190",
            borderBottom: "1px solid #000",
            borderTop: "1px solid #000",
            textAlign: "center",
            fontSize: "16px",
            color: "#ffffff",
            fontFamily: "Montserrat, sans-serif",
            cursor: "pointer"
        }



    }
    
    return <div style = {styles.container}>
        <table style= {styles.table}>
            <thead>
                <tr>
                    <th style = {styles.th}>Project ID</th>
                    <th style = {styles.th}>Project Name</th>
                    <th style = {styles.th}>Date Posted</th>
                </tr>
            </thead>
            <tbody>
                {projects.map(project => (
                    <tr key = {project.projectID}>
                        <td style={styles.td}>{project.projectID}</td>
                        <td style={styles.td}>{project.projectName}</td>
                        <td style={styles.td}>{project.endDate}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
}

export default ArchivedProjectList;
