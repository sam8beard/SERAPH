import './EndDate.css'
import PropTypes from 'prop-types'


function EndDate(props) {
    return(
        <div className='title'>
            <div className="endTitle">
            <p>End Date</p>
            </div>
            <div className="endDateInput">
            <input type="date" className="endDate" placeholder='input end date'
            value={props.endDate}
            onChange={(e) => props.setEndDate(e.target.value)}></input>
            </div>
        </div>


    )
}
EndDate.propTypes = {
    endDate: PropTypes.string,
    setEndDate: PropTypes.func,
};

export default EndDate;