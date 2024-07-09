import 'bootstrap/dist/css/bootstrap.css';
import { useState, useEffect } from 'react'
import ProjectForm from '../components/WarForm'
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

            <form > 
                <input type="text" placeholder='Project'/>
            </form>
            <ProjectForm/> 
        </div>
        // CREATE FORM COMPONENT AND INSERT HERE
        // HANDLE ALL OF TE 
        
    )
}

export default War;