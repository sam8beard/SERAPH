import React, { useEffect, useState } from "react";
import seraph_logo from '../assets/seraph_logo-1.png';
import filter_icon from '../assets/filter_icon.png';
import search_icon from '../assets/search_icon.png';
import List from '../components/project_archive_components/ArchivedProjectList.jsx'


function ProjectArchive() {
    const [archivedProjects, setArchivedProjects] = useState([])


    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        const storedProjects = localStorage.getItem('archivedProjects');
        if(storedProjects) {
            setArchivedProjects(JSON.parse(storedProjects));
        }
    })
    const filteredProjects = archivedProjects.filter(project => {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        return (
            project.projectName.toString().toLowerCase().includes(lowerCaseSearchTerm) ||
            project.projectID.toString().includes(lowerCaseSearchTerm)
        );
    })
    const styles = {
        mainContainer: {
            backgroundColor: '#20375d',
            height: '1080px',
            width: '1920px',
            overflow: 'hidden',
            position: 'relative'
        },
        innerContainer: {
            backgroundColor: '#ffffff',
            height: '1080px',
            width: '1920px',
            overflow: 'hidden'
        },
        header: {
            backgroundColor: '#20375d',
            height: '128px',
            left: 0,
            right: 0,
            position: 'absolute',
            top: 0,
            width: '1924px',
            borderBottom: '3px solid #ffffff',
            zIndex: 1
        },
        projectListContainer: {
            backgroundColor: '#20375d',
            height: '952px',
            top: '75px',
            position: 'relative',
            width: '1920px'
        },
        sectionTitle: {
            color: '#ffffff',
            fontFamily: 'Lexend-Light, Helvetica',
            fontSize: '30px',
            fontWeight: 300,
            left: '872px',
            letterSpacing: 0,
            lineHeight: 'normal',
            position: 'absolute',
            textAlign: 'center',
            top: '43px',
            width: '265px'
        },
        projectImage: {
            width: '972px',
            height: '986px',
            right: '-249px',
            overflow: 'hidden',
            position: 'absolute',
            opacity: 0.25,
            zIndex: 1
        },
        exportButton: {
            backgroundColor: '#d9d9d9',
            position: 'absolute',
            top: '459px',
            width: '259px',
            height: '69px',
            right: '141px',
            zIndex: 2,
            opacity: 1,
            borderRadius: '10px',
            fontSize: '20px',
        },
        searchContainer: {
            backgroundColor: '#dfdfdf',
            width: '1194px',
            height: '45px',
            borderRadius: '10px',
            left: '105px',
            top: '141px',
            position: 'absolute',
            paddingLeft: '50px'
        },
        searchIcon: {
            width: '34px',
            height: '34px',
            left: '117px',
            top: '154px',
            position: 'absolute',
            zIndex: 2
        },
        searchText: {
            color: '#000000',
            fontFamily: 'Lexend-Regular, Helvetica',
            fontSize: '20px',
            fontWeight: 300,
            letterSpacing: 0,
            lineHeight: 'normal',
            position: 'absolute',
            textAlign: 'center',
            opacity: 0.5,
            top: '152px',
            left: '185px'
        },
        projectGridContainer: {
            backgroundColor: '#f8f8f8',
            width: '1219px',
            height: '689px',
            left: '93px',
            top: '201px',
            right: '607px',
            position: 'absolute',
            zIndex: 2,
            border: '2px solid #000'
        },
        columnHeader: {
            color: '#000000',
            fontFamily: 'Lexend-Regular, Helvetica',
            fontSize: '20px',
            fontWeight: 300,
            letterSpacing: 0,
            lineHeight: 'normal',
            position: 'absolute',
            textAlign: 'center',
            top: '14px',
            left: '31px',
            zIndex: 4
        },
        columnHeader1: {
            color: '#000000',
            fontFamily: 'Lexend-Regular, Helvetica',
            fontSize: '20px',
            fontWeight: 300,
            letterSpacing: 0,
            lineHeight: 'normal',
            position: 'absolute',
            textAlign: 'center',
            top: '14px',
            left: '173px',
            zIndex: 4
        },
        columnHeader2: {
            color: '#000000',
            fontFamily: 'Lexend-Regular, Helvetica',
            fontSize: '20px',
            fontWeight: 300,
            letterSpacing: 0,
            lineHeight: 'normal',
            position: 'absolute',
            textAlign: 'center',
            top: '14px',
            right: '57px',
            zIndex: 4
        },
        statusColumn: {
            color: '#000000',
            fontFamily: 'Lexend-Regular, Helvetica',
            fontSize: '20px',
            fontWeight: 300,
            letterSpacing: 0,
            lineHeight: 'normal',
            position: 'absolute',
            textAlign: 'center',
            top: '14px',
            left: '173px',
            zIndex: 4
        },
        filterIcon1: {
            left: '235px',
            top: '20px',
            width: '19.743px',
            height: '9.636px',
            zIndex: 4,
            position: 'absolute'
        },
        titleColumn: {
            color: '#000000',
            fontFamily: 'Lexend-Regular, Helvetica',
            fontSize: '20px',
            fontWeight: 300,
            letterSpacing: 0,
            lineHeight: 'normal',
            position: 'absolute',
            textAlign: 'center',
            top: '14px',
            right: '57px',
            zIndex: 4
        },
        filterIcon2: {
            right: '30px',
            top: '20px',
            width: '19.743px',
            height: '9.636px',
            zIndex: 4,
            position: 'absolute'
        },
        statusRow: {
            backgroundColor: '#5E7190',
            left: '5px',
            right: '5px',
            top: '46px',
            width: '1205px',
            height: '59px',
            zIndex: 4,
            position: 'absolute'
        },
        statusText: {
            color: '#ffffff',
            fontFamily: 'Lexend-Regular, Helvetica',
            fontSize: '20px',
            fontWeight: 300,
            letterSpacing: 0,
            lineHeight: 'normal',
            position: 'absolute',
            textAlign: 'center',
            top: '17px',
            left: '27px'
        },
        titleText: {
            color: '#ffffff',
            fontFamily: 'Lexend-Regular, Helvetica',
            fontSize: '20px',
            fontWeight: 300,
            letterSpacing: 0,
            lineHeight: 'normal',
            position: 'absolute',
            textAlign: 'center',
            top: '17px',
            left: '505px'
        },
        datePostedText: {
            color: '#ffffff',
            fontFamily: 'Lexend-Regular, Helvetica',
            fontSize: '20px',
            fontWeight: 300,
            letterSpacing: 0,
            lineHeight: 'normal',
            position: 'absolute',
            textAlign: 'center',
            top: '17px',
            right: '65px'
        },
        dividerVertical: {
            backgroundColor: '#000000',
            width: '2px',
            height: '688px',
            left: '149px',
            position: 'absolute',
            zIndex: 5
        },
        dividerHorizontal: {
            backgroundColor: '#000000',
            width: '1203px',
            left: '5px',
            right: '5px',
            height: '2px',
            top: '46px',
            position: 'absolute',
            zIndex: 6
        }
    };

    return (
        <div style={styles.mainContainer}>
            <div style={styles.innerContainer}>

                <div style={styles.projectListContainer}>
                    <div style={styles.sectionTitle}>Your Past Projects</div>
                    <img style={styles.projectImage} alt="Project Image" src={seraph_logo}/>

                    <button className="button-box" style={styles.exportButton} onClick={() => window.location.href = '/pdfoverview'}> Export Project PDF </button>

                    <img style={styles.searchIcon} alt="Search Icon" src={search_icon}/>

                    <input type="text" style={styles.searchContainer} placeholder="Search " className="input-box" value={searchTerm} onChange={handleSearch} />
                    {/*
                    <div style={styles.projectGridContainer}>
                        <div style={styles.columnHeader}>STATUS</div>
                        <div style={styles.columnHeader1}>TITLE</div>
                        <img style={styles.filterIcon1} alt="Filter Icon" src={filter_icon}/>
                        <div style={styles.columnHeader2}>DATE POSTED</div>
                        <img style={styles.filterIcon2} alt="Filter Icon" src={filter_icon}/>
                        <div style={styles.statusRow}>
                            <div style={styles.statusText}>Complete</div>
                            <div style={styles.titleText}>MEDUSA</div>
                            <div style={styles.datePostedText}>Jun 10, 2024</div>
                        </div>
                        <div style={styles.dividerVertical}></div>
                        <div style={styles.dividerHorizontal}></div>
                    </div> */}
                    <div>
                        <List projects = {filteredProjects}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectArchive;