import PropTypes from 'prop-types';

function TechUsedInput(props) {
    return (
        <div>
            <div>
                Current Tech Used: {props.techUsed}
            </div>

            <div>
                <input 
                    placeholder='Insert new tech used'
                    value={props.newTechUsed}
                    onChange={(e) => props.setNewTechUsed(e.target.value)}
                />
            </div>
        </div>
    );
}

TechUsedInput.propTypes = {
    techUsed: PropTypes.string.isRequired,
    newTechUsed: PropTypes.string.isRequired,
    setNewTechUsed: PropTypes.func.isRequired,
};

export default TechUsedInput;
