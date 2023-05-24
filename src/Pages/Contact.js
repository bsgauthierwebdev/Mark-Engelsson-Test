import React, {useRef} from 'react'
import emailjs from 'emailjs-com'
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
    }, (error) => {
      console.log(error.text)
    })
  }

  // const [submitted, setSubmitted] = useState(false)
  // const handleSubmit = () => {
  //   setTimeout(() => {
  //     setSubmitted(true)
  //   }, 100)
  // }

  // if (submitted) {
  //   return (
  //     <>
  //       <div className = 'thank-you'>Thank you!</div>
  //       <div className = 'see-you-soon'>We will be in touch soon</div>
  //     </>
  //   )
  // }

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
              // {...register('name', {
              //   required: {value: true, message: 'Please enter your name'},
              //   maxLength: {
              //     value: 30,
              //     message: 'Name must be no more than 30 characters'
              //   }
              // })}
            />
            {/* {errors.name && <span className = 'error-message'>{errors.name.message}</span>} */}
          </div>
          <div className = 'email-input'>
            <input 
              type = 'email'
              placeholder = 'Email'
              name = 'email'
              className = 'email-input-box'
              // {...register('email', {
              //   required: {value: true, message: 'Please enter your email address'},
              //   pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
              // })}
            />
            {/* {errors.email && (
              <span className = 'error-message'>Please ender a valid email address</span>
            )} */}
          </div>
          <div className = 'subject-input'>
            <textarea 
              placeholder = 'Subject'
              name = 'subject'
              className = 'subject-input-box'
              // {...register('subject', {
              //   required: {value: true, message: 'Please enter the subject of your message'},
              //   maxLength: {
              //     value: 75,
              //     message: 'Subject must be no more than 75 characters'
              //   }
              // })}
            />
            {/* {errors.subject && (
              <span className = 'error-message'>{errors.subject.message}</span>
            )} */}
          </div>
          <div className = 'message-input'>
            <textarea 
            rows = {3}
              placeholder = 'Your Message'
              name = 'message'
              className = 'message-input-box'
              // {...register('message', {
              //   required: true
              // })}
            />
            {/* {errors.message && <span className = 'error-message'>Please enter your message</span>} */}
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