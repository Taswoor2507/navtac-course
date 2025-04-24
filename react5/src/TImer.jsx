import React, { useEffect, useState } from 'react'

const Timer = () => {
   const [time, setTime] = useState(0) 

   useEffect(()=>{
    const interval = setInterval(() => {
      setTime(prevTime => prevTime + 1)
    }, 1000)

    return () => {
        clearInterval(interval)
      }
   } , [])

  return (
    <div>{time}</div>
  )
}

export default Timer