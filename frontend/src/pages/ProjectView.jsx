import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Row, Button } from 'react-bootstrap';
import SprintChart from '../components/SprintChart';
import './ProjectView.css';

const ProjectView = () => {
    const { projectId } = useParams();
    const [project, setProject] = useState({});
    const [sprints, setSprints] = useState([]);

    useEffect(() => {
        fetchProject();
        fetchSprints();
    }, []);

    const fetchProject = async () => {
        try {
            const response = await fetch(`http://127.0.0.1:5000/get_project/${projectId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch project data');
            }
            const data = await response.json();
            setProject(data.project);
        } catch (error) {
            console.error('Error fetching project data:', error);
        }
    };

    const fetchSprints = async () => {
        try {
            const response = await fetch(`http://127.0.0.1:5000/get_sprints/${projectId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch sprints data');
            }
            const data = await response.json();
            setSprints(data.sprints);
        } catch (error) {
            console.error('Error fetching sprints data:', error);
        }
    };

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const aggregateChartData = () => {
        let aggregatedData = {
            labels: [],
            datasets: [
                { label: 'Velocity', data: [] },
                { label: 'Capacity', data: [] },
                { label: 'Committed Load', data: [] },
                { label: 'Uncommitted Load', data: [] },
                { label: 'Completed', data: [] },
            ],
        };

        sprints.forEach((sprint) => {
            aggregatedData.labels.push(`${formatDate(sprint.startDate)} - ${formatDate(sprint.endDate)}`);
            aggregatedData.datasets[0].data.push(sprint.velocity);
            aggregatedData.datasets[1].data.push(sprint.capacity);
            aggregatedData.datasets[2].data.push(sprint.committedLoad);
            aggregatedData.datasets[3].data.push(sprint.uncommittedLoad);
            aggregatedData.datasets[4].data.push(sprint.completed);
        });

        return aggregatedData;
    };

    return (
        <div className="parent">
            <div className="left-column">
                <div className="box1">
                    <div className="project-info">
                        <h1 className="project-title">{project.projectName ? project.projectName : 'SERAPH'}</h1>
                        <p>Team Members: {project.teamMembers ? project.teamMembers.join(', ') : 'To be added'}</p>
                        <p>Customer: {project.customerName}</p>
                        <p>Technologies Used: {project.techUsed}</p>
                        <p>Description: {project.description ? project.description : 'To be added'}</p>
                    </div>
                </div>

                <div className="box2">
                    <Container>
                        {sprints.map((sprint) => (
                            <Row key={sprint.startDate}>
                                <Button
                                    className="sprint-button"
                                    as={Link}
                                    to={`/sprintoverview/${sprint.projectID}/${sprint.startDate}`}
                                    >{`${formatDate(sprint.startDate)} - ${formatDate(sprint.endDate)}`}
                                </Button>
                            </Row>
                        ))}
                        <Row>
                            <Button
                                className="create-sprint-button"
                                as={Link}
                                to={`/sprintcreate/${projectId}`}
                                variant="secondary"
                                >Create Sprint
                            </Button>
                        </Row>
                     </Container>
                </div>
            </div>

            <div className="right-column">
                <div className="chart-container">
                    <SprintChart data={aggregateChartData()} />
                </div>
            </div>
        </div>
    );
};

export default ProjectView;
