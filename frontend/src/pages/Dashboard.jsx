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
        <div className='dash-parent'> 
            <div className='dash-header'> 
                <div className="welcome"> 
                    <div> 
                        <h1> Welcome to S E R A P H </h1>

                    </div>
                    <div> 
                        {/* <h4> View all of your available projects </h4> */}

                    </div> 
                </div>
                
            </div>
            <div className="grid-parent"> 
                 <CardGrid projects={projects}/> 
            </div>
            

            <form> 
                <input type="text" placeholder='Project'/>
            </form>
            <ProjectForm />
        </div>
    );
}

export default Dashboard;
