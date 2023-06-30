import React from 'react'
import { useMutation, gql } from '@apollo/client'

const ADD_COMMENT = gql`
  mutation AddComment {
    createComment(
      data: {name: "blah", email: "blah", comment: "blah", post: {connect: {slug: "test-post"}}}
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

const TestCommentsForm = () => {
  const [addComment] = useMutation(ADD_COMMENT)

  const handleSubmit = (e) => {
    e.preventDefault()
    addComment()
  }

  return (
    <div>
      <h1>TestCommentsForm</h1>
      <button type = 'button' onClick = {handleSubmit}>
        Submit
      </button>
    </div>
  )
}

export default TestCommentsForm