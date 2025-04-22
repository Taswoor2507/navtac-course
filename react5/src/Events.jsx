import React, { useEffect } from 'react'

const Events = () => {
   const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)

  useEffect(()=>{
     const handleResize = ()=>{
        setWindowWidth(window.innerWidth)
     }

    window.addEventListener("resize" , handleResize)
    return function(){
        window.removeEventListener("resize" , handleResize)
    }
  } , [])

  return (
    <div>{windowWidth}</div>
  )
}

export default Events