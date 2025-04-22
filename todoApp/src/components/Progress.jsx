import React from 'react'

const Progress = ({progress}) => {
  return (
    <div>
        <progress className="progress progress-secondary w-56" value={progress} max="100"></progress>
        {progress}%
    </div>
  )
}

export default Progress