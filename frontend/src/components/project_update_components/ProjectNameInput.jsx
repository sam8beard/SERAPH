import PropTypes from 'prop-types';

function ProjectNameInput(props) {
    return (
        <div>
            <div>
                Current Project Name: {props.projectName}
            </div>

            <div>
                <input 
                    placeholder='Insert new project name'
                    value={props.newProjectName}
                    onChange={(e) => props.setNewProjectName(e.target.value)}
                />
            </div>
        </div>
    );
}

ProjectNameInput.propTypes = {
    projectName: PropTypes.string.isRequired,
    newProjectName: PropTypes.string.isRequired,
    setNewProjectName: PropTypes.func.isRequired,
};

export default ProjectNameInput;
