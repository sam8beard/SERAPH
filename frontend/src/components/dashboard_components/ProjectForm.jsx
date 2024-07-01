import React, { useState } from 'react';
import axios, { formToJSON } from 'axios';

function MyForm() {
  const [formData, setFormData] = useState({
    customerName: '',
    techUsed: '',
    projectID: '',
    projectName: '',
    elementChiefID: '',
    flightDirectorID: '',
    archived: null,
    projectURL: '',


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
    axios.post('http://127.0.0.1:5000/add_project', formData)
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
        name="customerName"
        value={formData.customerName}
        onChange={handleChange}
        placeholder="Customer Name"
      />
      <input
        type="text"
        name="techUsed"
        value={formData.techUsed}
        onChange={handleChange}
        placeholder="Tech Used"
      />
      <input
        type="text"
        name="projectID"
        value={formData.projectID}
        onChange={handleChange}
        placeholder="Project ID"
      />
      
      <input
        type="text"
        name="projectName"
        value={formData.projectName}
        onChange={handleChange}
        placeholder="Project Name"
      />
      
      <input
        type="text"
        name="elementChiefID"
        value={formData.elementChiefID}
        onChange={handleChange}
        placeholder="Element Chief ID"
      />
      
      <input
        type="text"
        name="flightDirectorID"
        value={formData.flightDirectorID}
        onChange={handleChange}
        placeholder="Flight Director ID"
      />
      
      
      <input
        type="number"
        name="archived"
        value={formData.archived}
        onChange={handleChange}
        placeholder="Archived"
      />
      
      <input
        type="text"
        name="projectURL"
        value={formData.projectURL}
        onChange={handleChange}
        placeholder="Photo URL"
      />
      {/* Add other input fields as needed */}
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;
