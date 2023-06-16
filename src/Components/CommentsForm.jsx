import React, {useState, useRef, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { useMutation, gql } from '@apollo/client'
import { submitComment } from '../Services/Services'

const ADD_COMMENT = gql`
  mutation CreateComment(
    $name: String!,
    $email: String!,
    $comment: String!,
    $slug: String!
  ) {
    createComment(data: {
        name: $name,
        email: $email,
        comment: $comment,
        post: {
            connect: {slug: $slug}
        }
    })
    {
        id
    }
  }
`

const CommentsForm = () => {
  const {slug} = useParams()

  const [error, setError] = useState(false)
  const [localStorage, setLocalStorage] = useState(null)
  const [showSuccessMessage, showErrorMessage] = useState(false)
  const commentEl = useRef()
  const nameEl = useRef()
  const emailEl = useRef()
  // const storeDataEl = useRef()

  // useEffect(() => {
  //   nameEl.current.value = window.localStorage.getItem('name')
  //   emailEl.current.value = window.localStorage.getItem('email')
  // }, [])

  const handleSubmitComment = () => {
    setError(false)
    
    const {value: comment} = commentEl.current
    const {value: name} = nameEl.current
    const {value: email} = emailEl.current

    if (!comment || !name || !email) {
      setError(true)
      return
    }

    const commentObj = {name, email, comment, slug}

    console.log(commentObj)
      // .then((res) => {
      //   setShowSuccessMessage(true)

      //   setTimeout(() => {
      //     setShowSuccessMessage(false)
      //   }, 3000)
      // })
  }
  

  return (
    <div>
      <h3>Leave a Comment</h3>
      <div>
        <textarea 
          ref = {commentEl}
          placeholder = 'Comment'
          name = 'comment'
        />
      </div>
      <div>
        <input 
          type = 'text'
          ref = {nameEl}
          placeholder = 'Name'
          name = 'name'
        />
        <input 
          type = 'text'
          ref = {emailEl}
          placeholder = 'Email'
          name = 'email'
        />
      </div>
      {/* <div>
          <input 
            checked={formData.storeData} 
            onChange={onInputChange} 
            type="checkbox" 
            id="storeData" 
            name="storeData" 
            value="true" 
          />
          <label htmlFor="storeData">
            Save my information for later
          </label>
        </div> */}
      {error && <p>All fields are required</p>}
      <div>
        <button type = 'button' onClick = {handleSubmitComment}>
          Submit Comment
        </button>
        {showSuccessMessage && <span>Comment submitted for review...</span>}
      </div>
    </div>
  )
}

export default CommentsForm