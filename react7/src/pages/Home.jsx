import React from 'react'
import { useNavigate } from 'react-router'

const Home = () => {
  const navigate =  useNavigate()
  return (
    <>
    <div>Home</div>
     <button onClick={()=>{navigate("/usersa")}}>Back to users</button>
    </>
  )
}

export default Home