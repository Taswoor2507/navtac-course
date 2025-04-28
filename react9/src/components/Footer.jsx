import React, { useContext } from 'react'
import { counterContext } from '../counterContext/Countercontext'

const Footer = () => {
const {counter} =useContext(counterContext)
    return (
    <div>Footer({counter})</div>
  )
}

export default Footer