import React from 'react'
import "./style.css"
import Button from '../Button'
const HeroSection = () => {
  return (
    <div className='hero'>
        <h1 className='bg-slate-300 px-6'>Apply For Navttc courses</h1>
        <Button  btnText="Apply Now"  className="btn001"/>
    </div>
  )
}

export default HeroSection