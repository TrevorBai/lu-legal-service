import React from 'react'
import './Testimonial.css'

const Testimonial = props => {
  return (
    <div className="col-sm-4">
      <blockquote>
        {props.citation}
        <cite>
          <img src={props.customerPic} alt={props.customerName} />
          {props.customerName}
        </cite>
      </blockquote>
    </div>
  )
}

export default Testimonial