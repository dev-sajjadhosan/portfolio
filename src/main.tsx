import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RootLay from './layouts/Root/Root'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RootLay />
  </StrictMode>,
)
