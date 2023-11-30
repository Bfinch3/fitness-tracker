import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

// Import fontawesome (for icons)
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'

// Import custom styling
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
