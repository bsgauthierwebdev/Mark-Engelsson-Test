import React, {useState} from 'react'
import { useMutation, gql } from '@apollo/client'

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

const TestCommentsForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [comment, setComment] = useState('')

  const [addComment, {loading, error, data}] = useMutation(ADD_COMMENT, {
    variables: {name, email, comment}
  })

  const handleSubmitComment = (e) => {
    e.preventDefault()
    addComment()
    setName('')
    setEmail('')
    setComment('')
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
          onClick = {handleSubmitComment}
        >
          Submit Comment
        </button>
      </div>
    </div>

  )
}

export default TestCommentsForm