import React, { useContext } from 'react'
import { counterContext } from '../counterContext/Countercontext'

const Header = () => {
   const {counter} = useContext(counterContext)
  return (
    <div>Header({counter})</div>
  )
}

export default Header