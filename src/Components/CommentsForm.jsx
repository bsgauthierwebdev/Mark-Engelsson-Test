import React, {useState} from 'react'
import { useMutation, gql } from '@apollo/client'

const ADD_COMMENT = gql`
  mutation AddComment($input: UserInput!) {
    addComment(input: $input) {
      comment
      name
      email
    }
  }
`

const CommentsForm = () => {
  const [comment, setComment] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const [addComment, {loading, error}] = useMutation(ADD_COMMENT)

  const handleFormSubmit = (e) => {
    e.preventDefault()
    addComment({
      variables: {
        imput: {comment, name, email}
      }
    })
      .then((response) => {
        // Handle successfull submission
        console.log(response)
      })
      .catch((error) => {
        // Handle error
        console.error(error)
      })
  }

  return (
    <div>
      <form onSubmit = {handleFormSubmit}>
        <textarea 
          value =  {comment}
          name = 'comment'
          placeholder = 'Comment'
          onChange = {(e) => setComment(e.target.value)}
        />
        <input 
          type = 'text'
          value = {name}
          name = 'name'
          placeholder = 'Name'
          onChange = {(e) => setName(e.target.value)}
        />
        <input 
          type = 'text'
          value = {email}
          name = 'email'
          placeholder = 'Email'
          onChange = {(e) => setEmail(e.target.value)}
        />
        <button type = 'submit' disabled = {loading}>
          {loading ? 'Submitting...' : 'Submit Comment'}
        </button>
      </form>
    </div>
  )
}

export default CommentsForm