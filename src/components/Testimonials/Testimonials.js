import React from 'react'
import './Testimonials.css'
import customerPic1 from '../../assets/images/customer-1.jpg'
import customerPic2 from '../../assets/images/customer-2.jpg'
import customerPic3 from '../../assets/images/customer-3.jpg'
import Testimonial from './Testimonial/Testimonial'

const Testimonials = props => {
  return (
    <section className="Testimonials">
      <h2>Reviews of Lu legal services</h2>
      <div className="row">
        <Testimonial 
          citation="tationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum nulla pariatur? At vero eos et accusamus."
          customerPic={customerPic1}
          customerName="Alberto Duncan"
        />
        <Testimonial 
          citation="id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est cumque nihil id quod maxime placeat facere. nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit."
          customerPic={customerPic2}
          customerName="Joana Silva"
        />
        <Testimonial 
          citation="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
          customerPic={customerPic3}
          customerName="Milton Chapman"
        />
      </div>
    </section>
  )
}

export default Testimonials