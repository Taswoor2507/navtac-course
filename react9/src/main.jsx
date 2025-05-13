import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { UserProvider } from './userContext/UserContext.jsx'
import { CounterProvider } from './counterContext/Countercontext.jsx'

createRoot(document.getElementById('root')).render(
  <UserProvider>
    <CounterProvider>
    <App/>
    </CounterProvider>
  </UserProvider>
)
