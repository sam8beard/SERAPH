import 'bootstrap/dist/css/bootstrap.css';
import './Dashboard.css';
import CardGrid from '../components/dashboard_components/CardGrid';
import ProjectForm from '../components/dashboard_components/ProjectForm';
import { useState, useEffect } from 'react';

function Dashboard() {
    const [projects, setProjects] = useState([]);
    const [colsPerRow, setColsPerRow] = useState(3);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        const response = await fetch("http://127.0.0.1:5000/get_projects");
        const data = await response.json();
        setProjects(data.projects);
        console.log(data.projects);
    };

    const handleColsChange = (event) => {
        const newCols = parseInt(event.target.value);
        setColsPerRow(newCols);
    };

    return (
        <div className='parent'>
            <div className="cols-select">
                <label htmlFor="colsPerRowSelect">Columns per Row:</label>
                <select id="colsPerRowSelect" value={colsPerRow} onChange={handleColsChange}>
                    {[3, 4, 5, 6, 7].map(num => (
                        <option key={num} value={num}>{num}</option>
                    ))}
                </select>
            </div>
            
            <CardGrid projects={projects} numCols={colsPerRow} />
            
            <form>
                <input type="text" placeholder='Project' />
            </form>
            <ProjectForm />
        </div>
    );
}

export default Dashboard;
