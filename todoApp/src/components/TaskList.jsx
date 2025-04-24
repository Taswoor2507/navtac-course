import React from 'react'
import TaskCard from './TaskCard'

const TaskList = ({tasks, handleDeleteTask , handleUpdateTask}) => {
  return (
    <div>
        {

        tasks.map((task , index)=>{
            return (
                <TaskCard  task = {task} key={index}   handleDeleteTask={handleDeleteTask} handleUpdateTask={handleUpdateTask}/>
            )
        })

        }

    </div>
  )
}

export default TaskList