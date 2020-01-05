import React from 'react'
import './Banner.css'
import { NavLink } from 'react-router-dom'
import Button from '../UI/Button/Button'

const Banner = props => {

  const scrollToSectionHandler = () => {
    window.scrollTo({
      top: .64 * window.innerHeight,
      left: 0, 
      behavior: 'smooth'
    })
  }

  return (
    <section className="Banner">
      <div className="row">
        <div className="col-sm-1">
        </div>
        <div className="col-sm-8">
          <h1>Welcome to Lu Legal Services!</h1>
          <NavLink className="btn btn-primary" to="/appointments">
            Count me in
          </NavLink>
          <Button 
            className="btn btn-primary"
            clicked={scrollToSectionHandler} >
            Show me more
          </Button>
        </div>
        <div className="col-sm-3">
        </div>
      </div>
    </section>
  )
}

export default Banner