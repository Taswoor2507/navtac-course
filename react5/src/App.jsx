import React, { useState } from 'react'
import DataFetcher from './DataFetcher'
import Timer from './TImer'
import Events from './Events'

const App = () => {
  const [show , setShow] = useState(true) 
  
  
  return (
    <>
    <div>App</div>
     {
     show ? <Events/>: null

     }   

     <button onClick={()=>setShow(!show)}  >Toogle</button> 
    </>
  )
}

export default App