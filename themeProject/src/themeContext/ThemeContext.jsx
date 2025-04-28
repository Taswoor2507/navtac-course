// store

import { createContext,  useEffect,  useState } from "react";

const themeContext = createContext()

// provider

function ThemeProvider({children}) {
const [theme, setTheme] = useState("light")

useEffect(()=>{
    document.body.className = theme  //light , dark
} , [theme])

function themeToggler(){
    // ternary operator
    theme === "light" ? setTheme("dark") : setTheme("light")
}



return (
    <themeContext.Provider  value={{theme, themeToggler}}>
        {children}
    </themeContext.Provider>
)

  
}




export {themeContext , ThemeProvider}




