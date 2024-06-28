import './StartDate.css'
import PropTypes from 'prop-types'

function InputField(props) { 
    return ( 
        <div className='title'>
                        <div className="startTitle">
                            <p>Start Date</p>
                        </div>
                        <div className="startDateInput">
                            <input type="date" className="startDate" placeholder='input start date'
                            value={props.startDate}
                            onChange={(e) => props.setStartDate(e.target.value)}></input>
                        </div> 
        </div>
    )
}

InputField.propTypes = {
    startDate: PropTypes.string,
    setStartDate: PropTypes.func,
};
export default InputField;