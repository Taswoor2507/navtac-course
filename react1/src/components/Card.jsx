import React from 'react'
import Button from './Button'

const Card = () => {
    const fname = "alex"
    var age = 21
   if(age > 20){
     return <Button/>
   }else{
    "sorry age is less from if "
   }
  return (
    <div>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum commodi adipisci ad facilis. Exercitationem magni ex numquam qui animi excepturi. Ab excepturi sapiente quam. Tempore sapiente corporis quibusdam voluptatibus hic? 
            {fname}

      {

    //   age > 20 ?  <Button/> :"sorry ape is less the 20" 


      }






        </p>
       
    </div>
  )
}

export default Card