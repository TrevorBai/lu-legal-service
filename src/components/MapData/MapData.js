import React from 'react'
import './MapData.css'

const MapData = props => {
  return (
    <section className="MapData">
      <h2>Contact Lu legal services today!</h2>
      <p>Not only could book an appointment online, but you are welcome to drop by or call us 7 days a week! Below are our address and contact info <span role="img" aria-label="fire">🔥🔥</span></p>
      <div className="row">
        <div className="col-sm-6">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2907.36206444624!2d-79.88636758463774!3d43.22286798816867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c9afc9e4d4f69%3A0x530d82e51b8d9431!2s998%20Upper%20James%20St%2C%20Hamilton%2C%20ON%20L9C%203A6!5e0!3m2!1sen!2sca!4v1577911236637!5m2!1sen!2sca" width="100%" height="100%" allowFullScreen="" title='maps'></iframe>
        </div>
        <div className="col-sm-1"></div>
        <div className="col-sm-3">
          <p><strong>Contacts</strong></p>
          <p className="might-overflow"><em><b>Email:</b></em>&nbsp; lu@lulegalservices.com<br />
            <em><b>Phone:</b></em>&nbsp; 123 456 7890<br />
            <em><b>Fax:</b></em>&nbsp; 987 654 3210<br />
            <em><b>Address:</b></em>&nbsp; 123 XXX St, Unit 00, Hamilton, ON T6C 0P1</p>
        </div>
        <div className="col-sm-2">
          <p><strong>Office Hours</strong></p>
          <p>Monday to Sunday:</p>
          <p>9 A.M. - 6 P.M.</p>
        </div>
      </div>
    </section>
  )
}

export default MapData