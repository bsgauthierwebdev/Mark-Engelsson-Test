import React, {useRef} from 'react'
import emailjs from 'emailjs-com'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAmazon, faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import amazon from '../Images/amazon.png'
import facebook from '../Images/facebook.png'
import instagram from '../Images/instagram.png'
import linkedin from '../Images/linkedin.png'
import linktree from '../Images/linkedin.png'
import substack from '../Images/substack.png'
import twitter from '../Images/twitter.png'
import '../Styles/Contact.css'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_PUBLIC_KEY
    )
    .then((result) => {
      console.log(result.text)
      // form.current.elements['subject', 'message'].value = ''
    }, (error) => {
      console.log(error.text)
    })
  }

  const sendSignup = (e) => {
    e.preventDefault()

    emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_NEWSLETTER_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
    )
    .then((result) => {
        console.log(result.text)
        form.current.reset()
      }, (error) => {
        console.log(error.text)
      })
  }

  return (
    <div className = 'Contact'>
      <div className = 'Contact-header'>
        <h1>Contact</h1>
      </div>
      <div className = 'Contact-container'>
        <form
          ref = {form}
          onSubmit = {sendEmail}
        >
          <div className = 'name-input'>
            <input 
              type = 'text'
              placeholder = 'Name'
              name = 'name'
              className = 'name-input-box'
            />
          </div>
          <div className = 'email-input'>
            <input 
              type = 'email'
              placeholder = 'Email'
              name = 'email'
              className = 'email-input-box'
            />
          </div>
          <div className = 'subject-input'>
            <textarea 
              placeholder = 'Subject'
              name = 'subject'
              className = 'subject-input-box'
            />
          </div>
          <div className = 'message-input'>
            <textarea 
            rows = {3}
              placeholder = 'Your Message'
              name = 'message'
              className = 'message-input-box'
            />
          </div>
          <div className = 'submit'>
            <button 
              className = 'submit-button'
              type = 'submit'
            >
              Send your message
            </button>
          </div>
        </form>
      </div>
      <div className="Contact-newsletter">
        <p>Sign up for my newsletter</p>
        <form ref = {form} onSubmit = {sendSignup}> 
          <div className = 'email-input'>
              <input 
                type = 'email'
                placeholder = 'Email'
                name = 'email'
                className = 'email-input-box'
              />
            </div>
            <div className = 'submit'>
            <button 
              className = 'submit-button'
              type = 'submit'
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
      <div className = 'Contact-links'>
        <div className = 'Contact-links-text'>
          <p>Find my works online</p>
        </div>
        <div className = 'Contact-links-icons'>
          <a href = 'https://www.amazon.co.uk/Mark-Engelsson/e/B0BSTBB4QH'>
            <img 
              src = {amazon}
              alt = 'amazon'
            />
          </a>
          {/* <a href = 'https://www.facebook.com/markengelssonwrites'>
            <img 
              src = {facebook}
              alt = 'facebook'
            />
          </a> */}
          <a href = 'https://instagram.com/markengelssonwrites'>
            <img 
              src = {instagram}
              alt = 'instagram'
            />
          </a>
          {/* <a href = 'https://www.linkedin.com/in/mark-engelsson-594728254/'>
            <img 
              src = {linkedin}
              alt = 'linkedin'
            />
          </a> */}
          {/* <a href = 'https://twitter.com/markengelsson'>
            <img 
              src = {twitter}
              alt = 'twitter'
            />
          </a> */}
        </div>
      </div>
    </div>
  )
}

export default Contact