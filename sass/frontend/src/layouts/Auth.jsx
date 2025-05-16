import React from 'react'
import { Toaster } from 'react-hot-toast'
import { Outlet } from 'react-router'

const Auth = () => {
  return (
    <div>
        <Outlet/>
        <Toaster position="top-center" reverseOrder={false} />
    </div>
  )
}

export default Auth