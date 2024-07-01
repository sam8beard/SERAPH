import 'bootstrap/dist/css/bootstrap.css';
import './Dashboard.css';
import CardGrid from '../components/dashboard_components/CardGrid' 
import { useState, useEffect } from 'react'
import ProjectCard from '../components/dashboard_components/ProjectCard';
import ProjectForm from '../components/dashboard_components/ProjectForm'
function Dashboard() { 
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetchProjects()
    }, [])
    const fetchProjects = async () => { 
        const response = await fetch("http://127.0.0.1:5000/get_projects")
        const data = await response.json()
        setProjects(data.projects)
        console.log(data.projects)
    }
    
    function handleSubmission(formData) { 
        fetch('/main/add_project', { 
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'

            }, 
            body: JSON.stringify(formData)
        })
    }

    return (
        <div className='parent'> 
            <CardGrid projects={projects}/> 

            <form > 
                <input type="text" placeholder='Project'/>
            </form>
            <ProjectForm/> 
        </div>
        // CREATE FORM COMPONENT AND INSERT HERE
        // HANDLE ALL OF TE 
        
    )
}

export default Dashboard;