import './SprintCreation.css'
import StartDate from '../components/sprint_creation_components/StartDate.jsx';
import EndDate from '../components/sprint_creation_components/EndDate.jsx';
import SprintInput from '../components/sprint_creation_components/SprintInput.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import CommittedInput from '../components/sprint_creation_components/CommittedInput';
import Uncommitted from '../components/sprint_creation_components/Uncommitted';
import Completed from '../components/sprint_creation_components/Completed';
import Notes from '../components/sprint_creation_components/Notes';
import ButtonImp from '../components/sprint_creation_components/ButtonImp';

function SprintCreation() { 
    return (
        <div className="parent">
            <div className="top">
                <div className="title">
                    <h1>Sprint Creation Form</h1>
                </div>
            </div>

            <div className="input">
                <div className="date">
                    <StartDate/> 
                    <EndDate/>
                </div>

                <SprintInput/>
                
                <CommittedInput/>
                
               <Uncommitted/>
                
                <Completed/>
               
               <Notes/>
                
               
            </div>

            <div className="bottom">

                <ButtonImp/>
                
            </div>

        </div>
    )
}
export default SprintCreation