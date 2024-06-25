import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './pages/PDFOverview.jsx'
import PDFOverview from './pages/PDFOverview.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PDFOverview />
  </React.StrictMode>,
)
