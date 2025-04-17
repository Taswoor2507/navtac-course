import React from 'react'
import Button from '../Button'

const Card = (props) => {
  return (
    <div>
        <p>User name   {props.user.fname}</p>
        <p>User Age   {props.user.age}</p>
        <Button  drillThree = {props.drilltwo}  />
    </div>
  )
}

export default Card