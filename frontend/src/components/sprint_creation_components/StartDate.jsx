import './StartDate.css'
function InputField() { 
    return ( 
        <div className='title'>
                        <div className="startTitle">
                            <p>Start Date</p>
                        </div>
                        <div className="startDateInput">
                            <input type="text" className="startDate" placeholder='input start date'></input>
                   </div> 
        </div>
    )
}
export default InputField;