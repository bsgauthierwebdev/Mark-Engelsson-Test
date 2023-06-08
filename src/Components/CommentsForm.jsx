import React, {useState, useEffect, useRef} from 'react'
import '../Styles/CommentsForm.css'

export const submitComment = async (obj) => {
  const result = await fetch('/api/comments', {
    method: 'POST',
    body: JSON.stringify(obj)
  })

  return result.json()
}

const CommentsForm = ({slug}) => {
  const [error, setError] = useState(false)
  const [localStorage, setLocalStorage] = useState(null)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const commentEl = useRef()
  const nameEl = useRef()
  const emailEl = useRef()
  const storeDataEl = useRef()

  const handleCommentSubmit = () => {
    setError(false)

    const {value: comment} = commentEl.current
    const {value: name} = nameEl.current
    const {value: email} = emailEl.current
    const {checked: storeData} = storeDataEl.current

    if (!comment || !name || !email) {
      setError(true)
      return
    }

    const commentObj = {name, email, comment, slug}

    if (storeData) {
      localStorage.setItem('name', name)
      localStorage.setItem('email', email)
    } else {
      localStorage.removeItem('name', name)
      localStorage.removeItem('email', email)
    }

  }

  return (
    <div className = 'CommentsForm'>
        <h3 className = 'CommentsForm-header'>CommentsForm</h3>
        <div className = 'CommentsForm-comment'>
          <textarea 
            ref = {commentEl} 
            className = 'comment-container'
            placeholder = 'Leave your comments here...'
            name = 'comment'
          />
        </div>
        <div className = 'CommentsForm-sender'>
          <input 
            type = 'text'
            ref = {nameEl}
            className = 'name-container'
            placeholder = 'Name'
            name = 'name'
          />
          <input 
              type = 'text'
              ref = {emailEl}
              className = 'email-container'
              placeholder = 'Email'
              name = 'email'
            />
        </div>
        <div className = 'save-info'>
          <div>
            <input ref = {storeDataEl} type = 'checkbox' id = 'storeData' name = 'storeData' value = 'true' />
            <label className = 'save-info-label' htmlFor = 'storeData'>Save my info</label>
          </div>
        </div>
        {error && <p className = 'invalid-input'>All fields are required</p>}
        <div className = 'comment-submit'>
          <button 
            type = 'button' 
            onClick = {handleCommentSubmit}
            className = 'comment-button'
          >
            Submit Comment  
          </button>
          {showSuccessMessage && <span className = 'submit-message'>Comment submitted for review...</span>}
        </div>
    </div>
  )
}

export default CommentsForm