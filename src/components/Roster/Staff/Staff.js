import React from 'react'
import './Staff.css'

const Staff = props => {
  return (
    <div className="col-sm-4">
      <div>
        <h3>{props.name}</h3>
        <p>{props.memoir}</p>
      </div>
    </div>
  )
}

export default Staff