import React, { useState } from 'react';
import axios, { formToJSON } from 'axios';
import './WarForm.css'

function MyForm() {
  const [formData, setFormData] = useState({
    projectid: '',
    startdate: '',
    enddate: '',
    projecttitle: '',
    projectstatus: '',
    dayplan: '',
    information: '',

    // Add other fields as needed
  });

  const [successMessage, setSuccessMessage] = useState('');


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the function to send data to Flask backend
    sendDataToBackend();
  };

  const sendDataToBackend = () => {
    axios.post('http://127.0.0.1:5000/add_war', formData)
      .then(response => {
        console.log('Data sent successfully:', response.data);
        setSuccessMessage('Data sent successfully!');
    
      })
      .catch(error => {
        console.error('Error in sending data', error);
        setSuccessMessage('Error in sending data', error);
      });
  };

  return (
    <div className="parent">
      <div className="title">War Form</div>
      <form onSubmit={handleSubmit}>
        <div className="grid-container">
          <div className="grid-item">
            <div className="heading">Project ID</div>
            <textarea
              type="text"
              name="projectid"
              value={formData.projectid}
              onChange={handleChange}
              placeholder="Project ID"
              className="form"
            />
  
            <div className="heading">Start Date</div>
            <input
              type="date"
              name="startdate"
              value={formData.startdate}
              onChange={handleChange}
              placeholder="Start Date"
              className="form"
            />
  
            <div className="heading">End Date</div>
            <input
              type="date"
              name="enddate"
              value={formData.enddate}
              onChange={handleChange}
              placeholder="End Date"
              className="form"
            />
  
            <div className="heading">Project Title</div>
            <textarea
              type="text"
              name="projecttitle"
              value={formData.projecttitle}
              onChange={handleChange}
              placeholder="Project Title"
              className="form"
            />

            <div className="heading">Project Status</div>
            <textarea
              type="text"
              name="projectstatus"
              value={formData.projectstatus}
              onChange={handleChange}
              placeholder="Status"
              className="stat"
            />
          </div>
  
          <div className="grid-item">
            <div className="heading">Day Plan</div>
            <textarea
              type="text"
              name="dayplan"
              value={formData.dayplan}
              onChange={handleChange}
              placeholder="Day Plan"
              className="day"
            />
  
            <div className="heading">Additional Information</div>
            <textarea
              type="text"
              name="information"
              value={formData.information}
              onChange={handleChange}
              placeholder="Additional Information"
              className="info"
            />
          </div>
        </div>
  
        <button className="submit">Submit</button>
        {successMessage && <div className="success-message">{successMessage}</div>}

      </form>
    </div>
  );
  
}

export default MyForm;
