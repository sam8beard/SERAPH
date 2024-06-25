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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container">
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
              element={<SprintOverview />}
          />
          <Route 
              path='/'
              element={<SprintOverview />}
          />
          <Route 
              path='/sprintoverview'
              element={<SprintOverview />}
          />
        </Routes>
      </Router>
    </div>
  </> 
  )
}

export default App
