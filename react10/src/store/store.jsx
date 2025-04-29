// create 

import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./counterSlice/CounterSlice.jsx";
import ThemeReducer from "./themeSlice/ThemeSlice.jsx";
const store =  configureStore(
    {
       reducer:{
         Counter:CounterReducer,  //{value:0} 
         Theme:ThemeReducer,   // theme:"light",
         
       }
    }
) 


// function  counterReducer(state, action){
//     switch(action.type){

//         case action.type === "counter/increment":
//         {state.value++}

//         case action.type ==="counter/decrement":
//             {state.value--}
//     }
// }


// store
//    state
//       Counter  =={value:0}




export default store


