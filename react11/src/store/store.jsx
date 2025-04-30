import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from  "./CounterSlice/CounterSlice.jsx"
import ProductReducer from "./ProductSlice/ProductSlice.jsx"
const store = configureStore({
    reducer:{
        mycount:CounterReducer,
        products:ProductReducer
    }
})


export default store