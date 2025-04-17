import React from 'react'
import "./style.css"
import Button from '../Button'
const Navbar = () => {
  return (
    <div className='navbar'>
        <h1>LOGO</h1>
        <div className="links">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
        </div>
        <div className="btn">
            <Button btnText="Login"  />
        </div>
    </div>
  )
}

export default Navbar