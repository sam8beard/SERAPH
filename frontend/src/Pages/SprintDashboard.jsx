import 'bootstrap/dist/css/bootstrap.css';
import './SprintDashboard.css';
import CardGrid from '../components/sprint_components/CardGrid' 
import { useState, useEffect } from 'react'
import SprintCard from '../components/sprint_components/SprintCard';


function SprintDashboard() { 
    const [sprints, setSprints] = useState([])

    useEffect(() => {
        fetchSprints()
    }, [])

    const fetchSprints = async () => { 
        const response = await fetch("http://127.0.0.1:5000/get_sprints")
        const data = await response.json()
        setSprints(data.sprints)
        console.log(data.sprints)
    }

    return (
        <div className='parent'> 
            <CardGrid sprints={sprints}/> 
        </div>
    )
}

export default SprintDashboard;
