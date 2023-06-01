import React, {useRef} from 'react'
import emailjs from 'emailjs-com'
import '../Styles/Contact.scss'

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
    }, (error) => {
      console.log(error.text)
    })
  }

  return (
    <div className = 'Contact'>
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
      
    </div>
  )
}

export default Contact