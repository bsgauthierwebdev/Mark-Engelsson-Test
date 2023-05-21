import React from 'react'
import { useQuery, gql } from '@apollo/client'
import PostDetail from '../Components/PostDetail'
import PostWidget from '../Components/PostWidget'
import Author from '../Components/Author'
import CommentsForm from '../Components/CommentsForm'
import Comments from '../Components/Comments'
import '../Styles/PostDetails.css'

const PostDetails = () => {
  return (
    <div className = 'PostDetails'>
      <div className = 'PostDetails-container'>
        <div className = 'PostDetails-container-content'>
          <PostDetail />
          <Author />
          <CommentsForm />
          <Comments />
        </div>
        <div className = 'PostDetails-container-nav'>
          <div className = 'PostDetails-container-nav-content'>
            <PostWidget />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostDetails