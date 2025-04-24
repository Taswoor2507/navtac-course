// import React, { useEffect, useRef, useState } from 'react'

// const App = () => {
//   console.log("component rendered")
//   // const [count, setCount] = useState(0)

//    const inputRef = useRef()   // {}
//    const headRef =  useRef()  //{current: {}}


//   //  {}node 
//    useEffect(()=>{
//     console.log("useEffect")
//     console.dir(inputRef.current.focus())
    
//     // setCount(1)
//     // return () => {
//     //   console.log("cleanup")
//     // }
//    })
//     // let val  = useRef(0)
//     // function handleIncrement(){
//     //   console.log("val" , val)
//     //   val.current = val.current + 1
//     // }

//     function handleClick(){
//       inputRef.current.style.backgroundColor ="red"
//       headRef.current.style.color = "red"
//       headRef.current.innerText = "dasd"
//     }
    
//   return (
//     <>

//     <input type='text'  ref={inputRef} />
//     <button onClick={handleClick}>Click</button>
//     <h1 ref={headRef}>dasfdsfhksdkg</h1>
//     {/* <div>{val.current}</div> */}
//     {/* <button onClick={handleIncrement}>INc</button> */}
//     </>
//   )
// }

// export default App



// import React, { useEffect, useRef, useState } from 'react'

// const App = () => {
//   let [time, setTime] = useState(0)
//   let [start, setStart] = useState(false) 
//    let IntervalRef = useRef(null)
 
//    useEffect(()=>{
//     return () => {
//       clearInterval(IntervalRef.current)
//     }
//    })

//    function handleStart(){
//     setStart(true)
//     IntervalRef.current =  setInterval(() => {
//         setTime((prevTime) => prevTime + 1)
//     }, 1000);
//    }


//    function handleStop(){
//     setStart(false)
//     clearInterval(IntervalRef.current)
//    }

//    function handleReset(){
//     setStart(false)
//     clearInterval(IntervalRef.current)
//     setTime(0)
//    }


//   return (

//     <>
//     <h1>{time}</h1>
//     <button onClick={handleStart}>Start</button>
//     <button  onClick={handleStop}>Stop/Pause</button>
//     <button onClick={handleReset}>Reset</button>
//     </>
//   )
// }

// export default App

// typing inductor

// import React, { useEffect, useRef, useState } from 'react'

// const App = () => {
//    let [typing, setTyping ] = useState(false)
//     const intervalRef =  useRef(null)
//     const handleTyping = ()=>{


//       if(intervalRef.current){
//         clearInterval(intervalRef.current)
//       }
//       setTyping(true)
//       intervalRef.current = setInterval(()=>{
//         setTyping(false)
//       } , 1200) 

//     }


//     useEffect(()=>{
//       return () => {
//         clearInterval(intervalRef.current)
//       }
//     })



//   return (
//     <div>
//       <input onChange={handleTyping} type='text' placeholder='Type here...' />
//       {typing ? <span className="loading loading-dots loading-md"></span> : null}
//     </div>
//   )
// }

// export default App

import React, { useState } from 'react'
import Model from './Model'

const App = () => {
   const [showModel , setShowModel] = useState(false)



  return (
    <>
    <div>App</div>
    <button  onClick={() => setShowModel((prev)=>{return !prev})}>Show MOdel</button>
    <Model   showModel={showModel}   setShowModel={setShowModel}  onClose = {()=>{setShowModel(false)}} />    
    </>
  )
}

export default App