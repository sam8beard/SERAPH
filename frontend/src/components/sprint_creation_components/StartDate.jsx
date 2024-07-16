import './StartDate.css';
import PropTypes from 'prop-types';

function InputField(props) {
    const formatDate = (dateString) => {
        const dateObject = new Date(dateString);
        const year = dateObject.getFullYear();
        const month = String(dateObject.getMonth() + 1).padStart(2, '0');
        const day = String(dateObject.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    return (
        <div className='title'>
            <div className="startTitle">
                <p>Start Date</p>
            </div>
            <div className="startDateInput">
                <input
                    type="date"
                    className="startDate"
                    placeholder='input start date'
                    value={formatDate(props.startDate)}
                    onChange={(e) => props.setStartDate(e.target.value)}
                />
            </div>
        </div>
    );
}

InputField.propTypes = {
    startDate: PropTypes.string,
    setStartDate: PropTypes.func,
};

export default InputField;
