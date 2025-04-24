import React from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Users from './pages/Users'
import { Outlet } from 'react-router'
const PagesLayout = () => {
  return (
    <div>
        <Header/>
        <div className='flex'>
        <Sidebar/>
        <Outlet/>
        </div>
         <Footer/>        
    </div>
  )
}

export default PagesLayout