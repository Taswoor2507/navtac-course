import React, { useState } from 'react'
import AddTask from './components/AddTask'
import Filters from './components/Filters'
import Progress from './components/Progress'
import TaskCard from './components/TaskCard'
import TaskDataProgress from './components/TaskDataProgress'
import TaskList from './components/TaskList'

const App = () => {
   let [tasks , setTasks] = useState([]);

   function addTask(description){
    // spread operator     
    setTasks([...tasks , {id:tasks.length+1 , description:description , status:"pending"}])
}
 console.log(tasks)
// update task status
    
function updateTaskStatus(id , status){
    let currentTask =  tasks.map((task)=>{
      if(task.id === id){
        task.status = status
      }
      return task
    })
    setTasks(currentTask)
}

// delete task

function deleteTask(id){
    let currentTask =  tasks.filter((task)=>{
      return task.id !== id
    })
    setTasks(currentTask)
}








  return (
    <div>
        <AddTask handleAddTask = {addTask}/>
        <Filters/>
        <Progress/>
        <TaskList tasks={tasks}  handleDeleteTask={deleteTask} handleUpdateTask={updateTaskStatus}/>
       <TaskDataProgress/>
    </div>
  )
}

export default App