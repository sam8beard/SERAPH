import 'bootstrap/dist/css/bootstrap.css';
import { useState, useEffect } from 'react'
import PDFForm from '../components/pdf/pdf'
import "./PDFOptions.css";

function PDFOptions() { 

    
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
            <PDFForm/> 
        </div>
        
    )
}

export default PDFOptions; 