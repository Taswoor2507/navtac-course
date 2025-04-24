import React from 'react'

const TaskDataProgress = ({progress}) => {
  return (
    <div>
        <div className="radial-progress text-primary" style={{ "--value": progress } /* as React.CSSProperties */ } aria-valuenow={70} role="progressbar">
  {progress}  &nbsp;   %
</div>

    </div>
  )
}

export default TaskDataProgress