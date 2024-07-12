import 'bootstrap/dist/css/bootstrap.css';
import './ProjectView.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useState, useEffect } from 'react';

import seraph_logo from '../assets/seraph_logo.png';
import { useParams } from 'react-router-dom';

function ProjectView(  ) {
    const { projectId } = useParams();
    const [project, setProject] = useState([])
    const [sprints, setSprints] = useState([])

    useEffect(() => {
        fetchProject();
    }, []);

    const fetchProject = async () => {
        const response = await fetch(`http://127.0.0.1:5000/get_project/${projectId}`)
        const data = await response.json()
        setProject(data.project)
        console.log(data.project)
    };

    useEffect(() => {
        fetchSprints()
    }, [])

    const fetchSprints = async () => { 
        const response = await fetch(`http://127.0.0.1:5000/get_sprints/${projectId}`)
        const data = await response.json()
        setSprints(data.sprints)
        console.log(data.sprints)
    }

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
                        <h2> Sprints </h2>
                    </div>

                    <div> 
                        <Container>
                            {sprints.map((sprint) => (
                                <Row> 
                                    {sprint.startDate} - {sprint.endDate}
                                </Row>
                            ))} 
                            <Row> 
                                <Col> </Col>
                            </Row>
                        </Container>
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