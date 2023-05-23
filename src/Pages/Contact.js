import React, {useState} from 'react'
import '../Styles/Contact.css'

const FORM_ENDPOINT = ''

const Contact = () => {
  const [submitted, setSubmitted] = useState(false)
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true)
    }, 100)
  }

  if (submitted) {
    return (
      <>
        <div className = 'thank-you'>Thank you!</div>
        <div className = 'see-you-soon'>We will be in touch soon</div>
      </>
    )
  }

  return (
    <div className = 'Contact'>
      <div className = 'Contact-container'>
        <form
          action = {FORM_ENDPOINT}
          onSubmit = {handleSubmit}
          method = 'POST'
          target = '_blank'
        >
          <div className = 'name-input'>
            <input 
              type = 'text'
              placeholder = 'Name'
              name = 'name'
              className = 'name-input-box'
              required
            />
          </div>
          <div className = 'email-input'>
            <input 
              type = 'email'
              placeholder = 'Email'
              name = 'email'
              className = 'email-input-box'
              required
            />
          </div>
          <div className = 'message-input'>
            <textarea 
              placeholder = 'Your Message'
              name = 'message'
              className = 'message-input-box'
              required
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