import 'bootstrap/dist/css/bootstrap.css';
import './ProjectView.css';
import { useState, useEffect } from 'react';

import seraph_logo from '../assets/seraph_logo.png';
import { useParams } from 'react-router-dom';

function ProjectView() {
    const { projectID } = useParams();
    const [project, setProject] = useState([])

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const response = await fetch("http://127.0.0.1:5000/get_project/${projectID}")
                if (!response.ok) {
                    throw new Error("network response not valid"), 400
                }
                const data = await response.json()
                setProject(data.project)
                console.log(data.project)
            } catch (error) {
                console.error("Error fetching project data", error)
            }
        };

        fetchProject();
    }, []);

    return (
        <>
            <div className="parent">
                <div className='box1'>
                    <div className="project-info">
                        <img className="seraph_logo" alt="Seraph Logo" src={seraph_logo} />
                        <h1 className="project-title">{project.projectName ? project.projectName : "SERAPH"}</h1>
                        <p>Team Members: {project.teamMembers ? project.teamMembers.join(', ') : "To be added"}</p>
                        <p>Customer: {project.customerName}</p>
                        <p>Technologies Used: {project.techUsed}</p>
                        <p>Description: {project.description ? project.description : "To be added"}</p>
                        <div className="progress-bar-PV">
                            <div className="progress-PV" style={project.progress ? { width: `${project.progress}%` } : {width: `${project.progress}%` }}></div>
                        </div>
                    </div>
                </div>

                <div className='box2'>
                    <div className='sprint-overview-title'>
                        <h2>Sprint Overview</h2>
                    </div>
                    <p>Committed Load: 543</p>
                    <p>Sprint Number: 33.2</p>
                </div>
            </div>
            <div className='buttons'>
                <button type="update" className="update-button">Update Project</button>
            </div>
        </>
    )
}

export default ProjectView;