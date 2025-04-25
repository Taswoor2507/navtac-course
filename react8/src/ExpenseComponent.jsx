// import React, { useMemo, useState } from 'react'

// const ExpenseComponent = () => {
//     console.log('ExpenseComponent Rendered')

// // function expensiveTask(){
// //     let total = 0 
// //     for( let i = 0  ; i<1000000000 ; i++){
// //         total += i
// //     }

// //     return total
// // }

// let [num, setNumber] = useState(0)

// const total= useMemo(function(){
//     console.log("memo function")
//     let total = 0 
//     for( let i = 0  ; i<1000000000 ; i++){
//         total += i
//     }

//     return total
// } , [num])

// console.log(total)






//   return (
//     <>
//     <div>ExpenseComponent </div>
//     <p>num value {num}</p>
//     <button onClick={()=>setNumber(num+1)}>NUM INCR</button>
//     </>
//   )
// }

// export default ExpenseComponent