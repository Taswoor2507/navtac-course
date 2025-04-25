import React, { useMemo, useState } from 'react'

const UserList = ({users}) => {
    const [search, setSearch] = useState("")
    const [step , setStep] = useState(0)

   const filterUsers = useMemo(()=>{
    console.log("memo called")
    return users?.filter((user)=>{
        return user?.first_name?.toLowerCase().includes(search.toLowerCase()) ||
               user?.email?.toLowerCase().includes(search.toLowerCase())
    })
}, [search, users])


   function handleSearch(e){
          setSearch(e.target.value)
   }




  return (
    <div>
        <p>{step}</p>
        <button  onClick={()=>setStep(step+1)}>Step</button>
        <input type='text'  placeholder='Search User...'   onChange={handleSearch}/>
        {
            filterUsers?.map((user=>{
                
                return(
                    <div  style={{border:"1px solid black"}}  key={user.id}>
                        <h1>{user.first_name}</h1>
                        <p>{user.email}</p>
                        <p>{user.gender}</p>
                    </div>
                )
            }))
        }
    </div>
  )
}

export default UserList