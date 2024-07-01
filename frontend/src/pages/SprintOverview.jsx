import "bootstrap/dist/css/bootstrap.css";
import './SprintOverview.css';
import { useState, useEffect } from 'react';
import SprintHeader from "../components/sprint_overview_components/SprintHeader";
import SprintInfo from "../components/sprint_overview_components/SprintInfo";

function SprintOverview() {
    const [sprint, setSprint] = useState([])

    useEffect(() => {
        fetchSprint()
    }, [])

    const fetchSprint = async() => {
        const response = await fetch("http://127.0.0.1:5000/get_sprint/13")
        const data = await response.json()
        setSprint(data.sprint)
        console.log(data.sprint)
    }

    return (
        <div>
            <SprintHeader sprint={sprint} />
            <SprintInfo sprint={sprint} />
        </div>
    );
}

export default SprintOverview;