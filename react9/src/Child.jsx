import React from 'react'

const Child = ({handleDec, count}) => {


  return (
    <div>
        <p>{count}</p>
        <button onClick={handleDec}>Dec</button>
    </div>
  )
}

export default Child