import './EndDate.css'

function EndDate() {
    return(
        <div className='title'>
            <div className="endTitle">
            <p>End Date</p>
            </div>
            <div className="endDateInput">
            <input type="text" className="endDate" placeholder='input end date'></input>
            </div>
        </div>


    )
}

export default EndDate;