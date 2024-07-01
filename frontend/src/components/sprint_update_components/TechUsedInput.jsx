import PropTypes from 'prop-types';

function TechUsedInput(props) {
    return (
        <div className="title">
            <div className="techTitle">
                <p>Tech Used</p>
            </div>

            <div className="techUsed">
                <div className="techUsedInput">
                    <input
                        className="techUsed"
                        placeholder="Enter name of tech used"
                        value={props.tech}
                        onChange={(e) => props.setTechUsed(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
}

TechUsedInput.propTypes = {
    tech: PropTypes.string.isRequired,
    setTechUsed: PropTypes.func.isRequired,
};

export default TechUsedInput;
