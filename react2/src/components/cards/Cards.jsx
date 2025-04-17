import React from 'react'
import Card from '../card/Card'

const Cards = (props) => {
  return (
    <div>
    
   <Card user={{fname:"sachin",age:"22"}}  drilltwo = {props.drill} />
   <Card user={{fname:"Alex",age:"21"}} />
    </div>
  )
}

export default Cards