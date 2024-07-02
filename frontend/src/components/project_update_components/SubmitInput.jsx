import PropTypes from 'prop-types';

function SubmitInput({onSubmit}) {
    return (
        <div>
            <button type="submit" onClick={onSubmit}>
                Submit
            </button>
        </div>
    )
}

SubmitInput.propTypes = {
    onSubmit: PropTypes.func,
};

export default SubmitInput;