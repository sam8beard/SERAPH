import PropTypes from 'prop-types';

function ProjectNameInput(props) {
    return (
        <div className="title">
            <div className="projectTitle">
                <p>Project Name</p>
            </div>

            <div className="project">
                <div className="projectInput">
                    <input
                        className="projectInputField"
                        placeholder="Enter name of project"
                        value={props.project}
                        onChange={(e) => props.setProjectName(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
}

ProjectNameInput.propTypes = {
    project: PropTypes.string.isRequired,
    setProjectName: PropTypes.func.isRequired,
};

export default ProjectNameInput;
