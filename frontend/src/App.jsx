import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard.jsx'
import NavigationBar from './components/NavigationBar.jsx'
import Testing from './Pages/Testing.jsx'
import SprintOverview from './Pages/SprintOverview.jsx'
import SprintCreation from './Pages/SprintCreation.jsx'
import SprintUpdate from './Pages/SprintUpdate.jsx'
import PDFOverview from './Pages/PDFOverview.jsx'
import ProjectArchive from './Pages/ProjectArchive.jsx';
import SignIn from './Pages/SignIn.jsx'
import ProjectCreation from './Pages/ProjectCreation.jsx'
import ProjectView from './Pages/ProjectView.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Router>
        <div className="nav-container"> 
          <NavigationBar />
        </div>
        
        <Routes>
          <Route 
              path='/'
              element={<Dashboard/>}
          /> 
          <Route 
              path='/sprintoverview'
              element={<SprintOverview />}
          />
          <Route 
              path='/sprintupdate'
              element={<SprintUpdate />}
          />
          <Route 
              path='/sprintcreation'
              element={<SprintCreation />}
          />
          <Route 
              path='/pdfoverview'
              element={<PDFOverview />}
          />
          <Route 
              path='/projectarchive'
              element={<ProjectArchive />}
          />
          <Route 
              path='/signin'
              element={<SignIn />}
          />
          <Route 
              path='/projectview'
              element={<ProjectView />}
          />  
        </Routes>
      </Router>
    </div>
  </> 
  )
}

export default App
