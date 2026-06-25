import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App style={{margin:'0%', padding:'0%'}}/>
  </StrictMode>,
)
// If you want to start measuring performance in your app, pass a function