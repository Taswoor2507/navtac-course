import { Link, NavLink } from 'react-router-dom'
import React from 'react'
import { useLocation } from 'react-router-dom'
const Sidebar = () => {
  const location = useLocation()
  console.log(location)
  return (
    <div className='w-[250px] bg-red-500 h-[100vh]'>
      <Link  className={`${location.pathname=== "/" ? "text-blue-500 underline " :null}  `}  to="/"  >Home</Link><br/>
      <Link className={`${location.pathname=== "/about" ? "text-blue-500 underline" :null}  `}    to="/about"  >About</Link><br/>
      <Link  className={`${location.pathname=== "/users" ? "text-blue-500 underline" :null}  `}   to="/users"  >Users</Link>

   {/* <NavLink className={({isActive})=>{   return isActive?" bg-blue-400" :null }}      to="/">Home</NavLink>
   <NavLink className={({isActive})=>{   return isActive?" bg-blue-400" :null }}      to="/about">ABout</NavLink>
     <NavLink className={({isActive})=>{   return isActive?" bg-blue-400" :null }}      to="/users">Users</NavLink> */}
 {/* <Link  className={`${location.pathname=== "/" ? "text-blue-500 underline " :null}  `}  to="/"  >Home</Link><br/>
      <Link className={`${location.pathname=== "/about" ? "text-blue-500 underline" :null}  `}    to="/about"  >About</Link><br/>
      <Link  className={`${location.pathname=== "/users" ? "text-blue-500 underline" :null}  `}   to="/users"  >Users</Link> */}



    </div>
  )
}

export default Sidebar