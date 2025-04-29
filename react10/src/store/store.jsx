// create 

import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./counterSlice/CounterSlice.jsx";

const store =  configureStore(
    {
       reducer:{
         Counter:CounterReducer,  //{value:0} 
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


