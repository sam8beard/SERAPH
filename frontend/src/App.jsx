import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx'
import NavigationBar from './components/NavigationBar.jsx'
import Testing from './pages/Testing.jsx'
import SprintOverview from './pages/SprintOverview.jsx'
import SprintCreation from './pages/SprintCreation.jsx'
import SprintUpdate from './pages/SprintUpdate.jsx'
import PDFOverview from './pages/PDFOverview.jsx'
import ProjectArchive from './pages/ProjectArchive.jsx'
import SignIn from './pages/SignIn.jsx'
import ProjectCreation from './pages/ProjectCreation.jsx'
import ProjectView from './pages/ProjectView.jsx'
import ProjectUpdate from './pages/ProjectUpdate.jsx'
import PptxOverview from './pages/PptxOverview.jsx'
import SprintDashboard from './pages/SprintDashboard.jsx'; 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="app-parent">
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
              path='/sprintoverview/:projectId/:startDate'
              element={<SprintOverview />}
          />
          <Route 
              path='/sprintupdate/:projectId/:startDate'
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
              path='/projectview/:projectId'
              element={<ProjectView />}
          /> 
          <Route 
              path='/pptxoverview'
              element={<PptxOverview />}
          />
          <Route 
              path='/projectupdate/:projectId'
              element={<ProjectUpdate />}
          />
          <Route
              path='/sprintdashboard'
              element={<SprintDashboard />}
          />
        </Routes>
      </Router>
    </div>
  </> 
  )
}

export default App
