import React, { useEffect, useState } from 'react'
import UsersList from '../components/UsersList'

const Users = () => {
   const [users, setUsers]= useState(null)
   const [loading, setLoading]= useState(false)

   useEffect(()=>{
    setLoading(true)
    fetch("https://dummyjson.com/users")
    .then((res)=>{return res.json()})
    .then((data)=>{
      setUsers(data)
      setLoading(false)
    })
   } , [])




  return (
    <div className='flex-1 bg-black'>
      <UsersList  users = {users} loading={loading}/>
    </div>
  )
}

export default Users