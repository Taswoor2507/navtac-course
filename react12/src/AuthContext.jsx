import { createContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

const authContext =  createContext();

function AuthContextProvider({children}){
   const [user , setUser] =  useState(null)
//  login 

useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    if(user){
        setUser(user)
    }
} , [])


function login(user){
    localStorage.setItem("user" , JSON.stringify(user))
     setUser(user)

}

function logout(){
    localStorage.removeItem("user")
    setUser(null)

}



    return (
        <authContext.Provider   value={{user, login, logout}}>  
            {children}
        </authContext.Provider>
    )
}


export {AuthContextProvider , authContext}