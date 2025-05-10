// createa a counter slice 

import { createSlice } from "@reduxjs/toolkit";

let initialState= {
    count:0
}

const counterSlice= createSlice({
    name:"counter",
    initialState:initialState ,
    reducers:{
        increment(state){
            if(state.count>=10){
                return 
            }
            state.count++
        } , 
        decrement(state){
            if(state.count<=0){
                return
            }
            state.count--
        } , 
        incrementByValue(state, action){
            state.count +=  action.payload
        }

    }
})


export const {increment, decrement , incrementByValue} = counterSlice.actions
export default counterSlice.reducer



