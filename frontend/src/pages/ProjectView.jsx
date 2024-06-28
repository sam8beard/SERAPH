import React from 'react';
import medusa_logo from '../assets/medusa.png';

function ProjectView() {
    const styles = {
        parent: {
            height: '1080px',
            width: '1920px',
            padding: '100px',
            position: 'relative', // Parent container should be relative
            display: 'flex',
            justifyContent: 'space-between', // Aligns cards to left and right
        },
        projectCard: {
            backgroundColor: '#a9a9a9',
            borderRadius: '10px',
            padding: '20px',
            width: '60%', // Take up half of the parent's width
            height: '700px',
            textAlign: 'left',
            lineHeight: '1.5',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
        },
        sprintOverviewCard: {
            backgroundColor: '#a9a9a9',
            borderRadius: '10px',
            padding: '20px',
            width: '30%', // Adjust width as needed
            height: '700px',
            textAlign: 'left',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        },
        projectInfo: {
            textAlign: 'left',
            lineHeight: '1.5',
            marginBottom: '20px',
        },
        medusaContainer: {
            display: 'flex',
            alignItems: 'center', // Align items vertically in the middle
            marginBottom: '50px',
        },
        medusa_logo: {
            width: '154px',
            height: '137px',
            borderRadius: '10px',
            marginRight: '200px', // Add margin to separate image from text
        },
        projectTitle: {
            fontSize: '60px', // Reduce font size to fit alongside image
            marginTop: '0',
            fontWeight: 'bold',
        },
        progressBar: {
            width: '100%',
            backgroundColor: '#ccc',
            borderRadius: '10px',
            overflow: 'hidden',
            marginTop: '100px',
            height: '30px',
            marginBottom: '10px',
        },
        progress: {
            width: '60%',
            height: '100%',
            backgroundColor: '#00bfff',
        },
        sprintOverviewTitle: {
            textAlign: 'center',
            paddingBottom: '30px',
        },
        updateButton: {
            backgroundColor: '#d9d9d9', // Match the background color of the text boxes
            borderRadius: '10px', // Match the border radius of the text boxes
            height: '68px', // Match the height of the text boxes
            border: 'none', // Remove the border to match the text boxes
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '30px', // Match the font size of the text boxes
            fontWeight: 'bold',
            fontFamily: 'Lexend-Regular, Helvetica',
            cursor: 'pointer',
            position: 'absolute',
            zIndex: 2,
            width: '237px',
            width: '394px',
            height: '60px',
            top: '860px',
            right: '100px',
        },
        projectDescription: {
            textAlign: 'left',
            fontSize: '24px',
            margin: '10px 0',
            fontWeight: 'bold',
            padding: '20px',
        },
    };

    return (
        <div className="parent" style={styles.parent}>
            <div className='projectCard' style={styles.projectCard}>
                <div className="project-info" style={styles.projectInfo}>
                    <div style={styles.medusaContainer}>
                        <img style={styles.medusa_logo} alt="Medusa Logo" className="project-logo" src={medusa_logo} />
                        <h1 className="project-title" style={styles.projectTitle}>MEDUSA</h1>
                    </div>
                    <p className="project-description" style={styles.projectDescription}>Team Members:</p>
                    <p className="project-description" style={styles.projectDescription}>Customer:</p>
                    <p className="project-description" style={styles.projectDescription}>Technologies Used:</p>
                    <p className="project-description" style={styles.projectDescription}>Description:</p>
                    <div className="progress-bar" style={styles.progressBar}>
                        <div className="progress" style={styles.progress}></div>
                    </div>
                    <div className="buttons" style={styles.buttons}>
                        <button style={styles.updateButton} onClick={() => window.location.href = '/projectcreation'}>Update Project</button>
                    </div>
                </div>
            </div>

            <div className='sprintOverviewCard' style={styles.sprintOverviewCard}>
                <div className='sprintOverviewTitle' style={styles.sprintOverviewTitle}>
                    <h2>Sprint Overview</h2>
                </div>
                <div className="project-info" style={styles.projectInfo}>
                    <p className="project-description" style={styles.projectDescription}>Committed Load: 543</p>
                    <p className="project-description" style={styles.projectDescription}>Sprint Number: 33.2</p>
                </div>
            </div>
        </div>
    );
}

export default ProjectView;
