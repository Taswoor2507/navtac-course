import React from 'react'
// import { useNavigate } from 'react-router'
import { Navigate } from 'react-router'
const ProtectedRoute = ({children}) => {
//   const {user} =  useContext(authContext)

const user =  localStorage.getItem("user")
    if(!user) {
    return     <Navigate to={"/login"} />
    
    }
  return (
    <div>
       {children}
    </div>
  )
}

export default ProtectedRoute