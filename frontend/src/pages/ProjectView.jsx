import React from 'react';
import medusa_logo from '../assets/medusa.png';

function ProjectView() {

    const styles = {
        parent: {
            height: '1080px',
            width: '1920px',
            padding: '50px',
            position: 'absolute',
        },
        projectCard: {
            backgroundColor: '#a9a9a9',
            borderRadius: '10px',
            padding: '10px',
            width: '1082px',
            height: '700px',
            textAlign: 'left',
            lineHeight: '50px',
            marginBottom: '20px',
            position: 'absolute',
            marginTop: '20px',
        },
        sprintOverviewCard: {
            backgroundColor: '#a9a9a9',
            borderRadius: '10px',
            padding: '10px',
            width: '508px',
            height: '700px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            textAlign: 'left',
            position: 'absolute',
            right: '150px',
            marginTop: '20px',
        },
        projectInfo: {
            textAlign: 'left',
            padding: 'auto',
            lineHeight: '50px',
        },
        medusa_logo: {
            width: '154px',
            height: '137px',
            borderRadius: '10px',
            marginLeft: '42px',
            marginTop: '35px',
        },
        projectTitle: {
            textAlign: 'center',
            fontSize: '100px',
            marginTop: '35px',
        },
        progressBar: {
            width: '100%',
            backgroundColor: '#ccc',
            borderRadius: '10px',
            overflow: 'hidden',
            marginTop: '90px',
            height: '20px',
            marginBottom: '10px',
        },
        progress: {
            width: '50%',
            height: '100%',
            backgroundColor: '#00bfff',
        },
        sprintOverviewTitle: {
            textAlign: 'center',
            paddingBottom: '30px',
        },
        updateButton: {
            backgroundColor: '#a9a9a9',
            color: 'black',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            padding: '10px 20px',
        },
        buttons: {
            position: 'relative',
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-end',
            padding: '20px',
        },
        projectDescription: {
            color: 'black',  // Example of changing color to blue
            textAlign: 'left',
            fontSize: '24px',
            margin: '10px 0',
            marginLeft: '20px'
        },
    };

    return (
        <>
            <div className="parent" style={styles.parent}>
                <div className='projectCard' style={styles.projectCard}>
                    <div className="project-info" style={styles.projectInfo}>
                        <img style={styles.medusa_logo} alt="Medusa Logo" className="project-logo" src={medusa_logo} />
                        <h1 className="project-title" style={styles.projectTitle}>MEDUSA</h1>
                        <p className="project-description" style={styles.projectDescription}>Team Members:</p>
                        <p className="project-description" style={styles.projectDescription}>Customer:</p>
                        <p className="project-description" style={styles.projectDescription}>Technologies Used:</p>
                        <p className="project-description" style={styles.projectDescription}>Description:</p>
                        <div className="progress-bar" style={styles.progressBar}>
                            <div className="progress" style={styles.progress}></div>
                        </div>
                    </div>
                </div>

                <div className='sprintOverviewCard' style={styles.sprintOverviewCard}>
                    <div className='sprintOverviewTitle' style={styles.sprintOverviewTitle}>
                        <h2>Sprint Overview</h2>
                    </div>
                    <p className="project-description" style={styles.projectDescription}>Committed Load: 543</p>
                    <p className="project-description" style={styles.projectDescription}>Sprint Number: 33.2</p>
                </div>
            </div>
        </>
    )
}

export default ProjectView;
