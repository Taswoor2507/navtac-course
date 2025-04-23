import React, { useEffect, useRef } from 'react'

const Model = ({showModel , onClose}) => {

    const eventTarget = useRef(null)

useEffect(()=>{
    function handleClickOutside(event){
        if(eventTarget.current && !eventTarget.current.contains(event.target)){
            onClose()
        }
    }
    window.addEventListener('mousedown' , handleClickOutside)

    return ()=>{
        window.removeEventListener('mousedown' , handleClickOutside)
    }
},[showModel , onClose])





if(showModel === false) return null
  return (
    <div className='fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center p-6'>
        <div ref={eventTarget}  className='bg-blue-400 w-[400px]  p-2  rounded  '>
            <h1>Model</h1>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo a ea, esse harum quisquam temporibus nam maiores delectus deserunt illo dolorem, qui ipsam rem debitis nobis sunt nisi asperiores quas!
            </p>

            <button onClick={onClose} className="btn btn-neutral mt-3">Close</button>
        </div>
    </div>
  )
}

export default Model