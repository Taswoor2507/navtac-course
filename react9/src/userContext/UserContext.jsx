import { createContext } from "react";
// create a store 
const userContext =  createContext()
// provider
function UserProvider({children}){
    return (
     <userContext.Provider  value={{name:"alex"}}>
        {children}
     </userContext.Provider>
    )
}


export {userContext, UserProvider}




