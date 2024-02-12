import React, {useRef, useState} from 'react'
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
import bandn from '../Images/B&N-2.png'
import goodreads from '../Images/goodreads.png'
import pagebreak from '../Images/pagebreak.png'
import '../Styles/Contact.css'

const Contact = () => {
  const form = useRef()
  const newsletterForm = useRef()

  const [showSuccessMessage, setShowSuccessMessage] = useState(null)
  const [showSubscriptionMessage, setShowSubscriptionMessage] = useState(null)

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
      form.current.elements.subject.value = ''
      form.current.elements.message.value = ''
    }, (error) => {
      console.log(error.text)
    })
    setShowSuccessMessage(true)
    setTimeout(() => {
      setShowSuccessMessage(false)
    }, 3000)
  }

  const sendSignup = (e) => {
    e.preventDefault()
    console.log('Sending')

    emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID,
        'template_x9omuwl',
        newsletterForm.current,
        process.env.REACT_APP_PUBLIC_KEY
    )
    .then((result) => {
        console.log(result.text)
        newsletterForm.current.reset()
      }, (error) => {
        console.log(error.text)
      })
      setShowSubscriptionMessage(true)
      setTimeout(() => {
        setShowSubscriptionMessage(false)
      }, 3000)
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
            <div className="successMessage">
              {showSuccessMessage && <span className = 'CommentsForm-submit-message'>Thank you, I will get back to you shortly.</span>}
            </div>
          </div>
        </form>
      </div>
      <div className="pagebreak">
        <img src = {pagebreak} alt = 'page break'/>
      </div>
      <div className="Contact-newsletter">
        <p>Sign up for my newsletter</p>
        <form ref = {newsletterForm} onSubmit = {sendSignup}> 
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
            <div className="subscription-message">
              {showSubscriptionMessage && <span className = 'CommentsForm-submit-message'>Thank you for subscribing to my newsletter!</span>}
            </div>
          </div>
        </form>
      </div>
      <div className="pagebreak">
        <img src = {pagebreak} alt = 'page break'/>
      </div>
      <div className = 'Contact-links'>
        <div className = 'Contact-links-text'>
          <p>Find my works online</p>
        </div>
        <div className = 'Contact-links-icons'>
          <a target = '_blank' href = 'https://www.amazon.co.uk/Mark-Engelsson/e/B0BSTBB4QH'>
            <img 
              src = {amazon}
              alt = 'amazon'
            />
          </a>
          <a target = '_blank' href = 'https://www.barnesandnoble.com/w/what-if-whats-inside-me-isnt-me-mark-engelsson/1143789139?ean=9798368010052'>
            <img 
              src = {bandn}
              alt = 'barnes & noble'
            />
          </a>
          <a target = '_blank' href = 'https://www.goodreads.com/author/show/27556186.Mark_Engelsson'>
            <img 
              src = {goodreads}
              alt = 'goodreads'
            />
          </a>
          {/* <a href = 'https://www.facebook.com/markengelssonwrites'>
            <img 
              src = {facebook}
              alt = 'facebook'
            />
          </a> */}
          {/* <a href = 'https://instagram.com/markengelssonwrites'>
            <img 
              src = {instagram}
              alt = 'instagram'
            />
          </a> */}
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