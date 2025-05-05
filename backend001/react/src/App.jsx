import React, { useEffect } from 'react'

const App = () => {

  useEffect(()=>{
    fetch("http://localhost:4040/profile").then(res=>res.json()).then(data=>console.log(data))
  }, [])
  return (
    <div>App</div>
  )
}

export default App