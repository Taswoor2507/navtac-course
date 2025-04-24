// import React from 'react'

// const ShowText = ({text}) => {
//     console.log("chid re rendered")
//   return (
//     <div>ShowText: name is  {text}</div>
//   )
// }

// export default ShowText



import React, { useState } from 'react'

const ShowText = ({email, setEmail}) => {
   
  return (
    <>
    <input type='text'  value={email}  onChange={(e)=>{setEmail(e.target.value)}}/>
    <div>ShowText , {email}</div>
    </>
  )
}

export default ShowText