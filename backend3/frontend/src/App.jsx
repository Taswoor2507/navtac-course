import React, { useEffect } from 'react'
import Login from './Login'

const App = () => {
  const [count  , setCount] = React.useState(0)
   useEffect(()=>{
    fetch("http://localhost:8080/api/v1/users/delete" , {
      method:"GET",
      credentials:"include"
    }).then((res)=>{
      return res.json()
    }).then((data)=>{
      console.log(data)
    }).catch((err)=>{
      console.log(err)
    })
   },[])



  return (
    <div>
      <Login/>
      <button onClick={()=>setCount(count+1)}>COunt</button>
    </div>
  )
}

export default App