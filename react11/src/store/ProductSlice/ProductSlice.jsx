// create slice 

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
    products:[],
    loading:false,
    error:null
}
const productSlice =  createSlice({
    name:"product",
    initialState:initialState,
   reducers:{},
   extraReducers:(builder)=>{
      builder
      .addCase(productThunk.pending , (state)=>{
        state.loading=true
        state.error=null
      })
      .addCase(productThunk.fulfilled , (state, action)=>{
          state.loading=false
          state.error=null
          state.products=action.payload
      })
      .addCase(productThunk.rejected , (state, action)=>{
        state.loading=false
        state.error=action.error.message || "something went wrong"
      })

   }
})

// productapi/pending
const productThunk = createAsyncThunk("productapi", async()=>{
      const req=await fetch("https://dummyjson.com/products")
      const data =  await req.json()
    //   return [...data.products]
      return data.products
})



export {productThunk}
export default productSlice.reducer