import { createContext, useState } from "react";

const AuthContext  = createContext(null);


// provider

function AuthProvider({children}){
 const persistValue =  JSON.parse(localStorage.getItem("persist")) || false


  const [auth , setAuth] = useState({});
  const [persist , setPersist] = useState(persistValue)



  return(
    <AuthContext.Provider value={{auth, setAuth, persist, setPersist}}>
      {children}
    </AuthContext.Provider>
  )
}


export { AuthContext, AuthProvider };


