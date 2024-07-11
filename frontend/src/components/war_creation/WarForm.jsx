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
    
      })
      .catch(error => {
        console.error('Error in sending data', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="projectid"
        value={formData.projectid}
        onChange={handleChange}
        placeholder="Project ID"
      />
      <input
        type="date"
        name="startdate"
        value={formData.startdate}
        onChange={handleChange}
        placeholder="Start Date"
      />
      <input
        type="date"
        name="enddate"
        value={formData.enddate}
        onChange={handleChange}
        placeholder="End Date"
      />
      <input
        type="text"
        name="projecttitle"
        value={formData.projecttitle}
        onChange={handleChange}
        placeholder="Project Title"
      />
      
      <input
        type="text"
        name="projectstatus"
        value={formData.projectstatus}
        onChange={handleChange}
        placeholder="Status"
      />
      
      <input
        type="text"
        name="dayplan"
        value={formData.dayplan}
        onChange={handleChange}
        placeholder="Day Plan"
      />
      
      
      <input
        type="text"
        name="information"
        value={formData.information}
        onChange={handleChange}
        placeholder="Additional Information"
      />
      {/* Add other input fields as needed */}
      <button className="submit">Submit</button>
    </form>
  );
}

export default MyForm;
