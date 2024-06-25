import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx'
import NavigationBar from './components/NavigationBar.jsx'
import Testing from './pages/Testing.jsx'
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
              path='/testing'
              element={<Testing />}
          />
        </Routes>
      </Router>
    </div>
  </> 
  )
}

export default App
