import React from 'react'

const TaskDataProgress = () => {
  return (
    <div>
        <div className="radial-progress text-primary" style={{ "--value": 70 } /* as React.CSSProperties */ } aria-valuenow={70} role="progressbar">
  70%
</div>
<div className="radial-progress text-primary" style={{ "--value": 70 } /* as React.CSSProperties */ } aria-valuenow={70} role="progressbar">
  70%
</div>
    </div>
  )
}

export default TaskDataProgress