import React, { useEffect } from 'react'

const App = () => {
  useEffect(()=>{
     fetch("http://localhost:6060").then(res=>res.json()).then(data=>console.log(data))
  },[])
  return (
    <div>App</div>
  )
}

export default App