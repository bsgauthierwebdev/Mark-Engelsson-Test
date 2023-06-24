import React, {useState} from 'react'

const TestCommentsForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [comment, setComment] = useState('')

  const handleCommentSubmission = () => {
    console.log(name, email, comment)
  }

  return (
    <div>
      <h2>TestCommentsForm</h2>
      <div>
        <textarea 
          value = {comment}
          placeholder = 'Comment'
          onChange = {(e) => setComment(e.target.value)}
        />
      </div>
      <div>
        <input 
          type = 'text'
          value = {name}
          placeholder = 'Name'
          onChange = {(e) => setName(e.target.value)}
        />
        <input 
          type = 'email'
          value = {email}
          placeholder = 'Email'
          onChange = {(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <button
          type = 'button'
          onClick = {handleCommentSubmission}
        >
          Submit Comment
        </button>
      </div>
    </div>

  )
}

export default TestCommentsForm