import React from 'react'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import HeroSection from './components/heroSection/HeroSection'
import Cards from './components/cards/Cards'

const App = () => {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <Cards  drill={"drilling"} /> 
      <Footer/>
    </>
  )
}

export default App