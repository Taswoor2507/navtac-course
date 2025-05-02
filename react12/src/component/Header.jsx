import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router'
import { authContext } from '../AuthContext'

const Header = () => {

     const {logout}= useContext(authContext)
    const navigate = useNavigate()
    function handleLogout(){
        logout()
        navigate("/")
    
    }
  return (
    <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/dashboard"}>Dashboard</Link>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Header