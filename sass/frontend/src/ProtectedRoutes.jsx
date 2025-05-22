import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../frontend/src/authContext/AuthContext'
import { useNavigate } from 'react-router'

const ProtectedRoutes = ({children}) => {
    const {isLogin , loading} = useContext(AuthContext)
     const navigate =  useNavigate();
   useEffect(()=>{
      if(!isLogin){
        navigate("/auth/login")
        return ;
    }
   },[isLogin , loading , navigate])

   if(loading){
      return <h1>loading ...</h1>
   }

  return (
    <>
      {children}
    </>
  )
}

export default ProtectedRoutes