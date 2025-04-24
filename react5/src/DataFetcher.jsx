import React, { useEffect } from 'react'

const DataFetcher = () => {
    console.log("component renderred")
const [count, setCount] = React.useState(0)
//    useEffect

useEffect(function(){
    const controller = new AbortController()
    const signal = controller.signal


   fetch("https://jsonplaceholder.typicode.com/posts/1" , {signal})
   .then((response) =>{
    if(!response.ok){
        throw new Error("Network response was not ok")
    }
    return response.json()  //promise 
   })
   .then((data) => {
    console.log(data)
   })
   .catch((err)=>{
       if(err.name !== "AbortError"){
        console.log("fetch error")
       }
   })

return function(){
    controller.abort()
}

}  ,[])





  return (

    <>
    <div>DataFetcher</div> 
    <button onClick={()=>{setCount(count+1)}}>INC</button>  
    </>
)
}

export default DataFetcher