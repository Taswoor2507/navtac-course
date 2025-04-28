// store

import { createContext , useState } from "react";

const counterContext =  createContext()

function CounterProvider({children}){
    const [counter, setCounter] = useState(0)
  

    function increment(){
        console.log("dads")
        setCounter(counter+1)
    }
  
    return (
     <counterContext.Provider  value ={{counter:counter , setCounter:setCounter  , incrementFunc : increment }}>
        {children}
     </counterContext.Provider>

    )

}

export {CounterProvider , counterContext}