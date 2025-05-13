import React, { useContext } from 'react'
import { themeContext } from './themeContext/ThemeContext'
import Card from './components/Card'

const App = () => {
     const {theme , themeToggler}= useContext(themeContext)
    


  return (
    <div>
      <div  className='transition-all dark:bg-black dark:text-white   bg-white text-black'>
        <h1>{theme}</h1>
        <h1>REACT THEME TOGGLE</h1>
      </div>
      <div>
        <button onClick={themeToggler}   className='bg-red-600 p-3 '>{theme} 
             {
              theme === "light" ? "💡" : "🌙 "
             }
          
           </button>
      </div>
      <Card/>
    </div>
  )
}

export default App