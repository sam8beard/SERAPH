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
                    value={props.projectName}
                    onChange={(e) => props.setProjectName(e.target.value)}
                />
            </div>
        </div>
    );
}

ProjectNameInput.propTypes = {
    projectName: PropTypes.string,
    setProjectName: PropTypes.func,
};

export default ProjectNameInput;
