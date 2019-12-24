import React from 'react'
import './Business.css'

const Business = props => {
  return (
    <div className = "col-sm-5">
      <ion-icon name={props.icon}></ion-icon>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  )
}

export default Business