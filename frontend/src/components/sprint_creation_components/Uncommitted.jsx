import './Uncommitted.css';

function Uncommitted() {
    return(
        <div className="title">
        <div className="uncommitTitle">
            <p>Uncommitted Load</p>
        </div>
        <div className="uncommitted">
        <input className="uncommittedInput" placeholder='Input uncommitted load'></input>
        </div>
    </div>


    )
}

export default Uncommitted;