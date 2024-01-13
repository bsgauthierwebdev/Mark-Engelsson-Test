import React, {useRef} from 'react'
import emailjs from 'emailjs-com'
import '../Styles/NewsletterSignup.css'

const NewsletterSignup = () => {
    const form = useRef()

    const sendSignupRequest = (e) => {
        e.preventDefault()

        emailjs.sendForm(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_NEWSLETTER_TEMPLATE_ID,
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
    <div className = 'NewsletterSignup'>
        <div className="Newsletter-Header">
            <p>Subscribe for the latest updates</p>
        </div>
        <div className="Newsletter-Container">
            <form 
                ref = {form}
                onSubmit = {sendSignupRequest}
            >
                <div className="Signup-container">
                    <div className="signup-email-input">
                        <input 
                            type="email" 
                            placeholder = 'Email Address'
                            name = 'email'
                            className = 'signup-email-input-box'
                        />
                    </div>
                    <div className="signup-submit">
                        <button
                            className = 'signup-submit-button'
                            type = 'submit'
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default NewsletterSignup