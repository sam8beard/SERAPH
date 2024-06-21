import './CommittedInput.css';

function CommittedInput() {
    return(
        <div className='title'>
                    <div className="commitTitle">
                        <p>Committed Load</p>
                    </div>

                    <div className="committed">
                    <input className="committedInput" placeholder='Input committed load'></input>
                    </div>
                </div>

    )

}

export default CommittedInput;