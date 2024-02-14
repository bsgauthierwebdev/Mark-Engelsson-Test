import React from 'react'
import negativelogo from '../Images/MEWLogo-Negative.jpg'
import '../Styles/Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
return (
    <div className = 'Footer'>
      <div className = 'Footer-image'>
        <img 
          src = {negativelogo} alt = 'inkpot logo'
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
    </div>
  )
}

export default Footer