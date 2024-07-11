import "bootstrap/dist/css/bootstrap.css";
import './SprintOverview.css';
import { useState, useEffect } from 'react';
import SprintHeader from "../components/sprint_overview_components/SprintHeader";
import SprintInfo from "../components/sprint_overview_components/SprintInfo";
import { Chart as ChartJS } from 'chart.js/auto'
import { Bar, Doughnut, Line } from "react-chartjs-2" 

function SprintOverview() {
    const [sprint, setSprint] = useState({ projectId: 69, startDate: '2005-01-14' });

    useEffect(() => {
        fetchSprint();
    }, []);

    const fetchSprint = async () => {
        const { projectId, startDate } = sprint;
        const response = await fetch(`http://127.0.0.1:5000/get_sprint/${projectId}/${startDate}`);
        const data = await response.json();
        setSprint(data.sprint);
        console.log(data.sprint);
    };

    return (
        <div>
            <SprintHeader sprint={sprint} />
            <SprintInfo sprint={sprint} />
        </div>
    );
}

export default SprintOverview;
