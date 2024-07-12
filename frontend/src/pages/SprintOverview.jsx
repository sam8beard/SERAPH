import "bootstrap/dist/css/bootstrap.css";
import './SprintOverview.css';
import { useState, useEffect } from 'react';
import SprintHeader from "../components/sprint_overview_components/SprintHeader";
import SprintNotes from "../components/sprint_overview_components/SprintNotes"
import SprintInfo from "../components/sprint_overview_components/SprintInfo";
import { Chart as ChartJS } from 'chart.js/auto';

function SprintOverview() {
    const [sprint, setSprint] = useState({
        projectId: 'P011',
        startDate: '2005-01-14',
        velocity: 0,
        capacity: 0,
        committedLoad: 0,
        uncommittedLoad: 0,
        completed: 0,
        notes: ''
    });
    const [project, setProject] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchSprint();
        fetchProject();
    }, []);

    const fetchSprint = async () => {
        const { projectId, startDate } = sprint;
        const response = await fetch(`http://127.0.0.1:5000/get_sprint/${projectId}/${startDate}`);
        const data = await response.json();
        setSprint(data.sprint);
        setLoading(false);
    };

    const fetchProject = async () => {
        const { projectId } = sprint;
        const response = await fetch(`http://127.0.0.1:5000/get_project/${projectId}`);
        const data = await response.json();
        setProject(data.project);
    };

    return (
        <div className="overview-container-SO">
            <div className="left-column-SO">
                <SprintHeader sprint={sprint} project={project} />
                <SprintNotes sprint={sprint} />
            </div>
            <div className="right-column-SO">
                <SprintInfo sprint={sprint} />
            </div>
            
        </div>
    );
}

export default SprintOverview;
