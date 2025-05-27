import React, { useEffect, useState } from 'react'
import useAxiosPrivate from '../customHooks/useAxiosPrivate';

const Dashboard = () => {
  const axiosPrivate = useAxiosPrivate();
  const [loading , setLoading] = useState(true);
  const [data , setData] =  useState(null)
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



  return (
    <div  className='flex justify-between p-4 bg-blue-500'>
      <h1>Dashboard</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
       <div className='w-[30px] uppercase  h-[30px]  rounded-full  p-2 bg-black text-white flex justify-center items-center'>
            {data.fullName[0]}
            {/* <img src={data?.profile} alt="" /> */}
        </div>
      )}
    </div>
  )
}

export default Dashboard