// // import React, { useMemo, useState } from 'react'

// // const App = () => {
// //   const [num, setNum] = useState(0)

// // const chachedValue = useMemo(()=>{
// //   console.log("useMemo")
// //   let total = 0 
// //   for(let i =0 ; i<=800000000 ; i++){
// //      total += i 
// //   }


// //   return total
// // } , [])

// // console.log(chachedValue) 
// //   return (
// //     <div>
// //       <p>{num}</p>
// //       <button  onClick={()=>{setNum(num+1)}}>INC</button>
// //     </div>
// //   )
// // }

// // export default App




// import React, { useCallback, useState } from 'react'
// import Child from './Child'

// const App = () => {
//   const [num, setNum] = useState(0)
//   const [count, setCount] = useState(100)
// // const chachedFunc = useCallback(()=>{
// // console.log(num)} , [num])

// const dec = useCallback(()=>{
//   console.log("num" , num)
//      setCount(count-1)
// } , [count])
// // chachedFunc()
//   return (
//     <div>
//       <p>{num}</p>
//       <button  onClick={()=>{setNum(num+1)}}>INC</button>
//       <Child  handleDec={dec}  count={count}/>
//     </div>
//   )
// }

// export default App


// end 





import React, { useContext } from 'react'
import { userContext } from './userContext/UserContext'
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'


const App = () => {

      const {name} = useContext(userContext)
      console.log(name)
  return (
    <>
      <Header/>
      <Sidebar/>
      <Footer/>
    </>
  )
}

export default App





