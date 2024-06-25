import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './pages/SprintCreation.jsx'
import SprintCreation from './pages/SprintCreation.jsx'
import SprintUpdate from './pages/SprintUpdate.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SprintCreation/>
  </React.StrictMode>,
)
