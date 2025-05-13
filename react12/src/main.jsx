import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Outlet, RouterProvider } from 'react-router-dom'
import router from './router.jsx'
import { AuthContextProvider } from './AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <RouterProvider router={router}>
 </RouterProvider>
  </AuthContextProvider>
)
