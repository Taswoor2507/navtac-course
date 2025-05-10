import React from 'react'
import { useDispatch } from 'react-redux'
import { changeTheme } from '../store/themeSlice/ThemeSlice'

const ThemeBtn = () => {
const dispatch = useDispatch()


  return (
    <div>
        <button onClick={()=>{dispatch(changeTheme())}}>Change theme</button>
    </div>
  )
}

export default ThemeBtn