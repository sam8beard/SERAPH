import PropTypes from 'prop-types';

function TechUsedInput(props) {
    return (
        <div>
            <div>
                Current Tech Used: AAAAA BBBBB CCCCC
            </div>

            <div>
                <input placeholder='Input new tech used'
                value={props.techUsed}
                onChange={(e) => props.setTechUsed(e.target.value)}></input>
            </div>
        </div>
    )
}

TechUsedInput.propTypes = {
    techUsed: PropTypes.number,
    setTechUsed: PropTypes.func,
};

export default TechUsedInput;