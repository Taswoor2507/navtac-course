import React, { useState } from 'react'

const AddTask = ({handleAddTask}) => {
const [des, setDes] = useState("")

function handleSubmit(e){
       e.preventDefault();
       handleAddTask(des)
        setDes("")
}

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input value={des}   onChange={(e)=>{setDes(e.target.value)}}    type="text" placeholder="Primary" className="input input-primary" />
        <button className="btn btn-secondary">Secondary</button>
        </form>
    </div>
  )
}

export default AddTask