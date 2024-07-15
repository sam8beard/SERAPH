import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import CardGrid from '../components/dashboard_components/CardGrid';
import ProjectForm from '../components/dashboard_components/ProjectForm';

function Dashboard() {
  const [projects, setProjects] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const response = await fetch("http://127.0.0.1:5000/get_projects");
    const data = await response.json();
    setProjects(data.projects);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className='dash-parent'>
      <div className='dash-header'>
        <div className="welcome">
          <div>
            <h1>Welcome to S E R A P H</h1>
            <h4>View all of your available projects</h4>
          </div>
        </div>
      </div>
      <div className="grid-parent">
        <CardGrid projects={projects} showModal={showModal} setShowModal={setShowModal} />
      </div>
      <button className="create-project-btn" onClick={toggleModal}>Create Project</button>
      {showModal && <ProjectForm />}
    </div>
  );
}

export default Dashboard;
