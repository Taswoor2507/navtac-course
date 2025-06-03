import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
const PrincipalDashboard = () => {
    const [loading , setLoading] = useState(true);
    const [users , setUsers] =  useState(null);

   async function fetchUsers(){
      setLoading(true)
          try {
                      const res =await axios.get("http://localhost:7070/api/v1/owner/all")

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


   useEffect(()=>{
    fetchUsers();
   },[])



   loading && "LOADING..."



  return (
    <div>
      <h1>PrincipalDashboard</h1>
      <h4>All Users </h4>
      {
        users && users.map((user , index)=>(
          <div key={index} className='border border-red-400'>
            <p>{user?.fullName}</p>
            <p>{user?.email}</p>
            <Link to={`/user/${user._id}`}>view Details</Link>
          </div>
        ))
      }
    </div>
  )
}

export default PrincipalDashboard