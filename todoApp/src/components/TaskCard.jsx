import React from "react";

const TaskCard = ({task , handleDeleteTask , handleUpdateTask}) => {
  return (
    <div>
      <div className="card w-[450px] bg-primary card-xs shadow-sm">
        <div className="card-body">
    
          <p className="text-xl">
            {task.description}
          </p>
          <div className=" card-actions flex">
            <select
              value={task.status}
              onChange={(e)=>{
                handleUpdateTask(task.id , e.target.value,)
              }}
              className="select select-secondary "
            >
              <option disabled={true}>Task Status</option>
              <option value={"pending"}>Pending</option>
              <option value={"completed"}>Completed</option>
            </select>
            <button onClick={()=>{handleDeleteTask(task.id)}} className="btn btn-secondary">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
