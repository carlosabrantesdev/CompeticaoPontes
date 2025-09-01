import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Pontes from './Pontes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Pontes/>
  </StrictMode>,
)