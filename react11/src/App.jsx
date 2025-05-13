import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByValue } from './store/CounterSlice/CounterSlice'
import { productThunk } from './store/ProductSlice/ProductSlice'

const App = () => {
//  get 
// useSelector
  const {count}  =useSelector((state)=>{return  state.mycount })

const inputRef =  useRef()
  // update state
const dispatch=useDispatch()

function handleClick(){
  dispatch(increment())
}

function handleDecrement(){
  dispatch(decrement())
}

function handleIncrementByValue(){
  dispatch(incrementByValue(parseInt(inputRef.current.value)))
  inputRef.current.value=""
  
}


useEffect(()=>{
  dispatch(productThunk())
} , [dispatch])


   const  {loading , error , products} = useSelector((state)=>{  return state.products})

   console.log(products)

  return (
    <div>
      <h1>Counter value  {count} </h1>
      <button onClick={handleClick}>INC</button>
      <button onClick={handleDecrement}>DEC</button>
      <hr />
      <input  ref={inputRef} type="number"   placeholder='Enter value' />
      <button onClick={handleIncrementByValue}>INCREMENT BY VALUE</button>
    
       <hr />
       <h1>Products</h1>
       <div>

      {loading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}


        {
          products.map((product)=>{
            return <p key={product.id}>{product.title}</p>
          })
        }
       </div>
    </div>
  )
}

export default App