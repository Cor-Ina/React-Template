import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import './index.css'


// create a root node for the React application, and then render the App component //
// to that root node //
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
