// // import React, { useState } from 'react'

// // const App = () => {
// //   // let count = 0
// //   let [count , setCount ]   = useState(0) // [10, f]

// //   function increment(){
// //      setCount(count+1)
// //      setCount(count+1)
// //      setCount(count+1)
// //      setCount(count+1)
// //      setCount(count+1)
    
// //   }
// //   return (
// //     <>
// //     <div>{count}</div>
// //     <button onClick={increment}>Increment</button>
// //     </>
// //   )
// // }

// // export default App





// import React, { useState } from 'react'
// import ShowText from './ShowText'

// const App = () => {
//   let [fname , setName] =  useState("")
//   return (
//     <>
//     <input type='text'  onChange={(e)=>{setName(e.target.value)}}   value={fname}  />
//     {/* <h1>{fname}</h1> */}
//     <ShowText text={fname} />
//     </>
//   )
// }

// export default App



// import React, { useState } from 'react'
// import ShowText from './ShowText'

// const App = () => {
//   const [email , setEmail] = useState("")
//   return (
//     <>
//     <div>{email}</div>
//     <ShowText email={email}  setEmail={setEmail}/>
//     </>
//   )
// }

// export default App





// import {useState , useEffect} from 'react'




// const App = () => {
//   console.log("component re rend")
//   let [count , setCount] = useState(0)
// useEffect(()=>{
//   console.log("counter")
//   document.title = `Counter click ${count}`
   
//   },[count])
//   return (
//     <>
//     <div>{count}</div>
//     <button onClick={()=>{setCount(count+1)}}>Inc</button>
//     </>
//   )
// }

// export default App