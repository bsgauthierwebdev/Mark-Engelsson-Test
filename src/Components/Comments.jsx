import React, {useState, useEffect} from 'react'
import { useQuery, gql } from '@apollo/client'
import moment from 'moment'
import parse from 'html-react-parser'
import { useParams } from 'react-router-dom'
import '../Styles/Comments.css'

const GET_COMMENTS = gql`
  query GetComments($slug: String!) {
    comments(where: {post: {slug: $slug}}) {
      comment
      createdAt
      email
      id
      name
    }
  }
`

const Comments = () => {
  const {slug} = useParams()
  const {loading, error, data} = useQuery(GET_COMMENTS, {
    variables: {slug}
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error.message}</p>

  console.log(data, slug)

  return (
    <div className = 'Comments'>
      {data.comments.length > 0 && (
        <div className = 'Comments-container'>
          <h3 className = 'Comments-container-counter'>
            {data.comments.length}
            {' '}
            Comments
          </h3>
          {data.comments.map((
            {comment, name, createdAt, id}
          ) => (
            <div key = {id} className = 'Comments-container-content'>
              <p className = 'Comments-container-comment'>
                {comment}
              </p><p className = 'Comments-container-content-data'>
                <span className = 'comment-data'>- {name}</span>
                {' '}
                on
                {' '}
                {moment(createdAt).format('DD, MMM, YYYY')}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Comments