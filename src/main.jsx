import React from 'react'
import ReactDOM from 'react-dom'
import NBA_Points from './NBA_Points.jsx'
import NBA_Bets from './NBA_Bets.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NBA_Points />
    <NBA_Bets />
  </React.StrictMode>,
)
