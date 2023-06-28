import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import { useMutation, gql } from '@apollo/client'
import '../Styles/CommentsForm.css'

const ADD_COMMENT = gql`
mutation AddComment($comment: String!, $name: String!, $email: String!, $slug: String!) {
  createComment(
    data: {name: $name, email: $email, comment: $comment, post: {connect: {slug: $slug}}}
  ) {
    comment
    createdAt
    email
    id
    name
    post {
      slug
    }
  }
}
`

const CommentsForm = () => {
  const {slug} = useParams()

  const [commentError, setCommentError] = useState(false)
  const [nameError, setNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [showSuccessMessage, setShowSuccessMessage] = useState(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [comment, setComment] = useState('')

  const [addComment, {data}] = useMutation(ADD_COMMENT, {
    variables: {name, email, comment, slug}
  })

  const validateForm = () => {
    // Regular expression to validate email addresses
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    // Check if fields are valid
    if (comment.trim() === '') {
      setCommentError(true)
      return
    }
    if (name.trim() === '') {
      setNameError(true)
      return
    }
    if (!email.match(emailRegex)) {
      setEmailError(true)
      return
    }
  }

  const handleSubmitComment = (e) => {
    e.preventDefault()
    console.log(`Comment: ${comment}, Name: ${name}, Email: ${email}, Slug: ${slug}`)
    setCommentError(false)
    setNameError(false)
    setEmailError(false)

    validateForm()
    
    addComment()
    // setName('')
    // setEmail('')
    // setComment('')
  }

  return (
    <div className = 'CommentsForm'>
      <h3 className = 'CommentsForm-header'>
        Leave a Comment
      </h3>
      <div className = 'CommentsForm-comment'>
        <textarea
          className = 'CommentsForm-comment-input' 
          value = {comment}
          placeholder = 'Comment'
          name = 'comment'
          required
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
          required
          onChange = {(e) => setName(e.target.value)}
        />
        <input 
          className = 'CommentsForm-email-input'
          type = 'text'
          value = {email}
          placeholder = 'Email'
          name = 'email'
          required
          onChange = {(e) => setEmail(e.target.value)}
        />
      </div>
      {commentError && <p className = 'CommentsForm-error-message'>Please include your comment</p>}
      {nameError && <p className = 'CommentsForm-error-message'>Please include your name</p>}
      {emailError && <p className = 'CommentsForm-error-message'>Please include your valid email address</p>}
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