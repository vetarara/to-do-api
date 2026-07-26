import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// создаёт корень реакт-приложения - новая схема из реакт 18
createRoot(document.getElementById('root')).render(
  // StrictMode - специальная обёртка, которая помогает найти потенциальные проблемы в коде. может дёргать компоненты дважды
  <StrictMode>
    <App />
  </StrictMode>,
)
