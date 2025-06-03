import React, { useContext } from 'react'
import { AuthContext } from './authContext/AuthContext'
import { Navigate , Outlet } from 'react-router-dom';
const ProtectedRoutes = ({role}) => { //["PRINCIPAL"]   "OWNER"
  const {auth} =  useContext(AuthContext);
  const user  =  auth?.user
 console.log(auth , "Auth")

  return auth?.accessToken  && role.includes(user?.role)  ? <Outlet/> : <Navigate to="/auth/login"/>
 
}

export default ProtectedRoutes