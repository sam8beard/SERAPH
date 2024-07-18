import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";


const ArchivedProjectList = () => {
    const [archived, setArchived] = useState([]);

    useEffect(() => {
        fetchArchived();
    }, []);

    const fetchArchived = async() => {
        try {
            const response = await fetch("http://127.0.0.1:5000/get_archived");
            if (!response.ok) {
                throw new Error('Failed to fetch archived projects');
            }
            const data = await response.json();
            // Generate "Date Posted" for each archived project
            const archivedWithDate = data.archived.map(project => ({
                ...project,
                datePosted: new Date().toISOString().slice(0, 10) // Current date in YYYY-MM-DD format
            }));
            setArchived(archivedWithDate);
            
        } catch (error) {
            console.error('Error fetching archived projects:', error);
            
            // Handle error state or display a message
        }
        
    }
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
                {archived.map(project => (
                    
                        
                    <tr key={project.projectID}>
                        <td style={styles.td}>
                            <Link to={`/projectview/${project.projectID}`} style={{ textDecoration: 'none', color: '#ffffff' }}>
                                {project.projectID}
                            </Link>
                        </td>
                        <td style={styles.td}>{project.projectName}</td>
                        <td style={styles.td}>{project.datePosted}</td>
                    </tr>
                        
                    
                    
                ))}
            </tbody>
        </table>
    </div>
}

export default ArchivedProjectList;