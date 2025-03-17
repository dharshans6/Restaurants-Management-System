import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ContextProvider from './Context API/ContextProvider.jsx'
createRoot(document.getElementById('root')).render(
  <ContextProvider>
      <StrictMode>
    <App />
  </StrictMode>
  </ContextProvider>,
)
