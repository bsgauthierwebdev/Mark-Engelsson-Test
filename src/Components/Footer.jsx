import React from 'react'
import emailjs from 'emailjs-com'
import logo from '../Images/MEWLogo.jpg'
import designLogo from '../Images/brent-s-gauthier-logo.png'
import negativelogo from '../Images/MEWLogo-Negative.jpg'
import substack from '../Images/substack.png'
import linktree from '../Images/linktree.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
// import { faFacebook } from '@fortawesome/free-brands-svg-icons'
// import { faAmazon } from '@fortawesome/free-brands-svg-icons'
import '../Styles/Footer.css'
import { Link } from 'react-router-dom'
import NewsletterSignup from './NewsletterSignup'

const Footer = () => {
  // let copy = [%raw {|'\u00a9'|}];

  return (
    <div className = 'Footer'>
      <div className = 'Footer-image'>
        <img 
          src = {negativelogo}
        />
      </div>
      <div className="Footer-newsletter">
        <Link to = '/contact'>
            Sign up for my newsletter
        </Link>
      </div>
      <div className = 'Footer-copyright'>
        <span>Content &copy; 2024 Mark Engelsson</span>
      </div>
      {/* <div className="Footer-design">
        <span>Design &copy; 2024 Brent S. Gauthier</span>
      </div> */}
      {/* <div className = 'Footer-substack'>
        <span>Find more of my writings at my Substack</span>
        <a href = 'https://markengelssonwrites.substack.com/' target = '_blank'>
          <img 
            src = {substack}
            alt = 'substack'
          />
        </a>
      </div> */}
      {/* <div className = 'Footer-design-logo'>
        <span>Design by </span>
        <img src = {designLogo} alt = 'Brent S Gauthier' />
      </div> */}
      {/* <div className = 'Footer-linktree'>
        <span>Check out my Linktree</span>
        <a href = 'https://linktr.ee/markengelssonwrites'>
          <img 
            src = {linktree} 
            alt = 'linktree' 
          />
        </a>
      </div> */}
    </div>
  )
}

export default Footer