import React, {useState} from 'react'
import { useMutation, gql } from '@apollo/client'
import '../Styles/CommentsForm.css'

const ADD_COMMENT = gql`
  mutation AddComment($name: String!, $email: String!, $comment: String!) {
    createComment(data: {
      name: $name,
      email: $email,
      comment: $comment
    }) {
      name
      email
      comment
      id
    }
  }
`

const CommentsForm = () => {
  const [error, setError] = useState(false)
  const [showSuccessMessage, setShowSuccessMessage] = useState(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [comment, setComment] = useState('')

  const [addComment, {data}] = useMutation(ADD_COMMENT, {
    variables: {name, email, comment}
  })

  // const handleSubmitComment = (e) => {
  //   e.preventDefault()
  //   setError(false)

  //   if (!name || !email || !comment) {
  //     setError(true)
  //     return
  //   }

  //   console.log(data)
  //   addComment()
  //   setName('')
  //   setEmail('')
  //   setComment('')
  // }

  const handleSubmitComment = (e) => {
    e.preventDefault()
    console.log(`Name: ${name}, Email: ${email}, Comment: ${comment}`)
    addComment()
    setName('')
    setEmail('')
    setComment('')
  }

  return (
    <div className = 'CommentsForm'>
      <h3 className = 'CommentsForm-header'>
        CommentsForm
      </h3>
      <div className = 'CommentsForm-comment'>
        <textarea
          className = 'CommentsForm-comment-input' 
          value = {comment}
          placeholder = 'Comment'
          name = 'comment'
          onChange = {(e) => setComment(e.target.value)}
        />
      </div>
      <div className = 'CommentsForm-userdata'>
        <input 
          className = 'CommentsForm-name-input'
          type = 'text'
          value = {name}
          placeholder = 'Name'
          name = 'name'
          onChange = {(e) => setName(e.target.value)}
        />
        <input 
          className = 'CommentsForm-email-input'
          type = 'text'
          value = {email}
          placeholder = 'Email'
          name = 'email'
          onChange = {(e) => setEmail(e.target.value)}
        />
      </div>
      {error && <p className = 'CommentsForm-error-message'>All fields are required</p>}
      <div className = 'CommentsForm-submit'>
        <button 
          type = 'button' 
          onClick = {handleSubmitComment}
          className = 'CommentsForm-submit-button'
        >
          Add Comment
        </button>
        {showSuccessMessage && <span className = 'CommentsForm-submit-message'>Comment submitted for review...</span>}
      </div>
    </div>
  )
}

export default CommentsForm