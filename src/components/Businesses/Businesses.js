import React from 'react'
import './Businesses.css'
import Business from './Business/Business'

const Businesses = props => {
  return (
    <section className="Businesses">
      <h2>Here is what we can help you</h2>
      <p>Our businesses involve traffic tickets, landlord and tenent, small claims court and commission oaths.</p>
      <div className="row">
        <Business
          icon="car"
          title="traffic tickets"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."
        />
        <div className="col-sm-2">
        </div>
        <Business
          icon="home"
          title="landlord and tenant"
          description="Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Quisque rutrum. Aenean imperdiet."
        />
      </div>
      <div className="row">
        <Business
          icon="cash"
          title="small claims"
          description="Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores. quam un skeptic Cambridge amico dit me que Occidental es.Li Europan lingues es membres del sam familie."
        />
        <div className="col-sm-2">
        </div>
        <Business
          icon="create"
          title="commission oaths"
          description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere."
        />
      </div>
    </section>
  )
}

export default Businesses