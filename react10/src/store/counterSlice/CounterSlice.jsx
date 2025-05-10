// slice create

import { createSlice } from "@reduxjs/toolkit";
// har slice ki apni state hoti hey

// slice ki inital state must hey

const initalState = {
    value:0
}


// create slice
const counterSlice = createSlice({
    name:'counter' , 
    initialState:initalState,
    reducers:{

        increment(state){
           state.value++
        } , 
        // {type:"counter/increement"}
        // 
        decrement(state){
            state.value--
        }
        // {type:"counter/decrement" , payload:undefined}
    }
})


// actions , reducer<f>
// console.log(counterSlice.reducer)
export const { increment}  = counterSlice.actions
export default counterSlice.reducer


//    function reducer(state , action){
//           switch(action.type)
    //      case action.type === 'counter/increment {
    //            state.value++
        //  
//  case action.type === 'counter/decrement{
    //            state.value--
// }
// }
// 
// 
// 
