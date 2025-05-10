import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router'
import { authContext } from '../AuthContext'
import Header from '../component/Header'

const Dashboard = () => {
   const {logout}=useContext(authContext)
const navigate = useNavigate()
function handleLogout(){
    logout()
    navigate("/")

}


  return (
    <>
    <Header/>
    <div>Dashboard</div>
    <Link onClick={handleLogout}>Logout</Link>
    </>
  )
}

export default Dashboard