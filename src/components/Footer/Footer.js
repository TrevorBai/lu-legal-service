import React from 'react'
import './Footer.css'
import FooterNav from './FooterNav/FooterNav'
import SocialMediaNav from './SocialMediaNav/SocialMediaNav'

const Footer = props => {
  return (
    <footer>
      <div className="row">
        <div className="col-sm-6">
          <ul className="footer-nav">
            <FooterNav link="/contact">About us</FooterNav>
            <FooterNav link="/appointments">Book an Appointment</FooterNav>
          </ul>
        </div>
        <div className="col-sm-6">
          <ul className="social-links float-right">
            <SocialMediaNav link="/" socialMediaLogo="logo-facebook"/>
            <SocialMediaNav link="/" socialMediaLogo="logo-twitter"/>
            <SocialMediaNav link="/" socialMediaLogo="logo-google"/>
            <SocialMediaNav link="/" socialMediaLogo="logo-instagram"/>
          </ul>
        </div>
        <p>Copyright &copy; 2019 by Lu Legal Services. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer