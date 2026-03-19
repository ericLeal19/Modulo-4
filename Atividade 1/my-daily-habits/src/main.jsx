// src/main.jsx

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HabitsProvider } from './contexts/HabitsProvider.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <HabitsProvider>
        <App />
      </HabitsProvider>
    </BrowserRouter>
  </StrictMode>
)