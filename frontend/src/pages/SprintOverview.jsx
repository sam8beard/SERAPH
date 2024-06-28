import "bootstrap/dist/css/bootstrap.css";
import './SprintOverview.css';
import { useState, useEffect } from 'react';
import SprintHeader from "../components/sprint_overview_components/SprintHeader";
import SprintInfo from "../components/sprint_overview_components/SprintInfo";

function SprintOverview() {
    const [sprints, setSprints] = useState([])

    useEffect(() => {
        fetchSprints()
    }, [])

    const fetchSprints = async() => {
        const response = await fetch("http://127.0.0.1:5000/get_sprints")
        const data = await response.json()
        setSprints(data.sprints)
        console.log(data.sprints)
    }

    return (
        <div>
            <SprintHeader sprints={sprints} />
            {/* <SprintInfo sprint={sprint} /> */}
        </div>
    );
}

export default SprintOverview;