import "bootstrap/dist/css/bootstrap.css";
import './SprintOverview.css';
import { useState, useEffect } from 'react';
import SprintHeader from "../components/sprint_overview_components/SprintHeader";
import SprintNotes from "../components/sprint_overview_components/SprintNotes"
import SprintInfo from "../components/sprint_overview_components/SprintInfo";
import { Chart as ChartJS } from 'chart.js/auto';
import { useParams } from 'react-router-dom';

function SprintOverview() {
    const { projectId, startDate } = useParams();
    const [sprint, setSprint] = useState([]);
    const [project, setProject] = useState([]);

    useEffect(() => {
        fetchSprint();
        fetchProject();
    }, []);

    const fetchSprint = async () => {
        const response = await fetch(`http://127.0.0.1:5000/get_sprint/${projectId}/${startDate}`);
        const data = await response.json();
        setSprint(data.sprint);
        console.log(data.sprint);
    };

    const fetchProject = async () => {
        const response = await fetch(`http://127.0.0.1:5000/get_project/${projectId}`);
        const data = await response.json();
        setProject(data.project);
        console.log(data.project);
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
