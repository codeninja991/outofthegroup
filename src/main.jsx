import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import OutOfTheGroupGame from "./OutOfTheGroupGame.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <OutOfTheGroupGame/>
  </StrictMode>,
)
