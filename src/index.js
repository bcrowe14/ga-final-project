import React from 'react'
import {createRoot} from 'react-dom/client'
import './styles/index.css'
import App from './App'
import Spells from './components/Spells'

const root = createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
