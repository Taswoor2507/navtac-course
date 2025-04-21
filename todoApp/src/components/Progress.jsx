import React from 'react'

const Progress = () => {
  return (
    <div>
        <progress className="progress progress-secondary w-56" value={0} max="100"></progress>
    </div>
  )
}

export default Progress