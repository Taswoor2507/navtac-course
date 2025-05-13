import React, { useContext } from 'react'
import { counterContext } from '../counterContext/Countercontext'

const Sidebar = () => {
    const {incrementFunc} = useContext(counterContext)
  return (
    <div>
        sidebar
        <button onClick={incrementFunc}>Inc</button>
    </div>
  )
}

export default Sidebar