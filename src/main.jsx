import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HelmetProvider as Prov} from 'react-helmet-async'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Prov>
      <App />
    </Prov>
  </StrictMode>,
)