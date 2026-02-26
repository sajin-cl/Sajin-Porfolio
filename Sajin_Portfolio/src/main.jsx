import { StrictMode } from 'react'
import App from './App'
import { createRoot } from 'react-dom/client'
import './styles/global.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
