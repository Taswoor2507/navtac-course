//   import './App.css'
// import Button from './components/Button'

// function App() {
//   function handleClick(e){
//     console.log(e.target)
//   }
//  return  (
//     <>
//        <Button  btnTex={"Login"}  onHandleCLick={handleClick}   />
//     </>
//   )
// }

// export default App



// import React from 'react'
// import Button from './components/Button'
// const App = () => {
// function loginHandler(){
//   console.log("working login button logics.....")
// }

// function logoutHandler(){
//   console.log("working logout button logics.....")
// }


// function submitHandler(){
//   console.log("working submit button logics.....")
// }

// function deleteHandler(){
//   console.log("working delete button logics.....")
// }

// function cancelHandler(){
//   console.log("working cancel button logics.....")
// }
//   return (
//     <div>
//        <Button  btnText={"Login"}  styleObj={{backgroundColor:"green", color:"blue"}}        onHandleCLick={loginHandler}/>
//        <Button  btnText={"Logout"}  styleObj={{backgroundColor:"red"}}     onHandleCLick={logoutHandler} />
//        <Button  btnText={"Submit"}   styleObj={{backgroundColor:"blue"}}       onHandleCLick={submitHandler}/>
//        <Button  btnText={"Cancel"}    styleObj={{backgroundColor:"orange"}}    onHandleCLick={cancelHandler}/>
//        <Button btnText={"Delete"}     styleObj={{backgroundColor:"tomato"}}     onHandleCLick={deleteHandler}/>
 
//     </div>
//   )
// }

// import React from 'react'

// const App = () => {
//   console.log("app rerenderd")
//   let count = 10
//   return (
//     <>
//     <div>{count}</div>
//     <button onClick={() => {
//       count = count + 1
//        console.log(count)
//       }}>Increment</button>
    
//     </>
//   )
// }

// export default App






// export default App


// import React from 'react'
// import { useState } from 'react'

// const App = () => {
//   console.log("app re render")
//   const [count , setCount]  =  useState(10)  //[0,  f]
//        function handleIncrement(){
//            setCount(count + 1)
//        }
        

//   return (
//     <>
//     <h1>{count}</h1>
//     <button  onClick={handleIncrement}>Increment</button>
//     </>
//   )
// }

// export default App

// import React, { useState } from 'react'

// const App = () => {
//   let [count , setCount] =  useState(0)
//   let [disable , setDisable] = useState(false)
//   let [disableDec , setDisableDec] = useState(false)
//   function handleIncrement(){
//     setCount(count + 1)
//       if(count >= 19){
//         setDisable(true)
//       }else{
//         setDisable(false)
//       }
//   }

//   function handleDecrement(){
//    setCount(count - 1)
//    if(count <=-1){
//     setDisableDec(true)
//    }else{
//     setDisableDec(false)
//    }
//   }
   
// const apiKey = import.meta.env.VITE_API_KEY


//   return (
//     <>

//     <h1>{apiKey}</h1>
//      <h1>{count}</h1>
//      <button disabled={disable}   onClick={handleIncrement}>Increment</button>
//      <button disabled={disableDec}   onClick={handleDecrement} >Decrement</button>
//     </>
//   )
// }

// export default App

// import React, { useState } from 'react'

// const App = () => {
//   let [count , setCount] = useState(0)
//   let [disable ,  setDisable] = useState(false)
//   let [disableDec ,  setDisableDec] = useState(false)
//   function handleIncrement(){
//        setCount(function(prev){
//          let updated = prev + 1
//           if(updated >= 20){
//             setDisable(true)
//           }
//           return updated
         
//        })
//   }


//   function handleDecrement(){
//     setCount(function(prev){
//       let updated = prev 
//        if(updated <= 0  ){
//          setDisableDec(true)
//        }else{
//          setDisableDec(false)
//        }
         
//        if(updated )
       
//        return updated
//     })
// }


//   return (
//    <>
//        <h1>{count}</h1>
//       <button  disabled={disable} onClick={handleIncrement}>Increment</button>
//       <button  disabled={disableDec} onClick={handleDecrement}>Decrement</button>

//    </>
//   )
// }

// export default App