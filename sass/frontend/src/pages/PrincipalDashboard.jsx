import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
const PrincipalDashboard = () => {
    const [loading , setLoading] = useState(true);
    const [users , setUsers] =  useState(null);
    const [search , setSearch] =useSearchParams()   //   search = {search:""}
    
  useEffect(()=>{
   fetchUsers();
  } , [search])



   async function fetchUsers(){
      setLoading(true)
          try {
                      const res =await axios.get("http://localhost:7070/api/v1/owner/all" , {
                        params:{search:search.get("search") || ""}
                      })

                      console.log(res , "RESPONSE")
                if(res?.data?.data){
                  setUsers(res?.data?.data)
                }
         
          } catch (error) {
            console.log(error , "failed to fetch users ")
            setUsers([])
          }finally{
            setLoading(false)
          }
   }





   loading && "LOADING..."



  return (
    <div>
      <h1>PrincipalDashboard</h1>
      <h4>All Users </h4>
      <div>
        <input type='text' placeholder='Search by fullname and email' onChange={(e)=>{setSearch({search:e.target.value})}}/>
      </div>
      <div className='flex flex-wrap gap-4 justify-between'>
  {
        users && users.map((user , index)=>(
          <div key={index} className='border border-red-400 w-[250px] '>
            <p>{user?.fullName}</p>
            <p>{user?.email}</p>
            <Link to={`/user/${user._id}`}>view Details</Link>
          </div>
        ))
      }
   
      </div>
     </div>
  )
}

export default PrincipalDashboard