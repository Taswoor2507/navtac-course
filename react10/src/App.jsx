import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from './store/counterSlice/CounterSlice'
import ThemeBtn from './components/ThemeBtn'

const App = () => {
  // get
  // useSelector

     const {value}  =useSelector((state)=>{return state.Counter})
     const dispatch=useDispatch()


// theme

  const theme = useSelector((state)=>{return state.Theme})

  useEffect(()=>{
     document.documentElement.className =theme
  } ,[theme])

  return (
    <div className='dark:bg-black  dark:text-white   text-black bg-white' >
      App  counter value is {value}
      theme is {theme}
      <br/>
      <button  onClick={()=>{dispatch(increment())}} >Increment</button>
    <ThemeBtn/>
    </div>
  )
}

export default App