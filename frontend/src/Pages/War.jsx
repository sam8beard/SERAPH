import 'bootstrap/dist/css/bootstrap.css';
import { useState, useEffect } from 'react'
import ProjectForm from '../components/war_creation/WarForm'
import "./War.css";

function War() { 

    
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
            <div className="title"> </div>
            <div className="title"> </div>
            <ProjectForm/> 
        </div>
        
    )
}

export default War; 