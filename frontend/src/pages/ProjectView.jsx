import 'bootstrap/dist/css/bootstrap.css';
import './ProjectView.css';

function ProjectView() {
    return (
        <>
            <div className="parent">
                <div className='project-card'>
                    <div className="project-info">
                        <img src="medusa.png" alt="Medusa Logo" className="project-logo" />
                        <h1 className="project-title">MEDUSA</h1>
                        <p>Team Members:</p>
                        <p>Customer:</p>
                        <p>Technologies Used:</p>
                        <p>Description:</p>
                        <div className="progress-bar-PV">
                            <div className="progress-PV"></div>
                        </div>
                    </div>
                </div>

                <div className='sprint-overview-card'>
                    <div className='sprint-overview-title'>
                        <h2>Sprint Overview</h2>
                    </div>
                    <p>Committed Load: 543</p>
                    <p>Sprint Number: 33.2</p>
                </div>
            </div>
            <div className='buttons'>
                <button type="update" className="update-button">Update Project</button>
            </div>
        </>
    )
}

export default ProjectView;