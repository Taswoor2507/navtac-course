// function Button({btnTex, onHandleCLick}){
//     function handleButtonClick(e){
//         console.log(e)
//     }
//    return (
//     <>
//     {/* <button onClick={(e)=>{console.log("hello" , e.target)}}>{btnTex}</button> */}
//     <button onClick={}>{btnTex}</button>
    
//     <input type="text"  onChange={(e)=>{console.log(e.target.value)}}/>
//      <form  onSubmit={(e)=>{
//         e.preventDefault()
//         console.log("hello" , e.target)
//          }}>
//      <input type="text" />
//      <button type="submit">Submit</button>
//      </form>
    
//     </>
//    )
// }

// export default Button




import React from 'react'

const Button = ({btnText , className , styleObj , onHandleCLick}) => {
  return (
    <button className={className} style={styleObj}  onClick={onHandleCLick}   >{btnText}</button>
  )
}

export default Button