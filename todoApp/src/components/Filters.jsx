import React from "react";

const Filters = ({ taskFilter, setTaskFilter}) => {
  return (
    <div>
      <button onClick={()=>{setTaskFilter("all")}}    className={`btn btn-dash btn-primary   ${taskFilter==="all" ?   "btn-secondary"  :null }        `}>All</button>
      <button onClick={()=>{setTaskFilter("pending")}}    className={`btn btn-dash btn-primary ${taskFilter==="pending" ?   "btn-secondary"  :null }    `}>Pending</button>
      <button onClick={()=>{setTaskFilter("completed")}}   className={ `btn btn-dash btn-primary  ${taskFilter==="completed" ?   "btn-secondary"  :null }  `}>Completed</button>
    </div>
  );
};

export default Filters;
