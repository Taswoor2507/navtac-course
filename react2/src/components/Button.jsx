import React from 'react'

const Button = (props) => {
    console.log(props)
  return (
    <button  className={props.className}>{props.drillThree}  </button>
  )
}

export default Button