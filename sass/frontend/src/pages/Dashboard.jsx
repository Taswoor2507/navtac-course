import React, { useContext, useEffect, useState } from 'react'
import useAxiosPrivate from '../customHooks/useAxiosPrivate';
import { AuthContext } from '../authContext/AuthContext';
import {useNavigate} from "react-router-dom"
import toast from 'react-hot-toast';
const Dashboard = () => {
  const axiosPrivate = useAxiosPrivate();
  const [loading , setLoading] = useState(true);
  const [data , setData] =  useState(null)
  const {setAuth}=  useContext(AuthContext)
  const navigate = useNavigate();
 useEffect(()=>{
     async function fetchData(){
         try {
            const res= await axiosPrivate.get("/me");

            if(res?.data?.status === 1){
              setData(res?.data?.data)
            }
             console.log(res , "Response")
         } catch (error) {
             console.log(error , "errror")
         }finally{
          setLoading(false)
         } 
     }
  fetchData();

 } , [])

async function handleLogout(){
   
  // route hit 
try {
  const res= await  axiosPrivate.get("/logout");
   if(res?.data?.status === 1){
    // setauth
    setAuth({})
    // false the persist value
    localStorage.setItem("persist" , false)
    toast?.success(res?.data?.message)
     navigate("/auth/login");
   }
} catch (error) {
    console.log(error)
}



}





  return (
    <div  className='flex justify-between p-4 bg-blue-500'>
      <h1>Dashboard</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className='flex gap-4 items-center'>
          <button  onClick={handleLogout} className="btn btn-neutral">Logout</button>
          <div className='w-[30px] uppercase  h-[30px]  rounded-full  p-2 bg-black text-white flex justify-center items-center'>
            {data.fullName[0]}
            {/* <img src={data?.profile} alt="" /> */}
        </div>
        </div>
       
      )}
    </div>
  )
}

export default Dashboard