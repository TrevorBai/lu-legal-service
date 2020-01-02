import React from 'react'
import './SubBanner.css'

const SubBanner = props => {
  return (
    <section className="SubBanner">
    <h1>{props.title}</h1>
    </section>
  )
}

export default SubBanner