import './EndDate.css'
import PropTypes from 'prop-types'

const formatDate = (dateString) => {
    const dateObject = new Date(dateString);
    const year = dateObject.getFullYear();
    const month = String(dateObject.getMonth() + 1).padStart(2, '0');
    const day = String(dateObject.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

function EndDate(props) {
    return(
        <div className='title'>
            <div className="endTitle">
            <p>End Date</p>
            </div>
            <div className="endDateInput">
            <input type="date" className="endDate" placeholder='input end date'
            value={formatDate(props.endDate)}
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